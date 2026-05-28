"use client";

import { motion } from "framer-motion";

const techs: { name: string; color: string }[] = [
  { name: "Java", color: "text-orange-400" },
  { name: "JavaScript", color: "text-yellow-300" },
  { name: "HTML / CSS", color: "text-orange-300" },
  { name: "SQL / MySQL", color: "text-electric" },
  { name: "Visual Basic", color: "text-violet" },
  { name: "PHP", color: "text-cyan" },
  { name: "Git / GitHub", color: "text-red-400" },
  { name: "CCNA", color: "text-green-400" },
  { name: "Networking", color: "text-yellow-400" },
  { name: "TypeScript", color: "text-electric" },
];

export default function TechStrip() {
  return (
    <section className="py-12 border-y border-border-subtle">
      <p className="text-center text-text-muted text-xs font-mono uppercase tracking-widest mb-6">
        Technologies I Work With
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {techs.map((tech, i) => (
          <motion.span
            key={tech.name}
            className={`font-mono text-sm font-medium ${tech.color} bg-surface border border-border-subtle px-4 py-2 rounded-lg`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" as const }}
          >
            {tech.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
