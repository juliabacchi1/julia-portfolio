import React from "react";
import { motion } from "motion/react";
import "../styles/Work.css";
import DictionaryApp from "../assets/images/Dictionary-App.png";
import WeatherSearch from "../assets/images/Weather-Search-Engine.png";
import RecipesGenerator from "../assets/images/Recipes-generator.png";
import TravelShowcase from "../assets/images/Travel-showcase.png";

function Work() {
  const projectImages = {
    "Dictionary App": DictionaryApp,
    "Weather Search": WeatherSearch,
    "Recipes Generator": RecipesGenerator,
    "Travel Showcase": TravelShowcase,
  };

  const projects = [
    {
      image: "Dictionary App",
      title: "Dictionary Search",
      description:
        "A powerful dictionary search that provides detailed definitions and translations.",
      liveLink: "https://dictionary-app-search.netlify.app/",
      githubLink: "https://github.com/juliabacchi1/dictionary-app",
      category: "React.js",
    },
    {
      image: "Weather Search",
      title: "Weather Forecast",
      description:
        "A weather forecast app that provides real-time weather data for any location.",
      liveLink: "https://temp-search-engine.netlify.app/",
      githubLink: "https://github.com/juliabacchi1/react-search-engine",
      category: "React.js",
    },
    {
      image: "Recipes Generator",
      title: "Recipes Generator",
      description:
        "An app that generates random recipes based on available ingredients.",
      liveLink: "https://recipes-generator-ai.netlify.app/",
      githubLink: "https://github.com/juliabacchi1/recipes-generator",
      category: "JavaScript",
    },
    {
      image: "Travel Showcase",
      title: "Travel Showcase",
      description:
        "An interactive and resposive website that highlights the amazing aspects of a destination.",
      liveLink: "https://fullyresponsive-destination.netlify.app/",
      githubLink: "https://github.com/juliabacchi1/travel-destination",
      category: "JavaScript",
    },
  ];
  return (
    <section className="Work">
      <div className="Container-work">
        <h2>Selected projects</h2>
        <div className="Container-projects">
          {projects.map((project, index) => (
            <div key={index} className="Container-project">
              <div className="Image-wrapper">
                <motion.a
                  href={project.liveLink}
                  className="Image-wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.img
                    className="Image-block"
                    src={projectImages[project.image]}
                    alt={project.title}
                  />
                </motion.a>
              </div>
              <div className="Content-wrapper">
                <h3>{project.title}</h3>
                <div className="Work-block">
                  <p>{project.description}</p>
                  <div className="Thumbnail-link">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="Live">— Discover</div>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
