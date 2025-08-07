import React, { useState } from 'react'

const CapabilitiesSection = () => {
  const [activeCapability, setActiveCapability] = useState(0)

  const capabilities = [
    {
      id: "lead-qualification",
      title: "Lead Qualification AI",
      subtitle: "Identify high-intent prospects before your first call",
      description: "AI analyzes prospect behavior, engagement patterns, and communication style to score lead quality and readiness to invest in high-ticket coaching.",
      features: [
        "Behavioral analysis from website and email interactions",
        "Automated lead scoring based on coaching-specific criteria", 
        "Pre-call intelligence reports for each prospect",
        "Integration with existing CRM and marketing tools"
      ],
      benefit: "3x more qualified prospects",
      roi: "Save 15+ hours weekly on unqualified leads"
    },
    {
      id: "session-optimization",
      title: "Session Intelligence",
      subtitle: "Maximize impact of every coaching conversation",
      description: "AI captures session insights, tracks client progress, and provides personalized follow-up recommendations to enhance coaching effectiveness.",
      features: [
        "Automated session note generation and summaries",
        "Client progress tracking with milestone alerts",
        "Personalized follow-up task recommendations",
        "Goal achievement probability scoring"
      ],
      benefit: "40% improvement in client outcomes",
      roi: "Increase client retention by 60%"
    },
    {
      id: "content-creation",
      title: "Content Automation",
      subtitle: "Scale your thought leadership effortlessly", 
      description: "AI creates coaching-specific content across all channels while maintaining your unique voice and expertise positioning.",
      features: [
        "Course material and worksheet generation",
        "Social media content calendar automation",
        "Email sequence personalization at scale",
        "Video script and presentation outlines"
      ],
      benefit: "10x content output volume",
      roi: "Save 20+ hours weekly on content creation"
    },
    {
      id: "client-onboarding",
      title: "Onboarding Intelligence",
      subtitle: "Create world-class first impressions automatically",
      description: "AI orchestrates perfect client onboarding experiences, personalizing welcome sequences and setting up success foundations.",
      features: [
        "Personalized welcome experience based on client profile",
        "Automated goal-setting and expectation alignment",
        "Custom resource delivery and timeline creation",
        "Early warning system for potential engagement issues"
      ],
      benefit: "95% client satisfaction scores",
      roi: "Reduce onboarding time by 80%"
    },
    {
      id: "performance-analytics",
      title: "Impact Measurement",
      subtitle: "Prove your coaching ROI with precision data",
      description: "AI tracks and reports on client progress, coaching effectiveness, and business impact to demonstrate clear value and results.",
      features: [
        "Client progress visualization and reporting",
        "Coaching ROI calculations and projections", 
        "Practice performance benchmarking",
        "Outcome prediction and optimization recommendations"
      ],
      benefit: "Quantifiable coaching impact",
      roi: "Justify 2x higher coaching fees"
    },
    {
      id: "workflow-automation",
      title: "Operations Engine",
      subtitle: "Eliminate manual work that doesn't scale",
      description: "AI handles scheduling, follow-ups, and administrative tasks so you can focus entirely on high-value coaching activities.",
      features: [
        "Intelligent scheduling with preference learning",
        "Automated follow-up sequence management",
        "Document generation and client communication",
        "Payment processing and renewal optimization"
      ],
      benefit: "Zero administrative overhead",
      roi: "Reclaim 25+ hours weekly for coaching"
    }
  ]

  return (
    <section id="capabilities" className="apple-section apple-section-large">
      <div className="apple-container">
        <div className="capabilities-content">
          <div className="capabilities-header">
            <h2 className="apple-headline-medium capabilities-headline">
              Six AI Capabilities That Transform Your Practice
            </h2>
            <p className="apple-body-large capabilities-subheadline">
              Purpose-built automation modules that integrate seamlessly into your existing workflow, 
              each designed to solve specific coaching business challenges.
            </p>
          </div>

          <div className="capabilities-interface">
            {/* Capability Tabs */}
            <div className="capability-tabs">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.id}
                  className={`capability-tab ${activeCapability === index ? 'active' : ''}`}
                  onClick={() => setActiveCapability(index)}
                >
                  <div className="tab-content">
                    <h3 className="apple-body-medium tab-title">
                      {capability.title}
                    </h3>
                    <p className="apple-body-small tab-subtitle">
                      {capability.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Capability Detail */}
            <div className="capability-detail">
              <div className="detail-content">
                <div className="detail-header">
                  <h3 className="apple-headline-small detail-title">
                    {capabilities[activeCapability].title}
                  </h3>
                  <p className="apple-body-large detail-description">
                    {capabilities[activeCapability].description}
                  </p>
                </div>

                <div className="detail-features">
                  <h4 className="apple-body-medium features-title">
                    Key Features
                  </h4>
                  <ul className="features-list">
                    {capabilities[activeCapability].features.map((feature, index) => (
                      <li key={index} className="apple-body-medium feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-results">
                  <div className="result-item">
                    <span className="apple-body-small result-label">Expected Benefit:</span>
                    <span className="apple-body-medium result-value benefit">
                      {capabilities[activeCapability].benefit}
                    </span>
                  </div>
                  <div className="result-item">
                    <span className="apple-body-small result-label">ROI Impact:</span>
                    <span className="apple-body-medium result-value roi">
                      {capabilities[activeCapability].roi}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="capabilities-cta">
            <h3 className="apple-headline-small cta-headline">
              Ready to See These in Action?
            </h3>
            <p className="apple-body-medium cta-description">
              Get your personalized capability assessment and discover which AI modules 
              will have the biggest impact on your coaching practice.
            </p>
            <button 
              className="apple-button apple-button-primary capabilities-cta-button"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Assessment
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .capabilities-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .capabilities-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .capabilities-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .capabilities-subheadline {
          color: var(--apple-text-secondary);
          max-width: 800px;
          margin: 0 auto;
        }

        .capabilities-interface {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        .capability-tabs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .capability-tab {
          background: var(--apple-white);
          border: 1px solid var(--apple-border-light);
          border-radius: 12px;
          padding: 20px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .capability-tab:hover {
          border-color: var(--apple-blue);
          transform: translateX(4px);
        }

        .capability-tab.active {
          background: var(--apple-blue);
          border-color: var(--apple-blue);
          transform: translateX(8px);
          box-shadow: 0 4px 20px rgba(0, 122, 255, 0.3);
        }

        .capability-tab.active .tab-title,
        .capability-tab.active .tab-subtitle {
          color: white;
        }

        .tab-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tab-title {
          margin: 0;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .tab-subtitle {
          margin: 0;
          color: var(--apple-text-secondary);
          line-height: 1.4;
        }

        .capability-detail {
          background: var(--apple-white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 0.5px solid var(--apple-border-light);
          min-height: 500px;
        }

        .detail-header {
          margin-bottom: 32px;
        }

        .detail-title {
          margin-bottom: 16px;
          color: var(--apple-text-primary);
        }

        .detail-description {
          color: var(--apple-text-secondary);
          line-height: 1.6;
        }

        .detail-features {
          margin-bottom: 32px;
        }

        .features-title {
          margin-bottom: 20px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--apple-text-secondary);
          line-height: 1.5;
        }

        .feature-check {
          color: #34c759;
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .detail-results {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .result-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px;
          background: var(--apple-gray-light);
          border-radius: 12px;
        }

        .result-label {
          color: var(--apple-text-secondary);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .result-value {
          font-weight: 600;
        }

        .result-value.benefit {
          color: var(--apple-blue);
        }

        .result-value.roi {
          color: #34c759;
        }

        .capabilities-cta {
          text-align: center;
          background: var(--apple-gray-light);
          border-radius: 20px;
          padding: 48px;
        }

        .cta-headline {
          margin-bottom: 16px;
          color: var(--apple-text-primary);
        }

        .cta-description {
          margin-bottom: 32px;
          color: var(--apple-text-secondary);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .capabilities-cta-button {
          font-size: 17px;
          padding: 16px 32px;
          min-height: 50px;
          border-radius: 12px;
          font-weight: 500;
        }

        /* Animation Classes */
        .capability-detail {
          opacity: 0;
          transform: translateY(20px);
          animation: detailReveal 0.4s ease-out forwards;
        }

        @keyframes detailReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .capabilities-header {
            margin-bottom: 60px;
          }

          .capabilities-interface {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }

          .capability-tabs {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .capability-tab {
            padding: 16px;
            transform: none !important;
          }

          .capability-tab:hover {
            transform: none !important;
          }

          .capability-tab.active {
            transform: none !important;
          }

          .capability-detail {
            padding: 24px;
            min-height: auto;
          }

          .detail-results {
            grid-template-columns: 1fr;
          }

          .capabilities-cta {
            padding: 32px 24px;
            margin: 0 16px;
          }
        }

        @media (max-width: 600px) {
          .capability-tabs {
            grid-template-columns: 1fr;
          }

          .tab-title {
            font-size: 14px;
          }

          .tab-subtitle {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  )
}

export default CapabilitiesSection