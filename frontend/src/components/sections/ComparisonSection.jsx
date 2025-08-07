import React from 'react'

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "Time Management",
      manual: "30+ hours weekly on admin tasks",
      withAI: "5 hours weekly on admin tasks",
      improvement: "25 hours saved"
    },
    {
      category: "Lead Quality",
      manual: "20% of leads are qualified",
      withAI: "60% of leads are qualified", 
      improvement: "3x more qualified prospects"
    },
    {
      category: "Client Capacity",
      manual: "Limited by personal bandwidth",
      withAI: "Scale beyond time constraints",
      improvement: "2.5x client capacity increase"
    },
    {
      category: "Content Creation",
      manual: "2-3 pieces of content weekly",
      withAI: "20+ pieces of content weekly",
      improvement: "10x content output"
    },
    {
      category: "Session Impact",
      manual: "Manual note-taking, basic follow-up",
      withAI: "AI insights, personalized follow-up",
      improvement: "40% better client outcomes"
    },
    {
      category: "Revenue Tracking",
      manual: "Difficult to prove coaching ROI",
      withAI: "Data-driven impact measurement",
      improvement: "Justify 2x higher fees"
    }
  ]

  const alternativeOptions = [
    {
      option: "Hire Virtual Assistants",
      pros: ["Lower upfront cost", "Human judgment for complex tasks"],
      cons: ["Requires training and management", "Inconsistent quality", "Scales linearly with cost", "Limited availability"],
      cost: "$2,000-5,000/month",
      effectiveness: "30% efficiency gain"
    },
    {
      option: "Generic Business Automation",
      pros: ["Widely available", "Lower cost options exist"],
      cons: ["Not designed for coaches", "Requires significant customization", "No coaching-specific intelligence", "Generic templates and workflows"],
      cost: "$500-2,000/month",
      effectiveness: "15% efficiency gain"
    },
    {
      option: "Maurice AI System",
      pros: ["Coach-specific intelligence", "Comprehensive automation", "Privacy-first design", "Proven results", "60-day guarantee"],
      cons: ["Higher initial investment", "Requires brief learning period"],
      cost: "Custom pricing based on practice size",
      effectiveness: "300% efficiency gain"
    }
  ]

  return (
    <section id="comparison" className="apple-section apple-section-large">
      <div className="apple-container">
        <div className="comparison-content">
          <div className="comparison-header">
            <h2 className="apple-headline-medium comparison-headline">
              Before & After: The Transformation
            </h2>
            <p className="apple-body-large comparison-subheadline">
              See the dramatic difference between manual coaching operations and 
              AI-powered automation across every aspect of your practice.
            </p>
          </div>

          {/* Before/After Comparison Table */}
          <div className="comparison-table-container">
            <div className="comparison-table">
              <div className="table-header">
                <div className="header-cell category-header">
                  <span className="apple-body-medium">Practice Area</span>
                </div>
                <div className="header-cell manual-header">
                  <span className="apple-body-medium">Manual Operations</span>
                </div>
                <div className="header-cell ai-header">
                  <span className="apple-body-medium">With AI Automation</span>
                </div>
                <div className="header-cell improvement-header">
                  <span className="apple-body-medium">Improvement</span>
                </div>
              </div>

              {comparisonData.map((row, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell category-cell">
                    <span className="apple-body-medium cell-content">{row.category}</span>
                  </div>
                  <div className="table-cell manual-cell">
                    <span className="apple-body-medium cell-content">{row.manual}</span>
                  </div>
                  <div className="table-cell ai-cell">
                    <span className="apple-body-medium cell-content">{row.withAI}</span>
                  </div>
                  <div className="table-cell improvement-cell">
                    <span className="apple-body-medium cell-content improvement-text">{row.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alternative Solutions Comparison */}
          <div className="alternatives-section">
            <h3 className="apple-headline-small alternatives-headline">
              How We Compare to Alternative Solutions
            </h3>
            <p className="apple-body-medium alternatives-subheadline">
              We've analyzed every option available to coaching practices. Here's how they stack up:
            </p>

            <div className="alternatives-grid">
              {alternativeOptions.map((alt, index) => (
                <div key={index} className={`alternative-card ${alt.option === 'Maurice AI System' ? 'recommended' : ''}`}>
                  {alt.option === 'Maurice AI System' && (
                    <div className="recommended-badge">
                      <span className="apple-body-small">Recommended</span>
                    </div>
                  )}
                  
                  <h4 className="apple-headline-small alternative-title">
                    {alt.option}
                  </h4>

                  <div className="pros-cons">
                    <div className="pros">
                      <h5 className="apple-body-medium section-label pros-label">Advantages</h5>
                      <ul className="pros-list">
                        {alt.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="apple-body-small pro-item">
                            <span className="pro-check">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="cons">
                      <h5 className="apple-body-medium section-label cons-label">Limitations</h5>
                      <ul className="cons-list">
                        {alt.cons.map((con, conIndex) => (
                          <li key={conIndex} className="apple-body-small con-item">
                            <span className="con-x">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="alternative-footer">
                    <div className="cost-info">
                      <span className="apple-body-small cost-label">Typical Cost:</span>
                      <span className="apple-body-medium cost-value">{alt.cost}</span>
                    </div>
                    <div className="effectiveness-info">
                      <span className="apple-body-small effectiveness-label">Effectiveness:</span>
                      <span className={`apple-body-medium effectiveness-value ${alt.option === 'Maurice AI System' ? 'best' : ''}`}>
                        {alt.effectiveness}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="comparison-cta">
            <h3 className="apple-headline-small cta-headline">
              Ready to Make the Transformation?
            </h3>
            <p className="apple-body-medium cta-description">
              See exactly how these improvements would apply to your specific coaching practice 
              with a personalized capability assessment.
            </p>
            <button 
              className="apple-button apple-button-primary comparison-cta-button"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Custom Analysis
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .comparison-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .comparison-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .comparison-subheadline {
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .comparison-table-container {
          background: var(--apple-white);
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 100px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 0.5px solid var(--apple-border-light);
          overflow-x: auto;
        }

        .comparison-table {
          width: 100%;
          min-width: 800px;
        }

        .table-header {
          display: grid;
          grid-template-columns: 200px 1fr 1fr 200px;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--apple-border-light);
        }

        .header-cell {
          padding: 12px;
          text-align: center;
          border-radius: 8px;
        }

        .category-header {
          background: var(--apple-gray-light);
        }

        .manual-header {
          background: rgba(255, 59, 48, 0.1);
        }

        .ai-header {
          background: rgba(0, 122, 255, 0.1);
        }

        .improvement-header {
          background: rgba(52, 199, 89, 0.1);
        }

        .table-row {
          display: grid;
          grid-template-columns: 200px 1fr 1fr 200px;
          gap: 16px;
          margin-bottom: 12px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-cell {
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 8px;
          min-height: 60px;
        }

        .category-cell {
          background: var(--apple-gray-light);
          font-weight: 600;
        }

        .manual-cell {
          background: rgba(255, 59, 48, 0.05);
        }

        .ai-cell {
          background: rgba(0, 122, 255, 0.05);
        }

        .improvement-cell {
          background: rgba(52, 199, 89, 0.05);
        }

        .cell-content {
          color: var(--apple-text-primary);
          line-height: 1.4;
        }

        .improvement-text {
          color: #34c759;
          font-weight: 600;
        }

        .alternatives-section {
          margin-bottom: 80px;
        }

        .alternatives-headline {
          text-align: center;
          margin-bottom: 16px;
          color: var(--apple-text-primary);
        }

        .alternatives-subheadline {
          text-align: center;
          margin-bottom: 60px;
          color: var(--apple-text-secondary);
        }

        .alternatives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .alternative-card {
          background: var(--apple-white);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--apple-border-light);
          position: relative;
          transition: all 0.3s ease;
        }

        .alternative-card.recommended {
          border-color: var(--apple-blue);
          box-shadow: 0 8px 30px rgba(0, 122, 255, 0.2);
          transform: scale(1.02);
        }

        .alternative-card:hover:not(.recommended) {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .recommended-badge {
          position: absolute;
          top: -8px;
          right: 16px;
          background: var(--apple-blue);
          color: white;
          padding: 6px 16px;
          border-radius: 16px;
          font-weight: 600;
        }

        .alternative-title {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
          text-align: center;
        }

        .pros-cons {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 24px;
        }

        .section-label {
          margin-bottom: 12px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.5px;
        }

        .pros-label {
          color: #34c759;
        }

        .cons-label {
          color: #ff3b30;
        }

        .pros-list,
        .cons-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pro-item,
        .con-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
        }

        .pro-check {
          color: #34c759;
          font-weight: 600;
          flex-shrink: 0;
        }

        .con-x {
          color: #ff3b30;
          font-weight: 600;
          flex-shrink: 0;
        }

        .alternative-footer {
          padding-top: 20px;
          border-top: 1px solid var(--apple-border-light);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cost-info,
        .effectiveness-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cost-label,
        .effectiveness-label {
          color: var(--apple-text-secondary);
        }

        .cost-value {
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .effectiveness-value {
          font-weight: 600;
        }

        .effectiveness-value.best {
          color: #34c759;
        }

        .comparison-cta {
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

        .comparison-cta-button {
          font-size: 17px;
          padding: 16px 32px;
          min-height: 50px;
          border-radius: 12px;
          font-weight: 500;
        }

        /* Animation Classes */
        .table-row,
        .alternative-card {
          opacity: 0;
          transform: translateY(20px);
          animation: comparisonElementReveal 0.6s ease-out forwards;
        }

        .table-row:nth-child(1) { animation-delay: 0.1s; }
        .table-row:nth-child(2) { animation-delay: 0.2s; }
        .table-row:nth-child(3) { animation-delay: 0.3s; }
        .table-row:nth-child(4) { animation-delay: 0.4s; }
        .table-row:nth-child(5) { animation-delay: 0.5s; }
        .table-row:nth-child(6) { animation-delay: 0.6s; }

        .alternative-card:nth-child(1) { animation-delay: 0.2s; }
        .alternative-card:nth-child(2) { animation-delay: 0.4s; }
        .alternative-card:nth-child(3) { animation-delay: 0.6s; }

        @keyframes comparisonElementReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .comparison-header {
            margin-bottom: 60px;
          }

          .comparison-table-container {
            padding: 16px;
            margin-bottom: 60px;
          }

          .comparison-table {
            min-width: 600px;
          }

          .table-header,
          .table-row {
            grid-template-columns: 120px 1fr 1fr 120px;
            gap: 8px;
          }

          .table-cell {
            padding: 8px;
            min-height: 50px;
            font-size: 14px;
          }

          .alternatives-section {
            margin-bottom: 60px;
          }

          .alternatives-headline {
            margin-bottom: 12px;
          }

          .alternatives-subheadline {
            margin-bottom: 40px;
          }

          .alternatives-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .alternative-card {
            padding: 24px;
          }

          .alternative-card.recommended {
            transform: none;
          }

          .comparison-cta {
            padding: 32px 24px;
            margin: 0 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default ComparisonSection