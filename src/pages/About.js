import React from "react";
import "../styles/About.css";
import SpinningSVG from "../components/SpinningSVG";
import RotatingWords from "../components/RotatingWords";
import CertificateList from "../components/CertificateList";

const rotatingWords = ["Websites", "Experiences", "Interaction", "Ideas"];

function About() {
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
              part of the solution. I focus on building digital experiences that
              simplify people's lives and drive meaningful impact. I look for
              projects with purpose and that make a difference.
            </p>
          </div>
          <CertificateList />
        </div>
        <div className="About-process">
          <h4>Why work with me</h4>
          <p>
            MULTIPLATFORM APPROACH I design solutions that work seamlessly
            across web, mobile, and emerging digital platforms, with a focus on
            user-centered experiences.
          </p>
          <p>
            DRIVEN BY RESULTS I prioritize delivering completed projects that
            solve real problems and drive meaningful impact.
          </p>
          <p>
            CREATIVE & CUSTOM DESIGNS I craft personalized designs tailored to
            your brand’s identity, ensuring every detail speaks to your vision
            and values.
          </p>
          <p>
            MY PROCESS:
            <ol>
              <li>
                <strong>Design & Prototyping:</strong> I build wireframes and
                prototypes that not only reflect your brand but also prioritize
                intuitive user experiences.
              </li>
              <li>
                <strong>Discovery & Planning:</strong> I begin by deeply
                understanding your project’s goals, audience, and requirements
                to create a tailored solution.
              </li>
              <li>
                <strong>Launch & Deployment:</strong> I manage a smooth,
                seamless deployment process to ensure your project is
                successfully live and fully functional.
              </li>
              <li>
                <strong>Ongoing Support:</strong> I provide continued support to
                ensure your project evolves with new updates and features,
                keeping it running smoothly long after launch.
              </li>
            </ol>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
