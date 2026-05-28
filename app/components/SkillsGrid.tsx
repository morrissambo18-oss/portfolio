"use client";

import { motion } from "framer-motion";

const skills: Record<string, string[]> = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Framer Motion"],
  Backend: ["Java", "Python", "Node.js", "MySQL", "REST APIs", "JDBC"],
  Tools: ["Git", "GitHub", "AWS", "Maven", "Jupyter", "VS Code"],
};

const headingColors: Record<string, string> = {
  Frontend: "text-cyan border-cyan/30",
  Backend: "text-violet border-violet/30",
  Tools: "text-electric border-electric/30",
};

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, items], i) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
        >
          <h3
            className={`font-heading font-semibold text-base mb-4 pb-2 border-b ${
              headingColors[category] ?? "text-text-secondary border-border-subtle"
            }`}
          >
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm text-text-secondary bg-surface border border-border-subtle px-3 py-1.5 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
