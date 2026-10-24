import React, { useState, useEffect } from 'react';
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
  FaChevronUp,
  FaQuestionCircle,
  FaCogs,
  FaComments,
  FaCheckCircle,
  FaTimes,
} from 'react-icons/fa';
import {
  servicesData,
  clientGuarantees,
  workProcessSteps,
  clientFaqs,
} from './servicesData';
import './Services.css';

// Dynamic icon resolver
const renderIcon = (iconName) => {
  switch (iconName) {
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
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(0);

  // Close modal on Escape key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedDomain(null);
      }
    };

    if (selectedDomain) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedDomain]);

  const handleNextDomain = () => {
    if (!selectedDomain) return;
    const currentIndex = servicesData.findIndex((s) => s.id === selectedDomain.id);
    const nextIndex = (currentIndex + 1) % servicesData.length;
    setSelectedDomain(servicesData[nextIndex]);
  };

  const handlePrevDomain = () => {
    if (!selectedDomain) return;
    const currentIndex = servicesData.findIndex((s) => s.id === selectedDomain.id);
    const prevIndex = (currentIndex - 1 + servicesData.length) % servicesData.length;
    setSelectedDomain(servicesData[prevIndex]);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
      {/* Background ambient lighting */}
      <div className="services-ambient-halo" aria-hidden="true" />

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header-block section-header-block">
          <h2 className="section-title" data-watermark="SERVICES">
            Services &amp; <span className="title-accent">Capabilities<span className="title-dot">.</span></span>
          </h2>
        </div>

        {/* Scannable Domain Preview Cards Grid */}
        <div className="services-cards-grid compact-grid" role="list">
          {servicesData.map((service, index) => {
            return (
              <article
                key={service.id}
                className="client-service-card compact-domain-card"
                style={{
                  '--srv-accent': service.accent,
                  '--srv-delay': `${index * 60}ms`,
                }}
                onClick={() => setSelectedDomain(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedDomain(service);
                  }
                }}
                aria-label={`Inspect ${service.title} domain details`}
              >
                {/* Glowing Top Accent Bar */}
                <div className="srv-card-top-bar" aria-hidden="true" />

                {/* Card Top Meta: Badge & Speed */}
                <div className="srv-card-meta-row">
                  <span className="srv-highlight-badge">{service.badge}</span>
                  <div className="srv-turnaround-badge">
                    <FaClock className="srv-meta-icon" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                {/* Service Header: Icon + Title + 1-line Tagline */}
                <div className="srv-card-head">
                  <div className="srv-avatar-ring">
                    {renderIcon(service.iconType)}
                  </div>
                  <div className="srv-title-wrapper">
                    <h3 className="srv-title-text">{service.title}</h3>
                    <p className="srv-tagline-text">{service.tagline}</p>
                  </div>
                </div>

                {/* Core Tech Stack Preview */}
                <div className="srv-tech-preview">
                  <div className="srv-tech-tags-list">
                    {service.tech.slice(0, 4).map((t) => (
                      <span key={t} className="srv-tech-badge">
                        {t}
                      </span>
                    ))}
                    {service.tech.length > 4 && (
                      <span className="srv-tech-badge srv-more-badge">
                        +{service.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Row: Click to view details */}
                <div className="srv-card-bottom-action">
                  <span className="srv-click-prompt">
                    <span>View Technical Scope &amp; Details</span>
                    <FaArrowRight className="srv-btn-arrow" />
                  </span>
                </div>

                {/* Ambient Radial Hover Glow */}
                <div className="srv-ambient-glow" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        {/* Domain Deep-Dive Detail Modal */}
        {selectedDomain && (
          <div
            className="srv-modal-backdrop"
            onClick={() => setSelectedDomain(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
          >
            <div
              className="srv-modal-window"
              onClick={(e) => e.stopPropagation()}
              style={{ '--srv-accent': selectedDomain.accent }}
            >
              {/* Luminous Top Bar */}
              <div className="srv-modal-top-bar" aria-hidden="true" />

              {/* Close Button */}
              <button
                type="button"
                className="srv-modal-close-btn"
                onClick={() => setSelectedDomain(null)}
                aria-label="Close domain details"
              >
                <FaTimes />
              </button>

              {/* Modal Header */}
              <div className="srv-modal-header">
                <div className="srv-modal-avatar-ring">
                  {renderIcon(selectedDomain.iconType)}
                </div>
                <div className="srv-modal-title-wrap">
                  <div className="srv-card-meta-row modal-meta">
                    <span className="srv-highlight-badge">{selectedDomain.badge}</span>
                    <div className="srv-turnaround-badge">
                      <FaClock className="srv-meta-icon" />
                      <span>Estimated Timeline: {selectedDomain.turnaround}</span>
                    </div>
                  </div>
                  <h3 id="modal-service-title" className="srv-modal-title">
                    {selectedDomain.title}
                  </h3>
                  <p className="srv-modal-tagline">{selectedDomain.tagline}</p>
                </div>
              </div>

              {/* Modal Content Sections */}
              <div className="srv-modal-body">
                {/* Challenge & Solution */}
                <div className="srv-contrast-box modal-contrast">
                  <div className="srv-contrast-row pain">
                    <span className="contrast-tag">The Challenge:</span>
                    <span className="contrast-text">{selectedDomain.problem}</span>
                  </div>
                  <div className="srv-contrast-row solution">
                    <span className="contrast-tag">My Solution:</span>
                    <span className="contrast-text">{selectedDomain.solution}</span>
                  </div>
                </div>

                {/* Value Outcome Pill */}
                <div className="srv-outcome-pill modal-outcome">
                  <span className="outcome-label">Value Impact &amp; ROI:</span>
                  <span className="outcome-text">{selectedDomain.outcome}</span>
                </div>

                {/* Full Scope & Deliverables Checklist */}
                <div className="srv-modal-section">
                  <h4 className="srv-modal-subheading">
                    <FaCheckCircle className="modal-subheading-icon" />
                    Included Scope &amp; Deliverables:
                  </h4>
                  <ul className="srv-modal-deliverables-list">
                    {selectedDomain.fullDeliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="srv-modal-deliverable-entry">
                        <FaCheck className="srv-check-symbol" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architectural Tech Stack */}
                <div className="srv-modal-section">
                  <h4 className="srv-modal-subheading">
                    <FaCogs className="modal-subheading-icon" />
                    Core Architecture &amp; Tech Stack:
                  </h4>
                  <div className="srv-tech-tags-list modal-tech-list">
                    {selectedDomain.tech.map((t) => (
                      <span key={t} className="srv-tech-badge modal-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="srv-modal-footer">
                <div className="srv-modal-pager">
                  <button
                    type="button"
                    className="srv-pager-btn"
                    onClick={() => handlePrevDomain()}
                    aria-label="Previous domain"
                  >
                    ← Previous
                  </button>
                  <span className="srv-pager-indicator">
                    {servicesData.findIndex((s) => s.id === selectedDomain.id) + 1} of {servicesData.length}
                  </span>
                  <button
                    type="button"
                    className="srv-pager-btn"
                    onClick={() => handleNextDomain()}
                    aria-label="Next domain"
                  >
                    Next →
                  </button>
                </div>

                <button
                  type="button"
                  className="srv-primary-action-btn modal-cta"
                  onClick={() => {
                    const title = selectedDomain.title;
                    setSelectedDomain(null);
                    handleInquire(title);
                  }}
                >
                  <span>Discuss This Domain</span>
                  <FaArrowRight className="srv-btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------
            Section 2: Streamlined 4-Step Collaborative Roadmap
            ------------------------------------------------------------- */}
        <div className="client-roadmap-block">
          <div className="roadmap-header">
            <span className="roadmap-sub-badge">Zero Guesswork • Complete Transparency</span>
            <h3 className="roadmap-title">How We Build Together (Step-by-Step)</h3>
            <p className="roadmap-desc">
              Hiring shouldn't feel like a black box. Here is the transparent, milestone-driven process from first message to live launch.
            </p>
          </div>

          <div className="roadmap-stepper-track">
            {workProcessSteps.map((step) => (
              <div key={step.step} className="roadmap-step-card">
                <div className="step-card-header">
                  <span className="step-num-pill">{step.step}</span>
                  <span className="step-timeframe-tag">{step.timeframe}</span>
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                <div className="step-deliverable-box">
                  <span className="step-deliv-label">Deliverable:</span>
                  <span className="step-deliv-text">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------
            Section 3: Client Guarantees (Trust Pillars)
            ------------------------------------------------------------- */}
        <div className="client-guarantees-block">
          <div className="guarantees-header">
            <span className="guarantee-pill">Total Peace of Mind</span>
            <h3 className="guarantee-heading">The Client Satisfaction Standard</h3>
            <p className="guarantee-subheading">
              Every project is backed by clean contracts, prompt daily communication, and enterprise-grade reliability.
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
                  {renderIcon(item.icon)}
                </div>
                <h4 className="guarantee-card-title">{item.title}</h4>
                <p className="guarantee-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------
            Section 4: FAQ Accordion
            ------------------------------------------------------------- */}
        <div className="client-faq-block">
          <div className="faq-header">
            <div className="faq-badge-row">
              <FaQuestionCircle className="faq-badge-icon" />
              <span>Got Questions?</span>
            </div>
            <h3 className="faq-heading">Frequently Asked Questions</h3>
            <p className="faq-subheading">
              Everything you need to know about pricing models, code ownership, timelines, and communication.
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
              Let's schedule a free 20-minute discovery chat. We'll clarify requirements, discuss technical feasibility, and map out a fixed timeline estimate.
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
                <span>vikrantchakole36@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
