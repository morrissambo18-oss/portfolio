import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Morris Sambo`,
      description: project.overview,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const categoryColors: Record<string, string> = {
    Web: "text-cyan bg-cyan/10 border-cyan/20",
    Java: "text-violet bg-violet/10 border-violet/20",
    Python: "text-electric bg-electric/10 border-electric/20",
    SQL: "text-green-400 bg-green-400/10 border-green-400/20",
  };

  return (
    <article className="py-16 max-w-3xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-text-muted hover:text-electric text-sm transition-colors duration-200 mb-8"
      >
        ← Back to Projects
      </Link>

      <header className="mb-10">
        <span
          className={`inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded-md mb-3 border ${
            categoryColors[project.category] ?? "text-text-muted bg-surface border-border-subtle"
          }`}
        >
          {project.category}
        </span>
        <h1 className="font-heading text-4xl font-bold text-text-primary mb-3">
          {project.title}
        </h1>
        <p className="text-text-secondary text-lg mb-4">{project.impact}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-text-muted bg-surface border border-border-subtle px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-10">
        <Section title="Overview">
          <p className="text-text-secondary leading-relaxed">{project.overview}</p>
        </Section>

        <Section title="The Problem">
          <p className="text-text-secondary leading-relaxed">{project.problem}</p>
        </Section>

        <Section title="The Solution">
          <p className="text-text-secondary leading-relaxed">{project.solution}</p>
        </Section>

        <Section title="Key Features">
          <ul className="space-y-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary">
                <span className="text-electric mt-0.5 shrink-0 font-mono text-sm">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-sm text-text-secondary bg-surface border border-border-subtle px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Challenges">
          <p className="text-text-secondary leading-relaxed">{project.challenges}</p>
        </Section>

        <Section title="Learnings">
          <p className="text-text-secondary leading-relaxed">{project.learnings}</p>
        </Section>

        <Section title="Links">
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-electric text-electric font-medium hover:bg-electric hover:text-white transition-colors duration-200"
            >
              View on GitHub ↗
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-electric text-white font-medium hover:bg-cyan hover:text-space transition-colors duration-200"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </Section>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-text-primary mb-3 pb-2 border-b border-border-subtle">
        {title}
      </h2>
      {children}
    </section>
  );
}
