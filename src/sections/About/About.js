import React from "react";
import { aboutContent } from "../../data/portfolioData";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section__heading">
        <span className="section__num">01.</span> About Me
      </h2>
      <div className="about__content">
        <div className="about__text">
          <p>{aboutContent.intro}</p>
          <p>{aboutContent.paragraph1}</p>
          <p>{aboutContent.paragraph2}</p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="about__tech">
            {aboutContent.tech.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
