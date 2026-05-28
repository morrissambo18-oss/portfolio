"use client";

import { motion } from "framer-motion";

const techs: { name: string; color: string }[] = [
  { name: "Java", color: "text-orange-400 border-orange-400/20 bg-orange-400/5" },
  { name: "JavaScript", color: "text-yellow-300 border-yellow-300/20 bg-yellow-300/5" },
  { name: "HTML / CSS", color: "text-orange-300 border-orange-300/20 bg-orange-300/5" },
  { name: "SQL / MySQL", color: "text-electric border-electric/20 bg-electric/5" },
  { name: "Visual Basic", color: "text-violet border-violet/20 bg-violet/5" },
  { name: "PHP", color: "text-cyan border-cyan/20 bg-cyan/5" },
  { name: "Git / GitHub", color: "text-red-400 border-red-400/20 bg-red-400/5" },
  { name: "CCNA", color: "text-green-400 border-green-400/20 bg-green-400/5" },
  { name: "Networking", color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" },
  { name: "TypeScript", color: "text-electric border-electric/20 bg-electric/5" },
];

export default function TechStrip() {
  return (
    <section className="py-14 border-y border-border-subtle">
      <p className="text-center font-mono text-xs text-text-muted uppercase tracking-widest mb-8">
        Technologies I Work With
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {techs.map((tech, i) => (
          <motion.span
            key={tech.name}
            className={`font-mono text-sm font-medium border px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-default ${tech.color}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" as const }}
          >
            {tech.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
