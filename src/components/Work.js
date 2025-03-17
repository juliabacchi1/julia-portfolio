import React from "react";
import "../styles/Work.css";
import ProjectCard from "./ProjectCard";
import DictionaryApp from "../assets/images/Dictionary-App.png";
import WeatherSearch from "../assets/images/Weather-Search-Engine.png";
import RecipesGenerator from "../assets/images/Recipes-generator.png";
import TravelShowcase from "../assets/images/Travel-showcase.png";
import RotaDaBaleia from "../assets/images/Rota-da-Baleia.png";
import { useTranslation } from "react-i18next";

function Work() {

  const { t } = useTranslation();

  const projectImages = {
    "Dictionary App": DictionaryApp,
    "Weather Search": WeatherSearch,
    "Recipes Generator": RecipesGenerator,
    "Travel Showcase": TravelShowcase,
    "Rota da Baleia": RotaDaBaleia,
  };

  const projects = [
    {
      image: "Rota da Baleia",
      title: "Rota da Baleia Franca",
      description:
        "Website made for a client, highlighting tourist attractions, sustainability and ecotourism.",
      liveLink: "https://rotabaleiafranca.com.br/",
      githubLink: "",
      type: "https://cero-phi.vercel.app/",
      category: "WordPress",
    },
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
    <section id="work" className="Work">
      <div className="Container-work">
        <h2>{t("work.title")}</h2>
        <div className="Container-projects">
          {projects.map((project, index) => (
            <div key={index} className="Container-project">
              <ProjectCard
                project={project}
                projectImage={projectImages[project.image]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
