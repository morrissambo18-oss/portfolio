import Link from "next/link";
import PostForm from "@/app/components/PostForm";

export default function NewPostPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/posts" className="text-text-muted hover:text-text-primary text-sm transition-colors">
          ← Posts
        </Link>
        <span className="text-border-subtle">/</span>
        <h1 className="font-heading text-2xl font-bold text-text-primary">New Post</h1>
      </div>
      <PostForm />
    </div>
  );
}
