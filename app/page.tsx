"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import ContactForm from "./components/ContactForm";
import projects from "@/lib/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "1+", label: "Year Industry XP" },
  { value: "CCNA", label: "Cisco Certified" },
  { value: "Diploma", label: "IT Graduate (VUT)" },
  { value: "4+", label: "Projects Shipped" },
];

const skillCategories = [
  {
    name: "Networking",
    colorClass: "text-cyan",
    dotClass: "bg-cyan",
    badgeClass:
      "text-cyan/80 bg-cyan/[0.07] border border-cyan/15 hover:border-cyan/30 hover:bg-cyan/[0.12]",
    skills: ["CCNA", "TCP/IP", "Routing & Switching", "VLANs", "Network Security", "Cisco IOS", "Subnetting", "IPv4/IPv6"],
  },
  {
    name: "Frontend",
    colorClass: "text-electric",
    dotClass: "bg-electric",
    badgeClass:
      "text-electric/80 bg-electric/[0.07] border border-electric/15 hover:border-electric/30 hover:bg-electric/[0.12]",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    name: "Backend",
    colorClass: "text-violet",
    dotClass: "bg-violet",
    badgeClass:
      "text-violet/80 bg-violet/[0.07] border border-violet/15 hover:border-violet/30 hover:bg-violet/[0.12]",
    skills: ["Java", "PHP", "Node.js", "REST APIs", "JDBC", "OOP"],
  },
  {
    name: "Databases",
    colorClass: "text-green-400",
    dotClass: "bg-green-400",
    badgeClass:
      "text-green-400/80 bg-green-400/[0.07] border border-green-400/15 hover:border-green-400/30 hover:bg-green-400/[0.12]",
    skills: ["MySQL", "SQL", "Database Design", "ER Diagrams", "Stored Procedures", "Query Optimization"],
  },
  {
    name: "Tools & DevOps",
    colorClass: "text-orange-400",
    dotClass: "bg-orange-400",
    badgeClass:
      "text-orange-400/80 bg-orange-400/[0.07] border border-orange-400/15 hover:border-orange-400/30 hover:bg-orange-400/[0.12]",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Windows Server", "Packet Tracer", "AWS basics", "Vercel"],
  },
];

const projectCategories = ["All", "Web", "Java", "Python", "SQL"];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/morrissambo18-oss",
    sub: "See my code and open source work",
    borderHover: "hover:border-white/20",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/morrissambo",
    sub: "Connect professionally",
    borderHover: "hover:border-[#0A66C2]/40",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:morris.sambo18@gmail.com",
    sub: "morris.sambo18@gmail.com",
    borderHover: "hover:border-electric/30",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Hero />

      {/* ─── About ─────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 border-t border-border-subtle">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >
          {/* Profile visual */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-10 rounded-full bg-electric/[0.08] blur-3xl pointer-events-none" />
              {/* Gradient ring */}
              <div
                className="relative w-52 h-52 md:w-60 md:h-60 rounded-full p-[3px]"
                style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE, #A78BFA)" }}
              >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="font-heading text-5xl font-bold bg-gradient-to-br from-electric via-cyan to-violet bg-clip-text text-transparent select-none">
                    MS
                  </span>
                </div>
              </div>
              {/* Available badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
                <div className="inline-flex items-center gap-2 bg-card border border-electric/30 rounded-full px-4 py-1.5 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  <span className="font-mono text-xs text-text-secondary">Available for hire</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + stats */}
          <div>
            <motion.div variants={fadeUp}>
              <p className="font-mono text-xs text-electric uppercase tracking-widest mb-3">About Me</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-5 leading-tight">
                Building digital systems{" "}
                <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
                  that solve real problems
                </span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed mb-4">
              I&apos;m Morris Sambo, an IT graduate from Vaal University of Technology with a passion for software development and networking. I build real-world applications using Java, SQL, and modern web technologies, and hold a Cisco CCNA certification.
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed mb-8">
              Through a year of hands-on industry experience as an IT Specialist and multiple development projects, I&apos;ve bridged infrastructure and software. I&apos;m actively seeking a junior developer role where I can contribute from day one and grow fast.
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="bg-card border border-border-subtle rounded-xl p-4 hover:border-electric/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all duration-300 group"
                >
                  <p className="font-heading text-2xl font-bold text-electric mb-1 group-hover:text-cyan transition-colors duration-200">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── Skills ────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-electric uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="bg-card border border-border-subtle rounded-2xl p-6 hover:border-white/[0.08] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" as const }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cat.dotClass}`} />
                <h3 className={`font-heading font-semibold ${cat.colorClass}`}>{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-xs px-2.5 py-1 rounded-md transition-colors duration-200 cursor-default ${cat.badgeClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Projects ──────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 border-t border-border-subtle">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-electric uppercase tracking-widest mb-2">Work</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">Projects</h2>
          </div>
          <a
            href="/projects"
            className="text-text-muted hover:text-electric text-sm font-medium transition-colors duration-200"
          >
            View all →
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "text-white shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                  : "bg-card border border-border-subtle text-text-muted hover:text-text-primary hover:border-white/10"
              }`}
              style={
                activeFilter === cat
                  ? { background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }
                  : undefined
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" as const }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Experience ────────────────────────────────────────────────── */}
      <section id="experience" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-electric uppercase tracking-widest mb-2">Journey</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
            Experience &amp; Education
          </h2>
        </motion.div>
        <Timeline />
      </section>

      {/* ─── Contact ───────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 border-t border-border-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="font-mono text-xs text-electric uppercase tracking-widest mb-2">
                Hire Me
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-3">
                Let&apos;s Work Together
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Open to junior developer, web developer, and IT roles. Drop me a message or reach out
                directly — I typically reply within 24 hours.
              </p>
            </motion.div>
            <ContactForm />
          </div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-heading text-lg font-semibold text-text-primary mb-5">
              Direct Contact
            </h3>
            {contactLinks.map(({ label, href, sub, icon, borderHover }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 bg-card border border-border-subtle rounded-xl p-4 transition-all duration-200 group ${borderHover}`}
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border-subtle flex items-center justify-center flex-shrink-0 text-text-muted group-hover:text-electric group-hover:border-electric/30 transition-all duration-200">
                  {icon}
                </div>
                <div>
                  <p className="font-medium text-text-primary text-sm group-hover:text-electric transition-colors duration-200">
                    {label} ↗
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">{sub}</p>
                </div>
              </a>
            ))}

            <div className="bg-card border border-border-subtle rounded-xl p-4 mt-2">
              <p className="text-text-secondary text-sm leading-relaxed">
                Based in{" "}
                <span className="text-text-primary font-medium">Johannesburg, South Africa</span>. Open
                to remote roles worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
