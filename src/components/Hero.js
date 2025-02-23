import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resume from "../assets/images/Resume.pdf";
import ResumeImg from "../assets/images/Resume-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="Hero">
      <div className="Container-hero">
        <div className="Container-intro">
          <div>
            <motion.div
              className="download-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Resume_Julia.pdf"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={ResumeImg}
                  alt="Download Resume"
                  className="resume-button"
                />
              </motion.a>
            </motion.div>
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
