"use client";

import { motion } from "framer-motion";

const skills = {
  Frontend: {
    items: ["HTML5", "CSS3", "JavaScript", "Visual Basic", "Responsive Design", "UI/UX"],
    dot: "bg-cyan",
    label: "text-cyan",
    badge: "text-cyan/90 bg-cyan/[0.07] border border-cyan/15 hover:border-cyan/30 hover:bg-cyan/[0.12]",
  },
  Backend: {
    items: ["Java", "SQL", "MySQL", "JDBC", "PHP", "REST APIs"],
    dot: "bg-violet",
    label: "text-violet",
    badge: "text-violet/90 bg-violet/[0.07] border border-violet/15 hover:border-violet/30 hover:bg-violet/[0.12]",
  },
  Tools: {
    items: ["Git", "GitHub", "CCNA", "Networking", "Troubleshooting", "VS Code"],
    dot: "bg-electric",
    label: "text-electric",
    badge: "text-electric/90 bg-electric/[0.07] border border-electric/15 hover:border-electric/30 hover:bg-electric/[0.12]",
  },
} as const;

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {(Object.entries(skills) as [keyof typeof skills, (typeof skills)[keyof typeof skills]][]).map(
        ([category, config], i) => (
          <motion.div
            key={category}
            className="bg-card border border-border-subtle rounded-2xl p-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" as const }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className={`w-2 h-2 rounded-full ${config.dot}`} />
              <h3 className={`font-mono text-xs uppercase tracking-widest font-semibold ${config.label}`}>
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {config.items.map((skill) => (
                <span
                  key={skill}
                  className={`font-mono text-xs px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-default ${config.badge}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
