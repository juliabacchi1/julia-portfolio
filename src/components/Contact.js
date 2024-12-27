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
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/juliabacchi/",
      icon: faLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/juliabacchi1",
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: "https://x.com/juliabacchi",
      icon: faTwitter,
      label: "Twitter",
    },
    {
      href: "https://wa.me/48991779743?text=Hi%20",
      icon: faWhatsapp,
      label: "WhatsApp",
    },
  ];

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
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="Icon"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="Wave">
        <Wave />
      </div>
    </section>
  );
}

export default Contact;
