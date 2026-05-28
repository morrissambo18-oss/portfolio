"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProjectFormData {
  slug: string;
  title: string;
  category: string;
  tags: string;
  impact: string;
  overview: string;
  problem: string;
  solution: string;
  features: string;
  techStack: string;
  challenges: string;
  learnings: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
  published: boolean;
  order: number;
}

const empty: ProjectFormData = {
  slug: "", title: "", category: "Web", tags: "", impact: "", overview: "",
  problem: "", solution: "", features: "", techStack: "", challenges: "",
  learnings: "", githubUrl: "", demoUrl: "", image: "", published: true, order: 0,
};

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

interface Props {
  initial?: Partial<ProjectFormData> & { id?: number };
}

export default function ProjectForm({ initial }: Props) {
  const isEdit = !!initial?.id;
  const [form, setForm] = useState<ProjectFormData>({ ...empty, ...initial });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const set = (field: keyof ProjectFormData, value: string | boolean | number) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    const payload = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      techStack: form.techStack.split(",").map((t) => t.trim()).filter(Boolean),
      features: form.features.split("\n").map((f) => f.trim()).filter(Boolean),
      demoUrl: form.demoUrl || null,
      image: form.image || null,
      order: Number(form.order),
    };
    const url = isEdit ? `/api/admin/projects/${initial!.id}` : "/api/admin/projects";
    const method = isEdit ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/admin/projects");
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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
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
            placeholder="Project title"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Slug *</label>
          <input
            value={form.slug}
            onChange={(e) => set("slug", e.target.value)}
            required
            placeholder="my-project-slug"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Category *</label>
          <select
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            className={inputClass}
          >
            {["Web", "Java", "Python", "SQL"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Display Order</label>
          <input
            type="number"
            value={form.order}
            onChange={(e) => set("order", Number(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Impact / One-line description *</label>
        <input value={form.impact} onChange={(e) => set("impact", e.target.value)} required placeholder="Brief impact sentence" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Tags (comma-separated) *</label>
          <input value={form.tags} onChange={(e) => set("tags", e.target.value)} required placeholder="Java, MySQL, JDBC" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Tech Stack (comma-separated) *</label>
          <input value={form.techStack} onChange={(e) => set("techStack", e.target.value)} required placeholder="Java, MySQL, HTML, CSS" className={inputClass} />
        </div>
      </div>

      {(["overview", "problem", "solution", "challenges", "learnings"] as const).map((field) => (
        <div key={field}>
          <label className={labelClass}>{field.charAt(0).toUpperCase() + field.slice(1)} *</label>
          <textarea
            value={form[field]}
            onChange={(e) => set(field, e.target.value)}
            required
            rows={3}
            placeholder={`Describe the ${field}…`}
            className={`${inputClass} resize-none`}
          />
        </div>
      ))}

      <div>
        <label className={labelClass}>Features (one per line) *</label>
        <textarea
          value={form.features}
          onChange={(e) => set("features", e.target.value)}
          required
          rows={4}
          placeholder={"Feature one\nFeature two\nFeature three"}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>GitHub URL *</label>
          <input value={form.githubUrl} onChange={(e) => set("githubUrl", e.target.value)} required placeholder="https://github.com/..." className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Demo URL</label>
          <input value={form.demoUrl} onChange={(e) => set("demoUrl", e.target.value)} placeholder="https://..." className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Image URL</label>
          <input value={form.image} onChange={(e) => set("image", e.target.value)} placeholder="https://..." className={inputClass} />
        </div>
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.published}
          onChange={(e) => set("published", e.target.checked)}
          className="w-4 h-4 accent-electric"
        />
        <span className="text-sm text-text-secondary">Published (visible on site)</span>
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
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Project"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
          className="px-6 py-2.5 rounded-xl text-sm text-text-muted border border-border-subtle hover:text-text-primary hover:border-white/20 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
