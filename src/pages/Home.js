import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="Home">
      <section id="home">
        <div className="Container-home">
          <div className="Container-wrapper">
            <p>Hello, I'm Julia</p>
            <h1>A Web Developer</h1>
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
