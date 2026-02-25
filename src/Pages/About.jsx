import { useEffect, useState } from "react";
import "../css/About.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
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
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="about-hero">
      <div className="about-text">
        <h2 className="bold">Hello,</h2>
        <h2>
          I'm <span className="highlight">Vaibhav JD</span>
        </h2>

        {/* TYPEWRITER */}
        <h3 className="typing-text">
          {text}
          <span className="cursor">|</span>
        </h3>

        {/* DESCRIPTION */}
        <p>
          I am a <strong>Full Stack Developer</strong> with strong experience in{" "}
          <strong>Python</strong> and modern backend development using{" "}
          <strong>Django</strong>. I work extensively with{" "}
          <strong>NumPy</strong> and <strong>Pandas</strong> for data handling,
          analysis, and processing, and use <strong>Matplotlib</strong> for data
          visualization.
          <br />
          <br />
          On the frontend, I build clean and responsive user interfaces using{" "}
          <strong>HTML, CSS, JavaScript</strong>, and <strong>React</strong>.
          <br />
          <br />
          I am proficient in <strong>SQL</strong> for database design and
          querying, leverage <strong>Power BI</strong> for creating interactive
          dashboards and insights, and use <strong>Git/GitHub</strong> for
          version control and collaborative development.
          <br />
          <br />
          I enjoy writing clean, maintainable code and building complete,
          end-to-end web applications with a strong focus on performance and user
          experience.
        </p>

        {/* SOCIAL ICONS */}
        <div className="about-icons">
          <a
            href="https://github.com/VaibhavJD0911"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-doddamani-4b7834296/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/919538676876"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a href="mailto:vaibhav.jd9@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* DOWNLOAD CV */}
        <a href="/VjdResume.pdf" download className="btn about-btn">
          Download CV
        </a>
      </div>

      {/* PROFILE IMAGE */}
      <div className="about-image">
        <img src={profileImage} alt="Vaibhav JD" />
      </div>
    </section>
  );
}

export default About;