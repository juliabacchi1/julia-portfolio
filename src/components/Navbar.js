import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  // useState para armazenar o link ativo
  const [activeLink, setActiveLink] = useState("home");
  const [isSticky, setIsSticky] = useState(false);

  // Função para mudar o link ativo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Função para adicionar a classe sticky ao rolar a página
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true); // Quando rolar mais de 100px, adiciona a classe sticky
    } else {
      setIsSticky(false); // Remove a classe sticky se rolar para o topo
    }
  };

  // Adiciona o listener de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <ul>
        <li className="Home">
          <Link
            to="#home"
            onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
      </ul>
      <div className="Links">
        <ul>
          <li>
            <Link
              to="#work"
              onClick={() => handleLinkClick("work")}
              className={activeLink === "work" ? "active" : ""}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("about")}
              className={activeLink === "about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              onClick={() => handleLinkClick("contact")}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => handleLinkClick("blog")}
              className={activeLink === "blog" ? "active" : ""}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
