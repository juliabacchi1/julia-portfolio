import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="Container">
          <p>Hello, I'm Julia Bacchi</p>
          <h1>A Web Developer</h1>
        </div>
        <div className="Introduction">
          <h3>
            A curious front-end developer always exploring new ways to craft
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
