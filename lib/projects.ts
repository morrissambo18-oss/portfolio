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
    slug: "student-management-system",
    title: "Student Management System",
    category: "Java",
    tags: ["Java", "MySQL", "JDBC", "Swing"],
    impact: "Digitised student records management, cutting admin time by 40%.",
    overview:
      "A desktop application for managing student records, course enrolments, and grade tracking for a small educational institution.",
    problem:
      "Manual paper-based record keeping led to data loss, duplication errors, and slow retrieval of student information.",
    solution:
      "Built a Java Swing GUI backed by a MySQL database, providing CRUD operations for students, courses, and grades via JDBC.",
    features: [
      "Add, update, and delete student profiles",
      "Course enrolment and grade entry",
      "Search and filter student records",
      "Export reports to CSV",
    ],
    techStack: ["Java 17", "MySQL 8", "JDBC", "Java Swing", "Maven"],
    challenges:
      "Implementing thread-safe database access from the Swing event dispatch thread and designing a normalised schema.",
    learnings:
      "Deepened understanding of JDBC connection pooling, MVC pattern in desktop apps, and relational database design.",
    githubUrl: "https://github.com/morrissambo18-oss/student-management-system",
    demoUrl: null,
    image: null,
  },
  {
    slug: "ecommerce-demo",
    title: "Small E-commerce Demo",
    category: "Web",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    impact: "End-to-end shopping flow with cart, auth, and order management.",
    overview:
      "A full-stack e-commerce prototype featuring product listings, a shopping cart, user authentication, and a basic order system.",
    problem:
      "Needed a practical project to demonstrate full-stack JavaScript skills and REST API design.",
    solution:
      "React front-end consuming a Node/Express REST API with MongoDB for persistence, JWT-based auth, and a session cart.",
    features: [
      "Product catalogue with search and category filter",
      "Shopping cart with quantity management",
      "User registration and JWT login",
      "Order placement and history view",
    ],
    techStack: ["React 18", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    challenges:
      "Managing cart state across page refreshes and securing API routes without a framework.",
    learnings:
      "Gained hands-on experience with REST API design, JWT auth flows, and React context for global state.",
    githubUrl: "https://github.com/morrissambo18-oss/ecommerce-demo",
    demoUrl: null,
    image: null,
  },
  {
    slug: "python-data-analysis",
    title: "Python Data Analysis Project",
    category: "Python",
    tags: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    impact: "Surfaced key sales trends and KPIs from 50,000+ raw records.",
    overview:
      "An exploratory data analysis of a retail sales dataset to identify revenue trends, top products, and regional performance.",
    problem:
      "Raw CSV data from multiple sources had inconsistencies, missing values, and no visualisation — making business insights hard to extract.",
    solution:
      "Used Pandas for cleaning and aggregation, Matplotlib/Seaborn for visualisation, and Jupyter Notebook for reproducible analysis.",
    features: [
      "Data cleaning: handle nulls, fix dtypes, remove duplicates",
      "Sales trend visualisation by month and region",
      "Top-10 product ranking by revenue",
      "Correlation analysis between discount and sales volume",
    ],
    techStack: ["Python 3.11", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    challenges:
      "Merging datasets with inconsistent date formats and category labels required careful normalisation logic.",
    learnings:
      "Learnt effective EDA workflows, the power of groupby aggregations, and how to communicate findings visually.",
    githubUrl: "https://github.com/morrissambo18-oss/python-data-analysis",
    demoUrl: null,
    image: null,
  },
  {
    slug: "mini-web-apps",
    title: "Mini Web Apps Portfolio",
    category: "Web",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    impact: "Collection of five interactive tools demonstrating DOM and API skills.",
    overview:
      "A curated set of standalone browser apps: a weather widget, a to-do list, a quiz game, a currency converter, and a markdown previewer.",
    problem:
      "Needed focused, completable projects to practise vanilla JS, DOM manipulation, and third-party API integration.",
    solution:
      "Each app is a self-contained HTML/CSS/JS module with no build step, deployed via GitHub Pages for instant demos.",
    features: [
      "Weather widget consuming OpenWeatherMap API",
      "To-do list with local-storage persistence",
      "Multiple-choice quiz with score tracking",
      "Live currency converter using ExchangeRate API",
      "Real-time Markdown previewer",
    ],
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "Fetch API", "GitHub Pages"],
    challenges:
      "Handling async fetch errors gracefully and keeping each app lightweight without a bundler.",
    learnings:
      "Solidified understanding of async/await, the Fetch API, localStorage, and responsive CSS without frameworks.",
    githubUrl: "https://github.com/morrissambo18-oss/mini-web-apps",
    demoUrl: "https://morrissambo18-oss.github.io/mini-web-apps",
    image: null,
  },
];

export default projects;
