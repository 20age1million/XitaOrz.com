import "./Contact.css";

export function Contact(): JSX.Element {
  return (
    <section id="contact" className="contact content-section">
      <div className="section-heading">
        <h2>Contact Me</h2>
      </div>
      <p className="contact__body">
        I&apos;m interested in software engineering opportunities involving backend
        systems, full-stack development, infrastructure, networking, or AI-integrated
        applications. Feel free to reach out if you&apos;d like to discuss a role or
        project.
      </p>
      <div className="contact__links">
        <a className="button button--primary" href="mailto:carlyan6636@gmail.com">
          Email me: carlyan6636@gmail.com
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
      </div>
    </section>
  );
}
