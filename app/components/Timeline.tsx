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
