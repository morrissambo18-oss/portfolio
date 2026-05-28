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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="group flex flex-col bg-card border border-border-subtle rounded-xl p-6 hover:border-electric/50 transition-colors duration-300 h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" as const }}
    >
      <span
        className={`inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded-md mb-4 w-fit border ${
          categoryColors[project.category] ?? "text-text-muted bg-surface border-border-subtle"
        }`}
      >
        {project.category}
      </span>

      <h3 className="font-heading text-lg font-bold text-text-primary mb-2 group-hover:text-electric transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
        {project.impact}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-text-muted bg-surface px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 rounded-lg border border-border-subtle text-text-secondary text-sm font-medium hover:border-electric hover:text-electric transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub ↗
        </a>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg bg-electric text-white text-sm font-medium hover:bg-cyan hover:text-space transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo ↗
          </a>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 text-center py-2 rounded-lg bg-surface text-text-secondary text-sm font-medium hover:text-text-primary transition-colors duration-200"
          >
            Case Study →
          </Link>
        )}
      </div>
    </motion.article>
  );
}
