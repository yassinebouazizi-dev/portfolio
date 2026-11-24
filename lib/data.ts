export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack Web" | "Cloud & DevOps" | "AI & Mobile" | "Backend Systems";
  year: string;
  tags: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: "Yassine Bouazizi",
  role: "Full-Stack Web & Cloud Systems Developer",
  subRole: "Software Engineer & Creative Builder",
  location: "Tunisia (Available for Remote & Relocation)",
  availability: "Available for PFE Internship & Full-Time Roles (2027)",
  email: "bouazizi.yassine55@gmail.com",
  phone: "+216 90 225 448",
  github: "https://github.com/yassinebouazizi-dev",
  linkedin: "https://linkedin.com/in/yassinebouazizi",
  aboutBrief:
    "3rd year Computer Science student (Web & Multimedia Development - DWM) at ISET Sidi Bouzid. Driven by architecting robust, scalable web platforms and cloud-native systems with an obsession for high-end micro-interactions, clean architecture, and modern UX.",
  stats: [
    { label: "Core Web Projects", value: "8+" },
    { label: "Production Internships", value: "2" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Code Quality & Testing", value: "100%" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "edupath",
    title: "EduPath Platform",
    tagline: "Academic Management & Consulting Web Ecosystem",
    description:
      "A scalable client-server academic management platform engineered with React.js, Vite, and Node.js/Express. Implements role-based access control (RBAC), secure JWT token authorization, MySQL relational persistence, and interactive real-time CRUD administration.",
    category: "Full-Stack Web",
    year: "2026",
    tags: ["React.js", "Node.js", "Express", "MySQL", "JWT Auth", "REST APIs"],
    metrics: ["Sub-80ms API Response", "Zero-Vulnerability Auth", "Role-Based Security"],
    githubUrl: "https://github.com/yassinebouazizi-dev/edupath",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    color: "#3b82f6",
  },
  {
    id: "clipforge",
    title: "ClipForge AI",
    tagline: "Intelligent Video Processing & Repurposing Engine",
    description:
      "High-throughput multimedia processing platform designed with a microservice architecture. Combines a Next.js 14 frontend with asynchronous backend processing pipelines, automated media rendering, and dynamic video segmentation.",
    category: "AI & Mobile",
    year: "2026",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Docker", "REST Microservices"],
    metrics: ["Async Video Pipeline", "Modular Architecture", "Modern React 18"],
    githubUrl: "https://github.com/yassinebouazizi-dev/clipforge-ai",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    color: "#8b5cf6",
  },
  {
    id: "vermeg-kibana",
    title: "Log Analytics & Supervision",
    tagline: "Centralized IT Monitoring Infrastructure at VERMEG",
    description:
      "Engineered during an internship at VERMEG: Centralized log ingestion, parsing, and analytical dashboarding using the Elastic/Kibana stack. Deployed across Linux and Windows virtualized clusters with deep security auditing.",
    category: "Cloud & DevOps",
    year: "2025",
    tags: ["Kibana", "Elasticsearch", "Linux (Debian/Ubuntu)", "VMware vSphere", "WAF & Security"],
    metrics: ["Real-time Log Aggregation", "Automated Anomaly Alerts", "Multi-Cluster VM Ops"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    color: "#10b981",
  },
  {
    id: "nutriguard",
    title: "NutriGuard Mobile",
    tagline: "Smart Dietary Health & Food Safety Scanner",
    description:
      "Native mobile companion engineered for nutritional safety, ingredient parsing, and dietary tracking with automated barcode analysis, real-time recommendations, and offline-first persistence.",
    category: "AI & Mobile",
    year: "2026",
    tags: ["Android", "Kotlin / Java", "Gradle", "REST Integration", "Offline-first"],
    metrics: ["Instant Barcode Lookup", "Clean Material Design", "Robust Error Handling"],
    githubUrl: "https://github.com/yassinebouazizi-dev/NutriGuard",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    color: "#f59e0b",
  },
  {
    id: "academic-spring",
    title: "Spring Boot Microservices",
    tagline: "Enterprise Academic Backend & Automated CI Testing",
    description:
      "Enterprise layered software architecture (Controller-Service-Repository) featuring JPA/Hibernate ORM, H2/MySQL persistence, custom exception interceptors, and 100% automated unit & integration coverage with JUnit 5.",
    category: "Backend Systems",
    year: "2025",
    tags: ["Java", "Spring Boot", "JPA / Hibernate", "Maven", "JUnit 5", "Clean Architecture"],
    metrics: ["100% Modular Structure", "Automated JUnit 5 E2E", "Zero-Boilerplate ORM"],
    githubUrl: "https://github.com/yassinebouazizi-dev",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    color: "#06b6d4",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "EDDIUM PLATINUM",
    role: "Full-Stack Web Developer Intern",
    period: "August 2026",
    location: "Tunisia",
    type: "Internship",
    highlights: [
      "Designed and developed the full client-server architecture of EduPath using React.js, Vite, and Node.js / Express.",
      "Engineered secure RESTful APIs authenticated with JWT and connected to relational MySQL schemas.",
      "Built a real-time administration dashboard for student enrollments, status tracking, and course consulting.",
      "Optimized query response times and implemented strict server-side validation against injection attacks.",
    ],
    technologies: ["React.js", "Vite", "Node.js", "Express", "MySQL", "JWT", "REST APIs"],
  },
  {
    company: "VERMEG",
    role: "Systems, Virtualization & IT Supervision Intern",
    period: "January 2025",
    location: "Tunisia",
    type: "Internship",
    highlights: [
      "Deployed and configured virtualized Linux and Windows environments using Oracle VirtualBox and VMware vSphere.",
      "Structured log ingestion pipelines and crafted analytical monitoring dashboards in Kibana (Elastic Stack).",
      "Studied enterprise perimeter web defense with Web Application Firewalls (WAF), API Gateways, and Microsoft Azure cloud fundamentals.",
    ],
    technologies: ["Kibana", "Linux", "VMware", "Azure Fundamentals", "WAF", "Log Analytics"],
  },
];

export const SKILL_GROUPS = [
  {
    name: "Frontend & UI Craft",
    skills: ["React.js", "Next.js 14", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "Framer Motion", "Angular"],
  },
  {
    name: "Backend & Architectures",
    skills: ["Node.js", "Express.js", "Java (Spring Boot)", "PHP", "RESTful APIs", "JWT Authentication", "MVC / Clean Arch"],
  },
  {
    name: "Databases & Storage",
    skills: ["MySQL", "PostgreSQL", "H2 Database", "JPA / Hibernate", "Relational Modeling", "UML / Merise"],
  },
  {
    name: "Cloud, Systems & DevOps",
    skills: ["Linux (Ubuntu/Debian)", "Docker", "Microsoft Azure (Basics)", "Git & GitHub", "VMware vSphere", "VirtualBox"],
  },
  {
    name: "Supervision, Security & QA",
    skills: ["Kibana (Elastic)", "WAF & API Gateway", "Postman", "JUnit 5", "Agile / Scrum", "Git Flow"],
  },
];
