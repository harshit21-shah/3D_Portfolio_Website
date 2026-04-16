import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1>
              Harshit
              <br />
              <span>Shah</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI Engineer building</h3>
            <h2 className="landing-info-h2">PRODUCTION AI</h2>
            <h2 className="landing-info-h2-sub">INTELLIGENT SYSTEMS</h2>
            <p className="landing-subtitle">
              I design and deploy LLM-powered applications, agentic workflows,
              and scalable AI systems that solve real-world problems.
            </p>
            <div className="landing-spec-row">
              <span className="landing-badge">RAG Pipelines</span>
              <span className="landing-spec-divider">·</span>
              <span className="landing-badge">Agentic AI</span>
              <span className="landing-spec-divider">·</span>
              <span className="landing-badge">NL2SQL</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
