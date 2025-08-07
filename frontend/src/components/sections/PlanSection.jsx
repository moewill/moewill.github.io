import React from 'react'

const PlanSection = () => {
  const steps = [
    {
      number: "01",
      title: "Capability Assessment",
      description: "30-minute deep dive into your coaching practice, current processes, and scaling challenges",
      duration: "30 min",
      outcome: "Custom AI automation roadmap"
    },
    {
      number: "02", 
      title: "Solution Design",
      description: "We design your personalized AI system, integrating seamlessly with your existing workflow",
      duration: "1-2 weeks",
      outcome: "Technical implementation plan"
    },
    {
      number: "03",
      title: "Implementation & Training",
      description: "Deploy your AI capabilities with full team training and ongoing optimization support",
      duration: "2-4 weeks",
      outcome: "Fully automated coaching operations"
    }
  ]

  return (
    <section id="plan" className="apple-section">
      <div className="apple-container">
        <div className="plan-content">
          <div className="plan-header">
            <h2 className="apple-headline-medium plan-headline">
              Your Path to AI-Powered Scaling
            </h2>
            <p className="apple-body-large plan-subheadline">
              A proven 3-step process that transforms your coaching practice from manual operations 
              to intelligent automation in less than 6 weeks.
            </p>
          </div>

          <div className="plan-steps">
            {steps.map((step, index) => (
              <div key={index} className="plan-step">
                <div className="step-number-container">
                  <div className="step-number">{step.number}</div>
                  {index < steps.length - 1 && <div className="step-connector"></div>}
                </div>
                
                <div className="step-content">
                  <div className="step-header">
                    <h3 className="apple-headline-small step-title">
                      {step.title}
                    </h3>
                    <div className="step-meta">
                      <span className="apple-body-small step-duration">{step.duration}</span>
                    </div>
                  </div>
                  
                  <p className="apple-body-medium step-description">
                    {step.description}
                  </p>
                  
                  <div className="step-outcome">
                    <span className="apple-body-small outcome-label">Deliverable:</span>
                    <span className="apple-body-medium outcome-text">{step.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="plan-guarantee">
            <div className="guarantee-content">
              <h3 className="apple-headline-small guarantee-headline">
                The Maurice Guarantee
              </h3>
              <p className="apple-body-medium guarantee-text">
                If you don't save at least 15 hours per week within 60 days of implementation, 
                we'll refund your entire investment and you keep everything we've built.
              </p>
              <div className="guarantee-features">
                <div className="guarantee-feature">
                  <span className="feature-icon">⚡</span>
                  <span className="apple-body-small">15+ hours saved weekly or full refund</span>
                </div>
                <div className="guarantee-feature">
                  <span className="feature-icon">🛡️</span>
                  <span className="apple-body-small">60-day performance guarantee</span>
                </div>
                <div className="guarantee-feature">
                  <span className="feature-icon">🎯</span>
                  <span className="apple-body-small">Keep all systems even if refunded</span>
                </div>
              </div>
            </div>
          </div>

          <div className="plan-cta">
            <button 
              className="apple-button apple-button-primary plan-cta-button"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Assessment
            </button>
            <p className="apple-body-small plan-cta-note">
              No obligation • 30-minute conversation • Custom roadmap included
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .plan-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .plan-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .plan-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .plan-subheadline {
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .plan-steps {
          margin-bottom: 80px;
        }

        .plan-step {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 32px;
          margin-bottom: 60px;
          position: relative;
        }

        .plan-step:last-child {
          margin-bottom: 0;
        }

        .step-number-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .step-number {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--apple-blue), #005bb5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0, 122, 255, 0.3);
        }

        .step-connector {
          width: 2px;
          height: 60px;
          background: linear-gradient(180deg, var(--apple-blue), var(--apple-gray-medium));
          margin-top: 20px;
        }

        .step-content {
          background: var(--apple-white);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
          transition: all 0.3s ease;
        }

        .step-content:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .step-title {
          margin: 0;
          color: var(--apple-text-primary);
        }

        .step-meta {
          text-align: right;
        }

        .step-duration {
          color: var(--apple-blue);
          font-weight: 600;
          padding: 4px 12px;
          background: rgba(0, 122, 255, 0.1);
          border-radius: 6px;
        }

        .step-description {
          margin-bottom: 20px;
          color: var(--apple-text-secondary);
          line-height: 1.6;
        }

        .step-outcome {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px;
          background: var(--apple-gray-light);
          border-radius: 8px;
        }

        .outcome-label {
          color: var(--apple-text-secondary);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .outcome-text {
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .plan-guarantee {
          background: linear-gradient(135deg, rgba(0, 122, 255, 0.05), rgba(0, 122, 255, 0.02));
          border: 1px solid rgba(0, 122, 255, 0.2);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 60px;
        }

        .guarantee-content {
          text-align: center;
        }

        .guarantee-headline {
          margin-bottom: 16px;
          color: var(--apple-text-primary);
        }

        .guarantee-text {
          margin-bottom: 32px;
          color: var(--apple-text-secondary);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .guarantee-features {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .guarantee-feature {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .feature-icon {
          font-size: 16px;
        }

        .plan-cta {
          text-align: center;
        }

        .plan-cta-button {
          margin-bottom: 16px;
          font-size: 17px;
          padding: 16px 40px;
          min-height: 50px;
          border-radius: 12px;
          font-weight: 500;
        }

        .plan-cta-note {
          color: var(--apple-text-secondary);
          margin: 0;
        }

        /* Animation Classes */
        .plan-step {
          opacity: 0;
          transform: translateX(-30px);
          animation: stepReveal 0.8s ease-out forwards;
        }

        .plan-step:nth-child(1) { animation-delay: 0.2s; }
        .plan-step:nth-child(2) { animation-delay: 0.4s; }
        .plan-step:nth-child(3) { animation-delay: 0.6s; }

        @keyframes stepReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .plan-header {
            margin-bottom: 60px;
          }

          .plan-steps {
            margin-bottom: 60px;
          }

          .plan-step {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 40px;
          }

          .step-number-container {
            flex-direction: row;
            justify-content: flex-start;
            gap: 20px;
          }

          .step-number {
            width: 60px;
            height: 60px;
            font-size: 20px;
          }

          .step-connector {
            width: 100px;
            height: 2px;
            margin-top: 29px;
          }

          .plan-step:last-child .step-connector {
            display: none;
          }

          .step-content {
            padding: 24px;
          }

          .step-header {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .step-meta {
            text-align: left;
          }

          .plan-guarantee {
            padding: 24px;
            margin-bottom: 40px;
          }

          .guarantee-features {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }

          .plan-cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  )
}

export default PlanSection