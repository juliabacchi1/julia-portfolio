import React, { useEffect } from "react";
import "../styles/About.css";
import Contact from "../components/Contact";
import SpinningSVG from "../components/SpinningSVG";
import RotatingWords from "../components/RotatingWords";
import CertificateList from "../components/CertificateList";
import AboutProcess from "../components/AboutProcess";
import AboutImage from "../assets/images/AboutImage.png";

const rotatingWords = ["Websites", "Experiences", "Interaction"];

function About() {
  useEffect(() => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="About" id="about">
      <div className="Container-about">
        <div className="About-hero">
          <h3>Hello, I'm Julia Bacchi — I love to create</h3>
          <h1>
            B<SpinningSVG />
            autiful
          </h1>
          <RotatingWords words={rotatingWords} />
        </div>

        <div className="About-content">
          <div className="About-main">
            <div className="About-description">
              <h4>About me</h4>
              <p>
                I'm a front-end developer who codes with personality, designs
                with purpose, and dreams in green.<br />I believe technology should
                be intuitive, impactful, and a force for good.<br /> Between lines of
                code, you'll find me flowing through yoga, surrounded by pets,
                or recharging by the sea.
              </p>
            </div>
            <div className="About-image">
              <img src={AboutImage} alt="About me" />
            </div>
          </div>
        </div>
        <AboutProcess />
      </div>
      <div className="Transition-gradient"></div>
      <CertificateList />
      <Contact />
    </section>
  );
}

export default About;
