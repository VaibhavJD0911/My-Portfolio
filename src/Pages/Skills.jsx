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
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiNodedotjs,
  SiAngular,
  SiTypescript,
} from "react-icons/si";


/* ============================================================
   LANGUAGES & TOOLS
   ============================================================ */

const languagesTools = [
  {
    icon: <FaJava />,
    label: "Java",
  },

  {
    icon: <FaPython />,
    label: "Python",
  },

  {
    icon: <SiMysql />,
    label: "MySQL",
  },

  {
    icon: <FaHtml5 />,
    label: "HTML",
  },

  {
    icon: <FaCss3Alt />,
    label: "CSS",
  },

  {
    icon: <FaJs />,
    label: "JavaScript",
  },

  {
    icon: <SiTypescript />,
    label: "TypeScript",
  },

  {
    icon: <FaDocker />,
    label: "Docker",
  },

  {
    icon: <FaGithub />,
    label: "GitHub",
  },

  {
    icon: <FaChartBar />,
    label: "Power BI",
  },
];


/* ============================================================
   FRAMEWORKS & LIBRARIES
   ============================================================ */

const frameworksLibs = [
  {
    icon: <FaReact />,
    label: "React",
  },

  {
    icon: <SiAngular />,
    label: "Angular",
  },

  {
    icon: <SiNodedotjs />,
    label: "Node.js",
  },

  {
    icon: <SiTypescript />,
    label: "TypeScript",
  },

  {
    icon: <SiSpringboot />,
    label: "Spring Boot",
  },

  {
    icon: <SiDjango />,
    label: "Django",
  },

  {
    icon: <SiNumpy />,
    label: "NumPy",
  },

  {
    icon: <SiPandas />,
    label: "Pandas",
  },

  {
    icon: <FaChartLine />,
    label: "Matplotlib",
  },
];


/* ============================================================
   PROFICIENCY LEVELS
   ============================================================ */

const skillBars = [
  {
    name: "Java",
    level: 80,
  },

  {
    name: "Python",
    level: 75,
  },

  {
    name: "SQL",
    level: 70,
  },

  {
    name: "HTML",
    level: 85,
  },

  {
    name: "CSS",
    level: 80,
  },

  {
    name: "JavaScript",
    level: 75,
  },

  {
    name: "TypeScript",
    level: 65,
  },

  {
    name: "React",
    level: 70,
  },

  {
    name: "Angular",
    level: 65,
  },

  {
    name: "Node.js",
    level: 65,
  },

  {
    name: "Spring Boot",
    level: 65,
  },

  {
    name: "Django",
    level: 65,
  },

  {
    name: "Docker",
    level: 60,
  },

  {
    name: "GitHub",
    level: 70,
  },

  {
    name: "NumPy",
    level: 60,
  },

  {
    name: "Pandas",
    level: 60,
  },

  {
    name: "Matplotlib",
    level: 55,
  },

  {
    name: "Power BI",
    level: 55,
  },
];


/* ============================================================
   SKILLS COMPONENT
   ============================================================ */

function Skills() {
  return (
    <div className="skills-container">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="skills-header">

        <div className="skills-label">
          <span>Technical Profile</span>
        </div>

        <h1 className="skills-title">
          My Skills
        </h1>

      </div>


      {/* =====================================================
          SKILL CARDS
      ===================================================== */}

      <div className="skills-cards">

        {/* ===== LANGUAGES & TOOLS ===== */}

        <div
          className="skill-card"
          style={{ "--index": 0 }}
        >

          <h2>
            Languages &amp; Tools
          </h2>

          <div className="skill-icons">

            {languagesTools.map(
              ({ icon, label }) => (
                <div
                  className="skill-item"
                  key={label}
                >
                  {icon}

                  <span>
                    {label}
                  </span>
                </div>
              )
            )}

          </div>

        </div>


        {/* ===== FRAMEWORKS & LIBRARIES ===== */}

        <div
          className="skill-card"
          style={{ "--index": 1 }}
        >

          <h2>
            Frameworks &amp; Libraries
          </h2>

          <div className="skill-icons">

            {frameworksLibs.map(
              ({ icon, label }) => (
                <div
                  className="skill-item"
                  key={label}
                >
                  {icon}

                  <span>
                    {label}
                  </span>
                </div>
              )
            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          PROFICIENCY LEVELS
      ===================================================== */}

      <div className="skills-progress">

        <h3>
          Proficiency Levels
        </h3>

        <div className="progress-grid">

          {skillBars.map(
            ({ name, level }) => (
              <SkillBar
                key={name}
                name={name}
                level={level}
              />
            )
          )}

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   SKILL BAR COMPONENT
   ============================================================ */

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">

      <div className="skill-bar-header">

        <span className="skill-name">
          {name}
        </span>

        <span className="skill-percent">
          {level}%
        </span>

      </div>

      <div className="progress">

        <div
          className="progress-fill"
          style={{
            width: `${level}%`,
          }}
        />

      </div>

    </div>
  );
}


export default Skills;