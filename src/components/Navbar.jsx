import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 820) setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${isOpen ? "navbar-menu-open" : ""}`}
    >
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
          type="button"
          className={`hamburger ${isOpen ? "hamburger-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

    </nav>
    <nav
      id="mobile-navigation"
      className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}
      aria-hidden={!isOpen}
      aria-label="Mobile navigation"
      inert={!isOpen}
    >
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
    </nav>
    </>
  );
}

export default Navbar;
