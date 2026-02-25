import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../css/Home.css";

function Home() {
  const [text] = useTypewriter({
    words: ["Welcome to my portfolio"],
    loop: false,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <div className="home-container">
      <h1 className="home-title">
        {text}
        <Cursor cursorStyle="|" />
      </h1>

      <Link to="/about" className="home-button">
        Let’s go
      </Link>
    </div>
  );
}

export default Home;
