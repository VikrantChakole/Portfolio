import React, { useState } from 'react';
import {
  FaRocket,
  FaRobot,
  FaPlug,
  FaMagic,
  FaShieldAlt,
  FaPaintBrush,
  FaLock,
  FaHandshake,
  FaBolt,
  FaCheck,
  FaClock,
  FaArrowRight,
  FaChevronDown,
  FaQuestionCircle,
  FaCogs,
  FaComments,
  FaLightbulb,
  FaExclamationCircle,
} from 'react-icons/fa';
import {
  servicesData,
  clientCategories,
  clientGuarantees,
  workProcessSteps,
  clientFaqs,
} from './servicesData';
import './Services.css';

// Icon mapper for dynamic string icon types
const renderServiceIcon = (iconType) => {
  switch (iconType) {
    case 'FaRocket':
      return <FaRocket />;
    case 'FaRobot':
      return <FaRobot />;
    case 'FaPlug':
      return <FaPlug />;
    case 'FaMagic':
      return <FaMagic />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaPaintBrush':
      return <FaPaintBrush />;
    case 'FaLock':
      return <FaLock />;
    case 'FaHandshake':
      return <FaHandshake />;
    case 'FaBolt':
      return <FaBolt />;
    default:
      return <FaCogs />;
  }
};

const Services = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(0); // First FAQ open by default
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleDetails = (serviceId) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((srv) => srv.category === activeCategory);

  const handleInquire = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="services-section" aria-label="Services and Capabilities">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header-block">
          <div className="services-badge-pill">
            <FaCogs className="services-badge-icon" />
            <span>Built For Clients &amp; Founders</span>
          </div>
          <h2 className="section-title">Services &amp; Capabilities</h2>
          <p className="section-subtitle">
            Engineered for founders, startups, and growing teams. No confusing tech jargon — just clear business outcomes, guaranteed code ownership, and fast, predictable delivery.
          </p>

          {/* Quick Category / Problem Filter */}
          <div className="services-filter-bar" role="tablist" aria-label="Filter Services">
            {clientCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`services-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          {filteredServices.map((service, index) => {
            const isExpanded = expandedDetails[service.id];
            return (
              <div
                key={service.id}
                className="client-service-card"
                style={{
                  '--srv-accent': service.accent,
                  '--srv-delay': `${index * 80}ms`,
                }}
              >
                {/* Glowing Accent Top Bar */}
                <div className="srv-card-top-bar" aria-hidden="true" />

                {/* Card Top: Badge & Turnaround */}
                <div className="srv-card-meta-row">
                  <span className="srv-highlight-badge">{service.badge}</span>
                  <span className="srv-turnaround-badge">
                    <FaClock className="srv-meta-icon" />
                    <span>{service.typicalTurnaround}</span>
                  </span>
                </div>

                {/* Service Header */}
                <div className="srv-card-head">
                  <div className="srv-avatar-ring">
                    {renderServiceIcon(service.iconType)}
                  </div>
                  <div>
                    <h3 className="srv-title-text">{service.title}</h3>
                    <p className="srv-tagline-text">{service.tagline}</p>
                  </div>
                </div>

                {/* Plain-English Problem ➔ Solution Comparison Box */}
                <div className="srv-problem-solution-box">
                  <div className="srv-problem-row">
                    <div className="srv-row-icon-col problem">
                      <FaExclamationCircle />
                    </div>
                    <div className="srv-row-text">
                      <span className="srv-row-label">The Problem You Face:</span>
                      <p>{service.clientProblem}</p>
                    </div>
                  </div>

                  <div className="srv-solution-row">
                    <div className="srv-row-icon-col solution">
                      <FaLightbulb />
                    </div>
                    <div className="srv-row-text">
                      <span className="srv-row-label">How I Solve It:</span>
                      <p>{service.theSolution}</p>
                    </div>
                  </div>
                </div>

                {/* Key Business ROI Pill */}
                <div className="srv-roi-banner">
                  <span className="srv-roi-title">Business Outcome:</span>
                  <span className="srv-roi-val">{service.businessROI}</span>
                </div>

                {/* Deliverables Block */}
                <div className="srv-deliverables-container">
                  <div className="srv-deliverables-header">
                    <span className="srv-deliverables-heading">What You Receive:</span>
                    <button
                      type="button"
                      className="srv-toggle-details-btn"
                      onClick={() => toggleDetails(service.id)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Hide scope' : 'Full scope view'}
                    </button>
                  </div>

                  <ul className={`srv-deliverables-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="srv-deliverable-entry">
                        <FaCheck className="srv-check-symbol" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills (for technical advisors/reviewers) */}
                <div className="srv-tech-wrapper">
                  <span className="srv-tech-label">Core Technologies:</span>
                  <div className="srv-tech-tags-list">
                    {service.tech.map((t) => (
                      <span key={t} className="srv-tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="srv-card-actions">
                  <button
                    type="button"
                    className="srv-primary-action-btn"
                    onClick={() => handleInquire(service.title)}
                  >
                    <span>Discuss This Project</span>
                    <FaArrowRight className="srv-btn-arrow" />
                  </button>
                </div>

                {/* Card Glow */}
                <div className="srv-ambient-glow" aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* -------------------------------------------------------------
            Section 2: "How We Work Together" — 4-Step Transparent Roadmap
            ------------------------------------------------------------- */}
        <div className="client-roadmap-block">
          <div className="roadmap-header">
            <span className="roadmap-sub-badge">Zero Guesswork • Complete Transparency</span>
            <h3 className="roadmap-title">How We Build Together (Step-by-Step)</h3>
            <p className="roadmap-desc">
              Hiring a developer shouldn't feel like a black box. Here is the exact, collaborative process from our first message to live launch.
            </p>
          </div>

          <div className="roadmap-steps-grid">
            {workProcessSteps.map((step) => (
              <div key={step.step} className="roadmap-step-card">
                <div className="step-number-tag">{step.step}</div>
                <div className="step-timeframe">{step.timeframe}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                <div className="step-deliverable-box">
                  <span className="step-deliv-label">Tangible Deliverable:</span>
                  <span className="step-deliv-text">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------
            Section 3: Client Guarantees & Peace-of-Mind Trust Pillars
            ------------------------------------------------------------- */}
        <div className="client-guarantees-block">
          <div className="guarantees-header">
            <span className="guarantee-pill">Your Peace of Mind</span>
            <h3 className="guarantee-heading">The Client Satisfaction Standard</h3>
            <p className="guarantee-subheading">
              Every partnership is backed by clear contracts, direct communication, and enterprise-grade reliability.
            </p>
          </div>

          <div className="guarantees-grid">
            {clientGuarantees.map((item, idx) => (
              <div
                key={idx}
                className="guarantee-card"
                style={{ '--g-accent': item.accent }}
              >
                <div className="guarantee-icon-wrap">
                  {renderServiceIcon(item.icon)}
                </div>
                <h4 className="guarantee-card-title">{item.title}</h4>
                <p className="guarantee-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------
            Section 4: Client FAQ Accordion
            ------------------------------------------------------------- */}
        <div className="client-faq-block">
          <div className="faq-header">
            <div className="faq-badge-row">
              <FaQuestionCircle className="faq-badge-icon" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="faq-heading">Got Questions Before Getting Started?</h3>
            <p className="faq-subheading">
              Everything you need to know about working together, pricing models, intellectual property, and timelines.
            </p>
          </div>

          <div className="faq-accordion-list">
            {clientFaqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <FaChevronDown
                      className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------------
            Section 5: Direct Conversion CTA Banner
            ------------------------------------------------------------- */}
        <div className="services-cta-banner">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">Ready to Turn Ideas into Working Code?</span>
            <h3 className="cta-banner-title">
              Have an Idea, MVP, or AI Automation in Mind?
            </h3>
            <p className="cta-banner-desc">
              Let's schedule a free 20-minute discovery chat. We'll discuss your goals, explore solutions, and provide an initial timeline estimate — completely free with zero commitment.
            </p>
            <div className="cta-btn-group">
              <button
                type="button"
                className="cta-primary-action"
                onClick={() => handleInquire('General Consultation / MVP Discovery')}
              >
                <FaComments className="btn-icon" />
                <span>Start a Project Inquiry</span>
              </button>
              <a href="mailto:vikrantchakole36@gmail.com" className="cta-secondary-action">
                <span>Direct Email: vikrantchakole36@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
