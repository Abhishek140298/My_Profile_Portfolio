import React from "react";
import { personalInfo } from "../../data/portfolioData";
import "./EmailSidebar.css";

function EmailSidebar() {
  return (
    <aside className="email-sidebar" aria-label="Email">
      <div className="email-sidebar__inner">
        <a
          href={`mailto:${personalInfo.email}`}
          className="email-sidebar__link"
          aria-label="Email me"
        >
          {personalInfo.email}
        </a>
        <div className="email-sidebar__line" />
      </div>
    </aside>
  );
}

export default EmailSidebar;
