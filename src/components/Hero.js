import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import Resume from "../assets/images/Resume.pdf";

function Hero() {
  return (
    <section className="Hero">
      <div className="Container-hero">
        <div className="Container-intro">
          <div>
            <div className="Download-cv">
              <a
                href={Resume}
                className="primary-button"
                download="Resume_Julia.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div>
            <h3>
              A curious front-end developer always exploring new ways to craft
              meaningful experiences.
            </h3>
            <div className="Read-more">
              <Link to="/about">
                <button class="Button-read">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
