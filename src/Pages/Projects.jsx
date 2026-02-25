import { useState } from "react";
import "../css/Showcase.css";

import project1a from "../assets/LMS1.png";
import project1b from "../assets/LMS2.png";
import project1c from "../assets/LMS3.png";
import project1d from "../assets/LMS4.png";
import project1e from "../assets/LMS5.png";
import project2 from "../assets/weatherapp.jpg";
import project3a from "../assets/Cattle_AI1.png";
import project3b from "../assets/Cattle_AI2.png";
import project3c from "../assets/Cattle_AI3.png";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-wrapper">
        <ProjectRow
          title="Learning Management System"
          images={[project1a,project1b,project1c,project1d,project1e]}
          description="Built a full-stack Learning Management System using Python, Django, HTML, and CSS featuring role-based login for Admin, Instructor, and Student users. Implemented course creation, purchasing, reviews, comments, and rating functionality. The project showcases backend development with Django, secure authentication, and real-world LMS workflows."
          github="https://github.com/VaibhavJD0911/Leaning-Management-System"
          videoDemo="https://lms-demo.com"
        />

        <ProjectRow
          title="Weather Forecast App"
          images={[project2]}
          description="Built a React-based Weather Application featuring a city search bar, real-time current weather display, and a 7-day forecast. The app fetches live weather data using external APIs and presents it through clean, responsive UI components. This project highlights my skills in React, API integration, state management, and user-focused frontend design."
          github="https://github.com/VaibhavJD0911/Weather-ForeCast-App"
          videoDemo="https://youtu.be/at40OPT3hDc"
        />

        <ProjectRow
          title="Agrovision-AI (Cattle & Buffalo Breed Identifier)"
          images={[project3a, project3b, project3c]}
          description="Cattle Breed Identifier is a deep learning–based web application developed using Python and Django that identifies both cattle and buffalo breeds from images. The system uses a convolutional neural network built with TensorFlow, trained on labeled datasets sourced from Kaggle, with image preprocessing handled using NumPy and Pillow. The frontend is developed using HTML, CSS, and JavaScript, allowing users to upload images and receive breed predictions with confidence. The application also includes a rule-based farmer chatbot with preloaded responses to assist users with basic livestock-related queries, demonstrating integration of machine learning and conversational features in a single system."
          github="https://github.com/VaibhavJD0911/AgroVision-AI"
          videoDemo="https://youtu.be/OZuFYd-LAIM"
        />
      </div>
    </section>
  );
}

/* ===== Project Row ===== */
function ProjectRow({ title, images, description, github, videoDemo }) {
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
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>

            {videoDemo && (
              <a href={videoDemo} target="_blank" rel="noreferrer">
                Video Demo
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
