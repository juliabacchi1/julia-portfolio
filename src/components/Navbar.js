import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  // useState para armazenar o link ativo
  const [activeLink, setActiveLink] = useState("home");

  // Função para mudar o link ativo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
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
