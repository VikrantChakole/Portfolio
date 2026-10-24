import React, { useState, useEffect, useRef } from 'react';
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaBookOpen,
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

/**
 * Timeline milestone data.
 * Easily maintained and extensible for future updates.
 */
const timelineData = [
  {
    id: 'tcs-internship',
    title: 'Project Intern – Tata Consultancy Services (TCS)',
    organization: 'Tata Consultancy Services (TCS)',
    period: 'Feb 2026 – Sep 2026',
    type: 'experience',
    theme: 'tcs',
    badge: 'Latest Milestone',
    isLatest: true,
    description:
      'Working in the Generative AI domain, contributing to AI-powered solutions and strengthening skills in Python, LLMs, RAG, LangChain, LangGraph, and machine learning.',
    skills: ['Python', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'Machine Learning'],
    icon: FaBriefcase,
  },
  {
    id: 'btech-degree',
    title: 'B.Tech – Computer Science Engineering (Cyber Security)',
    organization: 'St. Vincent Pallotti College of Engineering and Technology, Nagpur',
    period: '2022 – 2026',
    type: 'education',
    theme: 'cyan',
    badge: 'Undergraduate Degree',
    isLatest: false,
    description:
      'Completed graduation with a focus on software development, AI, machine learning, and secure computing systems.',
    skills: ['Cyber Security', 'Software Development', 'AI & ML', 'Secure Computing Systems'],
    icon: FaGraduationCap,
  },
  {
    id: 'techsaksham-internship',
    title: 'Internship – TechSaksham',
    organization: 'TechSaksham',
    period: 'August 2024 – November 2024',
    type: 'internship',
    theme: 'emerald',
    badge: 'Internship',
    isLatest: false,
    description:
      'Developed full-stack applications, integrated APIs, and gained practical experience in web development and deployment.',
    skills: ['Full-Stack Applications', 'API Integration', 'Web Development', 'Deployment'],
    icon: FaLaptopCode,
  },
  {
    id: 'higher-secondary',
    title: 'Higher Secondary Education – Science / Computer Science',
    organization: 'Major Hemant Jakate Institute of Science',
    period: '2022',
    type: 'education',
    theme: 'amber',
    badge: 'Higher Secondary',
    isLatest: false,
    description:
      'Built foundational knowledge in programming, logical thinking, and computer science.',
    skills: ['Computer Science', 'Programming', 'Logical Thinking'],
    icon: FaBookOpen,
  },
  {
    id: 'schooling',
    title: 'Schooling',
    organization: 'St. Paul High School',
    period: '2020',
    type: 'schooling',
    theme: 'violet',
    badge: 'Schooling',
    isLatest: false,
    description:
      'Developed strong fundamentals in mathematics, problem-solving, and teamwork.',
    skills: ['Mathematics', 'Problem Solving', 'Teamwork'],
    icon: FaSchool,
  },
];

const TimelineItem = ({ item, index, isVisible }) => {
  const IconComponent = item.icon;
  const isLeft = index % 2 === 0;
  const positionClass = isLeft ? 'timeline-item-left' : 'timeline-item-right';
  const latestClass = item.isLatest ? 'is-latest' : '';
  const visibleClass = isVisible ? 'is-in-view' : '';
  const themeClass = `theme-${item.theme || item.type}`;

  return (
    <article
      className={`timeline-item ${positionClass} ${latestClass} ${visibleClass} ${themeClass}`}
      id={`timeline-item-${item.id}`}
      aria-label={`${item.title} (${item.period})`}
    >
      {/* Central Interactive / Glowing Dot with Distinct Category Icon */}
      <div className={`timeline-dot-wrapper ${latestClass} ${themeClass}`} aria-hidden="true">
        <div className="timeline-dot-core">
          <IconComponent className="timeline-dot-icon" />
        </div>
        {item.isLatest && (
          <>
            <span className="timeline-pulse-ring" />
            <span className="timeline-pulse-ring-outer" />
          </>
        )}
      </div>

      {/* Connecting Arm from Axis to Card (Desktop) */}
      <div className={`timeline-connector ${themeClass}`} aria-hidden="true" />

      {/* Timeline Card */}
      <div className={`timeline-card ${latestClass} ${themeClass}`}>
        {/* Luminous Top Accent Bar */}
        <div className="timeline-card-accent-bar" aria-hidden="true" />

        {/* Header with Badges and Period */}
        <div className="timeline-card-header">
          <div className="timeline-badges-wrap">
            <span className={`timeline-category-tag ${themeClass} type-${item.type}`}>
              {item.badge}
            </span>
            {item.isLatest && (
              <span className="timeline-status-pill">
                <span className="status-dot" />
                Current Role
              </span>
            )}
          </div>
          <div className={`timeline-date-chip ${themeClass}`}>
            <FaCalendarAlt className="timeline-date-icon" />
            <time>{item.period}</time>
          </div>
        </div>

        {/* Milestone Title */}
        <h3 className="timeline-item-title">{item.title}</h3>

        {/* Organization / Institute */}
        {item.organization && (
          <p className={`timeline-organization ${themeClass}`}>
            <FaMapMarkerAlt className="timeline-org-icon" />
            <span>{item.organization}</span>
          </p>
        )}

        {/* Description */}
        <p className="timeline-description">{item.description}</p>

        {/* Skill / Technology Pills */}
        {item.skills && item.skills.length > 0 && (
          <div className="timeline-skills-list" aria-label="Key competencies and skills">
            {item.skills.map((skill, sIdx) => (
              <span key={sIdx} className={`timeline-skill-pill ${themeClass}`}>
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLineProgress(100);
      const allVisible = {};
      timelineData.forEach((_, idx) => {
        allVisible[idx] = true;
      });
      setVisibleItems(allVisible);
      return;
    }

    // Scroll listener for progressive line drawing
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing as container enters the viewport
      const startTrigger = windowHeight * 0.75;
      const totalDist = rect.height;
      const currentDist = startTrigger - rect.top;

      let pct = (currentDist / totalDist) * 100;
      pct = Math.max(0, Math.min(100, pct));
      setLineProgress(pct);

      // Check item visibility during scroll as well
      timelineData.forEach((item, index) => {
        const el = document.getElementById(`timeline-item-${item.id}`);
        if (el) {
          const itemRect = el.getBoundingClientRect();
          if (itemRect.top < windowHeight * 0.88) {
            setVisibleItems((prev) => (prev[index] ? prev : { ...prev, [index]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger on initial mount
    handleScroll();

    // IntersectionObserver for element entries
    const observers = [];
    timelineData.forEach((item, index) => {
      const el = document.getElementById(`timeline-item-${item.id}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => ({ ...prev, [index]: true }));
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section
      className="timeline-section"
      id="timeline-section"
      aria-label="My Journey timeline"
    >
      {/* Ambient Atmospheric Lighting Halos */}
      <div className="timeline-ambient-halo halo-top" aria-hidden="true" />
      <div className="timeline-ambient-halo halo-bottom" aria-hidden="true" />

      <div className="timeline-header-wrap section-header-block">
        <h2 className="section-title" data-watermark="JOURNEY">
          My <span className="title-accent">Journey<span className="title-dot">.</span></span>
        </h2>
        <p className="section-subtitle">
          My academic foundation, internships, and journey into Generative AI &amp; Software Engineering.
        </p>
      </div>

      <div className="timeline-container" ref={containerRef}>
        {/* Vertical Track Base */}
        <div className="timeline-line-track" aria-hidden="true" />

        {/* Progressive Dynamic Drawing Line */}
        <div
          className="timeline-line-progress"
          style={{ height: `${lineProgress}%` }}
          aria-hidden="true"
        >
          <div className="timeline-line-glow-cursor" />
        </div>

        {/* Timeline Items */}
        <div className="timeline-items-list" role="list">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isVisible={!!visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
