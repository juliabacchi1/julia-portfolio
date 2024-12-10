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
          <p>Hi! I'm Julia Bacchi</p>
          <h1>A Web Developer</h1>
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
