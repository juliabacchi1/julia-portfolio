import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Profile from "../assets/images/Profile.png";

function Home() {
  return (
    <div className="Home">
      <section id="home">
        <div className="Container-home">
          <div className="Container-wrapper">
            <div className="Intro">
              <h4>Hello, I'm Julia</h4>
            </div>
            <div className="Main">
              <h1>— Web</h1>
              <img src={Profile} alt="Julia" className="Profile-img" />
            </div>
            <div className="Content">
              <h2>Developer</h2>
            </div>
          </div>
        </div>
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
