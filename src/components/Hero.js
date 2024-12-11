import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="Container-hero">
        <div className="Container-intro">
          <div>
            <div className="Download-cv">
              <a href="#" className="primary-button">
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
              <a href="#readmore">
                <button class="Button-read">Read more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
