import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.post.findUnique({ where: { slug, published: true } });
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await db.post.findUnique({ where: { slug, published: true } });
  if (!post) notFound();

  return (
    <div className="py-16 max-w-3xl">
      <Link href="/blog" className="text-text-muted hover:text-electric text-sm transition-colors duration-200 mb-8 inline-block">
        ← Back to Blog
      </Link>

      <header className="mb-10">
        <p className="font-mono text-xs text-electric uppercase tracking-widest mb-3">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("en-ZA", {
                day: "numeric", month: "long", year: "numeric",
              })
            : ""}
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">{post.excerpt}</p>
      </header>

      <div className="prose prose-invert prose-sm sm:prose-base max-w-none
        prose-headings:font-heading prose-headings:text-text-primary
        prose-p:text-text-secondary prose-p:leading-relaxed
        prose-a:text-electric prose-a:no-underline hover:prose-a:underline
        prose-strong:text-text-primary
        prose-code:text-cyan prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-card prose-pre:border prose-pre:border-border-subtle
        prose-blockquote:border-electric/40 prose-blockquote:text-text-muted
        prose-hr:border-border-subtle
        prose-li:text-text-secondary">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
