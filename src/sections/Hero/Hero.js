import React from "react";
import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero__greeting">Hi, my name is</p>
      <h1 className="hero__name">
        <a href="/" className="hero__name-link">{personalInfo.name}</a>.
      </h1>
      <h2 className="hero__title">{personalInfo.title}</h2>
      <p className="hero__tagline">{personalInfo.tagline}</p>
      <div className="hero__cta">
        <a href="#contact" className="hero__btn">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
