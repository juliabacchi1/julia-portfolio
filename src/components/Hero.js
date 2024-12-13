import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import Resume from "../assets/images/Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="Hero">
      <div className="Container-hero">
        <div className="Container-intro">
          <div>
            <div className="download-card">
              <h4>Get my Resume</h4>
              <a href={Resume} download="Resume_Julia.pdf">
                Download
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
                <button className="Button-read">
                  Read more
                  <FontAwesomeIcon className="Read-icon" icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
