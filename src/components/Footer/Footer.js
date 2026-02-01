import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <a href="#home" className="footer__link" onClick={scrollToTop}>
        <span className="footer__text">Click to time travel</span>
        <span className="footer__icon" aria-hidden="true">
          🚀
        </span>
      </a>
      <p className="footer__credit">
        Designed &amp; built by Abhishek Yadav. Built with React, deployed with Vercel. All text is set in the Inter typeface.
      </p>
    </footer>
  );
}

export default Footer;
