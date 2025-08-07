import React from 'react'

const SolutionSection = () => {
  const solutions = [
    {
      icon: "🎯",
      title: "Smart Lead Qualification",
      description: "AI analyzes prospect interactions to identify high-intent leads before your first call",
      benefit: "3x more qualified prospects"
    },
    {
      icon: "📊",
      title: "Impact Measurement",
      description: "Automated tracking and reporting of client progress and coaching outcomes",
      benefit: "Prove ROI with data"
    },
    {
      icon: "⚡",
      title: "Workflow Automation",
      description: "Streamline scheduling, follow-ups, and administrative tasks with intelligent automation",
      benefit: "20+ hours saved weekly"
    }
  ]

  return (
    <section id="solution" className="apple-section" style={{ background: 'var(--apple-gray-light)' }}>
      <div className="apple-container">
        <div className="solution-content">
          <h2 className="apple-headline-medium solution-headline">
            AI That Actually Understands Coaching
          </h2>
          <p className="apple-body-large solution-subheadline">
            Purpose-built automation that enhances your coaching practice without replacing 
            the human connection that makes you successful.
          </p>

          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <div className="solution-content-inner">
                  <h3 className="apple-headline-small solution-title">
                    {solution.title}
                  </h3>
                  <p className="apple-body-medium solution-description">
                    {solution.description}
                  </p>
                  <div className="solution-benefit">
                    <span className="apple-body-small benefit-label">Result:</span>
                    <span className="apple-body-medium benefit-text">{solution.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="solution-promise">
            <h3 className="apple-headline-small promise-headline">
              The Maurice Difference
            </h3>
            <p className="apple-body-large promise-description">
              Unlike generic business automation, our AI is trained specifically on coaching methodologies, 
              client psychology, and the unique challenges of scaling a coaching practice.
            </p>
            <div className="promise-features">
              <div className="feature">
                <span className="feature-check">✓</span>
                <span className="apple-body-medium">Coach-specific AI models</span>
              </div>
              <div className="feature">
                <span className="feature-check">✓</span>
                <span className="apple-body-medium">Privacy-first architecture</span>
              </div>
              <div className="feature">
                <span className="feature-check">✓</span>
                <span className="apple-body-medium">Seamless existing workflow integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .solution-content {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .solution-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .solution-subheadline {
          margin-bottom: 60px;
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .solution-card {
          background: var(--apple-white);
          border-radius: 16px;
          padding: 32px;
          text-align: left;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
          transition: all 0.3s ease;
        }

        .solution-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .solution-icon {
          font-size: 56px;
          margin-bottom: 24px;
          line-height: 1;
        }

        .solution-title {
          margin-bottom: 16px;
          color: var(--apple-text-primary);
        }

        .solution-description {
          margin-bottom: 20px;
          color: var(--apple-text-secondary);
          line-height: 1.5;
        }

        .solution-benefit {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px;
          background: rgba(0, 122, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid var(--apple-blue);
        }

        .benefit-label {
          color: var(--apple-text-secondary);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .benefit-text {
          color: var(--apple-blue);
          font-weight: 600;
        }

        .solution-promise {
          background: var(--apple-white);
          border-radius: 20px;
          padding: 48px;
          max-width: 700px;
          margin: 0 auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
        }

        .promise-headline {
          margin-bottom: 20px;
          color: var(--apple-text-primary);
        }

        .promise-description {
          margin-bottom: 32px;
          color: var(--apple-text-secondary);
        }

        .promise-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .feature-check {
          color: #34c759;
          font-weight: 600;
          font-size: 16px;
        }

        /* Animation Classes */
        .solution-card {
          opacity: 0;
          transform: translateY(30px);
          animation: solutionCardReveal 0.8s ease-out forwards;
        }

        .solution-card:nth-child(1) { animation-delay: 0.1s; }
        .solution-card:nth-child(2) { animation-delay: 0.3s; }
        .solution-card:nth-child(3) { animation-delay: 0.5s; }

        @keyframes solutionCardReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .solution-subheadline {
            margin-bottom: 40px;
          }

          .solution-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 60px;
          }

          .solution-card {
            padding: 24px;
          }

          .solution-icon {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .solution-promise {
            padding: 32px 24px;
            margin: 0 16px;
          }

          .promise-features {
            gap: 12px;
          }
        }
      `}</style>
    </section>
  )
}

export default SolutionSection