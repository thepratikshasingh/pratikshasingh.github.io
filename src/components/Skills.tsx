import { ArrowUpRight, BookOpen } from "lucide-react";

export interface SkillGroup {
  title: string;
  items: string[];
  note: string;
}

export interface SkillsProps {
  groups: SkillGroup[];
}

function Skills({ groups }: SkillsProps) {
  return (
    <section className="section section-skills" id="skills">
      <div className="page-shell">
        <div className="section-heading section-heading-row">
          <div>
            <span className="section-kicker">03 / Skills & studies</span>
            <h2>
              What I am
              <br />
              <span>learning.</span>
            </h2>
          </div>
          <p className="section-aside">
            My profile shares academic fields rather than a technical skills
            list. These are the areas of study it confirms.
          </p>
        </div>

        <div className="study-grid">
          {groups.map((group, index) => (
            <article className="study-card" key={group.title}>
              <div className="study-card-top">
                <span className="study-icon">
                  <BookOpen size={19} aria-hidden="true" />
                </span>
                <span className="study-index">0{index + 1}</span>
              </div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="study-note">{group.note}</p>
            </article>
          ))}
        </div>
        <a className="inline-link skills-contact-link" href="#contact">
          Have a learning opportunity in mind? <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Skills;
