"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const categoryColors: Record<string, string> = {
  Web: "text-cyan bg-cyan/10 border-cyan/20",
  Java: "text-violet bg-violet/10 border-violet/20",
  Python: "text-electric bg-electric/10 border-electric/20",
  SQL: "text-green-400 bg-green-400/10 border-green-400/20",
};

const categoryTopLine: Record<string, string> = {
  Web: "from-cyan/0 via-cyan/50 to-cyan/0",
  Java: "from-violet/0 via-violet/50 to-violet/0",
  Python: "from-electric/0 via-electric/50 to-electric/0",
  SQL: "from-green-400/0 via-green-400/50 to-green-400/0",
};

export default function ProjectCard({ project }: { project: Project }) {
  const topLine = categoryTopLine[project.category] ?? "from-electric/0 via-electric/40 to-electric/0";

  return (
    <motion.article
      className="group relative flex flex-col bg-card border border-border-subtle rounded-2xl p-6 h-full overflow-hidden hover:border-white/[0.1] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" as const }}
    >
      {/* Gradient top accent line */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/[0.03] to-violet/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <span
        className={`relative inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4 w-fit border ${
          categoryColors[project.category] ?? "text-text-muted bg-surface border-border-subtle"
        }`}
      >
        {project.category}
      </span>

      <h3 className="relative font-heading text-lg font-bold text-text-primary mb-2 group-hover:text-electric transition-colors duration-200">
        {project.title}
      </h3>

      <p className="relative text-text-secondary text-sm leading-relaxed mb-4 flex-1">
        {project.impact}
      </p>

      <div className="relative flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-text-muted bg-surface border border-border-subtle px-2.5 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative flex items-center gap-3 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 rounded-xl border border-border-subtle text-text-secondary text-sm font-medium hover:border-electric/40 hover:text-electric hover:bg-electric/5 transition-all duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub ↗
        </a>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-xl text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo ↗
          </a>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 text-center py-2 rounded-xl bg-surface border border-border-subtle text-text-secondary text-sm font-medium hover:border-electric/30 hover:text-text-primary transition-all duration-200"
          >
            Case Study →
          </Link>
        )}
      </div>
    </motion.article>
  );
}
