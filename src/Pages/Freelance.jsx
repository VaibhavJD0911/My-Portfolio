import { useState } from "react";
import "../css/Freelance.css";
import Cattle1 from "../assets/CattleAI1.png";
import Cattle2 from "../assets/CattleAI2.png";
import Cattle3 from "../assets/CattleAI3.png";
import LseFinance1 from "../assets/LseFinance1.png";


const projects = [
  {
    id: 1,
    title: "Cattle & Buffalo Breed Predictor",
    client: "Freelance project — Master's Research",
    description:
      "Commissioned by a master's student, this AI-powered platform uses computer vision to identify cattle and buffalo breeds from image input in real time. The system also integrates a pre-configured chatbot that answers common queries instantly using a curated set of stored responses, giving researchers and farmers a fast, reliable reference tool without waiting on manual support.",
    highlights: [
      "Computer vision breed detection model",
      "Pre-stored intelligent chatbot assistant",
      "Built for academic research use",
    ],
    images: [Cattle1, Cattle2, Cattle3],
    liveLink: "https://yourcattleaiproject.com",
  },
  {
    id: 2,
    title: "LSE Finance",
    client: "Freelance project — Financial Services Website",
    description:
      "A professional website built for LSE Finance, designed to present the firm's advisory services with clarity and credibility. The site helps clients understand and access the firm's core offerings, from funding evaluation to tax strategy, through a clean, business-focused interface.",
    highlights: [
      "Evaluation & Funding",
      "Commercial Tax Planning",
      "Tax Management Services",
      "Tax Planning Services",
    ],
    images: [LseFinance1],
    liveLink: "https://www.lsefin.com/",
  },
];

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;

  const showPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const showNext = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className="project-card">
      {/* IMAGE CAROUSEL */}
      <div className="image-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} ${i + 1}`}
              className="project-image"
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-btn carousel-btn-left"
          onClick={showPrev}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-btn carousel-btn-right"
          onClick={showNext}
          aria-label="Next image"
        >
          ›
        </button>

        <div className="carousel-dots">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        {/* LIVE LINK OVERLAY BUTTON */}
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="live-link-btn"
        >
          Live Link ↗
        </a>
      </div>

      {/* CONTENT */}
      <div className="project-content">
        <span className="project-client">{project.client}</span>
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>

        {project.highlights?.length > 0 && (
          <ul className="highlights">
            {project.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Freelance() {
  return (
    <section className="projects">
      <div className="projects-header">
        <h2>My Work</h2>
        <p>Real projects I've built</p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Freelance;
