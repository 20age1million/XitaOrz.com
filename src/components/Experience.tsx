import type { ExperienceItem } from "../data/portfolio";
import "./Experience.css";

type ExperienceProps = {
  experience: readonly ExperienceItem[];
};

export function Experience({ experience }: ExperienceProps): JSX.Element {
  return (
    <section id="experience" className="content-section">
      <div className="section-heading">
        <h2>Experience</h2>
        <span className="section-subtitle">
          Production software, backend systems, networking, and cloud infrastructure
        </span>
      </div>
      <div className="experience-list">
        {experience.map((role) => (
          <article key={`${role.company}-${role.role}`} className="card experience-card">
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
            {role.impact && <p className="experience-card__impact">{role.impact}</p>}
            <ul className="pill-list">
              {role.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
