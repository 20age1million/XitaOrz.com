import type { ProjectItem } from "../data/portfolio";
import "./Projects.css";

type ProjectsProps = {
  projects: readonly ProjectItem[];
};

export function Projects({ projects }: ProjectsProps): JSX.Element {
  return (
    <section id="projects" className="projects content-section">
      <div className="section-heading">
        <h2>Projects</h2>
        <span className="section-subtitle">Software, systems, and application projects</span>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className={
              project.featured ? "project-card project-card--featured" : "project-card"
            }
          >
            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <ul className="project-card__stack">
              {project.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            {project.link && (
              <a
                className="project-card__link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
