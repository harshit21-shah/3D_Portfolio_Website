import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";


const projects = [
  {
    title: "TrendSense",
    category: "Multi-Agent Intelligence Platform",
    tagline: "From raw internet signals → validated intelligence",
    problem: "No unified tool existed to aggregate, validate, and surface real-time trend signals across the web at scale.",
    approach: "Multi-agent pipeline using LangGraph where specialized agents fetch, filter, and cross-validate signals in parallel. Self-correcting RAG reduces hallucinations before results stream to a React dashboard.",
    result: "Processes 10,000+ signals in parallel with real-time streaming via FastAPI SSE.",
    stack: ["LangGraph", "Groq Llama 3.3", "ChromaDB", "FastAPI SSE", "React 18"],
    link: "https://github.com/harshit21-shah/TrendSense",
    linkLabel: "View on GitHub",
  },
  {
    title: "WhatsApp AI Assistant",
    category: "Production LLM + RAG System",
    tagline: "AI assistant that works in production, not just demos",
    problem: "Support teams overwhelmed with repetitive FAQs, booking requests, and escalations handled manually over WhatsApp.",
    approach: "Multi-turn conversational AI using RAG over a curated knowledge base. Escalation logic detects intent and routes to live agents when confidence is low.",
    result: "Handles real users in production — FAQ resolution, booking automation, and intelligent escalation.",
    stack: ["LLM + RAG", "LangChain", "WhatsApp Business API", "FastAPI"],
    link: "https://www.linkedin.com/in/harshit-shah-1b3416270/",
    linkLabel: "Production System — Contact for Details",
  },
  {
    title: "NL2SQL Clinical System",
    category: "Clinical Data Query Interface",
    tagline: "Complex medical data, queryable in plain English",
    problem: "Clinical teams needed to query structured patient datasets but lacked SQL expertise, creating a bottleneck for data-driven decisions.",
    approach: "Fine-tuned a transformer on clinical SQL pairs with schema-aware prompting so the model understands table relationships and medical terminology.",
    result: "Clinical teams query patient datasets in plain English. Deployed for real decision-making workflows.",
    stack: ["Fine-tuned Transformer", "Schema Prompting", "SQL", "Python", "FastAPI"],
    link: "https://www.linkedin.com/in/harshit-shah-1b3416270/",
    linkLabel: "Internal System — Contact for Details",
  },
  {
    title: "CTC Analysis Automation",
    category: "Computer Vision · Published Research",
    tagline: "140× faster — from manual lab work to AI automation",
    problem: "Manual CTC analysis from microscopy images took 7 minutes per sample, a major throughput bottleneck in cancer research.",
    approach: "Marker-first segmentation pipeline using ImageJ macros, Java plugins, and Bio-Formats for .czi files with multi-class cell classification.",
    result: "140× improvement — 7 minutes → 3 seconds per sample. Published in ESMO Open (2025).",
    stack: ["ImageJ", "Java", "Bio-Formats", "OpenCV", "Cell Segmentation"],
    link: "https://doi.org/10.1016/j.esmoop.2025.105588",
    linkLabel: "View Publication",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 450);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>Featured <span>Projects</span></h2>

        <div className="carousel-wrapper">
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <span>0{index + 1}</span>
                      </div>
                      <div className="carousel-details">
                        <p className="carousel-category">{project.category}</p>
                        <h4>{project.title}</h4>
                        <p className="carousel-tagline">{project.tagline}</p>
                        <div className="case-study-grid">
                          <div className="case-study-block">
                            <span className="case-label">Problem</span>
                            <p>{project.problem}</p>
                          </div>
                          <div className="case-study-block case-approach">
                            <span className="case-label">Approach</span>
                            <p>{project.approach}</p>
                          </div>
                          <div className="case-study-block case-result">
                            <span className="case-label">Result</span>
                            <p>{project.result}</p>
                          </div>
                        </div>
                        <div className="carousel-stack">
                          {project.stack.map((s, i) => (
                            <span className="stack-tag" key={i}>{s}</span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="carousel-link"
                          data-cursor="disable"
                        >
                          {project.linkLabel} <MdArrowOutward />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav — dots + arrows together */}
          <div className="carousel-nav">
            <button
              className="carousel-arrow"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdArrowBack />
            </button>
            <div className="carousel-dots">
              {projects.map((p, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                >
                  <span className="dot-label">{p.title}</span>
                </button>
              ))}
            </div>
            <button
              className="carousel-arrow"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
