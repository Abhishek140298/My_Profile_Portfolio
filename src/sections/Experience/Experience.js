import React, { useState } from "react";
import { experience, personalInfo } from "../../data/portfolioData";
import "./Experience.css";

function Experience() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="experience" id="experience">
      <h2 className="section__heading">
        <span className="section__num">02.</span> Where I've Worked
      </h2>
      <div className="experience__content">
        <div className="experience__tabs" role="tablist">
          {experience.map((job) => (
            <button
              key={job.id}
              type="button"
              role="tab"
              aria-selected={activeId === job.id}
              className={`experience__tab ${activeId === job.id ? "experience__tab--active" : ""}`}
              onClick={() => setActiveId(job.id)}
            >
              {job.period}
            </button>
          ))}
        </div>
        <div className="experience__panels">
          {experience.map((job) => (
            <div
              key={job.id}
              role="tabpanel"
              className={`experience__panel ${activeId === job.id ? "experience__panel--active" : ""}`}
              hidden={activeId !== job.id}
            >
              <h3 className="experience__role">
                {job.companyUrl && job.companyUrl !== "#" ? (
                  <>
                    {job.role}{" "}
                    <span className="experience__company-at">·</span>{" "}
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience__company-link"
                    >
                      {job.company}
                    </a>
                  </>
                ) : (
                  <>
                    {job.role} <span className="experience__company-at">@</span> {job.company}
                  </>
                )}
              </h3>
              <p className="experience__period">{job.period}</p>
              <ul className="experience__points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="experience__tech">
                {job.tech.map((t, i) => (
                  <span key={i} className="experience__tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="experience__resume">
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="experience__resume-link"
        >
          View Full Résumé
        </a>
      </div>
    </section>
  );
}

export default Experience;
