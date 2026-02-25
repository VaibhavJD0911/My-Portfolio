import "../css/Certifications.css";

import cert1 from "../assets/Cert1.png";
import cert2 from "../assets/Cert2.png";

function Certifications() {
  return (
    <section className="cert-section">
      <h2 className="cert-title">My Certifications</h2>

      <div className="cert-wrapper">
        <CertRow
          title="Java FullStack Web Development"
          image={cert1}
          description={`Completed a comprehensive Full Stack Development program at Tap Academy, gaining hands-on experience in Core Java, JDBC, J2EE, Spring Boot, SQL, MySQL, HTML, CSS, and JavaScript.
Built real-world applications focusing on backend architecture, database integration, RESTful services, and responsive UI development while following industry best practices.
`}
          link="https://drive.google.com/file/d/1CGFCZTbWVex0pqHiZSu5bNAGRZjUTxGI/view"
        />

        <CertRow
          title="Web Developer"
          image={cert2}
          description={`
Completed a Web Development Internship at Teachnook Institution, gaining hands-on experience in HTML, CSS, and JavaScript while building responsive and interactive web interfaces.
Contributed to real-world projects by supporting the frontend team, improving UI components, fixing layout issues, and implementing design enhancements following industry best practices.
`}
          link="https://drive.google.com/file/d/1P9irOQJYp540FYU8llkef-wne9lNGL2P/view"
        />
      </div>
    </section>
  );
}

/* ===== Certification Row ===== */
function CertRow({ title, image, description, link }) {
  return (
    <div className="cert-row">
      {/* IMAGE CARD */}
      <div className="cert-card">
        <img src={image} alt={title} />

        <div className="cert-overlay">
          <h3>{title}</h3>

          <div className="cert-buttons">
            <a href={link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="cert-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Certifications;
