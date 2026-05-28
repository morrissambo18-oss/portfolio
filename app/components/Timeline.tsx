"use client";

import { motion } from "framer-motion";

const events = [
  {
    period: "2020 – 2023",
    title: "Diploma in Information Technology",
    org: "Vaal University of Technology (VUT)",
    description:
      "Completed a three-year Diploma in IT, covering software development (Java, Visual Basic), database management (SQL, MySQL), networking, and web technologies. Final-year project: Student Accommodation Rental System.",
  },
  {
    period: "2023 – 2024",
    title: "IT Specialist — YES Programme",
    org: "Imbewu Yokuphila",
    description:
      "One year of hands-on industry experience as an IT Specialist through the YES (Youth Employment Service) programme. Responsibilities included network troubleshooting, hardware support, system maintenance, and user assistance.",
  },
  {
    period: "2024",
    title: "CCNA Certification",
    org: "Cisco Networking Academy",
    description:
      "Achieved Cisco Certified Network Associate (CCNA) certification, validating skills in IP networking, routing and switching, network security fundamentals, and automation.",
  },
  {
    period: "2023 – Present",
    title: "Software Development Projects",
    org: "Personal & Freelance",
    description:
      "Built and shipped four software projects: a Java-based accommodation system, a tutor booking platform, a promotional product site, and a personal portfolio — applying full-stack skills beyond the classroom.",
  },
  {
    period: "2025 – Present",
    title: "Seeking Junior Developer Roles",
    org: "Open to Opportunities",
    description:
      "Actively applying for junior software developer and web developer positions. Expanding skills in modern frontend frameworks, cloud fundamentals, and DevOps practices.",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical gradient line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-electric/20 via-electric/50 to-electric/10 md:left-8" />

      <div className="space-y-5">
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="relative pl-12 md:pl-20"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
          >
            {/* Timeline dot */}
            <div className="absolute left-[13px] top-5 md:left-[29px]">
              <div className="w-3 h-3 rounded-full bg-electric shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            </div>

            <div className="group relative bg-card border border-border-subtle rounded-2xl p-5 overflow-hidden hover:border-white/[0.08] transition-all duration-300">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-semibold text-electric">{event.period}</span>
                <span className="text-border-subtle text-xs">·</span>
                <span className="text-text-muted text-xs">{event.org}</span>
              </div>
              <h3 className="font-heading font-semibold text-text-primary mb-1.5">
                {event.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
