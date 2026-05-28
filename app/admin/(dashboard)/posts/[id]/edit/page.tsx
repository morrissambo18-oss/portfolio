import Link from "next/link";
import { notFound } from "next/navigation";
import PostForm from "@/app/components/PostForm";
import { db } from "@/lib/db";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await db.post.findUnique({ where: { id: Number(id) } });
  if (!post) notFound();

  const initial = {
    ...post,
    coverImage: post.coverImage ?? "",
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/posts" className="text-text-muted hover:text-text-primary text-sm transition-colors">
          ← Posts
        </Link>
        <span className="text-border-subtle">/</span>
        <h1 className="font-heading text-2xl font-bold text-text-primary">Edit Post</h1>
      </div>
      <PostForm initial={initial} />
    </div>
  );
}
