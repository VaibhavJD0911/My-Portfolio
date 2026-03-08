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

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-wrapper">

        <ProjectRow
          title="Learning Management System"
          images={[project1a, project1b, project1c, project1d, project1e]}
          description="Built a full-stack Learning Management System using Python, Django, HTML, and CSS featuring role-based login for Admin, Instructor, and Student users. Implemented course creation, purchasing, reviews, comments, and rating functionality. The project showcases backend development with Django, secure authentication, and real-world LMS workflows."
          github="https://github.com/VaibhavJD0911/Leaning-Management-System"
          LiveLink="https://lms-demo.com"
        />

        <ProjectRow
          title="Weather Forecast App"
          images={[project2]}
          description="Built a React-based Weather Application featuring a city search bar, real-time current weather display, and a 7-day forecast. The app fetches live weather data using external APIs and presents it through clean, responsive UI components. This project highlights my skills in React, API integration, state management, and user-focused frontend design."
          github="https://github.com/VaibhavJD0911/Weather-ForeCast-App"
          LiveLink="https://weather-fore-cast-app-mz64.vercel.app/"
        />

        <ProjectRow
          title="DevZen Productivity Dashboard"
          images={[project3a, project3b, project3c, project3d, project3e]}
          description="DevZen is a developer productivity dashboard designed to help users stay focused and organized during study or work sessions. The application includes features such as a Pomodoro focus timer, distraction tracking using browser tab detection, task management, quick notes, GitHub profile statistics, and real-time weather information through API integration. It also provides session analytics and a study tools launcher, all presented in a modern SaaS-style dashboard interface built using HTML, CSS, and JavaScript."
          github="https://github.com/VaibhavJD0911/DevZen-Dashboard"
          LiveLink="https://devzen-chi.vercel.app/"
        />

      </div>
    </section>
  );
}

/* ===== Project Row ===== */

function ProjectRow({ title, images, description, github, LiveLink }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-row">

      {/* IMAGE CARD */}
      <div className="project-card">

        <img src={images[currentIndex]} alt={title} />

        {/* SLIDER ARROWS */}
        {images.length > 1 && (
          <>
            <button className="arrow left" onClick={prevImage}>
              ❮
            </button>

            <button className="arrow right" onClick={nextImage}>
              ❯
            </button>
          </>
        )}

        <div className="project-overlay">

          <h3>{title}</h3>

          <div className="project-buttons">

            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {LiveLink && (
              <a href={LiveLink} target="_blank" rel="noreferrer">
                Live Link
              </a>
            )}

          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default Projects;
