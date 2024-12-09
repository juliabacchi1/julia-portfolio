import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="Introduction">
      <div className="Container-intro">
        <div>
          <p>Download CV</p>
        </div>
        <div>
          <h3>
            A curious front-end developer always exploring new ways to craft
            meaningful experiences.
          </h3>
          <button className="btn btn-primary">Reed more</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
