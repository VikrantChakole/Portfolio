import {
  SiPython,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiPostman,
  SiGit,
  SiGithub,
  SiJupyter,
  SiHuggingface,
  SiOpenai,
  SiLangchain,
  SiOpencv,
} from 'react-icons/si';

import {
  FaBrain,
  FaRobot,
  FaEye,
  FaDatabase,
  FaNetworkWired,
  FaProjectDiagram,
  FaSearch,
  FaLightbulb,
  FaUsers,
  FaExchangeAlt,
  FaComments,
  FaLayerGroup,
  FaCubes,
  FaObjectGroup,
  FaMagic,
  FaPuzzlePiece,
  FaSyncAlt,
  FaCrosshairs,
  FaMicrophone,
  FaTerminal,
  FaPlug,
  FaMobileAlt,
  FaVectorSquare,
  FaChartPie,
  FaServer,
  FaCode,
} from 'react-icons/fa';

import {
  TbApi,
  TbSql,
  TbBrain,
  TbVectorTriangle,
  TbSparkles,
} from 'react-icons/tb';

import { VscVscode } from 'react-icons/vsc';
import { MdAnimation } from 'react-icons/md';

/**
 * Validated Skill Categories configuration.
 * Strictly adheres to 9 categories, exactly once per skill, 0 duplicates, no Java.
 */
export const skillCategories = [
  {
    id: 'genai',
    title: 'Generative AI & LLM Engineering',
    badge: 'Core Specialization',
    isCoreFocus: true,
    categoryIcon: FaBrain,
    skills: [
      { name: 'Generative AI', icon: TbSparkles, color: '#ff3b3b' },
      { name: 'Large Language Models (LLMs)', icon: FaComments, color: '#00f7ff' },
      { name: 'Prompt Engineering', icon: FaTerminal, color: '#38bdf8' },
      { name: 'Retrieval-Augmented Generation (RAG)', icon: FaProjectDiagram, color: '#34d399' },
      { name: 'LangChain', icon: SiLangchain, color: '#22c55e' },
      { name: 'LangGraph', icon: FaNetworkWired, color: '#06b6d4' },
      { name: 'AI Agents', icon: FaRobot, color: '#a855f7' },
      { name: 'Multimodal AI', icon: FaLayerGroup, color: '#ec4899' },
    ],
  },
  {
    id: 'ml-vision',
    title: 'Machine Learning & Computer Vision',
    badge: 'Core Specialization',
    isCoreFocus: true,
    categoryIcon: FaEye,
    skills: [
      { name: 'Machine Learning', icon: TbBrain, color: '#3b82f6' },
      { name: 'Deep Learning', icon: FaCubes, color: '#6366f1' },
      { name: 'Computer Vision', icon: FaEye, color: '#10b981' },
      { name: 'YOLOv8', icon: FaCrosshairs, color: '#ef4444' },
      { name: 'Image Processing', icon: SiOpencv, color: '#5c8cbc' },
      { name: 'Object Detection', icon: FaObjectGroup, color: '#f59e0b' },
    ],
  },
  {
    id: 'ai-models',
    title: 'AI Models & Embeddings',
    badge: 'Core Specialization',
    isCoreFocus: true,
    categoryIcon: TbVectorTriangle,
    skills: [
      { name: 'Qwen2-VL', icon: FaEye, color: '#06b6d4' },
      { name: 'Whisper', icon: FaMicrophone, color: '#10a37f' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#ffd21e' },
      { name: 'Sentence Transformers', icon: FaExchangeAlt, color: '#8b5cf6' },
      { name: 'BGE Embeddings', icon: TbVectorTriangle, color: '#3b82f6' },
    ],
  },
  {
    id: 'programming-data',
    title: 'Programming & Data Science',
    badge: 'Foundation',
    isCoreFocus: false,
    categoryIcon: FaCode,
    skills: [
      { name: 'Python', icon: SiPython, color: '#38bdf8' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'SQL', icon: TbSql, color: '#00f7ff' },
      { name: 'Pandas', icon: SiPandas, color: '#e70488' },
      { name: 'NumPy', icon: SiNumpy, color: '#4dabcf' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    badge: 'Full Stack',
    isCoreFocus: false,
    categoryIcon: SiReact,
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'Angular', icon: SiAngular, color: '#dd0031' },
      { name: 'Responsive UI Development', icon: FaMobileAlt, color: '#38bdf8' },
      { name: 'UI Animations', icon: MdAnimation, color: '#ec4899' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & API Development',
    badge: 'Full Stack',
    isCoreFocus: false,
    categoryIcon: FaServer,
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Django', icon: SiDjango, color: '#2ba974' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
      { name: 'REST APIs', icon: TbApi, color: '#00f7ff' },
      { name: 'API Integration', icon: FaPlug, color: '#38bdf8' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Vector Search',
    badge: 'Data Layer',
    isCoreFocus: false,
    categoryIcon: FaDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'SQLite', icon: SiSqlite, color: '#2298bd' },
      { name: 'FAISS', icon: FaVectorSquare, color: '#3b82f6' },
      { name: 'ChromaDB', icon: FaDatabase, color: '#f97316' },
      { name: 'Vector Search', icon: FaSearch, color: '#00f7ff' },
      { name: 'Semantic Search', icon: FaBrain, color: '#a855f7' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Development Environment',
    badge: 'DevOps & Tooling',
    isCoreFocus: false,
    categoryIcon: SiGit,
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#f0f6fc' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
      { name: 'Jupyter Notebook', icon: SiJupyter, color: '#f37626' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional Skills',
    badge: 'Strengths',
    isCoreFocus: false,
    categoryIcon: FaLightbulb,
    skills: [
      { name: 'Problem Solving', icon: FaPuzzlePiece, color: '#f59e0b' },
      { name: 'Logical Thinking', icon: FaBrain, color: '#00f7ff' },
      { name: 'Analytical Thinking', icon: FaChartPie, color: '#38bdf8' },
      { name: 'Creativity', icon: FaLightbulb, color: '#f59e0b' },
      { name: 'Adaptability', icon: FaSyncAlt, color: '#ec4899' },
      { name: 'Team Collaboration', icon: FaUsers, color: '#a855f7' },
    ],
  },
];

/**
 * Validates that no skill appears in multiple categories.
 * Throws or logs if duplicates are detected.
 */
export const validateSkillsIntegrity = (categories = skillCategories) => {
  const seen = new Map();
  const duplicates = [];

  categories.forEach((cat) => {
    cat.skills.forEach((skill) => {
      const normalized = skill.name.trim().toLowerCase();
      if (seen.has(normalized)) {
        duplicates.push({
          skill: skill.name,
          firstIn: seen.get(normalized),
          duplicatedIn: cat.title,
        });
      } else {
        seen.set(normalized, cat.title);
      }
    });
  });

  return {
    isValid: duplicates.length === 0,
    totalSkills: seen.size,
    duplicates,
  };
};

// Run integrity check automatically
const validationResult = validateSkillsIntegrity(skillCategories);
if (!validationResult.isValid) {
  console.error('[Skills Integrity Check FAILED]: Duplicates found:', validationResult.duplicates);
}
