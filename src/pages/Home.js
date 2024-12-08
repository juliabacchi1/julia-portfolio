import React from "react";
import "../styles/Home.css";
import Work from "../components/Work";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="Container">
          <div>
            <p>Hi! I'm Julia Bacchi</p>
          </div>
          <div className="Container-son">
            <h1>A Web</h1>
            <p>photo</p>
          </div>
          <div>
            <h1>Developer</h1>
          </div>
        </div>
        <div className="Container">
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
