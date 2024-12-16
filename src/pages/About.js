import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/About.css";

// Lista de palavras para a animação
const rotatingWords = [
  "Websites",
  "Experiences",
  "Interaction",
  "Ideas",
  "Visuals",
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca de palavras a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000); // 2 segundos
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="About">
      <div className="Container-about">
        <div className="About-hero">
          <h3>Hello, I'm Julia Bacchi — I love to create</h3>
          <h1>Beautiful</h1>

          <div
            className="RotatingText-container"
            style={{ overflow: "hidden", height: "40px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={rotatingWords[currentIndex]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: "absolute" }}
              >
                {rotatingWords[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Conteúdo adicional */}
        <div className="About-main">
          <div className="About-me">
            <h4>About me</h4>
            <p>Content</p>
          </div>
          <div className="About-me">
            <h4>Certifications</h4>
            <p>Content</p>
          </div>
        </div>
        <div className="About-main">
          <h5>Why work with me</h5>
          <h4>My Process</h4>
        </div>
      </div>
    </section>
  );
}

export default About;
