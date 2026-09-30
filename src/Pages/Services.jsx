import "../css/Service.css";

const services = [
  {
    icon: "⚡",
    title: "Full Stack Web Development",
    desc: "Building complete web applications using React, Django, and REST APIs with clean UI and scalable backend architecture.",
  },
  {
    icon: "🔧",
    title: "Backend Development",
    desc: "Designing robust backend systems, APIs, authentication, and database architecture using Django and SQL.",
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    desc: "Creating responsive, modern, and user-friendly interfaces using React, JavaScript, HTML, and CSS.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Integrating AI-powered features and building automation tools to streamline workflows and improve efficiency.",
  },
];

function Services() {
  return (
    <section className="services">

      {/* ===== HEADER ===== */}
      <div className="services-header">
        <div className="services-label">
          <span>What I Do</span>
        </div>
        <h2 className="services-title">Services I Offer</h2>
      </div>

      {/* ===== GRID ===== */}
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>A
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="services-cta">
        <h3>Interested in working together?</h3>
        <p>Let's build something great — reach out and let's talk.</p>
        <a href="https://wa.me/91953867687" className="btn">
          Contact Me
        </a>
      </div>

    </section>
  );
}

export default Services;