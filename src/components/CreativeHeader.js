import React from "react";
import "../styles/CreativeHeader.css";
import Creative from "../assets/images/Creative.png";
import Resume from "../assets/images/Resume.pdf";

function CreativeHeader() {
  return (
    <section className="CreativeHeader">
      <div className="Container-header">
        <div className="Text-header">
          <h4>Welcome to</h4>
          <img src={Creative} alt="Creative" className="Creative" />
          <h3>portfolio</h3>
          <div className="Button-header">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_Julia.pdf"
            >
              Grab my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeHeader;
