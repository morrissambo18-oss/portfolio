import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Morris Sambo — open to junior developer roles and collaborations.",
  openGraph: {
    title: "Contact | Morris Sambo",
    description: "Get in touch — open to junior developer roles and collaborations.",
  },
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/morrissambo18-oss",
    description: "See my code and open source work.",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/morris-sambo",
    description: "Connect professionally.",
  },
  {
    label: "Email",
    href: "mailto:snoopymane7@gmail.com",
    description: "snoopymane7@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold text-text-primary mb-3">
          Get in Touch
        </h1>
        <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
          I&apos;m actively looking for junior developer and web developer
          roles. If you have an opportunity, a project, or just want to connect
          — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <h2 className="font-heading text-lg font-semibold text-text-primary">
            Other Ways to Reach Me
          </h2>
          {socials.map(({ label, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 bg-card border border-border-subtle rounded-xl p-4 hover:border-electric/50 transition-colors duration-200 group"
            >
              <div>
                <p className="font-medium text-text-primary group-hover:text-electric transition-colors duration-200">
                  {label} ↗
                </p>
                <p className="text-text-muted text-sm mt-0.5">{description}</p>
              </div>
            </a>
          ))}

          <div className="bg-card border border-border-subtle rounded-xl p-4 mt-2">
            <p className="text-text-secondary text-sm leading-relaxed">
              I&apos;m based in South Africa and open to remote roles worldwide.
              Typical response time: 24–48 hours.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
