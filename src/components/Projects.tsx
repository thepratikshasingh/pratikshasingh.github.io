import { ArrowUpRight, FolderKanban } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  href?: string;
}

export interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section section-projects" id="projects">
      <div className="page-shell">
        <div className="section-heading section-heading-row">
          <div>
            <span className="section-kicker">04 / Projects</span>
            <h2>
              Work in
              <br />
              <span>progress.</span>
            </h2>
          </div>
          <p className="section-aside">
            A home for the ideas, coursework and projects I take on along the
            way.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-icon">
                  <FolderKanban size={20} aria-hidden="true" />
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.href && (
                  <a
                    className="inline-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="project-empty">
            <span className="project-empty-icon">
              <FolderKanban size={22} aria-hidden="true" />
            </span>
            <div>
              <h3>Room for what comes next.</h3>
              <p>
                No projects are listed in the profile provided. Check back as
                I add new work to this space.
              </p>
            </div>
            <a className="inline-link" href="#contact">
              Get in touch <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
