import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectForm from "@/app/components/ProjectForm";
import { db } from "@/lib/db";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await db.project.findUnique({ where: { id: Number(id) } });
  if (!project) notFound();

  const initial = {
    ...project,
    tags: project.tags.join(", "),
    techStack: project.techStack.join(", "),
    features: project.features.join("\n"),
    demoUrl: project.demoUrl ?? "",
    image: project.image ?? "",
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/projects" className="text-text-muted hover:text-text-primary text-sm transition-colors">
          ← Projects
        </Link>
        <span className="text-border-subtle">/</span>
        <h1 className="font-heading text-2xl font-bold text-text-primary">Edit Project</h1>
      </div>
      <ProjectForm initial={initial} />
    </div>
  );
}
