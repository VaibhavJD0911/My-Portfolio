import { useState } from "react";
import "../css/Showcase.css";

import project1a from "../assets/LMS1.png";
import project1b from "../assets/LMS2.png";
import project1c from "../assets/LMS3.png";
import project1d from "../assets/LMS4.png";
import project1e from "../assets/LMS5.png";

import project2 from "../assets/Weather1.png";

import project3a from "../assets/Devzen1.png";
import project3b from "../assets/Devzen2.png";
import project3c from "../assets/Devzen3.png";
import project3d from "../assets/Devzen4.png";
import project3e from "../assets/Devzen5.png";


const projects = [
  {
    index: "01",
    title: "Learning Management System",
    category: "FULL STACK DEVELOPMENT",
    images: [
      project1a,
      project1b,
      project1c,
      project1d,
      project1e,
    ],
    description:
      "A full-stack Learning Management System built with Python and Django. The platform supports role-based access for Admin, Instructor, and Student users, along with course creation, purchasing, reviews, comments, and ratings.",
    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "SQL",
    ],
    github:
      "https://github.com/VaibhavJD0911/Leaning-Management-System",
    live:
      "https://lms-demo.com",
  },

  {
    index: "02",
    title: "Weather Forecast App",
    category: "FRONTEND DEVELOPMENT",
    images: [project2],
    description:
      "A React-based weather application that provides current weather information and a 7-day forecast. It integrates external APIs to retrieve live weather data and presents it through a clean, responsive interface.",
    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "CSS",
      "Vercel",
    ],
    github:
      "https://github.com/VaibhavJD0911/Weather-ForeCast-App",
    live:
      "https://weather-fore-cast-app-mz64.vercel.app/",
  },

  {
    index: "03",
    title: "DevZen Productivity Dashboard",
    category: "PRODUCTIVITY PLATFORM",
    images: [
      project3a,
      project3b,
      project3c,
      project3d,
      project3e,
    ],
    description:
      "A developer productivity dashboard designed to help users stay focused and organized during work or study sessions. It combines task management, Pomodoro sessions, distraction tracking, quick notes, GitHub statistics, and weather information in one interface.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub API",
      "Weather API",
    ],
    github:
      "https://github.com/VaibhavJD0911/Devzen-Dashboard",
    live:
      "https://devzen-chi.vercel.app/",
  },
];


function Projects() {
  return (
    <section className="projects-section">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="projects-header">

        <div className="projects-label">
          <span>Selected Work</span>
        </div>

        <h2 className="projects-title">
          Featured Projects
        </h2>

        <p className="projects-subtitle">
          A selection of applications and systems I have built
          across frontend, backend, and full-stack development.
        </p>

      </div>


      {/* =====================================================
          PROJECT LIST
      ===================================================== */}

      <div className="projects-wrapper">

        {projects.map((project) => (
          <ProjectRow
            key={project.index}
            {...project}
          />
        ))}

      </div>

    </section>
  );
}


/* ============================================================
   PROJECT ROW
   ============================================================ */

function ProjectRow({
  index,
  title,
  category,
  images,
  description,
  technologies,
  github,
  live,
}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(
      (previous) =>
        (previous + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex(
      (previous) =>
        (previous - 1 + images.length) %
        images.length
    );
  };


  return (
    <article className="project-row">

      {/* =====================================================
          IMAGE PANEL
      ===================================================== */}

      <div className="project-visual">

        <div className="project-number">
          {index}
        </div>

        <div className="project-card">

          <img
            src={images[currentIndex]}
            alt={`${title} screenshot`}
            loading="lazy"
          />

          <div className="project-image-overlay" />

          {/* Image counter */}

          {images.length > 1 && (
            <div className="project-counter">
              {String(currentIndex + 1).padStart(2, "0")}
              <span>/</span>
              {String(images.length).padStart(2, "0")}
            </div>
          )}


          {/* Navigation */}

          {images.length > 1 && (
            <div className="project-arrows">

              <button
                className="project-arrow"
                onClick={prevImage}
                aria-label="Previous project image"
              >
                <i className="fas fa-chevron-left" />
              </button>

              <button
                className="project-arrow"
                onClick={nextImage}
                aria-label="Next project image"
              >
                <i className="fas fa-chevron-right" />
              </button>

            </div>
          )}


          {/* Bottom image information */}

          <div className="project-image-footer">

            <span>
              PROJECT {index}
            </span>

            <span>
              {category}
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <div className="project-info">

        <div className="project-index">
          / {index}
        </div>

        <span className="project-category">
          {category}
        </span>

        <h3>
          {title}
        </h3>

        <div className="project-line" />

        <p className="project-description">
          {description}
        </p>


        {/* Technologies */}

        <div className="project-technologies">

          <span className="technology-heading">
            TECH STACK
          </span>

          <div className="technology-list">

            {technologies.map(
              (technology, techIndex) => (
                <span
                  className="technology"
                  key={techIndex}
                >
                  {technology}
                </span>
              )
            )}

          </div>

        </div>


        {/* Buttons */}

        <div className="project-actions">

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-button project-button-primary"
            >
              <i className="fab fa-github" />
              View Source
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="project-button"
            >
              <i className="fas fa-arrow-up-right-from-square" />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </article>
  );
}


export default Projects;