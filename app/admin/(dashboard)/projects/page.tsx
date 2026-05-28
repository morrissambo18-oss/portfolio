"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  published: boolean;
  order: number;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await fetch("/api/admin/projects");
    if (res.ok) setProjects(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const del = async (id: number, title: string) => {
    if (!confirm(`Delete "${title}"?`)) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const categoryColor: Record<string, string> = {
    Web: "text-cyan bg-cyan/10 border-cyan/20",
    Java: "text-violet bg-violet/10 border-violet/20",
    Python: "text-electric bg-electric/10 border-electric/20",
    SQL: "text-green-400 bg-green-400/10 border-green-400/20",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-text-primary">Projects</h1>
          <p className="text-text-muted text-sm mt-1">{projects.length} projects</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="px-4 py-2 rounded-xl text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
          style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
        >
          + New Project
        </Link>
      </div>

      {loading ? (
        <p className="text-text-muted text-sm">Loading…</p>
      ) : projects.length === 0 ? (
        <div className="bg-card border border-border-subtle rounded-2xl p-12 text-center">
          <p className="text-text-muted mb-4">No projects yet.</p>
          <Link href="/admin/projects/new" className="text-electric hover:underline text-sm">
            Add your first project →
          </Link>
        </div>
      ) : (
        <div className="bg-card border border-border-subtle rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="text-left px-5 py-3 text-xs font-mono text-text-muted uppercase tracking-wider">Title</th>
                <th className="text-left px-5 py-3 text-xs font-mono text-text-muted uppercase tracking-wider">Category</th>
                <th className="text-left px-5 py-3 text-xs font-mono text-text-muted uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-mono text-text-muted uppercase tracking-wider">Order</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-b border-border-subtle last:border-0 hover:bg-surface/30 transition-colors">
                  <td className="px-5 py-4 text-sm text-text-primary font-medium">{p.title}</td>
                  <td className="px-5 py-4">
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full border ${categoryColor[p.category] ?? "text-text-muted border-border-subtle"}`}>
                      {p.category}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${p.published ? "text-green-400 bg-green-400/10" : "text-text-muted bg-surface"}`}>
                      {p.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-text-muted">{p.order}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3 justify-end">
                      <Link href={`/admin/projects/${p.id}/edit`} className="text-xs text-electric hover:underline">
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
