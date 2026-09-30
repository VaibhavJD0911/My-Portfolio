import { useEffect, useState } from "react";

import "../css/About.css";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import profileImage from "../assets/VaibhavImage.jpeg";

function About() {
  const roles = [
    "Full Stack Developer",
    "Python Developer",
    "Backend Engineer",
    "React Developer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="about-hero">

      {/* =====================================================
          TEXT SIDE
          ===================================================== */}

      <div className="about-text">

        <div className="about-overline">
          <span>About Me</span>
        </div>

        <h2 className="bold">
          Hello,
        </h2>

        <h2>
          I'm <span className="highlight">Vaibhav JD</span>
        </h2>

        <h3 className="typing-text">
          {text}
          <span className="cursor">_</span>
        </h3>

        <div className="about-divider" />

        {/* =====================================================
            INTRODUCTION
            ===================================================== */}

        <p>
          I am a <strong>Full Stack Developer</strong> with a strong
          foundation in <strong>Python</strong>, <strong>Django</strong>,
          and modern JavaScript technologies. I enjoy building complete
          web applications, from designing responsive user interfaces
          to developing scalable backend systems and working with
          databases.
        </p>

        {/* =====================================================
            WEB DEVELOPMENT SKILLS
            ===================================================== */}

        <p>
          My technical experience includes <strong>Python</strong>,
          <strong> Django</strong>, <strong>REST APIs</strong>,
          <strong> HTML</strong>, <strong>CSS</strong>,
          <strong> JavaScript</strong>, <strong>React.js</strong>,
          <strong> Angular</strong>, and <strong>Node.js</strong>.
          I also work with databases such as <strong>MySQL</strong> and
          <strong> PostgreSQL</strong>, giving me experience across
          both frontend and backend development.
        </p>

        {/* =====================================================
            DATA / MACHINE LEARNING
            ===================================================== */}

        <p>
          Alongside web development, I have experience working with
          <strong> NumPy</strong>, <strong>Pandas</strong>,
          <strong> Matplotlib</strong>, <strong>Power BI</strong>,
          and <strong>Scikit-learn</strong> for data processing,
          visualization, analysis, and machine learning projects.
        </p>

        {/* =====================================================
            CURRENT PROFESSIONAL EXPERIENCE
            ===================================================== */}

        <p>
          In my current role as a{" "}
          <strong>Software Engineering Trainee</strong>, I am working
          on a professional project involving <strong>Node.js</strong>
          and <strong>Angular</strong>. This experience is helping me
          strengthen my understanding of enterprise-level application
          development, frontend architecture, backend services, APIs,
          databases, and collaborative software development.
        </p>

        {/* =====================================================
            CURRENT LEARNING / GROWTH
            ===================================================== */}

        <p>
          I am continuously expanding my skills by working with modern
          technologies, building personal projects, and exploring better
          ways to design, develop, and deploy real-world applications.
        </p>

        {/* =====================================================
            SOCIAL ICONS
            ===================================================== */}

        <div className="about-icons">

          <a
            href="https://github.com/VaibhavJD0911"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vaibhav-doddamani-4b7834296/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/918277779055"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:vaibhav.jd9@gmail.com"
            title="Email"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* =====================================================
            CV BUTTON
            ===================================================== */}

        <a
          href="/VjdResume.pdf"
          download
          className="about-btn"
        >
          Download CV
        </a>

      </div>

      {/* =====================================================
          IMAGE SIDE
          ===================================================== */}

      <div className="about-image">

        <img
          src={profileImage}
          alt="Vaibhav JD"
        />

      </div>

    </section>
  );
}

export default About;
