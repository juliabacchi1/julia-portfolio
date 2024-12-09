import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="Container">
          <p>Hi! I'm Julia Bacchi</p>
          <h1>A Web Developer</h1>
        </div>
      </section>

      <section id="hero">
        <Hero />
      </section>

      <section id="work">
        <h2>My Work</h2>
        <Work />
      </section>

      <section id="contact">
        <h2>Say Hello!</h2>
        <Contact />
      </section>
    </div>
  );
}

export default Home;
