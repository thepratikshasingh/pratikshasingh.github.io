import { GraduationCap } from "lucide-react";

export interface EducationEntry {
  program: string;
  institution: string;
  dates: string;
  status: "In progress" | "Completed";
  focus?: string;
}

export interface ExperienceProps {
  items: EducationEntry[];
}

function Experience({ items }: ExperienceProps) {
  return (
    <section className="section section-journey" id="experience">
      <div className="page-shell">
        <div className="section-heading section-heading-row">
          <div>
            <span className="section-kicker">02 / Experience</span>
            <h2>
              My learning
              <br />
              <span>journey.</span>
            </h2>
          </div>
          <p className="section-aside">
            The resume provided lists my education but no professional roles.
            Here is the academic path it does include.
          </p>
        </div>

        <ol className="timeline">
          {items.map((item, index) => (
            <li className="timeline-item" key={`${item.program}-${item.dates}`}>
              <span className="timeline-marker" aria-hidden="true">
                <GraduationCap size={17} />
              </span>
              <article className="timeline-card">
                <div className="timeline-topline">
                  <span className="timeline-index">
                    0{items.length - index}
                  </span>
                  <span
                    className={`timeline-status${item.status === "In progress" ? " is-current" : ""}`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="timeline-content">
                  <div>
                    <h3>{item.program}</h3>
                    {item.focus && <p className="timeline-focus">{item.focus}</p>}
                  </div>
                  <div className="timeline-meta">
                    <p>{item.institution}</p>
                    <span>{item.dates}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
