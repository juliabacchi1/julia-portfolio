import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="About">
      <div className="Container-about">
        <div className="About-hero">
          <h3>Hello, I'm Julia Bacchi — I love to create</h3>
          <h1>Beautiful</h1>
          <h2>Websites</h2>
        </div>
        <div className="About-me">
          <h4>About me</h4>
          <p>Content</p>
        </div>
        <div className="About-certifications">
          <h4>Certifications</h4>
          <p>Content</p>
        </div>
        <div className="About-main">
          <h5>Why work with me</h5>
          <h4>My Process</h4>
        </div>
      </div>
    </section>
  );
}

export default About;
