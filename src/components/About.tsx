import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Development Engineer and AI Engineer with hands-on experience building intelligent, production-ready
          applications. Passionate about applying Generative AI and modern web technologies to solve real-world problems.
          Always eager to learn, adapt, and deliver impactful solutions.
        </p>
        <div className="education-section">
          <h3 className="title">Education</h3>
          <div className="education-item">
            <h4>D. Y. Patil Institute of Engineering, Management and Research, Pune</h4>
            <p><strong>Bachelor of Engineering in AI & Data Science</strong> | 2024 – 2027 | CGPA: 8.68</p>
          </div>
          <div className="education-item">
            <h4>Pimpri Chinchwad Polytechnic</h4>
            <p><strong>Diploma in Computer Engineering</strong> | 2021 – 2024 | Percentage: 90.29%</p>
          </div>
          <div className="education-item">
            <h4>Shri Gopinath Vidyalaya, Pune</h4>
            <p><strong>Secondary School Certificate (SSC)</strong> | 2021 | Percentage: 88.40%</p>
          </div>
        </div>
        <div className="skills-section">
          <h3 className="title">Skills</h3>
          <div className="skill-category">
            <h4>Languages:</h4>
            <p>JavaScript, Java, Python, C++, HTML, Tailwind CSS</p>
          </div>
          <div className="skill-category">
            <h4>Frameworks:</h4>
            <p>React, Node.js, FastAPI, REST APIs</p>
          </div>
          <div className="skill-category">
            <h4>Databases:</h4>
            <p>MySQL, MongoDB, ChromaDB</p>
          </div>
          <div className="skill-category">
            <h4>Cloud & Tools:</h4>
            <p>AWS, OpenAI API, Git, GitHub, Postman, Firebase</p>
          </div>
          <div className="skill-category">
            <h4>Fundamentals:</h4>
            <p>Data Structures & Algorithms, Object-Oriented Programming (OOP), Operating Systems, DBMS</p>
          </div>
          <div className="skill-category">
            <h4>AI & Data Systems:</h4>
            <p>Workflow Automation, Retrieval-Augmented Generation (RAG), LLM Integration, Prompt Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
