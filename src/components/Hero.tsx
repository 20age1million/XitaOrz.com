import "./Hero.css";

export function Hero(): JSX.Element {
  return (
    <header className="hero" id="home">
      <div className="hero__profile">
        <div className="hero__avatar" aria-hidden="true">
          CY
        </div>
        <div>
          <h1 className="hero__headline">Carl Yan</h1>
          <p className="hero__subtitle">
            Third Year Computer Science @ University of Waterloo | Waterloo, ON carlyan6636@gmail.com | (506) 470-2888
          </p>
        </div>
      </div>
      <p className="hero__summary">
        Hi, I&apos;m Carl (Youyi) Yan, a CS student at Waterloo who enjoys building reliable systems from the ground up. Go, Python, C/C++, 
        backend, cloud deployment; learning React/TS for full-stack delivery. 
      </p>
      <ul className="hero__highlights">
        <li>Go</li>
        <li>C++</li>
        <li>C</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Docker</li>
        <li>Kotlin</li>
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
        <a className="button" href="src/assets/Youyi Yan Resume.pdf">
          Resume
        </a>
      </div>
    </header>
  );
}
