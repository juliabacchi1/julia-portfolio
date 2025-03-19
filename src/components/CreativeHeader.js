import React from "react";
import "../styles/CreativeHeader.css";
import { useTranslation } from "react-i18next";

import CreativePT from "../assets/images/Creative_pt.png";
import CreativeES from "../assets/images/Creative_es.png";
import CreativeEN from "../assets/images/Creative_en.png";

function CreativeHeader() {
  const { t, i18n } = useTranslation();

  const getResumeFile = () => {
    switch (i18n.language) {
      case "es":
        return "/curriculum-es.pdf";
      case "pt":
        return "/curriculo-pt.pdf";
      default:
        return "/resume-en.pdf";
    }
  };

  const getImage = () => {
    switch (i18n.language) {
      case "es":
        return CreativeES;
      case "pt":
        return CreativePT;
      default:
        return CreativeEN;
    }
  };

  return (
    <section className="CreativeHeader">
      <div className="Container-header">
        <div className="Text-header">
          <h4>{t("creativeHeader.greeting")}</h4>
          <img src={getImage()} alt="Creative" className="Creative" />
          <h3>{t("creativeHeader.description")}</h3>
          <div className="Button-header">
            <a
              href={getResumeFile()}
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_Julia.pdf"
            >
              {t("creativeHeader.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeHeader;
