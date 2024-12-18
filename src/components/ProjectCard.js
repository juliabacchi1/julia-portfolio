import React from "react";
import { motion } from "motion/react";

function ProjectCard({ project, projectImage }) {
  return (
    <div className="Container-project">
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
            src={projectImage}
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
  );
}

export default ProjectCard;
