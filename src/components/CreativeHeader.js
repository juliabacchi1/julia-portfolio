import React from "react";
import "../styles/CreativeHeader.css";
import Creative from "../assets/images/Creative.png";
import Resume from "../assets/images/Resume.pdf";
import { useTranslation } from "react-i18next";

function CreativeHeader() {

  const { t } = useTranslation();

  return (
    <section className="CreativeHeader">
      <div className="Container-header">
        <div className="Text-header">
          <h4>{t("creativeHeader.greeting")}</h4>
          <img src={Creative} alt="Creative" className="Creative" />
          <h3>portfolio</h3>
          <div className="Button-header">
            <a
              href={Resume}
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
