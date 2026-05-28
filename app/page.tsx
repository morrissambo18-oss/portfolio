import Link from "next/link";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import ProjectCard from "./components/ProjectCard";
import projects from "@/lib/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <TechStrip />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-electric uppercase tracking-widest mb-2">
              Work
            </p>
            <h2 className="font-heading text-3xl font-bold text-text-primary">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-text-muted hover:text-electric text-sm font-medium transition-colors duration-200"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border-subtle">
        <div className="relative overflow-hidden bg-card border border-border-subtle rounded-2xl p-10 lg:p-14">
          {/* Background glows */}
          <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-electric/[0.07] blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-violet/[0.06] blur-3xl pointer-events-none" />

          <div className="relative max-w-xl">
            <p className="font-mono text-xs text-electric uppercase tracking-widest mb-3">
              Hire Me
            </p>
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              I&apos;m actively seeking junior developer and web developer roles.
              If you&apos;re looking for someone who ships real software and loves
              learning, let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
                style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
              >
                Get in Touch
              </Link>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-xl border border-electric/40 text-text-primary font-semibold hover:border-electric hover:bg-electric/5 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
