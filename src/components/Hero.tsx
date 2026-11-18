import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            MBA candidate in Varanasi, India
          </div>
          <h1>
            Pratiksha
            <br />
            <span>Singh.</span>
          </h1>
          <p className="hero-role">
            Student at Rajarshi School of Management and Technology
          </p>
          <p className="hero-summary">
            Pursuing an MBA in Business Administration and Management, with an
            academic foundation in science.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={`${import.meta.env.BASE_URL}Pratiksha-Singh-Resume.pdf`}
              download
            >
              <Download size={17} aria-hidden="true" />
              Download resume
            </a>
            <a className="text-link" href="#about">
              Get to know me
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-aside" aria-label="A snapshot of my journey">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-card">
            <span className="hero-card-label">The next chapter</span>
            <span className="hero-card-number">01</span>
            <span className="hero-card-title">Learning today.</span>
            <span className="hero-card-title hero-card-title-accent">
              Building tomorrow.
            </span>
            <span className="hero-card-rule" />
            <span className="hero-card-detail">
              MBA · General Management
            </span>
            <a className="hero-card-link" href="#experience">
              Explore my journey <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <span className="hero-aside-caption">A little about my journey</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll to explore</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
