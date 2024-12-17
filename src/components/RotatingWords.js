import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/RotatingWords.css";

const RotatingWords = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca de palavras a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup
  }, [words]);

  return (
    <div
      className="RotatingText-container"
      style={{ overflow: "hidden", height: "40px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={words[currentIndex]}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: "absolute" }}
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingWords;
