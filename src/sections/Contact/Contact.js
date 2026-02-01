import React from "react";
import { personalInfo } from "../../data/portfolioData";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact__label">04. What&apos;s Next?</p>
      <h2 className="contact__heading">Get In Touch</h2>
      <p className="contact__text">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, I'll try my best to get back to you.
      </p>
      <a href={`mailto:${personalInfo.email}`} className="contact__btn">
        Say Hello
      </a>
      <div className="contact__details">
        <a href={`mailto:${personalInfo.email}`} className="contact__link">
          {personalInfo.email}
        </a>
        <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="contact__link">
          {personalInfo.phone}
        </a>
      </div>
    </section>
  );
}

export default Contact;
