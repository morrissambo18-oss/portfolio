"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[8%]"
          style={{ background: "radial-gradient(circle, #A78BFA, transparent)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)]" />
      </div>

      <motion.div
        className="text-center px-4 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Role tag */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-sm text-electric mb-4 tracking-widest uppercase"
        >
          Junior Software Developer | Java • React • Python
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-text-primary mb-6"
        >
          Building{" "}
          <span className="text-electric">clean, scalable</span>
          <br />
          digital systems
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I&apos;m Morris Sambo — a passionate IT graduate who turns ideas into
          working software. From Java backends to React frontends, I build things
          that matter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/projects"
            className="px-8 py-3.5 rounded-lg bg-electric text-white font-semibold text-base hover:bg-cyan hover:text-space transition-all duration-200 shadow-lg shadow-electric/20 hover:shadow-cyan/20 hover:-translate-y-0.5"
          >
            View Projects
          </Link>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3.5 rounded-lg border border-electric text-electric font-semibold text-base hover:bg-electric hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/morrissambo18-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-electric transition-colors duration-200 text-sm font-medium"
          >
            GitHub ↗
          </a>
          <span className="w-px h-4 bg-border-subtle" />
          <a
            href="https://linkedin.com/in/morris-sambo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-electric transition-colors duration-200 text-sm font-medium"
          >
            LinkedIn ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
