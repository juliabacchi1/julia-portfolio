import React, { useEffect, useState } from "react";
import "../styles/About.css";
import Contact from "../components/Contact";
import SpinningSVG from "../components/SpinningSVG";
import RotatingWords from "../components/RotatingWords";
import CertificateList from "../components/CertificateList";
import AboutProcess from "../components/AboutProcess";
import AboutImage from "../assets/images/AboutImage.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const [rotatingWords, setRotatingWords] = useState([]);

  useEffect(() => {
    // Define as palavras a serem rotacionadas com base na tradução
    setRotatingWords(t("about.rotatingWords", { returnObjects: true }));
  }, [t]); // Atualiza sempre que o idioma mudar

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
          <h3>{t("about.subtitle")}</h3>
          <h1>
            {t("about.title")}
            <SpinningSVG />
            {t("about.titleTwo")}
          </h1>
          <RotatingWords words={rotatingWords} />
        </div>

        <div className="About-content">
          <div className="About-main">
            <div className="About-description">
              <h4>{t("about.description")}</h4>
              <p>
                {t("about.descriptionTextOne")}
                <br /> {t("about.descriptionTextTwo")}
                <br /> {t("about.descriptionTextThree")}
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
