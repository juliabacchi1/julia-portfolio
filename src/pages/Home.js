import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="Container">
          <p className="Hello">Hello, I'm Julia Bacchi</p>
          <h1 className="Introduction">A Web Developer</h1>
        </div>
        <div>
          <h3>
            A passionate front-end developer with a love for creating intuitive,
            user-centered web experiences and innovative digital solutions.

            web developer who loves crafting
          meaningful experiences.
          </h3>
        </div>
      </section>

      <section id="work">
        <h2>My Work</h2>
        <Work /> {/* Componente Work com os detalhes dos projetos */}
      </section>

      <section id="contact">
        <h2>Say Hello!</h2>
        <Contact /> {/* Componente Contact com o formulário de contato */}
      </section>
    </div>
  );
}

export default Home;
