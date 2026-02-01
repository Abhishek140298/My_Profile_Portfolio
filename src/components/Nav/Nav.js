import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../../data/portfolioData";
import "./Nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [mobileMenuOpen]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <nav className="nav__inner" aria-label="Main navigation">
        <a href="#home" className="nav__logo" aria-label="Home">
          AY
        </a>
        <ul className="nav__links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                className="nav__link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__resume"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="nav__hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={mobileMenuOpen ? "nav__hamburger-open" : ""} />
          <span className={mobileMenuOpen ? "nav__hamburger-open" : ""} />
          <span className={mobileMenuOpen ? "nav__hamburger-open" : ""} />
        </button>
      </nav>
      <div className={`nav__mobile ${mobileMenuOpen ? "nav__mobile--open" : ""}`}>
        <ul className="nav__mobile-links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                className="nav__mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__mobile-link nav__mobile-resume"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
