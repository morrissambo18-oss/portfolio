import type { Metadata } from "next";
import SkillsGrid from "../components/SkillsGrid";
import Timeline from "../components/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Morris Sambo — IT graduate building web apps, backend systems, and exploring cloud/DevOps.",
  openGraph: {
    title: "About | Morris Sambo",
    description:
      "IT graduate building web apps, backend systems, and exploring cloud/DevOps.",
  },
};

const whatIDo = [
  {
    title: "Web Applications",
    description:
      "Full-stack web apps with React frontends and Node.js or Java backends.",
  },
  {
    title: "Backend Logic",
    description:
      "REST APIs, database design, and server-side business logic in Java and Python.",
  },
  {
    title: "Data & Databases",
    description:
      "Relational databases with MySQL, data analysis with Pandas and Matplotlib.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS fundamentals, Git workflows, CI/CD concepts, and continuous learning.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <section className="mb-16">
        <h1 className="font-heading text-4xl font-bold text-text-primary mb-6">
          About Me
        </h1>
        <div className="max-w-2xl space-y-4 text-text-secondary text-lg leading-relaxed">
          <p>
            I&apos;m Morris Sambo — an IT graduate with a passion for building
            software that solves real problems. I work across the full stack:
            Java for robust backends, React for interactive frontends, and
            Python for data and automation.
          </p>
          <p>
            What started as curiosity about how apps work turned into a career
            path I&apos;m deeply committed to. Every project in my portfolio
            was designed, built, and shipped as real, working software — not
            just tutorials.
          </p>
          <p>
            I&apos;m currently seeking junior developer or web developer roles
            where I can contribute to a team, grow my craft, and help build
            products people actually use.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whatIDo.map(({ title, description }) => (
            <div
              key={title}
              className="bg-card border-l-2 border-l-electric border border-border-subtle rounded-xl p-5"
            >
              <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">
          Skills
        </h2>
        <SkillsGrid />
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">
          Timeline
        </h2>
        <Timeline />
      </section>
    </div>
  );
}
