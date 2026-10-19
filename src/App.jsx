import React, { useState, useEffect } from 'react';
import './App.css';
import Timeline from './components/timeline/Timeline';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import profileImage from './assets/Image3_upright.jpg';
import vikrantAvatar from './assets/vikrant_avatar.jpg';
import nptelImage from './assets/certificates/NPTEL.png';
import mern from './assets/certificates/VIKRANT PRASHANT CHAKOLE_MERN Stack Application Development.png';
import Applied from './assets/certificates/Microsoft Applied Skills.png';
import Applies from './assets/certificates/Microsoft Applied Skills[1].png';
import Productivity from './assets/certificates/Productvity.jpg';
import Fundamental from './assets/certificates/Fortinet_Certified_Fundamentals_in_Cybersecurity.png';
import software from './assets/certificates/software development.jpg';
import hacker from './assets/certificates/hackerheist.jpg';
import Associates from './assets/certificates/Fortinet_Certified_Associate_in_Cybersecurity.png';
import Resume from './assets/certificates/Vikrant Chakole .pdf';
import Project from './assets/certificates/Project.png';
import medicine from './assets/certificates/medicine.png';
import port from './assets/certificates/port.png';
import stock from './assets/certificates/stock.jpeg';
import Project2 from './assets/certificates/Project2.png';
import Project3 from './assets/certificates/Project3.png';
import job from './assets/certificates/job.png';
import jan2025Cert from './assets/certificates/Jan2025.png';
import tcsInternship from './assets/certificates/3202415-Vikrant Prashant Chakole.pdf';
import paperAward from './assets/certificates/Paper_award.jpg';
import revGovImg from './assets/projects/rev_gov.jpg';
import smartTechImg from './assets/projects/smart_technician.jpg';
import mfgAssistantImg from './assets/projects/mfg_assistant.jpg';
import resuminAiImg from './assets/projects/resumin_ai.jpg';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaStar,
  FaDownload,
  FaEye,
  FaArrowRight,
  FaArrowUp,
  FaHome,
  FaUser,
  FaBriefcase,
  FaLayerGroup,
  FaLaptopCode,
  FaAward,
  FaCogs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaCss3Alt,
  FaLock,
  FaDatabase,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaCertificate,
  FaChevronDown,
  FaRobot,
  FaRocket,
  FaPlug,
  FaMagic,
  FaShieldAlt,
  FaPaintBrush,
  FaCheck,
} from 'react-icons/fa';
import { TbSparkles as TbSparklesCert } from 'react-icons/tb';

const dockNavItems = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'timeline-section', label: 'Journey', icon: FaBriefcase },
  { id: 'skills', label: 'Skills', icon: FaLayerGroup },
  { id: 'projects', label: 'Projects', icon: FaLaptopCode },
  { id: 'certifications', label: 'Certifications', icon: FaAward },
  { id: 'services', label: 'Services', icon: FaCogs },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

const certifications = [
  {
    title: "Best Paper Award – AIDCon-2025",
    issuer: "AIDCon-2025 & SVPCET",
    date: "December 2025",
    file: paperAward,
    type: "image",
    category: "AI & Research Publications",
    tags: ["Best Paper Award", "Media Authentication", "AI Forensics", "Research"],
    accent: "#f59e0b",
    featured: true,
    description: "Awarded Best Paper for research presentation entitled 'Intelligent Media Authentication with Identity Marking and Real-Time Forensic Reporting' at the International Conference on AI-Driven Engineering & Technology (AIDCon-2025).",
  },
  {
    title: "Gen AI & Software Engineering Internship",
    issuer: "Tata Consultancy Services (TCS)",
    date: "Feb 2026 – Sep 2026",
    file: tcsInternship,
    type: "pdf",
    category: "Generative AI & Enterprise",
    tags: ["Generative AI", "Manufacturing AI Assistant", "ResuMind AI", "TCS"],
    accent: "#a855f7",
    featured: true,
    description: "Completed engineering internship at Tata Consultancy Services (TCS) Academic Alliances Group, engineering 'Gen AI Solution - Manufacturing AI Assistant' and 'ResuMind AI: Intelligent GenAI Talent Acquisition & Recruitment Platform'.",
  },
  {
    title: "MERN Stack Application Development",
    issuer: "EDUNET & TECHSAKSHAM",
    date: "March 2025",
    file: mern,
    type: "image",
    category: "Full Stack Development",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    accent: "#61dafb",
    featured: true,
    description: "Comprehensive hands-on specialization in full stack web architectures, RESTful APIs, modern state management, and cloud database integrations.",
  },
  {
    title: "Data science and machine learning Solution",
    issuer: "Microsoft",
    date: "December 2024",
    file: Applies,
    type: "image",
    category: "AI & Machine Learning",
    tags: ["Data Science", "Machine Learning", "Model Training"],
    accent: "#c084fc",
    featured: true,
    description: "Applied skills credential in architecting, training, and operationalizing machine learning pipelines and statistical predictive models.",
  },
  {
    title: "Cyber Security, Tools, Techniques and Counter Measures",
    issuer: "SWAYAM (IGNOU & BAOU)",
    date: "Jan 2025 – May 2025",
    file: jan2025Cert,
    type: "image",
    category: "Cyber Security",
    tags: ["Cyber Security", "Counter Measures", "Security Tools", "77% Score"],
    accent: "#ef4444",
    description: "Successfully completed 4-credit course with a 77% consolidated score in proctored examination covering defensive cybersecurity architectures, vulnerability mitigation, and counter measures.",
  },
  {
    title: "Job Readiness Program",
    issuer: "SAP",
    date: "June 2025",
    file: job,
    type: "image",
    category: "Professional Development",
    tags: ["Career", "Enterprise Architecture"],
    accent: "#10b981",
    description: "Enterprise software readiness program focusing on business workflows, agile methodologies, and scalable application development.",
  },
  {
    title: "Create and manage canvas apps with Power Apps",
    issuer: "Microsoft",
    date: "June 2025",
    file: Applied,
    type: "image",
    category: "Cloud & Platforms",
    tags: ["Power Platform", "Low-Code", "Automation"],
    accent: "#f97316",
    description: "Credential in building responsive low-code enterprise applications, custom connectors, and business automation logic.",
  },
  {
    title: "Microsoft Copilot for Productivity",
    issuer: "Microsoft and LinkedIn",
    date: "October 2024",
    file: Productivity,
    type: "image",
    category: "AI & Machine Learning",
    tags: ["AI Productivity", "Copilot", "Prompt Engineering"],
    accent: "#8b5cf6",
    description: "Harnessing conversational generative AI models and Copilot ecosystems for developer velocity, documentation, and automated workflows.",
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft and LinkedIn",
    date: "October 2024",
    file: software,
    type: "image",
    category: "Full Stack Development",
    tags: ["Software Engineering", "Clean Code"],
    accent: "#06b6d4",
    description: "Foundational software development practices, design patterns, testing fundamentals, and collaborative development lifecycles.",
  },
  {
    title: "NPTEL Technical Certification",
    issuer: "SWAYAM",
    date: "December 2024",
    file: nptelImage,
    type: "image",
    category: "Technical Foundations",
    tags: ["Engineering", "Computer Science"],
    accent: "#38bdf8",
    description: "Rigorous national-level academic examination in core computer science principles and engineering methodologies.",
  },
  {
    title: "Associates in Cyber Security",
    issuer: "FORTINET",
    date: "Oct 2023 – Oct 2025",
    file: Associates,
    type: "image",
    category: "Cyber Security",
    tags: ["Network Security", "Threat Intelligence"],
    accent: "#ef4444",
    description: "Fortinet-certified cybersecurity associate covering threat landscape, next-gen firewall architectures, and zero-trust security frameworks.",
  },
  {
    title: "Hacker's Heist Team Member",
    issuer: "SVPCET",
    date: "November 2023",
    file: hacker,
    type: "image",
    category: "Cyber Security",
    tags: ["Hackathon", "Ethical Hacking"],
    accent: "#f43f5e",
    description: "Competitive cybersecurity capture-the-flag hackathon solving reverse engineering, web exploitation, and cryptography challenges.",
  },
];

/* Number of certifications to show initially before "View All" */
const CERTS_INITIAL_COUNT = 6;



const projectsData = [
  {
    id: "rev-gov",
    title: "Rev_Gov Platform",
    category: "Generative AI",
    badge: "🏛️ Multilingual GovTech",
    accent: "#10b981",
    tagline: "Omnichannel voice-first statutory revenue service platform in 7 languages",
    description: "Enterprise-grade citizen revenue platform delivering statutory certificate services across Web, WhatsApp simulator, and IVR telephony with deterministic FSM governance, multimodal OCR, and automated PII redaction.",
    highlights: [
      "Omnichannel delivery across Web, WhatsApp Simulator, and IVR Voice in 7 regional Indian languages",
      "Deterministic FSM engine coupled with Gemini 1.5 Flash LLM & multimodal OCR verification (98%+)",
    ],
    tech: ["FastAPI", "React 19", "Vite", "Gemini 1.5 Flash", "SQLite WAL", "Multimodal OCR", "Python"],
    link: "https://github.com/VikrantChakole/Rev_Gov",
    demo: null,
    screenshot: revGovImg,
    featured: true,
  },
  {
    id: "smart-technician",
    title: "Smart Technician Assistant",
    category: "Generative AI",
    badge: "⚡ Industrial Edge AI",
    accent: "#00f0ff",
    tagline: "Offline-first hybrid RAG diagnostic & Lockout/Tagout safety copilot",
    description: "Industrial diagnostic platform combining edge-resilient hybrid RAG (NumPy vector store + BM25/RRF ranking), real-time telemetry anomaly detection, Lockout/Tagout (LOTO) safety enforcement, and acoustic vibration analysis.",
    highlights: [
      "Hybrid local RAG with SQLite + NumPy vector search & BM25 reciprocal rank fusion",
      "Multimodal vision & vibration spectrum analysis with Lockout/Tagout (LOTO) safety verification",
    ],
    tech: ["FastAPI", "React Native", "Expo", "Gemini & Ollama", "Hybrid RAG", "NumPy Vector DB", "TypeScript"],
    link: "https://github.com/VikrantChakole/Smart_Technician_Assistant",
    demo: null,
    screenshot: smartTechImg,
    featured: true,
  },
  {
    id: "manufacturing-assistant",
    title: "Autonomous Manufacturing Copilot",
    category: "Generative AI",
    badge: "🏭 Multi-Agent AI",
    accent: "#f59e0b",
    tagline: "Autonomous multi-agent copilot for plant changeover, telemetry & compliance audits",
    description: "Multi-agent industrial orchestration system streamlining manufacturing changeover procedures, real-time machine telemetry streams, recipe parameter validation, and computer vision defect detection.",
    highlights: [
      "Autonomous multi-agent architecture coordinating SOP supervisor, recipe auditor, and quality inspector",
      "Real-time IoT telemetry pipelines, P&ID visual schematic mapping, and automated batch audit reports",
    ],
    tech: ["FastAPI", "PostgreSQL", "LangChain Agents", "React Native", "Computer Vision", "Python"],
    link: "https://github.com/VikrantChakole/Maufacturing-Assistant",
    demo: null,
    screenshot: mfgAssistantImg,
    featured: true,
  },
  {
    id: "resumin-ai",
    title: "Resumin_AI",
    category: "Generative AI",
    badge: "✨ Live Production",
    accent: "#8b5cf6",
    tagline: "AI-powered ATS scoring, keyword gap radar & intelligent resume enhancer",
    description: "Intelligent ATS optimization platform featuring semantic resume parsing, real-time compatibility score gauges (0-100), job description skill gap radar, and AI-driven quantifiable bullet point rewrites.",
    highlights: [
      "Real-time ATS score gauge & semantic skill gap detection against target job descriptions",
      "AI bullet point rephraser generating quantifiable impact metrics and keyword alignment",
    ],
    tech: ["React.js", "Vite", "Tailwind CSS", "Python", "FastAPI / Flask", "Gemini API", "NLP"],
    link: "https://github.com/VikrantChakole/Resumin_AI",
    demo: "https://resumin-ai.vercel.app",
    screenshot: resuminAiImg,
    featured: true,
  },
  {
    id: "gemini-clone",
    title: "Gemini AI Clone",
    category: "Generative AI",
    badge: "⭐ AI Flagship",
    accent: "#a855f7",
    tagline: "Real-time streaming multimodal GenAI chat interface",
    description: "High-performance generative AI chat interface powered by Google Gemini API featuring real-time token streaming, live Markdown rendering with code syntax highlighting, and custom prompt templates.",
    highlights: [
      "Real-time token streaming with Google Gemini API",
      "Dynamic Markdown, math equations & code block syntax highlighting",
    ],
    tech: ["React.js", "Vite", "Gemini API", "CSS Modules", "Generative AI"],
    link: "https://github.com/VikrantChakole/Gemini_Clone",
    demo: null,
    screenshot: Project3,
    featured: true,
  },
  {
    id: "medicine-store",
    title: "Medicine Management System",
    category: "Full Stack",
    badge: "🚀 Enterprise MERN",
    accent: "#10b981",
    tagline: "End-to-end pharmacy inventory & dealer automation platform",
    description: "Comprehensive pharmacy and dealer inventory management system with real-time stock alerts, role-based pharmacist authentication, automated invoicing, and low-inventory restock triggers.",
    highlights: [
      "Role-based authentication & secure dealer access control",
      "Automated stock replenishment alerts & real-time inventory tracking",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    link: "https://github.com/VikrantChakole/Medicine-Store",
    demo: null,
    screenshot: medicine,
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Futuristic 3D Portfolio",
    category: "Full Stack",
    badge: "⚡ Live Production",
    accent: "#61dafb",
    tagline: "Obsidian crimson developer showcase with interactive 3D tech nodes",
    description: "Personal brand developer platform featuring 3D faceted tech spheres, interactive neural skill clusters, audio accessibility, and modern obsidian-crimson glassmorphic interfaces.",
    highlights: [
      "Interactive 3D faceted SVG tech spheres & neural node network",
      "Obsidian crimson glassmorphism with buttery smooth 60fps animations",
    ],
    tech: ["React.js", "Vite", "Vanilla CSS", "SVG 3D", "Responsive Design"],
    link: "https://github.com/VikrantChakole/Portfolio",
    demo: "https://vikrant4301.github.io/My-Portfolio/",
    screenshot: port,
    featured: true,
  },
  {
    id: "income-predictor",
    title: "Income Prediction Model",
    category: "Machine Learning",
    badge: "📊 Predictive ML",
    accent: "#f59e0b",
    tagline: "Census intelligence & demographic machine learning classifier",
    description: "Flask-based web application leveraging pre-trained Random Forest and regression models to accurately classify and predict individual income levels from demographic indicators.",
    highlights: [
      "Trained on demographic census data with feature engineering",
      "Interactive Flask web dashboard for real-time model inference",
    ],
    tech: ["Python", "Flask", "Scikit-Learn", "Pandas", "React", "NumPy"],
    link: "https://github.com/VikrantChakole/Income_predictor",
    demo: null,
    screenshot: Project,
    featured: false,
  },
  {
    id: "stock-prediction",
    title: "Stock Market Predictor",
    category: "Machine Learning",
    badge: "📈 FinTech ML",
    accent: "#38bdf8",
    tagline: "Time-series predictive forecasting for financial securities",
    description: "Financial market trend forecasting platform integrating machine learning time-series models with Django backend and React for intuitive predictive analytics and candlestick data tracking.",
    highlights: [
      "Time-series algorithmic forecasting with statistical regression",
      "Full integration between Django REST endpoints and React state",
    ],
    tech: ["React.js", "Django", "Python", "Jupyter ML", "Financial APIs"],
    link: "https://github.com/VikrantChakole/Stock-Prediction",
    demo: null,
    screenshot: stock,
    featured: false,
  },
  {
    id: "population-find",
    title: "Population Find Web",
    category: "APIs & Web",
    badge: "🌍 Global Analytics",
    accent: "#ec4899",
    tagline: "Real-time global demographics tracker & currency exchange tool",
    description: "Interactive real-time global demographics tracker providing country-level population analytics, currency data, and meteorological insights via multi-source REST APIs.",
    highlights: [
      "Multi-API orchestration with live exchange & meteorological data",
      "Debounced instant search and responsive country metric cards",
    ],
    tech: ["React", "JavaScript", "REST APIs", "CSS3", "Async Pipelines"],
    link: "https://github.com/VikrantChakole/Population_Find",
    demo: null,
    screenshot: Project2,
    featured: false,
  },
];

function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const certsRef = React.useRef(null);

  const handleSelectService = (serviceTitle) => {
    setFormData((prev) => ({
      ...prev,
      message: `Hi Vikrant, I would like to discuss a project regarding "${serviceTitle}". Here is an overview of what we are looking to achieve: `,
    }));
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const msgField = document.getElementById('contact-msg');
        if (msgField) msgField.focus();
      }, 450);
    }
  };

  /* Intersection Observer for certifications entrance animation */
  useEffect(() => {
    const section = certsRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('certs-visible');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'timeline-section', 'skills', 'projects', 'certifications', 'services', 'contact'];
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Vertical Right-Side Dock (ss3 Style) */}
      <nav className="floating-dock-nav" aria-label="Page sections navigation">
        {dockNavItems.map((item) => {
          const ItemIcon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`dock-item ${isActive ? 'active' : ''}`}
              aria-label={item.label}
              onClick={() => setActiveSection(item.id)}
            >
              <ItemIcon className="dock-icon" />
              <span className="dock-tooltip">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Top Header (ss3 style) */}
      <header className="header header-ss3">
        <div className="container header-container">
          <a href="#home" className="logo">
            Vikrant Chakole<span className="logo-dot">.</span>
          </a>

          <div className="header-socials">
            <a href="https://github.com/VikrantChakole" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vikrant-chakole-a063a0269/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/VChakole2032" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/vikrant.32_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:vikrantchakole36@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <ul className={`navlist ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#timeline-section" onClick={() => setMenuOpen(false)}>Journey</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </header>

      <main>
        {/* Landing Page Hero Section (ss3 Theme) */}
        <section className="home hero-section-ss3" id="home">
          <div className="hero-cosmic-bg" aria-hidden="true">
            <div className="nebula-crimson-burst" />
            <div className="constellation-network" />
          </div>

          <div className="container hero-container">
            {/* Left Column: Heading, Subtitle & Circular Project Badge */}
            <div className="hero-content-left">
              <h1 className="hero-main-title">
                Transforming Ideas<br />
                Into <span className="hero-accent-text">Digital Reality.</span>
              </h1>
              <p className="hero-desc">
                Generative AI Developer & Full Stack Engineer specializing in Large Language Models, Autonomous Agents, Computer Vision, and production-ready intelligent web architectures.
              </p>

              <div className="hero-actions-row">
                {/* Circular Rotating "MY PROJECTS" Badge (ss3 style) */}
                <a href="#projects" className="projects-circular-badge" aria-label="View My Projects">
                  <svg className="badge-text-svg" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text className="rotating-text">
                      <textPath href="#circlePath" startOffset="0%">
                        • MY PROJECTS • MY PROJECTS •
                      </textPath>
                    </text>
                  </svg>
                  <div className="badge-center-arrow" aria-hidden="true">
                    <FaArrowRight />
                  </div>
                </a>

                <div className="hero-cta-group">
                  <a href="#contact" className="hero-primary-btn">
                    Get In Touch
                  </a>
                  <a href="#about" className="hero-secondary-btn">
                    About Me
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Portrait Cutout with Sci-Fi HUD Portal (ss1/ss3 style) */}
            <div className="hero-visual-right">
              <div className="hero-portal-ring" aria-hidden="true" />
              <div className="hero-portal-ring-outer" aria-hidden="true" />
              <div className="hero-crimson-glow" aria-hidden="true" />
              <div className="hero-portrait-stage">
                <img
                  src={vikrantAvatar}
                  alt="Vikrant Chakole - Generative AI Developer & Full Stack Engineer"
                  className="hero-portrait-cutout"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate developer dedicated to pioneering AI technologies and clean software craft
            </p>
          </div>
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>
                  I’m <span>Vikrant Chakole</span>, a Generative AI Developer focused on building intelligent, creative, and efficient AI-powered applications.
                </h2>
                <p className="text">
                  I have completed my B.Tech in <strong>Computer Science Engineering</strong> with Specialization in <strong>Cyber Security</strong> from St. Vincent Pallotti College of Engineering and Technology, Nagpur. With a strong foundation in frontend and backend development, Generative AI, and Machine Learning, I enjoy transforming innovative ideas into intelligent, scalable, and efficient digital solutions using modern technologies.
                </p>
                <p className="text">
                  I’m passionate about <strong>Generative AI, Machine Learning, Full Stack Development, React.js, and Python</strong>. I enjoy building intelligent, scalable applications that combine powerful AI capabilities with smooth, responsive user experiences. Outside of coding, I love exploring new technologies, discovering new places, experimenting with innovative ideas, and continuously learning.
                </p>

                <div className="cv-section about-cv-inline">
                  <a href={Resume} className="btn-down" download>
                    <FaDownload className="icon" />
                    Download CV
                  </a>
                  <a href={Resume} className="btn-down" target="_blank" rel="noopener noreferrer">
                    <FaEye className="icon" />
                    Preview CV
                  </a>
                </div>
              </div>

              <div className="about-image-card">
                <div className="about-img-glow" aria-hidden="true" />
                <img
                  src={profileImage}
                  alt="Vikrant Chakole"
                  className="profile-img"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <Timeline />

        {/* Compact 3D Faceted Tech Spheres */}
        <Skills />

        {/* Projects Section — Premium Redesign */}
        <section id="projects" className="projects-section" aria-label="Featured Projects">
          <div className="container projects-container">
            {/* Header Block */}
            <div className="projects-header-block">
              <div className="projects-badge-pill">
                <FaLaptopCode className="projects-badge-icon" />
                <span>Flagship Engineering</span>
              </div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Production-grade GenAI systems, scalable full-stack applications, and predictive machine learning models.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by category">
              {['All', 'Featured', 'Generative AI', 'Full Stack', 'Machine Learning', 'APIs & Web'].map((category) => {
                const count = category === 'All'
                  ? projectsData.length
                  : category === 'Featured'
                    ? projectsData.filter((p) => p.featured).length
                    : projectsData.filter((p) => p.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={projectFilter === category}
                    className={`proj-filter-btn ${projectFilter === category ? 'active' : ''}`}
                    onClick={() => setProjectFilter(category)}
                  >
                    <span>{category}</span>
                    <span className="filter-count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid" role="list">
              {(projectFilter === 'All'
                ? projectsData
                : projectFilter === 'Featured'
                  ? projectsData.filter((p) => p.featured)
                  : projectsData.filter((p) => p.category === projectFilter)
              ).map((project, index) => (
                <div
                  className="project-card-v2"
                  key={project.id || project.title}
                  style={{
                    '--proj-accent': project.accent || '#ff3b3b',
                    '--proj-delay': `${index * 80}ms`,
                  }}
                  role="listitem"
                >
                  {/* Top glowing accent line */}
                  <div className="proj-accent-bar" aria-hidden="true" />

                  {/* Screenshot Media Container */}
                  <div className="project-media-wrap">
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="project-screenshot"
                      loading="lazy"
                    />
                    <div className="project-media-gradient" aria-hidden="true" />

                    {/* Floating Badges */}
                    <div className="proj-media-badges">
                      <span className="proj-cat-badge">{project.category}</span>
                      {project.badge && (
                        <span className="proj-feature-badge">{project.badge}</span>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="project-info">
                    <div className="proj-heading-row">
                      <h3 className="project-title">{project.title}</h3>
                      {project.tagline && (
                        <span className="project-tagline">{project.tagline}</span>
                      )}
                    </div>

                    <p className="project-desc">{project.description}</p>

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="proj-highlights-box">
                        <ul className="proj-highlights-list">
                          {project.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="proj-highlight-item">
                              <FaCheck className="proj-highlight-check" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Pills */}
                    <div className="project-tech-pills">
                      {project.tech.map((tag) => (
                        <span className="tech-pill" key={tag}>{tag}</span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="project-action-links">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn-code"
                        aria-label={`View code for ${project.title}`}
                      >
                        <FaGithub className="btn-icon" /> View Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn-demo"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <span className="live-pulse-dot" aria-hidden="true" />
                          <FaExternalLinkAlt className="btn-icon" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Ambient hover glow */}
                  <div className="proj-card-glow" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section — Premium Redesign */}
        <section
          id="certifications"
          className="certs-showcase-section"
          aria-label="Certifications and Accreditations"
          ref={certsRef}
        >
          <div className="container certs-showcase-container">
            {/* Header */}
            <div className="certs-header-block">
              <div className="certs-badge-pill">
                <FaCertificate className="certs-badge-icon" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="section-title">Certifications &amp; Accreditations</h2>
              <p className="section-subtitle">
                Verified learning, technical expertise, and continuous professional growth.
              </p>
            </div>

            {/* Certification Cards Grid */}
            <div className="certs-grid" role="list">
              {(showAllCerts ? certifications : certifications.slice(0, CERTS_INITIAL_COUNT)).map((cert, index) => (
                <div
                  key={`${cert.title}-${index}`}
                  className={`cert-card-v2 ${cert.featured ? 'is-featured' : ''}`}
                  style={{
                    '--cert-accent': cert.accent || '#ff3b3b',
                    '--cert-delay': `${index * 80}ms`,
                  }}
                  onClick={() => setSelectedCert(cert)}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`Preview certificate: ${cert.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCert(cert); }}
                >
                  {/* Accent line at top */}
                  <div className="cert-accent-bar" aria-hidden="true" />

                  {/* Featured badge */}
                  {cert.featured && (
                    <span className="cert-featured-badge">
                      <TbSparklesCert /> Featured
                    </span>
                  )}

                  {/* Header row: icon + date */}
                  <div className="cert-card-header">
                    <div className="cert-icon-ring">
                      <FaAward />
                    </div>
                    <div className="cert-meta-col">
                      <span className="cert-category-label">{cert.category}</span>
                      <span className="cert-date-label">
                        <FaCalendarAlt className="cert-date-icon" /> {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="cert-card-title">{cert.title}</h4>

                  {/* Issuer */}
                  <p className="cert-card-issuer">Issued by <strong>{cert.issuer}</strong></p>

                  {/* Domain Tags */}
                  {cert.tags && cert.tags.length > 0 && (
                    <div className="cert-tags-row">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="cert-domain-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* View credential button */}
                  <button
                    type="button"
                    className="cert-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                  >
                    <FaEye className="btn-icon" /> View Credential
                  </button>

                  {/* Hover glow */}
                  <div className="cert-card-glow" aria-hidden="true" />
                </div>
              ))}
            </div>

            {/* View All toggle */}
            {certifications.length > CERTS_INITIAL_COUNT && (
              <div className="certs-expand-row">
                <button
                  type="button"
                  className="certs-expand-btn"
                  onClick={() => setShowAllCerts(!showAllCerts)}
                >
                  <FaChevronDown className={`expand-chevron ${showAllCerts ? 'rotated' : ''}`} />
                  {showAllCerts ? 'Show Fewer' : `View All ${certifications.length} Certifications`}
                </button>
              </div>
            )}
          </div>

          {/* Certificate Preview Modal (preserved) */}
          {selectedCert && (
            <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
              <div className="modal-content modern" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-top" onClick={() => setSelectedCert(null)} aria-label="Close modal">
                  ✖
                </button>

                <div className="modal-cert-grid">
                  <div className="modal-cert-info">
                    <h3><strong>{selectedCert.title}</strong></h3>
                    <p>
                      <strong>Issuer:</strong> {selectedCert.issuer}<br />
                      <strong>Date:</strong> {selectedCert.date}
                    </p>
                    {selectedCert.description && (
                      <p className="modal-cert-description">
                        {selectedCert.description}
                      </p>
                    )}
                    {selectedCert.tags && selectedCert.tags.length > 0 && (
                      <div className="modal-cert-tags">
                        {selectedCert.tags.map((tag) => (
                          <span key={tag} className="cert-domain-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                    {selectedCert.file && (
                      <a
                        href={selectedCert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-open-full-btn"
                        download={selectedCert.type === 'pdf' ? `${selectedCert.title}.pdf` : undefined}
                      >
                        <FaExternalLinkAlt className="btn-icon" /> Open Full Document
                      </a>
                    )}
                  </div>

                  <div className="modal-cert-preview">
                    {selectedCert.file ? (
                      selectedCert.type === "image" ? (
                        <img src={selectedCert.file} alt={selectedCert.title} className="cert-preview-img" />
                      ) : (
                        <iframe
                          src={selectedCert.file}
                          title={selectedCert.title}
                          className="cert-preview-pdf"
                        ></iframe>
                      )
                    ) : (
                      <p style={{ color: 'red' }}>Certificate preview not available.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Services & Capabilities Section — Client & Customer Centric */}
        <Services onSelectService={handleSelectService} />

        {/* Contact Section */}
        <section id="contact" className="contact-showcase">
          <div className="contact-container">
            <div className="contact-header">
              <h2 className="section-title">Get In Touch & Consultation</h2>
              <p className="contact-subtitle">
                Have an AI project, full-stack opportunity, or research collaboration in mind? Let's connect!
              </p>
            </div>

            <div className="contact-split-grid">
              {/* Left Column: Direct Info Card */}
              <div className="contact-info-card">
                <div className="contact-info-item">
                  <div className="contact-icon-bubble"><FaEnvelope /></div>
                  <div>
                    <span className="contact-label">Direct Email</span>
                    <a href="mailto:vikrantchakole36@gmail.com" className="contact-direct-link">
                      vikrantchakole36@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-bubble"><FaMapMarkerAlt /></div>
                  <div>
                    <span className="contact-label">Location</span>
                    <p className="contact-val">Nagpur, Maharashtra, India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-bubble"><FaClock /></div>
                  <div>
                    <span className="contact-label">Availability</span>
                    <p className="contact-val">Open for Opportunities & Collaborations</p>
                  </div>
                </div>

                <div className="contact-github-badge">
                  <a
                    href="https://github.com/VikrantChakole"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-star-pill"
                  >
                    <FaGithub className="github-icon" />
                    <span>Star Vikrant on GitHub</span>
                    <FaStar className="star-icon" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Quick Message Form */}
              <div className="contact-form-card">
                {formSent ? (
                  <div className="form-success-banner">
                    <FaCheckCircle className="success-icon" />
                    <h4>Message Received!</h4>
                    <p>Thank you for reaching out. Vikrant will reply to your email promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-msg">Message</label>
                      <textarea
                        id="contact-msg"
                        rows="4"
                        required
                        placeholder="Tell me about your project, idea, or role..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      <FaPaperPlane className="btn-icon" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Obsidian Crimson Footer */}
      <footer className="site-footer">
        <div className="container footer-container">
          <div className="footer-top">
            <a href="#home" className="footer-logo">
              vikrant chakole<span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Generative AI Developer & Full Stack Engineer • Transforming Ideas into Digital Reality.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/VikrantChakole" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/vikrant-chakole-a063a0269/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://x.com/VChakole2032" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com/vikrant.32_" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="mailto:vikrantchakole36@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              © {new Date().getFullYear()} Vikrant Chakole. All rights reserved.
            </p>
            <a href="#home" className="back-to-top-btn" aria-label="Back to top">
              <FaArrowUp className="arrow-up-icon" /> Back to Top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
