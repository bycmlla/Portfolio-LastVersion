import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import LogoDark from "../../assets/icons/CamilaCarvalho.png";
import LogoLight from "../../assets/icons/Camila Carvalho-white.png";
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import ScrollReveal from "scrollreveal";

const NavBar = ({ toggleDarkMode, isDarkMode }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(true);
  }, [location.pathname]);

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };
  
  ScrollReveal().reveal(".reveal-top", {
    origin: "top",
    distance: "20px",
    duration: 2000,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  return (
    <nav
      className={`my-navbar ${isActive ? "active" : ""} ${
        isDarkMode ? "dark-mode" : ""
      } reveal-top`}
    >
      <div className="navbar-brand">
        <a href="/" className="logo">
          <img
            src={isDarkMode ? LogoLight : LogoDark}
            alt="Logo"
            aria-hidden="true"
          />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <MdDarkMode
            className="dark-mode-icon"
            onClick={handleToggleDarkMode}
            size={24}
          />
        </li>
        <li>
          <Link to="/projects">My Projects</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
