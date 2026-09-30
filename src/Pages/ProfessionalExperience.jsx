import "../css/ProfessionalExperience.css";

const experiences = [
  {
    role: "Software Engineering Trainee",
    company: "People Process Teck",
    location: "Bengaluru, India",
    duration: "Aug 2026 – Present",
    type: "Internship",
    description:
      "Working as a Software Engineering Trainee, contributing to the development of web applications and gaining hands-on experience across frontend and backend technologies.",
    technologies: [
      "Node.js",
      "Angular",
      "React",
      "PostgreSQL",
      "JavaScript",
      "TypeScript",
      "Git",
    ],
  },
];

function ProfessionalExperience() {
  return (
    <section className="experience-section">

      {/* ===== HEADER ===== */}
      <div className="experience-header">
        <div className="experience-label">
          <span>Career Journey</span>
        </div>

        <h2 className="experience-title">
          Professional Experience
        </h2>
      </div>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <div className="experience-wrapper">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            {...experience}
          />
        ))}
      </div>

    </section>
  );
}

/* ===== EXPERIENCE CARD ===== */

function ExperienceCard({
  role,
  company,
  location,
  duration,
  type,
  description,
  technologies,
}) {
  return (
    <article className="experience-card">

      {/* Timeline indicator */}
      <div className="experience-marker">
        <div className="experience-dot" />
      </div>

      {/* Main content */}
      <div className="experience-content">

        {/* Top information */}
        <div className="experience-top">

          <div className="experience-heading">
            <span className="experience-type">
              {type}
            </span>

            <h3>{role}</h3>

            <div className="experience-company">
              <i className="fas fa-building" />
              <span>{company}</span>
            </div>
          </div>

          <div className="experience-meta">
            <span>
              <i className="far fa-calendar" />
              {duration}
            </span>

            <span>
              <i className="fas fa-location-dot" />
              {location}
            </span>
          </div>

        </div>

        {/* Description */}
        <div className="experience-description">
          <p>{description}</p>
        </div>

        {/* Technologies */}
        <div className="experience-tech">

          <span className="tech-label">
            Technologies
          </span>

          <div className="tech-list">
            {technologies.map((technology, index) => (
              <span
                className="tech-item"
                key={index}
              >
                {technology}
              </span>
            ))}
          </div>

        </div>

      </div>

    </article>
  );
}

export default ProfessionalExperience;