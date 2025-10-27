import "./Footer.css";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Carl Yan. Crafted with curiosity in React and TypeScript.</p>
      <p>Credits to: ChatGPT my React and TS Teacher</p>
      <div className="footer__links">
        <a href="https://github.com/XitaOrz" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/youyi-yan-17b9942a9/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <p>(506) 470-2888</p>
      </div>
    </footer>
  );
}
