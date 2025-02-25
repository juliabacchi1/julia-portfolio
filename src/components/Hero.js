import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="Hero">
      <div className="Container-hero">
        <div className="Container-intro">
          <div className="Content-icons">
            <i className="devicon-react-original"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-bootstrap-plain"></i>
            <i className="devicon-wordpress-plain"></i>
            <i className="devicon-figma-plain"></i>
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
