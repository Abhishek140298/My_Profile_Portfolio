import React from "react";
import { projects } from "../../data/portfolioData";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section__heading">
        <span className="section__num">03.</span> Some Things I've Built
      </h2>
      <ul className="projects__list">
        {projects.map((project, index) => (
          <li key={project.id} className={`projects__item projects__item--${index % 2 === 0 ? "left" : "right"}`}>
            <div className="projects__card">
              <div className="projects__media">
                <div className="projects__media-placeholder" aria-hidden="true">
                  <span className="projects__media-icon">◇</span>
                </div>
              </div>
              <div className="projects__body">
                <p className="projects__overline">Featured Project</p>
                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__title-link"
                  >
                    <h3 className="projects__title">{project.title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  <h3 className="projects__title projects__title--plain">{project.title}</h3>
                )}
                <div className="projects__desc-wrap">
                  <p className="projects__desc">{project.description}</p>
                </div>
                <ul className="projects__tech">
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <div className="projects__links">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="projects__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External" className="projects__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="projects__archive">
        <a href="#projects" className="projects__archive-link">
          View Full Project Archive
        </a>
      </div>
    </section>
  );
}

export default Projects;
