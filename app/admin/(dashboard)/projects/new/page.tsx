import Link from "next/link";
import ProjectForm from "@/app/components/ProjectForm";

export default function NewProjectPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/projects" className="text-text-muted hover:text-text-primary text-sm transition-colors">
          ← Projects
        </Link>
        <span className="text-border-subtle">/</span>
        <h1 className="font-heading text-2xl font-bold text-text-primary">New Project</h1>
      </div>
      <ProjectForm />
    </div>
  );
}
