import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on software development, networking, and tech by Morris Sambo.",
};

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    select: { id: true, slug: true, title: true, excerpt: true, publishedAt: true },
  });

  return (
    <div className="py-16">
      <div className="mb-12">
        <p className="font-mono text-xs text-electric uppercase tracking-widest mb-3">Writing</p>
        <h1 className="font-heading text-4xl font-bold text-text-primary mb-3">Blog</h1>
        <p className="text-text-secondary max-w-xl">
          Thoughts on software development, networking, and the tech industry.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="bg-card border border-border-subtle rounded-2xl p-12 text-center">
          <p className="text-text-muted">No posts yet — check back soon.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-card border border-border-subtle rounded-2xl p-6 hover:border-white/[0.1] hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-lg font-bold text-text-primary group-hover:text-electric transition-colors duration-200 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <span className="text-text-muted text-xs flex-shrink-0 mt-1">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("en-ZA", {
                        day: "numeric", month: "short", year: "numeric",
                      })
                    : ""}
                </span>
              </div>
              <p className="text-electric text-sm mt-4 group-hover:underline">Read more →</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
