import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          {`© ${new Date().getFullYear()} Morris Sambo. Built with Next.js & Tailwind CSS.`}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/morrissambo18-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-electric text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/morrissambo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-electric text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="text-text-muted hover:text-electric text-sm transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
