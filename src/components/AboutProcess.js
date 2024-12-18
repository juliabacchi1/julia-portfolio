import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import Process1 from "../assets/images/Process1.png";
import Process2 from "../assets/images/Process2.png";
import Process3 from "../assets/images/Process3.png";
import Process4 from "../assets/images/Process4.png";

const cards = [
  {
    title: "My Process",
    content:
      "1. Design & Prototyping 2. Discovery & Planning 3. Launch & Deployment 4. Ongoing Support",
    image: Process1,
  },
  {
    title: "Multiplatform Approach",
    content:
      "I design solutions that work seamlessly across web, mobile, and emerging digital platforms, with a focus on user-centered experiences.",
    image: Process2,
  },
  {
    title: "Driven by Results",
    content:
      "I prioritize delivering completed projects that solve real problems and drive meaningful impact.",
    image: Process3,
  },
  {
    title: "Creative & Custom Designs",
    content:
      "I craft personalized designs tailored to your brand's identity, ensuring every detail speaks to your vision and values.",
    image: Process4,
  },
];

const AboutProcess = () => {
  const containerRef = useRef(null);

  // Calcula o progresso do scroll para os cards
  const { scrollYProgress } = useScroll({
    target: containerRef, // Ref dos cards
    offset: ["start end", "end start"], // Progresso começa no topo e termina no final dos cards
  });

  return (
    <div className="About-process">
      <h4>Why work with me</h4>

      {/* Barra de progresso */}
      <motion.div
        className="Progress-bar"
        style={{
          scaleX: scrollYProgress, // Relacionado ao progresso dos cards
        }}
      />

      {/* Container dos cards */}
      <div className="Card-container" ref={containerRef}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="Card"
            initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado
            whileInView={{ opacity: 1, y: 0 }} // Animação ao entrar na viewport
            viewport={{ once: true, amount: 0.5 }} // Só anima quando 50% visível
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h5>{card.title}</h5>
            <div className="Wrap-content">
              <p>{card.content}</p>
              <img src={card.image} alt={card.title} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutProcess;
