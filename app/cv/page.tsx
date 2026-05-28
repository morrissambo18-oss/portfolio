import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Download or view the CV of Morris Sambo — IT graduate, CCNA certified, junior software developer based in Johannesburg.",
  openGraph: {
    title: "CV | Morris Sambo",
    description:
      "Download or view the CV of Morris Sambo — IT graduate and junior developer.",
  },
};

const experience = [
  {
    role: "IT Specialist",
    org: "Imbewu Yokuphila — YES Programme",
    period: "2023 – 2024",
    bullets: [
      "Provided first-line IT support including hardware troubleshooting, software installation, and user assistance.",
      "Configured and maintained local area networks, ensuring stable connectivity across the organisation.",
      "Diagnosed and resolved network incidents, reducing downtime through systematic troubleshooting.",
      "Documented technical procedures and supported onboarding of new staff with IT systems.",
    ],
  },
];

const education = [
  {
    degree: "Diploma in Information Technology",
    institution: "Vaal University of Technology (VUT)",
    period: "2020 – 2023",
    highlights: [
      "Software development modules: Java, Visual Basic, HTML/CSS, JavaScript",
      "Database management: SQL, MySQL",
      "Networking, systems analysis, and IT project management",
      "Final-year project: Student Accommodation Rental System",
    ],
  },
];

const certifications = [
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Networking Academy",
    period: "2024",
    description:
      "Validates skills in IP networking, routing and switching, network security fundamentals, and automation basics.",
  },
];

export default function CVPage() {
  return (
    <div className="py-16">
      <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1 className="font-heading text-4xl font-bold text-text-primary mb-2">
            Curriculum Vitae
          </h1>
          <p className="text-text-secondary">
            Morris Sambo — Junior Developer · Johannesburg, South Africa
          </p>
        </div>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric text-white font-semibold hover:bg-cyan hover:text-space transition-colors duration-200 shadow-lg shadow-electric/20 shrink-0"
        >
          Download PDF
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>

      {/* PDF embed */}
      <div className="mb-16 bg-card border border-border-subtle rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border-subtle flex items-center justify-between">
          <span className="font-mono text-xs text-text-muted">morris-sambo-cv.pdf</span>
          <a
            href="/cv.pdf"
            download
            className="text-xs text-electric hover:text-cyan transition-colors duration-200"
          >
            Download ↓
          </a>
        </div>
        <iframe
          src="/cv.pdf"
          className="w-full h-[700px]"
          title="Morris Sambo Curriculum Vitae"
        >
          <p className="text-text-muted p-8 text-sm">
            PDF preview not available in this browser.{" "}
            <a href="/cv.pdf" download className="text-electric underline">
              Click here to download.
            </a>
          </p>
        </iframe>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-border-subtle">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.role}
              className="bg-card border border-border-subtle rounded-xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-heading font-semibold text-text-primary">
                    {item.role}
                  </h3>
                  <p className="text-text-secondary text-sm">{item.org}</p>
                </div>
                <span className="font-mono text-xs text-electric bg-electric/10 px-2 py-1 rounded shrink-0">
                  {item.period}
                </span>
              </div>
              <ul className="space-y-2">
                {item.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary text-sm"
                  >
                    <span className="text-electric shrink-0 mt-0.5 font-mono">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-border-subtle">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-card border border-border-subtle rounded-xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-heading font-semibold text-text-primary">
                    {item.degree}
                  </h3>
                  <p className="text-text-secondary text-sm">{item.institution}</p>
                </div>
                <span className="font-mono text-xs text-electric bg-electric/10 px-2 py-1 rounded shrink-0">
                  {item.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary text-sm"
                  >
                    <span className="text-electric shrink-0 mt-0.5 font-mono">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-border-subtle">
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-card border border-border-subtle rounded-xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-heading font-semibold text-text-primary">
                    {cert.name}
                  </h3>
                  <p className="text-text-secondary text-sm">{cert.issuer}</p>
                </div>
                <span className="font-mono text-xs text-electric bg-electric/10 px-2 py-1 rounded shrink-0">
                  {cert.period}
                </span>
              </div>
              <p className="text-text-secondary text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
