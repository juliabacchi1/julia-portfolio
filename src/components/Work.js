import React from "react";
import "../styles/Work.css";
import DictionaryApp from "../assets/images/Dictionary-App.png";
import WeatherSearch from "../assets/images/Weather-Search-Engine.png";
import RecipesGenerator from "../assets/images/Recipes-generator.png";
import TravelShowcase from "../assets/images/Travel-showcase.png";
import PortfolioTemplate from "../assets/images/Portfolio-template.png";

function Work() {
  const projectImages = {
    "Dictionary App": DictionaryApp,
    "Weather Search": WeatherSearch,
    "Recipes Generator": RecipesGenerator,
    "Travel Showcase": TravelShowcase,
    "Portfolio Template": PortfolioTemplate,
  };

  const projects = [
    {
      image: "Dictionary App",
      title: "Dictionary App",
      description:
        "A powerful dictionary app that provides detailed definitions and translations.",
      liveLink: "#",
      githubLink: "#",
      category: "React.js",
    },
    {
      image: "Weather Search",
      title: "Weather Search",
      description:
        "A weather app that provides real-time weather data for any location.",
      liveLink: "#",
      githubLink: "#",
      category: "React.js",
    },
    {
      image: "Recipes Generator",
      title: "Recipes Generator",
      description:
        "An app that generates random recipes based on available ingredients.",
      liveLink: "#",
      githubLink: "#",
      category: "JavaScript",
    },
    {
      image: "Travel Showcase",
      title: "Travel Showcase",
      description:
        "A simple to-do list app to help users organize their tasks.",
      liveLink: "#",
      githubLink: "#",
      category: "React.js",
    },
    {
      image: "Portfolio Template",
      title: "Portfolio Template",
      description:
        "A music player app that allows users to listen to their favorite songs.",
      liveLink: "#",
      githubLink: "#",
      category: "React.js",
    },
  ];
  return (
    <section className="Work">
      <div className="Container-work">
        <h2>My Selected projects</h2>
        <div className="Container-projects">
          {projects.map((project, index) => (
            <div key={index} className="Container-project">
              <div className="Image-wrapper">
                <img
                  className="Image-block"
                  src={projectImages[project.image]} // Usando o mapeamento para acessar a imagem
                  alt={project.title}
                />
              </div>
              <div className="Content-wrapper">
                <h3>{project.title}</h3>
                <div className="Work-block">
                  <p>{project.description}</p>
                  <div className="Thumbnail-link">
                    <a href={project.liveLink}>
                      <div className="Live">— Discover</div>
                    </a>
                    <a href={project.githubLink}>
                      <div className="Live">— GitHub</div>
                    </a>
                  </div>
                </div>
                <div className="Work-type-wrapper">
                  <div className="Thumbnail-category">{project.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
