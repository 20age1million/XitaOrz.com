import "./Footer.css";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Carl (Youyi) Yan. Built with React, TypeScript, and Vite.</p>
      <div className="footer__links">
        <a href="https://github.com/XitaOrz" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/youyi-yan-17b9942a9/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
