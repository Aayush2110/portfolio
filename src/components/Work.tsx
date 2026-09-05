import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      const workContainer = document.querySelector(".work-container") as HTMLElement;
      if (!workFlex || !workContainer) return 0;
      
      const boxes = workFlex.querySelectorAll(".work-box");
      if (!boxes.length) return 0;

      let totalBoxesWidth = 0;
      boxes.forEach((box) => {
        totalBoxesWidth += (box as HTMLElement).offsetWidth;
      });

      const containerWidth = workContainer.clientWidth;
      return Math.max(0, totalBoxesWidth - containerWidth);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        pinType: "transform",
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>LexiAI</h4>
                  <p>RAG Based Legal Document Intelligence Assistant</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, FastAPI, Python, MongoDB, ChromaDB</p>
              <ul>
                <li>Built a RAG-based AI chatbot for legal document analysis and contextual question answering.</li>
                <li>Developed full-stack architecture using React, FastAPI, Python, MongoDB, and ChromaDB.</li>
                <li>Implemented semantic search, vector embeddings, document upload, and persistent chat history.</li>
              </ul>
            </div>
            <img
  src="/lexiAI.png"
  alt="LexiAI Project"
  style={{ width: "100%", height: "auto" }}
/>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>NexTribe</h4>
                  <p>AI-Driven Networking & Mentorship Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Node.js, MongoDB, AI Integration</p>
              <ul>
                <li>Built a multi-role platform for mentorship, job recruitment, and AI-based interview practice.</li>
                <li>Developed full-stack architecture using React, Node.js, and MongoDB.</li>
                <li>Built AI-driven automated interview module, video conferencing, and job application tracking system.</li>
              </ul>
            </div>
            <img
  src="/Nextibe.png"
  alt="NexTribe Project"
  style={{ width: "100%", height: "auto" }}
/>
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Edge AI Smart Factory Assistant</h4>
                  <p>Industrial AI Monitoring System (In Progress)</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Edge-Cloud Architecture, Computer Vision, Time-series Analysis</p>
              <ul>
                <li>Developed an AI-based system for real-time industrial monitoring using edge–cloud architecture.</li>
                <li>Implemented computer vision models for defect detection and improved manufacturing workflows.</li>
                <li>Built predictive maintenance models using time-series data to reduce downtime and enhance efficiency.</li>
              </ul>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Edge AI Smart Factory Assistant" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
