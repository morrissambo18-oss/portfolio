"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

interface PostFormData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
}

const empty: PostFormData = {
  slug: "", title: "", excerpt: "", content: "", coverImage: "", published: false,
};

interface Props {
  initial?: Partial<PostFormData> & { id?: number };
}

export default function PostForm({ initial }: Props) {
  const isEdit = !!initial?.id;
  const [form, setForm] = useState<PostFormData>({ ...empty, ...initial });
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const set = (field: keyof PostFormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const payload = { ...form, coverImage: form.coverImage || null };
    const url = isEdit ? `/api/admin/posts/${initial!.id}` : "/api/admin/posts";
    const method = isEdit ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/admin/posts");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Something went wrong");
      setSaving(false);
    }
  };

  const inputClass = "w-full bg-space border border-border-subtle rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/20 transition-colors";
  const labelClass = "block text-xs font-medium text-text-secondary mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Title *</label>
          <input
            value={form.title}
            onChange={(e) => {
              set("title", e.target.value);
              if (!isEdit) set("slug", toSlug(e.target.value));
            }}
            required
            placeholder="Post title"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Slug *</label>
          <input
            value={form.slug}
            onChange={(e) => set("slug", e.target.value)}
            required
            placeholder="post-slug"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Excerpt *</label>
        <textarea
          value={form.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
          required
          rows={2}
          placeholder="Short description shown on the blog listing…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className={labelClass}>Cover Image URL</label>
        <input
          value={form.coverImage}
          onChange={(e) => set("coverImage", e.target.value)}
          placeholder="https://..."
          className={inputClass}
        />
      </div>

      {/* Editor */}
      <div>
        <div className="flex items-center gap-1 mb-2">
          <label className={`${labelClass} mb-0 mr-2`}>Content (Markdown) *</label>
          <button
            type="button"
            onClick={() => setTab("write")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${tab === "write" ? "bg-electric/20 text-electric" : "text-text-muted hover:text-text-primary"}`}
          >
            Write
          </button>
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${tab === "preview" ? "bg-electric/20 text-electric" : "text-text-muted hover:text-text-primary"}`}
          >
            Preview
          </button>
        </div>
        {tab === "write" ? (
          <textarea
            value={form.content}
            onChange={(e) => set("content", e.target.value)}
            required
            rows={20}
            placeholder={"# My Post\n\nWrite your content in **Markdown**…"}
            className={`${inputClass} resize-y font-mono text-xs leading-relaxed`}
          />
        ) : (
          <div className="min-h-[480px] bg-space border border-border-subtle rounded-lg px-5 py-4 prose prose-invert prose-sm max-w-none">
            {form.content ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{form.content}</ReactMarkdown>
            ) : (
              <p className="text-text-muted italic text-sm">Nothing to preview yet.</p>
            )}
          </div>
        )}
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.published}
          onChange={(e) => set("published", e.target.checked)}
          className="w-4 h-4 accent-electric"
        />
        <span className="text-sm text-text-secondary">Published (visible on blog)</span>
      </label>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold disabled:opacity-50 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
          style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
        >
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Publish Post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/posts")}
          className="px-6 py-2.5 rounded-xl text-sm text-text-muted border border-border-subtle hover:text-text-primary hover:border-white/20 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
