import React from 'react'

const SuccessSection = () => {
  const metrics = [
    {
      number: "25+",
      label: "Hours Saved Weekly",
      description: "Average time reclaimed for high-value coaching activities"
    },
    {
      number: "3x",
      label: "Lead Quality Improvement", 
      description: "More qualified prospects through intelligent screening"
    },
    {
      number: "60%",
      label: "Client Retention Increase",
      description: "Better outcomes through personalized follow-up"
    },
    {
      number: "$300K+",
      label: "Average Revenue Impact",
      description: "Additional annual revenue from automation efficiency"
    }
  ]

  const caseStudies = [
    {
      name: "Sarah Chen",
      title: "Business Growth Coach",
      revenue: "$2.3M Annual Revenue",
      challenge: "Spending 30+ hours weekly on admin work instead of coaching",
      solution: "Full AI automation suite with lead qualification and session intelligence",
      results: [
        "Reduced admin time from 30 to 5 hours weekly",
        "Increased client capacity by 150%",
        "Improved client outcomes by 40%",
        "Generated additional $400K in annual revenue"
      ],
      quote: "Maurice's AI system didn't just save me time—it transformed my entire coaching practice. I'm now working with 2.5x more clients while delivering better results than ever before."
    },
    {
      name: "Marcus Rodriguez",
      title: "Executive Leadership Coach",
      revenue: "$1.8M Annual Revenue", 
      challenge: "Unable to scale beyond 1-on-1 coaching without compromising quality",
      solution: "Content automation and performance analytics implementation",
      results: [
        "Automated 80% of content creation workflow",
        "Launched group coaching program serving 100+ executives",
        "Maintained 95% client satisfaction scores at scale", 
        "Doubled revenue while working 20% fewer hours"
      ],
      quote: "The AI content system maintains my voice and expertise while scaling my reach exponentially. It's like having a team of expert assistants who never sleep."
    }
  ]

  return (
    <section id="success" className="apple-section apple-section-large" style={{ background: 'var(--apple-gray-light)' }}>
      <div className="apple-container">
        <div className="success-content">
          <div className="success-header">
            <h2 className="apple-headline-medium success-headline">
              Measurable Results from Day One
            </h2>
            <p className="apple-body-large success-subheadline">
              Real coaches achieving extraordinary results with AI automation. 
              Every implementation is measured, tracked, and optimized for maximum impact.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-number apple-headline-medium">
                  {metric.number}
                </div>
                <h3 className="apple-body-medium metric-label">
                  {metric.label}
                </h3>
                <p className="apple-body-small metric-description">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="case-studies">
            <h3 className="apple-headline-small case-studies-headline">
              Real Coach Success Stories
            </h3>
            
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study">
                <div className="case-study-header">
                  <div className="coach-info">
                    <h4 className="apple-headline-small coach-name">
                      {study.name}
                    </h4>
                    <p className="apple-body-medium coach-title">
                      {study.title}
                    </p>
                    <p className="apple-body-small coach-revenue">
                      {study.revenue}
                    </p>
                  </div>
                </div>

                <div className="case-study-content">
                  <div className="challenge-solution">
                    <div className="challenge">
                      <h5 className="apple-body-medium section-title">Challenge</h5>
                      <p className="apple-body-medium section-content">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="solution">
                      <h5 className="apple-body-medium section-title">Solution</h5>
                      <p className="apple-body-medium section-content">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="results">
                    <h5 className="apple-body-medium section-title">Results</h5>
                    <ul className="results-list">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="apple-body-medium result-item">
                          <span className="result-check">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="case-study-quote">
                    <p className="apple-body-large quote-text">
                      "{study.quote}"
                    </p>
                    <cite className="apple-body-medium quote-attribution">
                      — {study.name}, {study.title}
                    </cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Success Guarantee */}
          <div className="success-guarantee">
            <h3 className="apple-headline-small guarantee-headline">
              Your Success is Guaranteed
            </h3>
            <p className="apple-body-large guarantee-description">
              We're so confident in these results that every implementation comes with our 
              60-day performance guarantee. If you don't achieve the projected time savings 
              and revenue impact, we'll refund your entire investment.
            </p>
            <div className="guarantee-features">
              <div className="guarantee-feature">
                <span className="feature-icon">📊</span>
                <div>
                  <span className="apple-body-medium feature-title">Performance Tracking</span>
                  <span className="apple-body-small feature-description">
                    Real-time dashboards show exact time savings and ROI metrics
                  </span>
                </div>
              </div>
              <div className="guarantee-feature">
                <span className="feature-icon">🎯</span>
                <div>
                  <span className="apple-body-medium feature-title">Results Accountability</span>
                  <span className="apple-body-small feature-description">
                    Monthly optimization sessions to ensure you hit target outcomes
                  </span>
                </div>
              </div>
              <div className="guarantee-feature">
                <span className="feature-icon">🛡️</span>
                <div>
                  <span className="apple-body-medium feature-title">Full Refund Protection</span>
                  <span className="apple-body-small feature-description">
                    Keep everything even if you request a refund within 60 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .success-content {
          max-width: 1100px;
          margin: 0 auto;
        }

        .success-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .success-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .success-subheadline {
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-bottom: 100px;
        }

        .metric-card {
          background: var(--apple-white);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .metric-number {
          color: var(--apple-blue);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .metric-label {
          margin-bottom: 12px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .metric-description {
          color: var(--apple-text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        .case-studies {
          margin-bottom: 80px;
        }

        .case-studies-headline {
          text-align: center;
          margin-bottom: 60px;
          color: var(--apple-text-primary);
        }

        .case-study {
          background: var(--apple-white);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 0.5px solid var(--apple-border-light);
        }

        .case-study:last-child {
          margin-bottom: 0;
        }

        .case-study-header {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--apple-border-light);
        }

        .coach-name {
          margin-bottom: 8px;
          color: var(--apple-text-primary);
        }

        .coach-title {
          margin-bottom: 4px;
          color: var(--apple-text-secondary);
        }

        .coach-revenue {
          color: var(--apple-blue);
          font-weight: 600;
          margin: 0;
        }

        .case-study-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .challenge-solution {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .section-title {
          margin-bottom: 12px;
          color: var(--apple-text-primary);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        .section-content {
          color: var(--apple-text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .results-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .result-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--apple-text-secondary);
          line-height: 1.5;
        }

        .result-check {
          color: #34c759;
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .case-study-quote {
          background: var(--apple-gray-light);
          border-radius: 16px;
          padding: 32px;
          margin: 0;
          text-align: center;
        }

        .quote-text {
          margin-bottom: 20px;
          font-style: italic;
          color: var(--apple-text-primary);
        }

        .quote-attribution {
          color: var(--apple-text-secondary);
          font-weight: 600;
        }

        .success-guarantee {
          background: var(--apple-white);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 0.5px solid var(--apple-border-light);
        }

        .guarantee-headline {
          margin-bottom: 20px;
          color: var(--apple-text-primary);
        }

        .guarantee-description {
          margin-bottom: 40px;
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .guarantee-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          text-align: left;
        }

        .guarantee-feature {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon {
          font-size: 24px;
          line-height: 1;
          flex-shrink: 0;
        }

        .feature-title {
          display: block;
          margin-bottom: 8px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .feature-description {
          color: var(--apple-text-secondary);
          line-height: 1.4;
        }

        /* Animation Classes */
        .metric-card,
        .case-study {
          opacity: 0;
          transform: translateY(30px);
          animation: successElementReveal 0.8s ease-out forwards;
        }

        .metric-card:nth-child(1) { animation-delay: 0.1s; }
        .metric-card:nth-child(2) { animation-delay: 0.2s; }
        .metric-card:nth-child(3) { animation-delay: 0.3s; }
        .metric-card:nth-child(4) { animation-delay: 0.4s; }

        .case-study:nth-child(1) { animation-delay: 0.2s; }
        .case-study:nth-child(2) { animation-delay: 0.4s; }

        @keyframes successElementReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .success-header {
            margin-bottom: 60px;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 60px;
          }

          .metric-card {
            padding: 24px;
          }

          .case-studies {
            margin-bottom: 60px;
          }

          .case-studies-headline {
            margin-bottom: 40px;
          }

          .case-study {
            padding: 24px;
            margin-bottom: 32px;
          }

          .challenge-solution {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .case-study-quote {
            padding: 20px;
          }

          .success-guarantee {
            padding: 32px 24px;
            margin: 0 16px;
          }

          .guarantee-features {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 600px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default SuccessSection