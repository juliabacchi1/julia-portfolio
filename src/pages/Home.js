import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import CreativeHeader from "../components/CreativeHeader";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Profile from "../assets/images/Profile.png";

function Home() {
  return (
    <div className="Home">
      <section id="home">
        <div className="Container-home">
          <div className="Main-content">
            <div className="Text-content">
              <h4>Hi, I'm Julia!</h4>
              <h1>A Web Developer</h1>
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
