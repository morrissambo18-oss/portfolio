"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await fetch("/api/admin/posts");
    if (res.ok) setPosts(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const del = async (id: number, title: string) => {
    if (!confirm(`Delete "${title}"?`)) return;
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-text-primary">Blog Posts</h1>
          <p className="text-text-muted text-sm mt-1">{posts.length} posts</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 rounded-xl text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
          style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
        >
          + New Post
        </Link>
      </div>

      {loading ? (
        <p className="text-text-muted text-sm">Loading…</p>
      ) : posts.length === 0 ? (
        <div className="bg-card border border-border-subtle rounded-2xl p-12 text-center">
          <p className="text-text-muted mb-4">No posts yet. Write your first one!</p>
          <Link href="/admin/posts/new" className="text-electric hover:underline text-sm">
            Write a post →
          </Link>
        </div>
      ) : (
        <div className="bg-card border border-border-subtle rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="text-left px-5 py-3 text-xs font-mono text-text-muted uppercase tracking-wider">Title</th>
                <th className="text-left px-5 py-3 text-xs font-mono text-text-muted uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-mono text-text-muted uppercase tracking-wider">Date</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {posts.map((p) => (
                <tr key={p.id} className="border-b border-border-subtle last:border-0 hover:bg-surface/30 transition-colors">
                  <td className="px-5 py-4 text-sm text-text-primary font-medium">{p.title}</td>
                  <td className="px-5 py-4">
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${p.published ? "text-green-400 bg-green-400/10" : "text-text-muted bg-surface"}`}>
                      {p.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-xs text-text-muted">
                    {new Date(p.publishedAt ?? p.createdAt).toLocaleDateString("en-ZA", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3 justify-end">
                      {p.published && (
                        <Link href={`/blog/${p.id}`} className="text-xs text-text-muted hover:text-text-primary" target="_blank">
                          View ↗
                        </Link>
                      )}
                      <Link href={`/admin/posts/${p.id}/edit`} className="text-xs text-electric hover:underline">
                        Edit
                      </Link>
                      <button onClick={() => del(p.id, p.title)} className="text-xs text-red-400 hover:underline">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
