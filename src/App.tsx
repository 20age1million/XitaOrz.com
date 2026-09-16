import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import {
  education,
  experience,
  projects,
  relatedExperience,
  skills
} from "./data/portfolio";
import "./styles/global.css";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <main>
        <Experience experience={experience} />

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

        <section id="education" className="content-section">
          <div className="section-heading">
            <h2>Education</h2>
            <span className="section-subtitle">{education.school}</span>
          </div>
          <article className="card">
            <header className="card__header">
              <h3>{education.program}</h3>
              <p className="card__meta">
                {education.school} · {education.period} · {education.location}
              </p>
            </header>
          </article>
        </section>

        <section id="certifications" className="content-section">
          <div className="section-heading">
            <h2>Certifications &amp; Related Experience</h2>
            <span className="section-subtitle">
              Cloud and AI fundamentals outside of professional employment
            </span>
          </div>
          <div className="experience-list">
            {relatedExperience.map((item) => (
              <article key={item.title} className="card">
                <header className="card__header">
                  <h3>{item.title}</h3>
                  <p className="card__meta">
                    {item.organization} · {item.period} · {item.location}
                  </p>
                </header>
                <p className="card__body">{item.description}</p>
                <ul className="pill-list">
                  {item.stack.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
