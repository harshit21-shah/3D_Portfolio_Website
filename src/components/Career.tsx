import "./styles/Career.css";

const achievements = [
  { icon: "🧪", text: "Published in ESMO Open (2025)" },
  { icon: "🏆", text: "Finalist — NABARD Innovation Hackathon" },
  { icon: "⚡", text: "Built multiple production AI systems" },
];

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
                <h4>AI/ML Engineer</h4>
                <h5>Actorius Innovations</h5>
              </div>
              <h3>2026</h3>
            </div>
            <div className="career-desc">
              <p className="career-period">Oct 2025 – Mar 2026 · Pune</p>
              <p>
                Engineered a production WhatsApp AI assistant using LLM + RAG
                for multi-turn FAQ resolution and intelligent live-agent
                escalation. Built a desktop CTC analysis app processing .czi
                microscopy files through marker-first segmentation and
                multi-class classification. Designed an NL2SQL system with a
                fine-tuned transformer enabling clinical teams to query patient
                datasets in plain English.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer</h4>
                <h5>1Cell.Ai</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div className="career-desc">
              <p className="career-period">Jul 2025 – Oct 2025 · Pune</p>
              <p>
                Built a document intelligence pipeline processing 500+ oncology
                PDFs/month using PyPDF2 and pdfplumber with 12+ regex patterns
                for genomic entity extraction (SNVs, CNVs, fusions, VAF, MSI,
                TMB, HRD), achieving 95% accuracy and 3× throughput via
                parallel processing.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Intern</h4>
                <h5>1Cell.Ai</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div className="career-desc">
              <p className="career-period">Jan 2025 – Jun 2025 · Pune</p>
              <p>
                Automated CTC image analysis using ImageJ macros, Java plugins,
                and Bio-Formats integration, achieving a 140× performance
                improvement from 7 minutes to 3 seconds per sample. Findings
                published in ESMO Open (2025).
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>Bioinformatics Centre, SPPU</h5>
              </div>
              <h3>2024</h3>
            </div>
            <div className="career-desc">
              <p className="career-period">Jul 2024 – Sep 2024 · Pune</p>
              <p>
                Performed DESeq2 differential expression analysis on 522 TCGA
                RNA-seq samples, identified 117 DEGs, and surfaced 10 hub gene
                biomarker candidates via Cytoscape PPI network analysis,
                validated across 9,736 samples on GEPIA.
              </p>
            </div>
          </div>
        </div>
        <div className="career-achievements">
          <h3 className="career-achievements-title">Achievements</h3>
          <div className="career-achievements-list">
            {achievements.map((a, i) => (
              <div className="career-achievement-item" key={i}>
                <span className="career-achievement-icon">{a.icon}</span>
                <span>{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
