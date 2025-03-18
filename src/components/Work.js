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
      title: t("work.projects.rotaDaBaleia.title"),
      description: t("work.projects.rotaDaBaleia.description"),
      liveLink: "https://rotabaleiafranca.com.br/",
      githubLink: "",
      type: "https://cero-phi.vercel.app/",
      category: "WordPress",
    },
    {
      image: "Dictionary App",
      title: t("work.projects.dictionaryApp.title"),
      description: t("work.projects.dictionaryApp.description"),
      liveLink: "https://dictionary-app-search.netlify.app/",
      githubLink: "https://github.com/juliabacchi1/dictionary-app",
      category: "React.js",
    },
    {
      image: "Weather Search",
      title: t("work.projects.weatherSearch.title"),
      description: t("work.projects.weatherSearch.description"),
      liveLink: "https://temp-search-engine.netlify.app/",
      githubLink: "https://github.com/juliabacchi1/react-search-engine",
      category: "React.js",
    },
    {
      image: "Recipes Generator",
      title: t("work.projects.recipesGenerator.title"),
      description: t("work.projects.recipesGenerator.description"),
      liveLink: "https://recipes-generator-ai.netlify.app/",
      githubLink: "https://github.com/juliabacchi1/recipes-generator",
      category: "JavaScript",
    },
    {
      image: "Travel Showcase",
      title: t("work.projects.travelShowcase.title"),
      description: t("work.projects.travelShowcase.description"),
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
