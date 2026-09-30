import "../css/Certifications.css";
import cert1 from "../assets/Cert1.png";
import cert2 from "../assets/Cert2.png";

const certifications = [
  {
    title: "Java FullStack Web Development",
    image: cert1,
    description:
      "Completed a comprehensive Full Stack Development programme at Tap Academy, gaining hands-on experience in Core Java, Spring Boot, and SQL. Built real-world applications focusing on backend architecture and RESTful services.",
    link: "https://drive.google.com/file/d/1CGFCZTbWVex0pqHiZSu5bNAGRZjUTxGI/view",
  },
  {
    title: "Web Developer",
    image: cert2,
    description:
      "Completed a Web Development Internship at Teachnook, building responsive web interfaces. Contributed to real-world projects by improving UI components and implementing design enhancements.",
    link: "https://drive.google.com/file/d/1P9irOQJYp540FYU8llkef-wne9lNGL2P/view",
  },
];

function Certifications() {
  return (
    <section className="cert-section">

      {/* ===== HEADER ===== */}
      <div className="cert-header">
        <div className="cert-label">
          <span>Credentials</span>
        </div>
        <h2 className="cert-title">My Certifications</h2>
      </div>

      <div className="cert-wrapper">
        {certifications.map((cert, index) => (
          <CertRow key={index} {...cert} />
        ))}
      </div>

    </section>
  );
}

/* ===== CERT ROW ===== */
function CertRow({ title, image, description, link }) {
  return (
    <div className="cert-row">

      {/* IMAGE CARD */}
      <div className="cert-card">
        <img src={image} alt={title} loading="lazy" />
        <div className="cert-overlay">
          <div className="cert-buttons">
            <a href={link} target="_blank" rel="noreferrer" className="cert-btn-view">
              View Certificate
            </a>
          </div>
        </div>
      </div>

      {/* INFO PANEL */}
      <div className="cert-info">
        <div className="cert-icon">
          <i className="fas fa-award" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="cert-buttons">
          <a href={link} target="_blank" rel="noreferrer" className="cert-btn-view">
            View Credentials
          </a>
        </div>
      </div>

    </div>
  );
}

export default Certifications;
