export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: readonly string[];
  impact?: string;
  stack: readonly string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: readonly string[];
  link?: string;
  featured?: boolean;
};

export type SkillCategory = {
  title: string;
  items: readonly string[];
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  location: string;
};

export type RelatedExperienceItem = {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  stack: readonly string[];
};

export const experience: readonly ExperienceItem[] = [
  {
    company: "Randox Health",
    role: "Software Developer Intern",
    period: "Jan 2026 – Aug 2026",
    location: "Antrim, UK",
    achievements: [
      "Served as the primary developer of a production Laboratory Information Management System (LIMS), implementing Go backend services, SQL Server database architecture, React and TypeScript frontend applications, and the integrations between them. Integrated the application with Azure DevOps CI/CD pipelines for automated builds, deployment, and health checks.",
      "Built persistent TCP/IP integrations for laboratory analysers such as the Roche Cobas e801, Sysmex, and Rx Imola, implementing raw socket listeners that communicate directly with the instrument hardware, ASTM and HL7 protocol parsing, and asynchronous workers that validate, process, and route incoming results.",
      "Built a centralized OAuth 2.0-based SSO service adopted as the standard login system across Randox internal applications, with RBAC, application-level authorization, and auditing.",
      "Contributed to a prototype AI chatbot for the Randox Health website using Python and the Anthropic API, integrating LLM tool calling with custom backend tools for customer questions and examination-booking workflows."
    ],
    impact:
      "The LIMS platform has been released, deployed internally in production, and received confirmed purchase interest from external companies.",
    stack: [
      "Go",
      "SQL Server",
      "React",
      "TypeScript",
      "TCP/IP",
      "ASTM",
      "HL7",
      "OAuth 2.0",
      "Azure DevOps",
      "Python",
      "Anthropic API"
    ]
  },
  {
    company: "NB INC dba STEMBlock",
    role: "Software Developer",
    period: "May 2025 – Aug 2025",
    location: "New Brunswick, CA",
    achievements: [
      "Built a student portal backend in Go using Gin, GORM, and PostgreSQL, implementing authentication, rate limiting, session management, RBAC, and frontend-facing APIs.",
      "Integrated the APIs with the frontend application and deployed to DigitalOcean with automated CI/CD through GitHub Actions.",
      "Designed and taught an introductory Python course for children using hands-on programming exercises."
    ],
    stack: [
      "Go",
      "Gin",
      "GORM",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "DigitalOcean",
      "GitHub Actions"
    ]
  }
];

export const projects: readonly ProjectItem[] = [
  {
    title: "WaterlooStar.com",
    description:
      "Founded and leading development of a University of Waterloo community platform with a deployed prototype supporting housing, campus events, and student resources. Designed the backend architecture and REST APIs in Go with PostgreSQL and automated cloud deployment.",
    stack: ["Go", "PostgreSQL", "REST API", "React", "Cloud Deployment"],
    link: "https://waterloostar.com",
    featured: true
  },
  {
    title: "Aetheria — 2D Turn-Based Roguelike",
    description:
      "Independently developing a 2D turn-based roguelike in C#/.NET with Godot, currently in development with a playable demo. Built a finite-state-machine turn system, seeded procedural generation, and enemy AI on a data-driven architecture that uses interfaces, polymorphism, and event-driven design to keep game logic unit-testable and decoupled from the engine and UI.",
    stack: ["C#", ".NET", "Godot", "Procedural Generation", "Event-Driven Architecture"],
    featured: true
  },
  {
    title: "Resonate",
    description:
      "Built a Spotify discovery web application using Flask and React that surfaces overlooked tracks from a 1.2M-song dataset using a curated 5K-song sample.",
    stack: ["Python", "Flask", "React", "MySQL"],
    link: "https://github.com/Xitaorz/Resonate"
  },
  {
    title: "Spinema",
    description:
      "Developed an Android group movie-selection app in Kotlin, implementing room creation, voting, weighted selection, and the supporting application architecture and UI flows.",
    stack: ["Kotlin", "Android", "Jetpack Compose"],
    link: "https://github.com/XitaOrz/Spinema"
  },
  {
    title: "RAIInet",
    description:
      "Built a terminal-based strategy game in C++ featuring reinforcement-learning-inspired gameplay mechanics.",
    stack: ["C++", "Xming"],
    link: "https://github.com/XitaOrz/RAIInet"
  }
];

export const skills: readonly SkillCategory[] = [
  {
    title: "Languages",
    items: ["Go", "Python", "C", "C++", "C#", "Kotlin", "SQL", "TypeScript", "HTML", "Bash"]
  },
  {
    title: "Frameworks & Application Development",
    items: ["Gin", "GORM", "React", "Next.js", "Vite", "Flask", ".NET", "Godot"]
  },
  {
    title: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL"]
  },
  {
    title: "Backend, Systems & APIs",
    items: ["TCP/IP", "REST APIs", "ASTM", "HL7", "OAuth 2.0", "Anthropic API"]
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Azure",
      "Azure DevOps",
      "Docker",
      "DigitalOcean",
      "GitHub Actions",
      "Drone CI",
      "Git",
      "Linux",
      "Nginx"
    ]
  }
];

export const education: EducationItem = {
  school: "University of Waterloo",
  program: "Bachelor of Computer Science (Honours), Co-operative Program",
  period: "2023 – 2028 (expected)",
  location: "Waterloo, Ontario"
};

export const relatedExperience: readonly RelatedExperienceItem[] = [
  {
    title: "Microsoft Azure & AI Fundamentals",
    organization: "Waterloo Experience (WE) Accelerate",
    period: "May 2024 – Aug 2024",
    location: "Waterloo, ON",
    description:
      "Completed Microsoft Azure Fundamentals (AZ-900) and Azure AI Fundamentals (AI-900), and collaborated on the design and presentation of an investment-solution prototype using Microsoft Azure AI and cloud services.",
    stack: ["AZ-900", "AI-900", "Azure", "Azure AI"]
  }
];
