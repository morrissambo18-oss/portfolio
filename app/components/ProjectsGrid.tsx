"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";

type FilterCategory = "All" | "Web" | "Java" | "Python" | "SQL";

const filters: FilterCategory[] = ["All", "Web", "Java", "Python", "SQL"];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterCategory>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              active === cat
                ? "bg-electric text-white shadow-lg shadow-electric/20"
                : "bg-surface text-text-secondary border border-border-subtle hover:text-text-primary hover:border-electric/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-text-muted text-center py-16">No projects in this category yet.</p>
      )}
    </div>
  );
}
