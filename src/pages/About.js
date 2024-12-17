import React from "react";
import "../styles/About.css";
import SpinningSVG from "../components/SpinningSVG";
import RotatingWords from "../components/RotatingWords";
import CertificateList from "../components/CertificateList";

const rotatingWords = ["Websites", "Experiences", "Interaction", "Ideas"];

function About() {
  return (
    <section className="About">
      <div className="Container-about">
        <div className="About-hero">
          <h3>Hello, I'm Julia Bacchi — I love to create</h3>
          <h1>
            B<SpinningSVG />
            autiful
          </h1>
          <RotatingWords words={rotatingWords} />
        </div>

        <div className="About-main">
          <div className="About-description">
            <h4>About me</h4>
            <p>
              I am a front-end developer passionate about technology and being
              part of the solution. I focus on building digital experiences that
              simplify people's lives and drive meaningful impact. I look for
              projects with purpose and that make a difference.
            </p>
          </div>
          <CertificateList />
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
