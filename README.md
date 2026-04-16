# Harshit Shah — AI Engineer Portfolio

> Production-grade AI systems portfolio built with React, Three.js, and GSAP.

**Live:** [harshitshah.dev](harshitshahworks.netlify.app) &nbsp;·&nbsp; **LinkedIn:** [linkedin.com/in/harshit-shah-1b3416270](https://www.linkedin.com/in/harshit-shah-1b3416270/)

---

## About

Personal portfolio for **Harshit Shah**, AI Engineer specializing in LLM applications, RAG pipelines, and agentic workflows. Built to showcase production AI systems — not toy demos.

**Featured projects:**
- **TrendSense** — Multi-agent intelligence platform processing 10,000+ signals in parallel using LangGraph + self-correcting RAG
- **WhatsApp AI Assistant** — Production RAG system with multi-turn dialogue and live-agent escalation
- **NL2SQL Clinical System** — Fine-tuned transformer enabling clinical teams to query patient data in plain English
- **CTC Analysis Automation** — 140× performance improvement, published in ESMO Open (2025)

---

## Tech Stack

**Site**

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript + Vite |
| 3D / Physics | Three.js, React Three Fiber, Rapier |
| Animation | GSAP, ScrollTrigger |
| Styling | CSS Modules |

**AI Stack showcased**

`Python` `PyTorch` `TensorFlow` `LangChain` `LangGraph` `OpenAI` `HuggingFace` `Pinecone` `ChromaDB` `FastAPI` `Docker` `AWS`

---

## Running Locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Requires Node 18+.

---

## Project Structure

```
src/
├── components/
│   ├── Landing.tsx       # Hero section
│   ├── About.tsx         # About section
│   ├── WhatIDo.tsx       # Capabilities
│   ├── Work.tsx          # Featured projects carousel
│   ├── Career.tsx        # Experience timeline
│   ├── TechStack.tsx     # 3D physics tech ball pit
│   └── Contact.tsx       # Contact + form
├── components/Character/ # 3D character model (Three.js)
└── context/
    └── LoadingProvider.tsx
public/
├── logos/                # Tech stack icons (webp)
└── models/               # 3D model assets
```

---

## License

MIT
