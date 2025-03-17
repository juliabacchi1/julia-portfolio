import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import CreativeHeader from "../components/CreativeHeader";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Profile from "../assets/images/Profile.png";
import { useTranslation } from "react-i18next";

function Home() {

  const { t } = useTranslation();

  return (
    <div className="Home">
      <section id="home">
        <div className="Container-home">
          <div className="Main-content">
            <div className="Text-content">
              <h4>{t("home.greeting")}</h4>
              <h1>{t("home.role")}</h1>
            </div>
            <div className="Image-container">
              <img src={Profile} alt="Julia" className="Profile-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="creative-header">
        <CreativeHeader />
      </section>

      <section id="hero">
        <Hero />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
