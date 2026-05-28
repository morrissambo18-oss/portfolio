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

      <section className="py-16">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-text-primary">
              Featured Projects
            </h2>
            <p className="text-text-secondary mt-1">
              A sample of what I&apos;ve built.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-electric hover:text-cyan text-sm font-medium transition-colors duration-200"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-border-subtle">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            I&apos;m actively seeking junior developer and web developer roles.
            If you&apos;re looking for someone who ships real software and loves
            learning, let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-electric text-white font-semibold hover:bg-cyan hover:text-space transition-all duration-200 shadow-lg shadow-electric/20"
            >
              Get in Touch
            </Link>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-lg border border-electric text-electric font-semibold hover:bg-electric hover:text-white transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
