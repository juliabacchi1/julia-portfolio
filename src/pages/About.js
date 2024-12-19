import React, { useEffect } from "react";
import "../styles/About.css";
import Contact from "../components/Contact";
import SpinningSVG from "../components/SpinningSVG";
import RotatingWords from "../components/RotatingWords";
import CertificateList from "../components/CertificateList";
import AboutProcess from "../components/AboutProcess";

const rotatingWords = ["Websites", "Experiences", "Interaction"];

function About() {
  // Rola para o topo da página ao renderizar o componente
  useEffect(() => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // O array vazio garante que o efeito só execute ao montar o componente

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

        <div className="About-main">
          <div className="About-description">
            <h4>About me</h4>
            <p>
              I am a front-end developer passionate about technology and being
              part of the solution. <br />I focus on building digital
              experiences that simplify people's lives and drive meaningful
              impact.
            </p>
          </div>
          <CertificateList />
        </div>
        <AboutProcess />
      </div>
      <div className="Transition-gradient"></div>
      <Contact />
    </section>
  );
}

export default About;
