import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import "./styles/global.css";
import "./App.css";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  stack: string;
};

type EducationItem = {
  school: string;
  program: string;
  period: string;
  location: string;
  notes: string[];
};

type ProjectItem = {
  title: string;
  description: string;
  stack: readonly string[];
  link: string;
};

type SkillCategory = {
  title: string;
  items: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "NB INC (STEMBlock)",
    role: "Backend Developer, Educator",
    period: "May 2025 – Aug 2025",
    location: "Remote",
    achievements: [
      "Built student portal backend in Go (Gin, GORM, PostgreSQL) with auth, rate limiting, sessions, RBAC.",
      "Integrated APIs with frontend; deployed on DigitalOcean via Github Actions.",
      "Taught intro Python class for kids with hands-on exercises."
    ],
    stack: "Go · PostgreSQL · Docker · Github Actions"
  },
  {
    company: "WE Accelerate — Microsoft Azure & AI",
    role: "Participant",
    period: "May 2024 – Aug 2024",
    location: "Waterloo, ON",
    achievements: [
      "Completed AZ-900 and AI-900 certifications focused on core Azure services.",
      "Collaborated on a wireframing project exploring AI-assisted investment tools."
    ],
    stack: "Azure Cloud Computing · Azure AI Service"
  }
];

const education: EducationItem = {
  school: "University of Waterloo",
  program: "Bachelor of Computer Science (Honours)",
  period: "2023 – 2028 (expected)",
  location: "Waterloo, ON",
  notes: [
    "Exploring OOP, Operating System, Database Design, and Application Development."
  ]
};

const projects: readonly ProjectItem[] = [
  {
    title: "WaterlooStar.com",
    description:
      "Full-stack student forum for student housing, local deals & discounts, and academic resources with moderation workflows and onboarding guides.",
    stack: ["Go", "React", "PostgreSQL"],
    link: "https://waterloostar.com"
  },
  {
    title: "Resonate ",
    description:
      "A Spotify Discovery Web App based on Flask + React tool that surfaces overlooked tracks from a 1.2M song dataset using a curated 5K sample.",
    stack: ["Python", "Flask", "React", "MySQL"],
    link: "https://github.com/Xitaorz/Resonate"
  },
  
  {
    title: "Spinema",
    description:
      "Android spinner app that helps group pick a movie night lineup with weighted randomness.",
    stack: ["Kotlin", "Jetpack Compose"],
    link: "https://github.com/XitaOrz/Spinema"
  },
  {
    title: "RAIInet",
    description:
      "Terminal-based strategy game written in C++ with reinforcement learning-inspired mechanics.",
    stack: ["C++", "Xming"],
    link: "https://github.com/XitaOrz/RAIInet"
  }
];

const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Go", "Python", "C/C++", "SQL", "TypeScript", "HTML", "Bash"]
  },
  {
    title: "Frameworks",
    items: ["Flask", "Gin", "React"]
  },
  {
    title: "DevOps",
    items: ["Docker", "Drone CI", "Nginx", "1Panel"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL"]
  },
  {
    title: "Tools",
    items: ["Git", "VSCode", "Vim", "Notion"]
  }
];

const writingNotes = [
  {
    title: "Drone CI pipelines for student teams",
    status: "Drafting notes"
  },
  {
    title: "Designing Go backends with clean interfaces",
    status: "Outline in progress"
  }
];

export default function App(): JSX.Element {
  return (
    <div className="page">
      <Hero />
      <main>
        <section id="experience" className="content-section">
          <div className="section-heading">
            <h2>Experience</h2>
            <span className="section-subtitle">Hands-on backend work experience and cloud practice</span>
          </div>
          <div className="card-list">
            {experience.map((role) => (
              <article key={`${role.company}-${role.role}`} className="card">
                <header className="card__header">
                  <h3>{role.role}</h3>
                  <p className="card__meta">
                    {role.company} · {role.period} · {role.location}
                  </p>
                </header>
                <ul className="card__list">
                  {role.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <p className="card__footer">{role.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="content-section">
          <div className="section-heading">
            <h2>Education</h2>
            <span className="section-subtitle">University of Waterloo</span>
          </div>
          <article className="card">
            <header className="card__header">
              <h3>{education.program}</h3>
              <p className="card__meta">
                {education.period} · {education.location}
              </p>
            </header>
            <ul className="card__list">
              {education.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        </section>

        <Projects projects={projects} />

        <section id="skills" className="content-section">
          <div className="section-heading">
            <h2>Skills</h2>
            <span className="section-subtitle">Toolbox</span>
          </div>
          <div className="skills-grid">
            {skills.map((category) => (
              <div key={category.title} className="card">
                <h3 className="card__title">{category.title}</h3>
                <ul className="pill-list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/*<section id="writing" className="content-section">
          <div className="section-heading">
            <h2>Writing</h2>
            <span className="section-subtitle">Notes in progress</span>
          </div>
          <ul className="writing-list">
            {writingNotes.map((note) => (
              <li key={note.title}>
                <span>{note.title}</span>
                <span className="writing-list__status">{note.status}</span>
              </li>
            ))}
          </ul>
        </section>*/}

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
