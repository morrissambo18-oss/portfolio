"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

type Particle = { id: number; x: number; y: number; size: number; duration: number; delay: number };

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: (i * 37 + 11) % 100,
        y: (i * 53 + 7) % 100,
        size: (i % 3) + 1.5,
        duration: 12 + (i % 8) * 2,
        delay: (i % 5) * 1.2,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 -z-20 dot-grid" />

      {/* Radial vignettes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,var(--color-space)_50%,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(59,130,246,0.14),transparent)]" />

      {/* Animated blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-96 -left-96 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1], x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-96 -right-96 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06), transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1], x: [0, -24, 0], y: [0, -16, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.04), transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-electric/40"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        className="text-center px-4 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 bg-electric/[0.08] border border-electric/20 rounded-full px-5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
              Currently open to work
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.p variants={fadeUp} className="font-mono text-sm text-text-muted mb-3 tracking-widest uppercase">
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tight mb-4"
        >
          <span className="text-text-primary">Morris</span>{" "}
          <span className="bg-gradient-to-r from-electric via-cyan to-violet bg-clip-text text-transparent">
            Sambo
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="font-heading text-lg sm:text-xl md:text-2xl text-text-secondary font-medium mb-8 tracking-tight"
        >
          IT Graduate · CCNA Certified · Software &amp; Web Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Based in Johannesburg — I build modern web applications and digital systems
          using Java, SQL, and web technologies. Backed by real-world IT experience
          and networking expertise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <Link
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.55)]"
            style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
          >
            View Projects
          </Link>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3.5 rounded-xl border border-electric/40 text-text-primary font-semibold hover:border-electric hover:bg-electric/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            Download CV
          </a>
          <Link
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-xl border border-border-subtle text-text-secondary font-semibold hover:border-white/20 hover:text-text-primary hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/morrissambo18-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-200 text-sm group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <span className="w-px h-4 bg-border-subtle" />
          <a
            href="https://www.linkedin.com/in/morrissambo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="w-px h-4 bg-border-subtle" />
          <a
            href="mailto:morris.sambo18@gmail.com"
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Email
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
