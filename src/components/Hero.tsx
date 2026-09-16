import resumeUrl from "../assets/Youyi_Yan_Resume.pdf";
import "./Hero.css";

const highlights = [
  "Go",
  "Python",
  "SQL",
  "C/C++",
  "TypeScript",
  "React",
  "Docker",
  "TCP/IP"
] as const;

export function Hero(): JSX.Element {
  return (
    <header className="hero" id="home">
      <div className="hero__profile">
        <div className="hero__avatar" aria-hidden="true">
          CY
        </div>
        <div>
          <h1 className="hero__headline">Carl (Youyi) Yan</h1>
          <p className="hero__subtitle">
            Computer Science @ University of Waterloo · Waterloo, ON
          </p>
        </div>
      </div>
      <p className="hero__summary">
        Hi, I&apos;m Carl (Youyi) Yan, a Computer Science student at the University of
        Waterloo focused on backend and software engineering. I build production systems
        across backend services, databases, networking, authentication, CI/CD, and
        full-stack applications, with additional experience integrating AI APIs into
        application workflows.
      </p>
      <ul className="hero__highlights">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="hero__links">
        <a className="button button--primary" href="mailto:carlyan6636@gmail.com">
          Email Me
        </a>
        <a
          className="button"
          href="https://github.com/XitaOrz"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="button"
          href="https://www.linkedin.com/in/youyi-yan-17b9942a9/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="button" href={resumeUrl} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
}
