import React, { useRef } from "react";
import "../styles/Hero.css";
import { motion } from "motion/react";
import { useInView } from "motion/react";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.div
        style={{
          transform: isInView ? "translateX(0)" : "translateX(-300px)", // Mover 300px para a esquerda inicialmente
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

function Hero() {
  return (
    <Section>
      <div className="Container-hero">
        <div className="Container-intro">
          <div>
            <p>Download CV</p>
          </div>
          <div>
            <h3>
              A curious front-end developer always exploring new ways to craft
              meaningful experiences.
            </h3>
            <div className="Reed-more">
              <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={(event) => {}}
                onHoverEnd={(event) => {}}
              >
                <button className="btn btn-primary">Reed more</button>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
