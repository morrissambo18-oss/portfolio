import type { Metadata } from "next";
import SkillsGrid from "../components/SkillsGrid";
import Timeline from "../components/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Morris Sambo — IT graduate from Vaal University of Technology, CCNA certified, and experienced IT Specialist based in Johannesburg.",
  openGraph: {
    title: "About | Morris Sambo",
    description:
      "IT graduate from VUT, CCNA certified, and experienced IT Specialist based in Johannesburg.",
  },
};

const whatIDo = [
  {
    title: "Web Development",
    description:
      "Building responsive websites and web applications using HTML, CSS, JavaScript, and modern frameworks.",
  },
  {
    title: "Backend & Databases",
    description:
      "Server-side logic and data management with Java, SQL, MySQL, and PHP.",
  },
  {
    title: "Networking & IT Support",
    description:
      "Network configuration, troubleshooting, and IT support backed by CCNA certification and real-world experience.",
  },
  {
    title: "Problem Solving",
    description:
      "Diagnosing technical issues, optimising systems, and delivering practical solutions under pressure.",
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
            I&apos;m Morris Sambo, an IT graduate from Vaal University of
            Technology (VUT) based in Johannesburg, Gauteng. I hold a Diploma
            in Information Technology, a CCNA certification, and one year of
            industry experience as an IT Specialist through the YES programme
            at Imbewu Yokuphila.
          </p>
          <p>
            My background spans both software development and networking —
            I&apos;m equally comfortable writing Java applications and
            troubleshooting network infrastructure. I&apos;m passionate about
            technology, problem-solving, and building modern digital solutions
            that make a real difference.
          </p>
          <p>
            I&apos;m currently seeking junior developer or web developer roles
            where I can contribute to a team, keep learning, and help ship
            products that people rely on.
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
              className="group relative bg-card border border-border-subtle rounded-2xl p-5 overflow-hidden hover:border-white/[0.1] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="font-heading font-semibold text-text-primary mb-1.5">{title}</h3>
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
