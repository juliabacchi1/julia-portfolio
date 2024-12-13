import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Wave from "../components/Wave";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="Contact">
      <div className="Container-contact">
        <h3>Say Hello.</h3>
        <div className="Info-contact">
          <a className="Info-link" href="mailto:juliabacchi92@gmail.com">
            <button className="Info-button">juliabacchi92@gmail.com</button>
          </a>
        </div>
        <div className="Info-socials">
          <a
            className="Icon"
            href="https://www.linkedin.com/in/juliabacchi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="Icon"
            href="https://github.com/juliabacchi1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="Icon"
            href="https://x.com/juliabacchi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="Icon"
            href="https://wa.me/48991779743?text=Hi%20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div className="Wave">
        <Wave />
      </div>
    </section>
  );
}

export default Contact;
