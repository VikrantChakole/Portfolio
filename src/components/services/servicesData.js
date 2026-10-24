export const clientGuarantees = [
  {
    icon: 'FaLock',
    title: '100% Code & IP Ownership',
    desc: 'You own every line of code, repository, API key, and asset from day one. Zero vendor lock-in.',
    accent: '#61dafb',
  },
  {
    icon: 'FaHandshake',
    title: 'Milestone-Based Pricing',
    desc: 'Transparent milestones, clear deliverables, and zero surprise invoices. You always know what is being built.',
    accent: '#10b981',
  },
  {
    icon: 'FaBolt',
    title: 'Rapid Sprints & Live Previews',
    desc: 'Iterative development with live staging preview links and async video demos so you stay in total control.',
    accent: '#f59e0b',
  },
  {
    icon: 'FaShieldAlt',
    title: '30-Day Post-Launch Warranty',
    desc: 'Every project includes 30 days of dedicated bug fixes and support at zero extra charge.',
    accent: '#40ff00',
  },
];

export const workProcessSteps = [
  {
    step: '01',
    title: 'Discovery & Roadmap',
    timeframe: 'Day 1 • 30-Min Chat',
    desc: 'We align on goals, target users, and key features to map out a clear technical plan without tech jargon.',
    deliverable: 'Feature backlog & fixed timeline estimate',
  },
  {
    step: '02',
    title: 'Architecture & UI Flow',
    timeframe: 'Days 2–4',
    desc: 'We establish database schemas, API contracts, and interactive UI wireframes so expectations match 100%.',
    deliverable: 'Visual user flow, DB schema & UI preview',
  },
  {
    step: '03',
    title: 'Agile Build & Staging Demos',
    timeframe: 'Weekly Sprints',
    desc: 'Fast, modular development with password-protected live staging links to test real features as they are built.',
    deliverable: 'Live working builds & weekly progress logs',
  },
  {
    step: '04',
    title: 'Production Launch & Handover',
    timeframe: 'Final Sprint + 30 Days',
    desc: 'Deployment to your cloud (Vercel, AWS, Render), full repository transfer, and 30 days of post-launch warranty.',
    deliverable: 'Live URL, source code transfer & 30-day warranty',
  },
];

export const clientFaqs = [
  {
    question: 'Do I need detailed technical specifications before contacting you?',
    answer:
      'Not at all! Many founders start with a rough idea or a napkin sketch. In our initial discovery chat, I will ask targeted questions to help refine your core features, timeline, and ideal technical stack.',
  },
  {
    question: 'Who owns the intellectual property and source code?',
    answer:
      'You do — 100%. All source code, Git repositories, custom prompts, database schemas, and documentation belong exclusively to you from the moment they are written.',
  },
  {
    question: 'Can you work with our existing codebase or product?',
    answer:
      'Yes! I regularly audit, enhance, and modernize existing codebases — whether you want to integrate a private GenAI assistant, optimize database queries, or plug in third-party APIs without breaking existing user flows.',
  },
  {
    question: 'How do we communicate throughout the project?',
    answer:
      'We communicate via your preferred channel — Slack, WhatsApp, Email, or Google Meet. You receive regular async updates, milestone demos, and live staging URLs so you never have to wonder what is happening.',
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
    badge: '⭐ Top Founder Choice',
    title: 'Full-Stack Web App & MVP Development',
    tagline: 'Turn your idea into a live, scalable product ready for investors and paying users.',
    iconType: 'FaRocket',
    accent: '#61dafb',
    turnaround: '2–4 Weeks',
    problem: 'Validated idea or customer demand, but no engineering team to build it fast.',
    solution: 'Turnkey, revenue-ready web app engineered and cloud-deployed in weeks.',
    outcome: '⏱️ Launch in 2–4 wks • 🔒 100% IP ownership • 🚀 Zero technical debt',
    highlights: [
      'Modern React + Node.js full-stack architecture',
      'Secure user authentication (OAuth & JWT) & role-based dashboards',
      'Payment gateway integration (Stripe/PayPal) & notifications',
      'Production cloud deployment on Vercel, Render, or AWS with SSL',
    ],
    fullDeliverables: [
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
    badge: '🤖 High-ROI Enterprise AI',
    title: 'Custom GenAI Assistants & Knowledge RAG',
    tagline: 'Transform company documents and business data into 24/7 intelligent teammates.',
    iconType: 'FaRobot',
    accent: '#a855f7',
    turnaround: '1–3 Weeks',
    problem: 'Teams waste hours searching through PDFs, policies, or repetitive customer inquiries.',
    solution: 'Hallucination-resistant RAG AI that cites exact sources with 100% data privacy.',
    outcome: '⚡ Save 15+ hrs/wk per teammate • 💬 Instant 24/7 answers • 🛡️ Private & secure',
    highlights: [
      'Private document ingestion (PDFs, Notion, SQL databases)',
      'Vector semantic search (FAISS, ChromaDB) with precise citations',
      'Real-time streaming chat UI with markdown & code support',
      'Autonomous multi-step agent workflows using LangGraph & LangChain',
    ],
    fullDeliverables: [
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
    badge: '⚡ Operations Time-Saver',
    title: 'Workflow Automation & Custom API Pipelines',
    tagline: 'Connect your software ecosystem and eliminate manual copy-paste bottlenecks.',
    iconType: 'FaPlug',
    accent: '#10b981',
    turnaround: '4–10 Days',
    problem: 'Employees waste time copy-pasting data between CRMs, spreadsheets, and tools.',
    solution: 'Resilient webhooks and automated background workers syncing data in real time.',
    outcome: '📉 Cut operational costs up to 70% • 🚫 Zero copy errors • 🔄 Real-time sync',
    highlights: [
      'Custom high-performance RESTful & WebSocket API endpoints',
      'SaaS integrations (Stripe, WhatsApp, Google Workspace, GitHub)',
      'Automated background data scrapers & scheduled ETL tasks',
      'Webhook listeners with automatic retries and error alert systems',
    ],
    fullDeliverables: [
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
    badge: '🚀 Product Supercharger',
    title: 'AI Superpowers for Existing Platforms',
    tagline: 'Upgrade your existing software with smart AI capabilities without a rewrite.',
    iconType: 'FaMagic',
    accent: '#f59e0b',
    turnaround: '1–2 Weeks',
    problem: 'Competitors are shipping AI features while your current product risks falling behind.',
    solution: 'Modular AI microservices plugged directly into your existing codebase with zero downtime.',
    outcome: '🏆 Outpace competitors • 📦 Drop-in integration • 💰 Zero downtime or rewrite',
    highlights: [
      'Semantic smart search & vector similarity matching (FAISS)',
      'Automated resume & document screening/scoring pipelines',
      'Smart summarization, sentiment extraction & categorization',
      'Token usage monitoring, cost-control limits & fallback LLMs',
    ],
    fullDeliverables: [
      'Intelligent semantic search & vector similarity matching (FAISS, Pinecone)',
      'Automated candidate/resume screening & scoring (like ResuMind AI)',
      'Document summarization, sentiment extraction & categorization pipelines',
      'Token usage monitoring, cost-control limits & fallback LLM providers',
      'Clean SDK or API wrapper for your current development team to use',
    ],
    tech: ['Vector Embeddings', 'OpenAI / Gemini', 'Python', 'Scikit-Learn', 'FastAPI'],
  },
  {
    id: 'uiux-engineering',
    badge: '✨ High-Conversion Aesthetic',
    title: 'Modern UI/UX Revamp & High-Conversion Frontends',
    tagline: 'Sleek, futuristic interfaces users genuinely love navigating every day.',
    iconType: 'FaPaintBrush',
    accent: '#ec4899',
    turnaround: '1–2 Weeks',
    problem: 'Outdated or slow UI with poor navigation drives potential customers away.',
    solution: 'Modern obsidian cyber-green interface with smooth 60fps micro-animations and blazing speed.',
    outcome: '📈 Higher conversion rates • 💎 Premium brand credibility • 📱 100% Fluid mobile',
    highlights: [
      'Bespoke obsidian glassmorphism & cyber-green design system',
      'Fluid micro-interactions, responsive states & interactive cards',
      'Pixel-perfect mobile, tablet & desktop responsiveness',
      'Core Web Vitals performance optimization & blazing fast load',
    ],
    fullDeliverables: [
      'Bespoke obsidian cyber-green or clean modern dark/light UI design system',
      'Fluid micro-interactions, responsive states & interactive cards',
      'Pixel-perfect mobile, tablet & ultra-wide desktop responsiveness',
      'Core Web Vitals performance optimization & blazing fast load times',
      'Full WCAG accessibility & semantic SEO markup structure',
    ],
    tech: ['React', 'Vanilla CSS', 'SVG Animations', 'Glassmorphism', 'Responsive Design'],
  },
];
