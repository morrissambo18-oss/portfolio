"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 -z-20 dot-grid" />

      {/* Radial vignettes to blend grid into background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,#0B0F19_50%,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(59,130,246,0.13),transparent)]" />

      {/* Animated colour blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-80 -left-80 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-80 -right-80 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06), transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1], x: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.03), transparent 70%)" }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="text-center px-4 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Available badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 bg-electric/[0.08] border border-electric/20 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
              Open to junior roles
            </span>
          </div>
        </motion.div>

        {/* Role tag */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-sm text-text-muted mb-5 tracking-widest uppercase"
        >
          Junior Developer | Java • SQL • Web Technologies
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-text-primary mb-6"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-electric via-cyan to-violet bg-clip-text text-transparent">
            clean, scalable
          </span>
          <br />
          digital systems
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I&apos;m Morris Sambo — IT graduate from Vaal University of Technology,
          CCNA certified, with hands-on industry experience as an IT Specialist.
          I build modern digital solutions that solve real problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <Link
            href="/projects"
            className="relative px-8 py-3.5 rounded-xl font-semibold text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.5)]"
            style={{ background: "linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)" }}
          >
            View Projects
          </Link>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3.5 rounded-xl border border-electric/40 text-text-primary font-semibold text-base hover:border-electric hover:bg-electric/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/morrissambo18-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200 text-sm font-medium"
          >
            GitHub ↗
          </a>
          <span className="w-px h-4 bg-border-subtle" />
          <a
            href="https://www.linkedin.com/in/morrissambo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors duration-200 text-sm font-medium"
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
