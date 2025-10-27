import "./Contact.css";

export function Contact(): JSX.Element {
  return (
    <section id="contact" className="contact content-section">
      <div className="section-heading">
        <h2>Contact Me</h2>
      </div>
      <p className="contact__body">
        I&apos;m currently seeking opportunities in backend, full-stack, and application development.  
        If you&apos;d like to collaborate or discuss potential roles, feel free to reach out—I&apos;d love to connect.
      </p>
      <a className="button button--primary" href="mailto:carlyan6636@gmail.com">
        Email me: carlyan6636@gmail.com
      </a>
    </section>
  );
}
