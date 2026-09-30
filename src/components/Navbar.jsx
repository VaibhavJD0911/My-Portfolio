import { useState, useEffect } from "react";

import "./Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ===== SCROLL EFFECT ===== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ===== CLOSE MOBILE MENU ===== */

  const closeMenu = () => {
    setIsOpen(false);
  };

  /* ===== PREVENT BODY SCROLL WHEN MENU IS OPEN ===== */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        {/* ===== LOGO ===== */}

        <NavLink to="/" className="logo" onClick={closeMenu}>
          Portfolio
        </NavLink>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>

          <li>
            <NavLink to="/freelance">Freelance</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>

          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>

          <li>
            <NavLink to="/certifications">Certifications</NavLink>
          </li>
        </ul>

        {/* =====================================================
            HAMBURGER
        ===================================================== */}

        <button
          className={`hamburger ${isOpen ? "hamburger-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
        <ul className="mobile-links">
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/experience" onClick={closeMenu}>
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" onClick={closeMenu}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/certifications" onClick={closeMenu}>
              Certifications
            </NavLink>
          </li>

          <li>
            <NavLink to="/freelance" onClick={closeMenu}>
              Freelance
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
