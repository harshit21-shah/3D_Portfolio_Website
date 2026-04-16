import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Beyond Models — I Build Systems</h3>
        <p className="para">
          I'm an AI Engineer focused on building end-to-end intelligent systems,
          not just models. My work spans LLM applications, agent orchestration,
          and real-world deployments where performance and reliability matter.
        </p>
        <p className="about-description">
          From developing a WhatsApp AI assistant with RAG to building NL2SQL
          systems for clinical data, I focus on turning AI into usable, scalable
          products.
        </p>
        <div className="about-intersections">
          <span className="about-tag">AI + System Design</span>
          <span className="about-tag">Automation + Real-world Workflows</span>
          <span className="about-tag">Data + Decision Intelligence</span>
        </div>
      </div>
    </div>
  );
};

export default About;
