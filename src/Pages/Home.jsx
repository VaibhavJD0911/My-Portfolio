import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../css/Home.css";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Welcome to my Portfolio",
      "I Build Robust Backends",
      "I Craft Scalable Web Apps",
      "I Am a Software Developer",
    ],
    loop: 0,
    typeSpeed: 75,
    deleteSpeed: 45,
    delaySpeed: 2200,
  });

  return (
    <div className="home-container">
      <div className="home-content">

        <div className="home-overline">
          <span>Vaibhav JD</span>
        </div>

        <h1 className="home-title">
          {text}
          <Cursor cursorColor="var(--accent-cyan)" cursorStyle="_" />
        </h1>

        <Link to="/about" className="home-button">
          <span>Explore Work</span>
        </Link>

      </div>

      <div className="home-scroll">
        <div className="home-scroll-line" />
        <span className="home-scroll-label">Scroll</span>
      </div>
    </div>
  );
}

export default Home;
