export interface Project {
  slug: string;
  title: string;
  category: "Web" | "Java" | "Python" | "SQL";
  tags: string[];
  impact: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  challenges: string;
  learnings: string;
  githubUrl: string;
  demoUrl: string | null;
  image: string | null;
}

const projects: Project[] = [
  {
    slug: "student-accommodation-rental-system",
    title: "Student Accommodation Rental System",
    category: "Java",
    tags: ["Java", "MySQL", "JDBC", "HTML/CSS"],
    impact:
      "South African-focused accommodation platform centralising bookings, tenant management, and property listings.",
    overview:
      "A full management system designed for South African student accommodation providers. Handles the complete rental lifecycle — property listings, tenant applications, bookings, and payment tracking.",
    problem:
      "Student accommodation in South Africa is largely managed through manual processes and spreadsheets, leading to double bookings, lost tenant records, and slow response times during high-demand registration periods.",
    solution:
      "Built a Java-backed system with a MySQL database to centralise all accommodation operations. The application provides CRUD interfaces for properties and tenants, a booking workflow, and a dashboard for occupancy tracking.",
    features: [
      "Property listing management with room types and availability",
      "Tenant registration and profile management",
      "Booking creation, approval, and cancellation workflow",
      "Occupancy dashboard with vacancy tracking",
      "Payment record logging per tenant",
    ],
    techStack: ["Java", "MySQL", "JDBC", "HTML", "CSS", "JavaScript"],
    challenges:
      "Designing a database schema that cleanly separated properties, rooms, tenants, and bookings while keeping queries efficient for peak registration periods.",
    learnings:
      "Deepened understanding of relational database design, JDBC connection management, and building user-facing workflows on top of a Java backend.",
    githubUrl: "https://github.com/morrissambo18-oss/student-accommodation-system",
    demoUrl: null,
    image: null,
  },
  {
    slug: "amcconnect-portfolio",
    title: "AMCConnect Portfolio Website",
    category: "Web",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    impact:
      "Modern developer portfolio presenting technical skills, certifications, and projects to recruiters and collaborators.",
    overview:
      "AMCConnect is a personal portfolio website built to showcase Morris Sambo's technical background — including his VUT diploma, CCNA certification, and software development projects — in a clean, professional format.",
    problem:
      "A traditional CV fails to demonstrate what a developer can actually build. Recruiters needed a living proof of skills — something interactive and visually professional that also conveyed personality.",
    solution:
      "Designed and built a responsive multi-page portfolio from scratch using HTML, CSS, and vanilla JavaScript, with a focus on clean layout, fast load times, and mobile-first design.",
    features: [
      "Animated landing section with role and skills summary",
      "Projects section with tech tags and GitHub links",
      "Certifications showcase (Diploma in IT, CCNA)",
      "Contact form with email fallback",
      "Fully responsive across mobile, tablet, and desktop",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    challenges:
      "Achieving a polished, modern design without a CSS framework — every layout and animation was hand-coded to keep the bundle minimal.",
    learnings:
      "Strengthened CSS Grid and Flexbox mastery, learned to optimise for Core Web Vitals, and practised writing semantic, accessible HTML.",
    githubUrl: "https://github.com/morrissambo18-oss/amcconnect-portfolio",
    demoUrl: null,
    image: null,
  },
  {
    slug: "tutor-booking-system",
    title: "Tutor Booking Website",
    category: "Web",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
    impact:
      "Responsive booking platform enabling students to find and schedule tutoring sessions online.",
    overview:
      "A web application that connects students with tutors. Students can browse tutor profiles by subject, view availability, and book sessions directly through the site.",
    problem:
      "Students at university often struggle to find reliable tutors. Existing solutions are fragmented — WhatsApp groups, notice boards, and word of mouth — with no centralised way to check availability or confirm bookings.",
    solution:
      "Built a responsive booking website where tutors can list their subjects and availability, and students can search, view profiles, and submit booking requests through an online form backed by a database.",
    features: [
      "Tutor profile pages with subjects, rates, and availability",
      "Search and filter by subject or availability",
      "Booking request form with confirmation flow",
      "Admin view for managing tutor listings",
      "Mobile-first responsive layout",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP"],
    challenges:
      "Handling booking conflicts — ensuring no tutor is double-booked across overlapping time slots required careful database query logic.",
    learnings:
      "Gained practical experience with server-side form handling, database-driven dynamic pages, and designing UX flows for a two-sided marketplace.",
    githubUrl: "https://github.com/morrissambo18-oss/tutor-booking-system",
    demoUrl: null,
    image: null,
  },
  {
    slug: "shalem-tv-box-website",
    title: "Shalem TV Box Promotional Website",
    category: "Web",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    impact:
      "Marketing-focused product site for the Shalem TV Box with conversion-optimised design and modern UI.",
    overview:
      "A promotional website created for the Shalem TV Box — a digital media product. The site highlights product features, pricing, and a call-to-action section designed to drive enquiries and purchases.",
    problem:
      "The product had no web presence. Potential customers had no way to learn about features, compare packages, or make contact online — all sales were happening through word of mouth.",
    solution:
      "Designed and built a single-page promotional website with a strong visual hierarchy, feature showcase sections, testimonials, and a prominent contact/order CTA. Optimised for fast load and mobile viewing.",
    features: [
      "Hero section with product headline and CTA",
      "Feature highlights with icons and descriptions",
      "Pricing/package table",
      "Customer testimonials section",
      "Contact and order enquiry form",
      "Fully mobile-responsive layout",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "CSS Animations"],
    challenges:
      "Balancing a visually rich marketing design with fast page load — every image and animation had to be optimised to maintain performance.",
    learnings:
      "Learnt marketing-focused web design principles: visual hierarchy, conversion optimisation, above-the-fold content strategy, and writing copy that sells.",
    githubUrl: "https://github.com/morrissambo18-oss/shalem-tv-box",
    demoUrl: null,
    image: null,
  },
];

export default projects;
