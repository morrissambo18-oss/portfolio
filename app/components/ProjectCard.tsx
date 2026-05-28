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

const categoryBanners: Record<string, string> = {
  Web: "from-cyan/20 via-electric/10 to-violet/5",
  Java: "from-violet/20 via-purple-500/10 to-pink-500/5",
  Python: "from-yellow-400/15 via-amber-400/10 to-orange-400/5",
  SQL: "from-green-400/20 via-emerald-500/10 to-teal-400/5",
};

const CategoryIcon = ({ category }: { category: string }) => {
  if (category === "Web")
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6L2 12l6 6M16 6l6 6-6 6" />
      </svg>
    );
  if (category === "Java")
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
      </svg>
    );
  if (category === "SQL")
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path strokeLinecap="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  );
};

export default function ProjectCard({ project }: { project: Project }) {
  const banner = categoryBanners[project.category] ?? "from-electric/10 to-violet/5";

  return (
    <motion.article
      className="group relative flex flex-col bg-card border border-border-subtle rounded-2xl h-full overflow-hidden hover:border-white/[0.1] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" as const }}
    >
      {/* Banner */}
      <div className={`relative h-32 bg-gradient-to-br ${banner} overflow-hidden flex-shrink-0`}>
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full border border-white/[0.07]" />
        <div className="absolute -bottom-14 -right-14 w-44 h-44 rounded-full border border-white/[0.04]" />
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />

        {/* Category icon */}
        <div
          className={`absolute top-4 left-4 w-9 h-9 rounded-xl flex items-center justify-center bg-card/60 backdrop-blur-sm border border-white/[0.08] ${
            categoryColors[project.category]?.split(" ")[0] ?? "text-electric"
          }`}
        >
          <CategoryIcon category={project.category} />
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
              categoryColors[project.category] ?? "text-text-muted bg-surface border-border-subtle"
            }`}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 flex-1">
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/[0.02] to-violet/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

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
      </div>
    </motion.article>
  );
}
