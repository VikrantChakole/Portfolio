export const clientCategories = [
  { id: 'all', label: 'All Solutions' },
  { id: 'mvp', label: '🚀 Launch an MVP (Startups)' },
  { id: 'ai', label: '🤖 GenAI & Smart Tools' },
  { id: 'automation', label: '⚡ Automations & APIs' },
  { id: 'security', label: '🛡️ Security & Audits' },
  { id: 'uiux', label: '🎨 UI/UX & Redesigns' },
];

export const clientGuarantees = [
  {
    icon: 'FaLock',
    title: '100% Code & IP Ownership',
    desc: 'You own every line of source code, repository, API key, and asset from day one. No vendor lock-in, ever.',
    accent: '#61dafb',
  },
  {
    icon: 'FaHandshake',
    title: 'Transparent Milestone Pricing',
    desc: 'Clear scope, fixed milestone deliverables, and zero unexpected surprise bills. You always know what is being built.',
    accent: '#10b981',
  },
  {
    icon: 'FaBolt',
    title: 'Rapid Turnaround & Demos',
    desc: 'Fast iterative development with live staging preview links and async video walkthroughs so you stay in total control.',
    accent: '#f59e0b',
  },
  {
    icon: 'FaShieldAlt',
    title: '30-Day Post-Launch Warranty',
    desc: 'Every project comes with 30 days of dedicated bug fixes and launch assistance included at no additional cost.',
    accent: '#ff3b3b',
  },
];

export const workProcessSteps = [
  {
    step: '01',
    title: 'Discovery & Goal Alignment',
    timeframe: 'Day 1 • 30-Min Call or Chat',
    desc: 'We clarify your business goals, target audience, must-have features, and ideal deadline. I translate your idea into a concrete technical roadmap without jargon.',
    deliverable: 'Scope summary, feature backlog & fixed timeline estimate',
  },
  {
    step: '02',
    title: 'Architecture & Clickable Wireframe',
    timeframe: 'Days 2–4',
    desc: 'Before writing complex backend code, I map out database models, user flows, and interactive UI wireframes to ensure our visions align 100%.',
    deliverable: 'Visual flow diagrams, DB schema, API design & UI preview',
  },
  {
    step: '03',
    title: 'Fast Sprints & Live Staging Previews',
    timeframe: 'Weekly Iterations',
    desc: 'I engineer in transparent sprints. You receive live password-protected staging links to test real features as they are built, with regular progress updates.',
    deliverable: 'Working milestone builds, weekly progress logs & direct feedback loops',
  },
  {
    step: '04',
    title: 'Production Launch & Handover',
    timeframe: 'Final Sprint + 30 Days',
    desc: 'We launch on your cloud host (Vercel, AWS, Render). I hand over all source code, environment documentation, and remain on standby for 30 days of free support.',
    deliverable: 'Live production URL, Git repository transfer, video handover & 30-day warranty',
  },
];

export const clientFaqs = [
  {
    question: 'Do I need detailed technical specifications before contacting you?',
    answer:
      'Not at all! Many founders start with a rough idea, a napkin sketch, or an existing spreadsheet. In our discovery chat, I will ask targeted questions to help you refine the core features, budget, and best technical stack.',
  },
  {
    question: 'Who owns the intellectual property and source code?',
    answer:
      'You do — 100%. All source code, Git repositories, custom prompts, database schemas, and documentation belong exclusively to you from the moment they are written.',
  },
  {
    question: 'Can you work with our existing codebase or product?',
    answer:
      'Yes! I frequently audit, enhance, and modernize existing codebases — whether you want to integrate a private GenAI assistant, optimize database queries, plug in third-party APIs, or harden security without breaking existing user flows.',
  },
  {
    question: 'How do we communicate throughout the project?',
    answer:
      'We communicate via your preferred channel — Slack, WhatsApp, Email, or Google Meet. You will have regular async updates, milestone demos, and live staging URLs so you never have to wonder what is happening.',
  },
  {
    question: 'What happens if a bug appears after the project is delivered?',
    answer:
      'Every project includes a 30-day post-launch warranty. If any bug or unexpected issue arises in the delivered scope within 30 days of launch, I resolve it promptly at zero extra charge.',
  },
];

export const servicesData = [
  {
    id: 'fullstack-mvp',
    category: 'mvp',
    badge: '⭐ Most Popular for Founders',
    title: 'Full-Stack Web App & MVP Development',
    tagline: 'Turn your idea into a live, scalable product ready for investors & paying users',
    iconType: 'FaRocket',
    accent: '#61dafb',
    clientProblem:
      'You have a validated business idea or customer demand, but lack an in-house engineering team and cannot afford to spend months waiting for an agency.',
    theSolution:
      'I engineer complete, revenue-ready web applications from scratch — intuitive frontends, secure user logins, real-time databases, and cloud deployment ready to onboard your first 1,000 customers.',
    businessROI: '⏱️ Launch in 2–4 weeks • 🔒 100% Code Ownership • 🚀 Zero technical debt',
    typicalTurnaround: '2 – 4 Weeks',
    deliverables: [
      'Complete frontend & backend architecture (React, Node.js, Express, MongoDB)',
      'User authentication (Email, Google OAuth) & role-based permissions',
      'Interactive customer dashboards, analytics & data management',
      'Third-party payment gateways (Stripe/PayPal) & email notifications',
      'Production cloud deployment on Vercel, Render, or AWS with SSL',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Vercel / AWS'],
  },
  {
    id: 'genai-agents',
    category: 'ai',
    badge: '🤖 High-ROI Enterprise AI',
    title: 'Custom GenAI Assistants & Knowledge RAG',
    tagline: 'Turn unstructured documents & business data into 24/7 intelligent teammates',
    iconType: 'FaRobot',
    accent: '#a855f7',
    clientProblem:
      'Your team wastes dozens of hours manually searching through PDFs, internal policies, training manuals, or repeating answers to identical customer inquiries.',
    theSolution:
      'I build private, hallucination-resistant AI assistants trained strictly on your company documents. They answer complex questions with exact source citations, automate workflows, and operate 24/7 with total data privacy.',
    businessROI: '⚡ Save 15+ hours/week per employee • 💬 Instant 24/7 answers • 🛡️ Private & secure',
    typicalTurnaround: '1 – 3 Weeks',
    deliverables: [
      'Private RAG document ingestion (PDFs, Notion, Google Docs, SQL databases)',
      'Vector semantic retrieval (FAISS, ChromaDB) with precise source citations',
      'Real-time streaming chat interface with markdown & code support',
      'Autonomous multi-step agent workflows using LangGraph & LangChain',
      'Enterprise safety guardrails & prompt-injection defenses',
    ],
    tech: ['LangChain', 'LangGraph', 'FAISS', 'Gemini API', 'Python', 'FastAPI'],
  },
  {
    id: 'automation-apis',
    category: 'automation',
    badge: '⚡ Operations Time-Saver',
    title: 'Workflow Automation & Custom API Pipelines',
    tagline: 'Connect your software ecosystem & eliminate manual data entry bottlenecks',
    iconType: 'FaPlug',
    accent: '#10b981',
    clientProblem:
      'Employees spend valuable time copy-pasting data between CRMs, spreadsheets, email tools, and payment platforms, causing delays and human errors.',
    theSolution:
      'I engineer resilient API connections, webhook listeners, and background workers that bridge your fragmented apps and automatically synchronize your business data in real time without human intervention.',
    businessROI: '📉 Cut operational costs by up to 70% • 🚫 Zero copy-paste errors • 🔄 Real-time sync',
    typicalTurnaround: '4 – 10 Days',
    deliverables: [
      'Custom high-performance RESTful & WebSocket API endpoints',
      'Seamless SaaS integrations (Stripe, WhatsApp, Google Workspace, GitHub)',
      'Automated background data scrapers, ETL workers & scheduled tasks',
      'Real-time webhook handlers with automatic retry & error alert systems',
      'Database query optimization, indexing & caching layers',
    ],
    tech: ['Node.js', 'FastAPI', 'Python', 'WebSockets', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'ai-integration',
    category: 'ai',
    badge: '🚀 Product Supercharger',
    title: 'AI Superpowers for Existing Platforms',
    tagline: 'Upgrade your existing product with smart AI capabilities without a rewrite',
    iconType: 'FaMagic',
    accent: '#f59e0b',
    clientProblem:
      'You already have a working software product, but need to add modern AI features (semantic smart search, auto-summaries, smart filtering) to stay ahead of competitors without risking existing code stability.',
    theSolution:
      'I integrate modular AI microservices directly into your existing codebase. Your users get cutting-edge intelligence while your current backend remains 100% stable and performant.',
    businessROI: '🏆 Leapfrog competitors • 📦 Drop-in integration • 💰 Zero downtime or rewrite',
    typicalTurnaround: '1 – 2 Weeks',
    deliverables: [
      'Intelligent semantic search & vector similarity matching (FAISS, Pinecone)',
      'Automated candidate/resume screening & scoring (like ResuMind AI)',
      'Document summarization, sentiment extraction & categorization pipelines',
      'Token usage monitoring, cost-control limits & fallback LLM providers',
      'Clean SDK or API wrapper for your current development team to use',
    ],
    tech: ['Vector Embeddings', 'OpenAI / Gemini', 'Python', 'Scikit-Learn', 'FastAPI'],
  },
  {
    id: 'security-hardening',
    category: 'security',
    badge: '🛡️ Fortinet Certified',
    title: 'Cybersecurity Hardening & OWASP Audits',
    tagline: 'Sleep soundly knowing your application, APIs, and client data are shielded',
    iconType: 'FaShieldAlt',
    accent: '#ef4444',
    clientProblem:
      'You are worried about data breaches, unauthorized access, OWASP vulnerabilities, or failing enterprise client security questionnaires before contract signing.',
    theSolution:
      'Backed by official Fortinet cybersecurity credentials, I perform in-depth vulnerability assessments, close security gaps, harden authentication systems, and implement data encryption to protect your reputation.',
    businessROI: '🛡️ Prevent costly data breaches • 📜 Pass client security audits • 🔒 Build trust',
    typicalTurnaround: '3 – 7 Days',
    deliverables: [
      'Full vulnerability assessment report with severity ratings & remediation steps',
      'Hardened authentication (JWT, OAuth2, Bcrypt hashing, secure HTTP cookies)',
      'OWASP Top 10 mitigation (SQL Injection, XSS, CSRF, broken access control)',
      'Strict API rate-limiting, CORS configuration & sensitive data encryption at rest',
      'Production deployment review & environment variable shielding',
    ],
    tech: ['OWASP Standards', 'JWT / OAuth2', 'Fortinet Protocols', 'Data Encryption'],
  },
  {
    id: 'uiux-engineering',
    category: 'uiux',
    badge: '✨ High-Conversion Aesthetic',
    title: 'Modern UI/UX Revamp & High-Conversion Frontends',
    tagline: 'Sleek, futuristic interfaces users genuinely love navigating every day',
    iconType: 'FaPaintBrush',
    accent: '#ec4899',
    clientProblem:
      'Your product looks outdated, loads slowly, or confuses visitors, resulting in high bounce rates, low sign-up conversions, and an amateurish impression.',
    theSolution:
      'I redesign and code modern, high-conversion interfaces — featuring captivating dark modes, obsidian-crimson aesthetics, smooth 60fps micro-animations, and responsive mobile layouts that build instant authority.',
    businessROI: '📈 Higher conversion rates • 💎 Premium brand credibility • 📱 100% Mobile fluid',
    typicalTurnaround: '1 – 2 Weeks',
    deliverables: [
      'Bespoke obsidian/crimson or clean modern dark/light UI design system',
      'Fluid micro-interactions, responsive states & interactive cards',
      'Pixel-perfect mobile, tablet & ultra-wide desktop responsiveness',
      'Core Web Vitals performance optimization & blazing fast load times',
      'Full WCAG accessibility & semantic SEO markup structure',
    ],
    tech: ['React', 'Vanilla CSS', 'SVG Animations', 'Glassmorphism', 'Responsive Design'],
  },
];
