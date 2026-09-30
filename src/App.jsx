import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Certifications from "./Pages/Certifications";
import ProfessionalExperience from "./Pages/ProfessionalExperience";
import Freelance from "./Pages/Freelance";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/skills" element={<Skills />} />

          <Route
            path="/experience"
            element={<ProfessionalExperience />}
          />

          <Route
            path="/certifications"
            element={<Certifications />}
          />

          <Route
            path="/freelance"
            element={<Freelance />}
          />

          <Route
            path="/services"
            element={<Services />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;