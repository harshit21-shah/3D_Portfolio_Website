import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const whatItems = [
  {
    title: "AI SYSTEMS ENGINEERING",
    subtitle: "Production-Grade AI Infrastructure",
    description:
      "Designing end-to-end AI systems using LLMs, RAG pipelines, and vector databases. Building for performance, reliability, and real-world scale.",
    tags: ["LLMs & RAG", "Vector DBs", "LangChain", "Pinecone / ChromaDB", "Prompt Engineering"],
  },
  {
    title: "LLM APPLICATIONS",
    subtitle: "Intelligent App Development",
    description:
      "Developing production applications — chatbots, NL2SQL interfaces, document intelligence systems — using LangChain, OpenAI, and Hugging Face APIs.",
    tags: ["NL2SQL", "Chatbots", "OpenAI API", "Hugging Face", "Fine-tuning"],
  },
  {
    title: "AGENTIC WORKFLOWS",
    subtitle: "Multi-Agent Orchestration",
    description:
      "Building multi-agent systems using LangGraph for reasoning, orchestration, and decision-making. Self-correcting pipelines that handle complex real-world tasks.",
    tags: ["LangGraph", "Multi-Agent", "CrewAI", "Tool Use", "Self-Correction"],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          What I<br />
          <span className="do-h2">Build</span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          {whatItems.map((item, index) => (
            <div
              key={index}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  {index === 0 && (
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  )}
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  {item.tags.map((tag, i) => (
                    <div className="what-tags" key={i}>{tag}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
