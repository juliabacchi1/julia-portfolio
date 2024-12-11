import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="Container-hero">
        <div className="Container-intro">
          <div>
            <div className="Download-cv">
              <button>
                <span>Download CV</span>
                <div className="circle"></div>
              </button>
            </div>
          </div>
          <div>
            <h3>
              A curious front-end developer always exploring new ways to craft
              meaningful experiences.
            </h3>
            <div className="Read-more">
              <a href="#readmore">
                <p>Read more →</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
