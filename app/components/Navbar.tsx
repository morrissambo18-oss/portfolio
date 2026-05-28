"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    const id = href.slice(2);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-space/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_32px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-lg font-bold tracking-tight shrink-0">
          Dev
          <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
            Portfolio
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/cv.pdf"
            download
            className="px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
          >
            Download CV
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2 rounded-md text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-4 pb-4 bg-card/95 backdrop-blur-xl border-b border-white/[0.06]">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="block py-2.5 px-3 rounded-xl text-sm font-medium text-text-secondary hover:text-electric hover:bg-surface/60 transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="/cv.pdf"
              download
              className="block w-full text-center py-2.5 px-3 rounded-xl text-white text-sm font-semibold"
              style={{ background: "linear-gradient(135deg, #3B82F6, #22D3EE)" }}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
