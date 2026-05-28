import type { Metadata } from "next";
import ProjectsGrid from "../components/ProjectsGrid";
import projects from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Morris Sambo's software projects: web apps, Java systems, Python data analysis, and more.",
  openGraph: {
    title: "Projects | Morris Sambo",
    description:
      "Explore Morris Sambo's software projects: web apps, Java systems, Python data analysis, and more.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold text-text-primary mb-3">
          Projects
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
          Real software built to solve real problems — from Java desktop applications
          to web platforms and booking systems. Filter by technology below.
        </p>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
