import "./Nav.css";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
] as const;

export function Nav(): JSX.Element {
  return (
    <nav className="nav" aria-label="Section navigation">
      <ul className="nav__list">
        {sections.map((section) => (
          <li key={section.id}>
            <a className="nav__link" href={`#${section.id}`}>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
