import "../css/Skills.css";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaGithub,
  FaReact,
  FaChartLine,  // Matplotlib
  FaChartBar,   // Power BI
} from "react-icons/fa";
import {
  SiSpringboot,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiMysql,
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>

      {/* ===== SKILL CARDS ===== */}
      <div className="skills-cards">
        {/* Card 1 */}
        <div className="skill-card">
          <h2>Languages & Tools</h2>
          <div className="skill-icons">
            <div className="skill-item"><FaJava /><span>Java</span></div>
            <div className="skill-item"><FaPython /><span>Python</span></div>
            <div className="skill-item"><SiMysql /><span>MySQL</span></div>
            <div className="skill-item"><FaHtml5 /><span>HTML</span></div>
            <div className="skill-item"><FaCss3Alt /><span>CSS</span></div>
            <div className="skill-item"><FaJs /><span>JavaScript</span></div>
            <div className="skill-item"><FaDocker /><span>Docker</span></div>
            <div className="skill-item"><FaGithub /><span>GitHub</span></div>
            <div className="skill-item"><FaChartBar /><span>Power BI</span></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="skill-card">
          <h2>Frameworks & Libraries</h2>
          <div className="skill-icons">
            <div className="skill-item"><FaReact /><span>React</span></div>
            <div className="skill-item"><SiSpringboot /><span>Spring Boot</span></div>
            <div className="skill-item"><SiDjango /><span>Django</span></div>
            <div className="skill-item"><SiNumpy /><span>NumPy</span></div>
            <div className="skill-item"><SiPandas /><span>Pandas</span></div>
            <div className="skill-item"><FaChartLine /><span>Matplotlib</span></div>
          </div>
        </div>
      </div>

      {/* ===== PROGRESS BARS ===== */}
      <div className="skills-progress">
        <SkillBar name="Java" level="80%" />
        <SkillBar name="Python" level="75%" />
        <SkillBar name="SQL" level="70%" />
        <SkillBar name="HTML" level="85%" />
        <SkillBar name="CSS" level="80%" />
        <SkillBar name="JavaScript" level="75%" />
        <SkillBar name="React" level="70%" />
        <SkillBar name="Spring Boot" level="65%" />
        <SkillBar name="Django" level="65%" />
        <SkillBar name="Docker" level="60%" />
        <SkillBar name="GitHub" level="70%" />
        <SkillBar name="NumPy" level="60%" />
        <SkillBar name="Pandas" level="60%" />
        <SkillBar name="Matplotlib" level="55%" />
        <SkillBar name="Power BI" level="55%" />
      </div>
    </div>
  );
}

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span>{name}</span>
        <span className="skill-percent">{level}</span>
      </div>
      <div className="progress">
        <div className="progress-fill" style={{ width: level }} />
      </div>
    </div>
  );
}

export default Skills;
