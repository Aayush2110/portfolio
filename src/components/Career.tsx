import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Star Maven Digital</h5>
              </div>
              <h3>Jan 2026 - July 2026</h3>
            </div>
            <ul>
              <li>Developed scalable web applications and REST APIs, focusing on system reliability and performance.</li>
              <li>Integrated LLM-based features into production web applications, improving user workflow automation.</li>
              <li>Debugged and optimized production systems, ensuring smooth deployment and issue resolution.</li>
              <li>Collaborated with cross-functional teams to test, validate, and improve application functionality.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Engineer</h4>
                <h5>SM Rolling FX</h5>
              </div>
              <h3>June 2023 - July 2023</h3>
            </div>
            <ul>
              <li>Contributed to building and maintaining responsive web applications using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with cross-functional teams to debug, test, and optimize full-stack features.</li>
              <li>Implemented database solutions for efficient data storage and retrieval.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
