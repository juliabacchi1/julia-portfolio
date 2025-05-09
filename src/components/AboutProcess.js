import React from "react";
import Process1 from "../assets/images/Process1.png";
import Process2 from "../assets/images/Process2.png";
import Process3 from "../assets/images/Process3.png";
import Process4 from "../assets/images/Process4.png";
import Process5 from "../assets/images/Process5.png";
import Process6 from "../assets/images/Process6.png";
import Process7 from "../assets/images/Process7.png";
import Process8 from "../assets/images/Process8.png";
import { useTranslation } from "react-i18next";

const cards = [
  {
    image: Process1,
  },
  {
    image: Process2,
  },
  {
    image: Process3,
  },
  {
    image: Process4,
  },
  {
    image: Process5,
  },
  {
    image: Process6,
  },
  {
    image: Process7,
  },
  {
    image: Process8,
  },
];

const AboutProcess = () => {

  const { t } = useTranslation();

  return (
    <div className="About-process">
      <h4>{t("aboutProcess.title")}</h4>
      <p>{t("aboutProcess.subtitle")}</p>
      <div className="Card-container">
        {cards.map((card, index) => (
          <div key={index} className="Card">
            <img
              src={card.image}
              alt={`Card ${index + 1}`}
              className="Card-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutProcess;
