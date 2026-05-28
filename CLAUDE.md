@AGENTS.md

Project Goal
Build a recruiter-ready personal portfolio website for a junior software developer / IT graduate. The site should be fast, modern, animated, and serve as a "digital handshake" that proves I can ship real software.
Target Audience & Roles
Recruiters, hiring managers, and fellow developers. Targeting junior software developer / web developer roles, with IT support and cloud/DevOps as fallback options.
Tech Stack (fixed)

Framework: Next.js (App Router, JavaScript or TypeScript — TS preferred)
Styling: Tailwind CSS
Animations: Framer Motion
Hosting: Vercel (deploy an empty version on Day 1)
Fonts (via next/font/google): Sora (headings), Inter (body), JetBrains Mono (code/tag accents)

Design System — Modern Dark UI
Backgrounds

Deep Space #0B0F19
Elevated Card #111827
Soft Surface #1F2937

Accents

Electric Blue (primary) #3B82F6
Neon Cyan (hover/highlight) #22D3EE
Soft Purple (secondary) #A78BFA

Text

Primary #F9FAFB
Secondary #9CA3AF
Muted #6B7280

Borders

Subtle #263041

Vibe: dark but breathable, clean cards, smooth animations, professional enough for corporate recruiters.
Sitemap & Page Content
Home (/) — Hero (name + role "Junior Software Developer | Java • React • Python", tagline, CTAs: "View Projects" + "Download CV"), tech-stack icon strip, 3 featured project cards, GitHub + LinkedIn links, subtle animated background.
About (/about) — 3–6 line story, "What I do" bullets (web apps, backend logic, databases, learning cloud/DevOps), skills broken into Frontend / Backend / Tools, timeline (University → Projects → Internship/experience).
Projects (/projects) — Filter tabs (Web / Java / Python / SQL), grid of project cards. Each card: title, tech tags, one-line impact summary, GitHub button, live demo button.
Project Detail (/projects/[slug]) — Overview, Problem, Solution, Features, Tech stack, Screenshots, Challenges, Learnings, Links.
CV (/cv) — Embedded PDF preview + download button + experience/education summary.
Contact (/contact) — Form (Name, Email, Message) wired to Formspree or a Next.js API route, email fallback link, social links.
Skills To Showcase
Java, Python, JavaScript, HTML/CSS, React basics, SQL (MySQL), Git/GitHub, AWS basics, problem-solving, teamwork.
Projects To Feature

Student Management System
Small E-commerce Demo
Python Data Analysis Project
Mini Web Apps Portfolio

Use this reusable case-study template for each: Overview → Problem → Solution → Features → Tech Stack → Challenges → Outcome/Learnings → Links (GitHub + Live demo).
Folder Structure
app/
├── layout.js
├── page.js
├── globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProjectCard.jsx
│   ├── SkillsGrid.jsx
│   ├── Timeline.jsx
│   └── Footer.jsx
├── about/page.jsx
├── projects/
│   ├── page.jsx
│   └── [slug]/page.jsx
├── cv/page.jsx
└── contact/page.jsx
public/
├── cv.pdf
└── images/
lib/
└── projects.js   (project data array)
Starter Code To Generate First

app/layout.js — wires Inter + Sora via next/font/google, applies bg-[#0B0F19] text-white, includes <Navbar /> and a max-w-6xl main wrapper.
app/globals.css — Tailwind directives, body font + bg, scroll-behavior: smooth.
app/components/Navbar.jsx — sticky, blurred background (bg-[#0B0F19]/80 backdrop-blur-md), responsive with hamburger menu, links: Home / About / Projects / Contact, logo "DevPortfolio" with blue accent.
app/components/Hero.jsx — Framer Motion staggered fade-ins for tagline, headline ("Building clean, scalable digital systems" with blue accent span), description, and two CTA buttons ("View Projects" filled blue, "Download CV" outlined). Min height 90vh, centered.
app/page.js — renders <Hero />.

3-Week Build Timeline
Week 1 — Foundation

Day 1–2: Scaffold Next.js, install Tailwind + Framer Motion, set up folder structure, deploy empty version to Vercel.
Day 3: Build responsive navbar + layout wrapper.
Day 4: Home page structure.
Day 5: About page structure.
Day 6: Projects page with static cards.
Day 7: Wire Framer Motion (fade-ins).

Week 2 — UI & Styling

Day 8–9: Apply dark theme + fonts site-wide; style navbar + hero.
Day 10: Build animated hero section polished.
Day 11–12: Build project cards with hover effects.
Day 13: About page styling + timeline.
Day 14: Mobile responsiveness pass.

Week 3 — Polish & Launch

Day 15–16: Drop in real project data + GitHub links.
Day 17: Contact form (Formspree or API route).
Day 18: Page transitions + hover micro-interactions.
Day 19: SEO (meta tags, OpenGraph, sitemap.xml, robots.txt).
Day 20: Performance pass (next/image, WebP, lazy loading).
Day 21: Final deploy + test + share.

SEO & Performance Checklist (must pass before launch)

Use next/image everywhere; convert images to WebP.
Lazy-load project images.
Use Framer Motion sparingly; avoid heavy libraries.
Page-level metadata exports (title, description, OpenGraph for LinkedIn previews).
Semantic HTML (h1, h2, article, section).
Clean URLs (/projects/student-management-system).
Generate sitemap.xml and robots.txt.
Target load time < 2 seconds.
Mobile-first responsive design.
GitHub link always visible; CV downloadable in one click.

Build Order (instructions to Claude Code)

Scaffold the Next.js project with App Router + Tailwind + TypeScript and install framer-motion.
Create the folder structure exactly as above.
Implement globals.css, layout.js, Navbar.jsx, Hero.jsx, and page.js per the design system and starter code spec.
Stub out About, Projects, Project Detail, CV, and Contact pages with placeholders.
Create lib/projects.js with an array of the 4 projects using the case-study template fields.
Build the ProjectCard component and the projects grid with filter tabs.
Build About page with skills grid + timeline.
Build Contact page with a form (Formspree-ready or Next.js API route).
Add SEO metadata to each page and generate sitemap.xml + robots.txt.
Run a performance pass: next/image, WebP, lazy load, prune unused deps.
Provide final deploy instructions for Vercel.

Acceptance Criteria

Lighthouse Performance and SEO scores ≥ 90 on mobile.
Fully responsive from 320px → 1440px+.
All four featured projects render with working GitHub + demo links.
CV downloads in one click from anywhere on the site.
Contact form submits without page reload and shows success/error state.
Site deploys cleanly to Vercel with no console errors.
When making changes:
- Group related file edits together
- Avoid asking for confirmation per file
- Prefer batch updates in a single response
- Only ask for permission when destructive actions are involved