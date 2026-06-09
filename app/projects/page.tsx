import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="inner-page projects-page page-frame">
      <header className="page-heading page-heading--center">
        <p>Case studies</p>
        <h1>Curated <em>work</em></h1>
        <span>Production projects with real workflow and integration depth.</span>
      </header>
      <section className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card project-card--${project.tone}`} key={project.slug}>
            <div className="project-topline">
              <span>{project.index}</span>
              <span>{project.projectType}</span>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                <ArrowUpRight />
              </a>
            </div>
            <div className="project-details">
              <div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
              <div className="project-case-panels">
                <section>
                  <p className="project-section-label">Role</p>
                  <span>{project.role}</span>
                </section>
                <section>
                  <p className="project-section-label">Overview</p>
                  <span>{project.overview}</span>
                </section>
              </div>
              <div className="project-case-grid">
                <section>
                  <p className="project-section-label">What the product does</p>
                  <ul className="project-capabilities">
                    {project.productCapabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <p className="project-section-label">Tech stack</p>
                  <ul className="project-tech-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <section className="project-detail-section">
                <p className="project-section-label">Frontend</p>
                <p>{project.frontendDetails}</p>
                <div className="project-detail-columns">
                  <div>
                    <strong>Architecture</strong>
                    <ul className="project-capabilities">
                      {project.frontendArchitecture.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Features</strong>
                    <ul className="project-capabilities">
                      {project.frontendFeatures.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className="project-tech-list project-tech-list--wide">
                  {project.frontendStack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </section>
              {project.backendDetails ? (
                <section className="project-detail-section">
                  <p className="project-section-label">Backend</p>
                  <p>{project.backendDetails}</p>
                  <div className="project-detail-columns">
                    <div>
                      <strong>Architecture</strong>
                      <ul className="project-capabilities">
                        {project.backendArchitecture?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong>Capabilities</strong>
                      <ul className="project-capabilities">
                        {project.backendCapabilities?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {project.backendStack ? (
                    <ul className="project-tech-list project-tech-list--wide">
                      {project.backendStack.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ) : null}
              <section className="project-reliability">
                <p className="project-section-label">Reliability notes</p>
                <div>
                  {project.securityReliability.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
              </section>
              <p className="project-note">{project.notes}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
