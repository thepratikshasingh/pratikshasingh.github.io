import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";

function About() {
  return (
    <section className="section section-about" id="about">
      <div className="page-shell">
        <div className="section-heading">
          <span className="section-kicker">01 / About</span>
          <h2>
            A story shaped
            <br />
            by <span>curiosity.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-intro">
            <p className="lead-copy">
              I am Pratiksha, an MBA student at Rajarshi School of Management
              and Technology in Varanasi.
            </p>
            <p>
              My education has taken me from a Bachelor of Science at Veer
              Bahadur Singh Purvanchal University to a Master of Science at
              Maharaja Suhel Dev University. I am now pursuing an MBA in
              Business Administration and Management, General.
            </p>
            <p>
              This portfolio is a snapshot of my academic journey and the
              next steps I am working toward.
            </p>
            <a className="inline-link" href="#contact">
              Say hello <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="about-facts">
            <article className="fact-card">
              <div className="fact-icon">
                <GraduationCap size={21} aria-hidden="true" />
              </div>
              <div>
                <span className="fact-label">Currently studying</span>
                <h3>MBA, General Management</h3>
                <p>Rajarshi School of Management and Technology</p>
              </div>
            </article>
            <article className="fact-card">
              <div className="fact-icon">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div>
                <span className="fact-label">Based in</span>
                <h3>Varanasi, India</h3>
                <p>Uttar Pradesh</p>
              </div>
            </article>
            <div className="about-note">
              <span className="note-mark">“</span>
              <p>
                Grounded in science. Growing through management studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
