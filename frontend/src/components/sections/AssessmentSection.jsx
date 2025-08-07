import React, { useState } from 'react'

const AssessmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    revenue: '',
    challenge: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          metadata: {
            revenue: formData.revenue,
            challenge: formData.challenge
          }
        }),
      })

      if (response.ok) {
        alert('Assessment request submitted! We\'ll be in touch within 24 hours.')
        setFormData({ name: '', email: '', revenue: '', challenge: '' })
      } else {
        alert('There was an error submitting your request. Please try again.')
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="assessment" className="apple-section apple-section-large" style={{ background: 'var(--apple-gray-light)' }}>
      <div className="apple-container">
        <div className="assessment-content">
          <div className="assessment-header">
            <h2 className="apple-headline-medium assessment-headline">
              Get Your Free AI Capability Assessment
            </h2>
            <p className="apple-body-large assessment-subheadline">
              30-minute conversation to identify exactly which AI capabilities will have the 
              biggest impact on your coaching practice and revenue.
            </p>
          </div>

          <div className="assessment-main">
            <div className="assessment-benefits">
              <h3 className="apple-headline-small benefits-headline">
                What You'll Discover
              </h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <div>
                    <h4 className="apple-body-medium benefit-title">Your Automation Priority</h4>
                    <p className="apple-body-small benefit-description">
                      Which processes to automate first for maximum time savings
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💰</span>
                  <div>
                    <h4 className="apple-body-medium benefit-title">Revenue Impact Projection</h4>
                    <p className="apple-body-small benefit-description">
                      Specific dollar amounts you can expect from AI implementation
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📊</span>
                  <div>
                    <h4 className="apple-body-medium benefit-title">Custom Implementation Roadmap</h4>
                    <p className="apple-body-small benefit-description">
                      Step-by-step plan tailored to your specific coaching practice
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⏱️</span>
                  <div>
                    <h4 className="apple-body-medium benefit-title">Time Savings Analysis</h4>
                    <p className="apple-body-small benefit-description">
                      Exact hours you'll reclaim for high-value coaching activities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="assessment-form-container">
              <form className="assessment-form" onSubmit={handleSubmit}>
                <h3 className="apple-headline-small form-headline">
                  Schedule Your Assessment
                </h3>
                
                <div className="form-group">
                  <label className="apple-body-medium form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="apple-body-medium form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="apple-body-medium form-label">Annual Revenue *</label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select range</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-3m">$1M - $3M</option>
                    <option value="3m-5m">$3M - $5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="apple-body-medium form-label">Biggest Challenge *</label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="What's the biggest operational challenge limiting your growth?"
                    required
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="apple-button apple-button-primary form-submit"
                >
                  Get My Assessment
                </button>

                <p className="apple-body-small form-note">
                  ✓ No obligation • ✓ 30-minute conversation • ✓ Custom roadmap included
                </p>
              </form>
            </div>
          </div>

          <div className="assessment-testimonial">
            <blockquote className="testimonial-quote">
              <p className="apple-body-large">
                "Maurice identified $300K in automation opportunities in our first 30-minute call. 
                The implementation saved us 25 hours per week and doubled our client capacity."
              </p>
              <cite className="apple-body-medium testimonial-attribution">
                — Sarah Chen, 7-Figure Business Coach
              </cite>
            </blockquote>
          </div>
        </div>
      </div>

      <style jsx>{`
        .assessment-content {
          max-width: 1100px;
          margin: 0 auto;
        }

        .assessment-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .assessment-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .assessment-subheadline {
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .assessment-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        .benefits-headline {
          margin-bottom: 32px;
          color: var(--apple-text-primary);
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .benefit-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .benefit-icon {
          font-size: 24px;
          line-height: 1;
          flex-shrink: 0;
        }

        .benefit-title {
          margin-bottom: 8px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .benefit-description {
          color: var(--apple-text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        .assessment-form-container {
          background: var(--apple-white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 0.5px solid var(--apple-border-light);
        }

        .form-headline {
          margin-bottom: 32px;
          color: var(--apple-text-primary);
          text-align: center;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px;
          border: 1px solid var(--apple-border-light);
          border-radius: 8px;
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
          background: var(--apple-white);
          color: var(--apple-text-primary);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--apple-blue);
          box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.2);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-submit {
          width: 100%;
          margin-bottom: 16px;
          font-size: 17px;
          padding: 16px;
          min-height: 50px;
          border-radius: 12px;
          font-weight: 500;
        }

        .form-note {
          text-align: center;
          color: var(--apple-text-secondary);
          margin: 0;
        }

        .assessment-testimonial {
          background: var(--apple-white);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
        }

        .testimonial-quote {
          margin: 0;
        }

        .testimonial-quote p {
          margin-bottom: 24px;
          font-style: italic;
          color: var(--apple-text-primary);
        }

        .testimonial-attribution {
          color: var(--apple-text-secondary);
          font-weight: 600;
        }

        /* Animation Classes */
        .benefit-item,
        .assessment-form-container,
        .assessment-testimonial {
          opacity: 0;
          transform: translateY(20px);
          animation: assessmentElementReveal 0.6s ease-out forwards;
        }

        .benefit-item:nth-child(1) { animation-delay: 0.1s; }
        .benefit-item:nth-child(2) { animation-delay: 0.2s; }
        .benefit-item:nth-child(3) { animation-delay: 0.3s; }
        .benefit-item:nth-child(4) { animation-delay: 0.4s; }
        .assessment-form-container { animation-delay: 0.2s; }
        .assessment-testimonial { animation-delay: 0.6s; }

        @keyframes assessmentElementReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .assessment-header {
            margin-bottom: 60px;
          }

          .assessment-main {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }

          .assessment-form-container {
            padding: 24px;
          }

          .benefits-list {
            gap: 20px;
          }

          .benefit-item {
            gap: 12px;
          }

          .assessment-testimonial {
            padding: 24px;
            margin: 0 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default AssessmentSection