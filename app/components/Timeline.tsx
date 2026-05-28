"use client";

import { motion } from "framer-motion";

const events = [
  {
    period: "2020 – 2023",
    title: "BSc Information Technology",
    org: "University",
    description:
      "Studied software engineering, databases, networking, and web development. Built foundational skills in Java, Python, SQL, and systems design.",
  },
  {
    period: "2022 – 2023",
    title: "Self-Directed Projects",
    org: "Personal Development",
    description:
      "Built the Student Management System and Python Data Analysis project to apply classroom theory to real, working software.",
  },
  {
    period: "2023",
    title: "Full-Stack E-commerce Demo",
    org: "Personal Project",
    description:
      "Developed a complete React + Node.js + MongoDB e-commerce app, deepening skills in REST APIs, JWT auth, and React state management.",
  },
  {
    period: "2024 – Present",
    title: "Actively Seeking Junior Roles",
    org: "Open to Opportunities",
    description:
      "Expanding skills in cloud (AWS) and DevOps fundamentals. Building this portfolio as a living proof of work and continuous growth.",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-border-subtle md:left-8" />
      <div className="space-y-6">
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="relative pl-12 md:pl-20"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
          >
            <div className="absolute left-[13px] top-4 w-3 h-3 rounded-full bg-electric border-2 border-space md:left-[29px]" />
            <div className="bg-card border border-border-subtle rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-semibold text-electric">{event.period}</span>
                <span className="text-text-muted text-xs">·</span>
                <span className="text-text-muted text-xs">{event.org}</span>
              </div>
              <h3 className="font-heading font-semibold text-text-primary mb-1.5">{event.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
