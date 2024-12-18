import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home"); // Definir o estado de activeLink
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Usando useLocation para pegar o caminho atual
  const navigate = useNavigate();

  // Função para rolar até a âncora
  const scrollToAnchor = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Função para adicionar a classe sticky ao rolar a página
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Lógica para adicionar o "sticky" ao navbar
    window.addEventListener("scroll", handleScroll);

    // Limpeza do event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Atualiza a navegação com base na localização (usando pathname)
    const sections = document.querySelectorAll("section");
    const options = { root: null, threshold: 0.2 }; // 20% da seção visível

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Atualiza o link ativo com base na seção visível
          if (location.pathname === "/") {
            // Só atualiza se estiver na página inicial
            setActiveLink(id);
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Remove observador
    };
  }, [location]);

  // Função para mudar o link ativo e lidar com navegação
  const handleLinkClick = (link) => {
    setActiveLink(link);

    if (link === "about") {
      if (location.pathname !== "/about") {
        // Navega para a rota About
        navigate("/about");
      } else {
        // Já está na página About, rola para o início
        scrollToAnchor("about");
      }
    } else if (link.startsWith("#")) {
      // Lida com âncoras na página inicial
      const anchor = link.slice(1);

      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => scrollToAnchor(anchor), 100);
      } else {
        scrollToAnchor(anchor);
      }
    } else {
      // Navega para outras rotas
      navigate(link);
    }
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
      <div className="Links">
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
    </nav>
  );
}

export default Navbar;
