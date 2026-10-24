import React, { useEffect, useRef, useState, useCallback } from 'react';
import { skillCategories } from './skillsData';
import { FaFire } from 'react-icons/fa';

/* --------------------------------------------------------------------------
   Category accent colors — one per category for visual distinction
   -------------------------------------------------------------------------- */
const categoryAccents = {
  genai: '#40ff00',
  'ml-vision': '#00f7ff',
  'ai-models': '#a855f7',
  'programming-data': '#38bdf8',
  frontend: '#61dafb',
  backend: '#10b981',
  databases: '#f97316',
  tools: '#f05032',
  professional: '#f59e0b',
};

/* --------------------------------------------------------------------------
   Connector definitions — curated pairs of skills to connect within each
   category. Uses skill indices (0-based) within that category.
   -------------------------------------------------------------------------- */
const categoryConnectors = {
  genai: [
    [0, 3], // Generative AI ↔ RAG
    [3, 4], // RAG ↔ LangChain
    [4, 5], // LangChain ↔ LangGraph
    [5, 6], // LangGraph ↔ AI Agents
    [1, 2], // LLMs ↔ Prompt Engineering
    [0, 7], // Generative AI ↔ Multimodal AI
  ],
  'ml-vision': [
    [0, 1], // ML ↔ Deep Learning
    [2, 3], // Computer Vision ↔ YOLOv8
    [2, 4], // Computer Vision ↔ Image Processing
    [3, 5], // YOLOv8 ↔ Object Detection
  ],
  'ai-models': [
    [2, 3], // Hugging Face ↔ Sentence Transformers
    [3, 4], // Sentence Transformers ↔ BGE Embeddings
    [0, 1], // Qwen2-VL ↔ Whisper
  ],
  'programming-data': [
    [0, 3], // Python ↔ Pandas
    [3, 4], // Pandas ↔ NumPy
    [0, 2], // Python ↔ SQL
  ],
  frontend: [
    [0, 1], // HTML5 ↔ CSS3
    [2, 4], // React.js ↔ Responsive UI
    [1, 5], // CSS3 ↔ UI Animations
  ],
  backend: [
    [0, 3], // FastAPI ↔ REST APIs
    [2, 3], // Node.js ↔ REST APIs
    [3, 4], // REST APIs ↔ API Integration
  ],
  databases: [
    [3, 5], // FAISS ↔ Vector Search
    [4, 5], // ChromaDB ↔ Vector Search
    [5, 6], // Vector Search ↔ Semantic Search
    [0, 1], // MongoDB ↔ MySQL
  ],
  tools: [
    [0, 1], // Git ↔ GitHub
    [3, 4], // VS Code ↔ Jupyter
  ],
  professional: [
    [0, 1], // Problem Solving ↔ Logical Thinking
    [1, 2], // Logical Thinking ↔ Analytical Thinking
    [3, 4], // Creativity ↔ Adaptability
  ],
};

/* --------------------------------------------------------------------------
   SVG Connector component – draws lines between pairs of node refs
   -------------------------------------------------------------------------- */
const NodeConnectors = ({ connectors, nodeRefs, containerRef, accentColor }) => {
  const [lines, setLines] = useState([]);

  const recalc = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newLines = [];

    connectors.forEach(([a, b]) => {
      const elA = nodeRefs.current[a];
      const elB = nodeRefs.current[b];
      if (!elA || !elB) return;

      const rA = elA.getBoundingClientRect();
      const rB = elB.getBoundingClientRect();

      const x1 = rA.left + rA.width / 2 - containerRect.left;
      const y1 = rA.top + rA.height / 2 - containerRect.top;
      const x2 = rB.left + rB.width / 2 - containerRect.left;
      const y2 = rB.top + rB.height / 2 - containerRect.top;

      newLines.push({ x1, y1, x2, y2, key: `${a}-${b}` });
    });

    setLines(newLines);
  }, [connectors, nodeRefs, containerRef]);

  useEffect(() => {
    // Calculate on mount + window resize
    const timer = setTimeout(recalc, 100);
    window.addEventListener('resize', recalc);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', recalc);
    };
  }, [recalc]);

  if (lines.length === 0) return null;

  return (
    <svg className="node-connectors-svg" aria-hidden="true">
      {lines.map((l) => (
        <line
          key={l.key}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={accentColor}
          strokeWidth="1"
          strokeOpacity="0.18"
          strokeDasharray="6 4"
        />
      ))}
    </svg>
  );
};

/* --------------------------------------------------------------------------
   Single Category Cluster
   -------------------------------------------------------------------------- */
const CategoryCluster = ({ category, accent, connectors, animDelay }) => {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const CategoryIcon = category.categoryIcon;

  return (
    <div
      className="skills-category-cluster"
      style={{ '--cat-accent': accent, '--cat-delay': `${animDelay}ms` }}
      ref={containerRef}
    >
      {/* Category header */}
      <div className="cluster-header">
        <div className="cluster-icon-wrapper">
          <CategoryIcon />
        </div>
        <div className="cluster-header-text">
          <h3 className="cluster-title">{category.title}</h3>
          {category.badge && (
            <span className="cluster-badge">{category.badge}</span>
          )}
        </div>
      </div>

      {/* Nodes grid */}
      <div className="cluster-nodes-grid">
        {/* SVG connector lines (behind nodes) */}
        <NodeConnectors
          connectors={connectors || []}
          nodeRefs={nodeRefs}
          containerRef={containerRef}
          accentColor={accent}
        />

        {category.skills.map((skill, idx) => {
          const SkillIcon = skill.icon;
          return (
            <div
              key={skill.name}
              className={`skill-node ${category.isCoreFocus ? 'is-core' : ''}`}
              style={{
                '--node-color': skill.color || accent,
                '--node-delay': `${idx * 60}ms`,
              }}
              ref={(el) => (nodeRefs.current[idx] = el)}
              tabIndex={0}
              role="listitem"
              aria-label={skill.name}
            >
              <div className="node-icon-ring" aria-hidden="true">
                <SkillIcon />
              </div>
              <span className="node-label">{skill.name}</span>
              {category.isCoreFocus && (
                <span className="node-core-badge" title="Core Specialization">
                  <FaFire />
                </span>
              )}
              {/* Hover glow */}
              <div className="node-glow" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------
   Main Skills Section
   -------------------------------------------------------------------------- */
const Skills = () => {
  const sectionRef = useRef(null);

  /* Intersection Observer for entrance animation */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('skills-visible');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="skills-network-section"
      aria-label="Skills and Technologies"
      ref={sectionRef}
    >
      <div className="container skills-network-container">
        {/* Header */}
        <div className="skills-header-block section-header-block">
          <h2 className="section-title" data-watermark="SKILLS">
            Skills &amp; <span className="title-accent">Technologies<span className="title-dot">.</span></span>
          </h2>
        </div>

        {/* Category clusters */}
        <div className="skills-clusters-grid" role="list">
          {skillCategories.map((cat, catIdx) => (
            <CategoryCluster
              key={cat.id}
              category={cat}
              accent={categoryAccents[cat.id] || '#40ff00'}
              connectors={categoryConnectors[cat.id] || []}
              animDelay={catIdx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
