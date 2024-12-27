import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home"); // Estado do link ativo
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado do menu hambúrguer
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAnchor = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { root: null, threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (location.pathname === "/") {
            setActiveLink(id);
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location]);

  const handleLinkClick = (link) => {
    setActiveLink(link);

    if (link === "about") {
      if (location.pathname !== "/about") {
        navigate("/about");
      } else {
        scrollToAnchor("about");
      }
    } else if (link.startsWith("#")) {
      const anchor = link.slice(1);

      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => scrollToAnchor(anchor), 100);
      } else {
        scrollToAnchor(anchor);
      }
    } else {
      navigate(link);
    }
  };

  // Alterna a visibilidade do menu hambúrguer
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <ul>
        <li className="Home">
          <Link
            to="/"
            onClick={() => handleLinkClick("#home")}
            className={location.pathname === "/" ? "home-active" : ""}
          >
            Julia Bacchi
          </Link>
        </li>
      </ul>

      {/* Alterar a classe com base no estado do menu hambúrguer */}
      <div className={`Links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#work");
              }}
              className={activeLink === "work" ? "active" : ""}
            >
              Work
            </a>
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
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </a>
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

      <button
        className="menu-toggle"
        onClick={toggleMenu} // Alterna o estado ao clicar
      >
        &#9776; {/* Ícone de hambúrguer */}
      </button>
    </nav>
  );
}

export default Navbar;
