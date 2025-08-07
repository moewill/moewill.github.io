import React from 'react'

const GuideSection = () => {
  return (
    <section id="guide" className="apple-section apple-section-large">
      <div className="apple-container">
        <div className="guide-content">
          <div className="guide-header">
            <h2 className="apple-headline-medium guide-headline">
              Meet Maurice Williams
            </h2>
            <p className="apple-body-large guide-subheadline">
              Your AI automation partner with 17+ years building technology for high-performance teams
            </p>
          </div>

          <div className="guide-main">
            <div className="guide-image-container">
              <div className="guide-image-placeholder">
                <div className="maurice-avatar">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="60" fill="var(--apple-gray-light)" />
                    <circle cx="60" cy="45" r="15" fill="var(--apple-text-secondary)" />
                    <path d="M30 95 C30 80 42 70 60 70 S90 80 90 95" fill="var(--apple-text-secondary)" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="guide-story">
              <div className="story-section">
                <h3 className="apple-headline-small story-title">
                  Why I Built This for Coaches
                </h3>
                <p className="apple-body-medium story-text">
                  After 17 years in enterprise technology—from Fortune 500 companies to scaling startups—I 
                  discovered that coaches face unique challenges that generic business automation simply can't solve.
                </p>
                <p className="apple-body-medium story-text">
                  The problem isn't just efficiency. It's about preserving the human connection that makes coaching 
                  effective while eliminating the busywork that prevents you from scaling your impact.
                </p>
              </div>

              <div className="credentials-grid">
                <div className="credential">
                  <div className="credential-icon">🏗️</div>
                  <div>
                    <h4 className="apple-body-medium credential-title">Technical Foundation</h4>
                    <p className="apple-body-small credential-description">
                      17+ years building AI and automation systems for high-performance teams
                    </p>
                  </div>
                </div>

                <div className="credential">
                  <div className="credential-icon">🎯</div>
                  <div>
                    <h4 className="apple-body-medium credential-title">Coach-Specific Expertise</h4>
                    <p className="apple-body-small credential-description">
                      Deep understanding of coaching methodologies and client psychology
                    </p>
                  </div>
                </div>

                <div className="credential">
                  <div className="credential-icon">🔒</div>
                  <div>
                    <h4 className="apple-body-medium credential-title">Privacy-First Philosophy</h4>
                    <p className="apple-body-small credential-description">
                      Your data stays yours—never used to train public AI models
                    </p>
                  </div>
                </div>

                <div className="credential">
                  <div className="credential-icon">📈</div>
                  <div>
                    <h4 className="apple-body-medium credential-title">Results-Driven Approach</h4>
                    <p className="apple-body-small credential-description">
                      Every feature designed to directly impact your revenue and client outcomes
                    </p>
                  </div>
                </div>
              </div>

              <div className="guide-mission">
                <blockquote className="mission-quote">
                  <p className="apple-body-large">
                    "My mission is to give million-dollar coaches the AI tools they need to scale 
                    their impact without losing the personal touch that makes them successful."
                  </p>
                  <cite className="apple-body-medium mission-attribution">
                    — Maurice Williams, Founder
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .guide-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .guide-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .guide-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .guide-subheadline {
          color: var(--apple-text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .guide-main {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          align-items: start;
        }

        .guide-image-container {
          position: sticky;
          top: 100px;
        }

        .guide-image-placeholder {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid var(--apple-border-light);
        }

        .maurice-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .guide-story {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .story-section {
          background: var(--apple-white);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
        }

        .story-title {
          margin-bottom: 20px;
          color: var(--apple-text-primary);
        }

        .story-text {
          margin-bottom: 16px;
          color: var(--apple-text-secondary);
          line-height: 1.6;
        }

        .story-text:last-child {
          margin-bottom: 0;
        }

        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .credential {
          display: flex;
          gap: 16px;
          padding: 24px;
          background: var(--apple-white);
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          border: 0.5px solid var(--apple-border-light);
          transition: all 0.3s ease;
        }

        .credential:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .credential-icon {
          font-size: 24px;
          line-height: 1;
          flex-shrink: 0;
        }

        .credential-title {
          margin-bottom: 8px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .credential-description {
          color: var(--apple-text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        .guide-mission {
          background: var(--apple-gray-light);
          border-radius: 16px;
          padding: 40px;
          text-align: center;
        }

        .mission-quote {
          margin: 0;
        }

        .mission-quote p {
          margin-bottom: 20px;
          font-style: italic;
          color: var(--apple-text-primary);
        }

        .mission-attribution {
          color: var(--apple-text-secondary);
          font-weight: 600;
        }

        /* Animation Classes */
        .story-section,
        .credential,
        .guide-mission {
          opacity: 0;
          transform: translateY(20px);
          animation: guideElementReveal 0.6s ease-out forwards;
        }

        .story-section { animation-delay: 0.2s; }
        .credential:nth-child(1) { animation-delay: 0.4s; }
        .credential:nth-child(2) { animation-delay: 0.5s; }
        .credential:nth-child(3) { animation-delay: 0.6s; }
        .credential:nth-child(4) { animation-delay: 0.7s; }
        .guide-mission { animation-delay: 0.9s; }

        @keyframes guideElementReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .guide-header {
            margin-bottom: 60px;
          }

          .guide-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .guide-image-container {
            position: static;
            text-align: center;
          }

          .guide-image-placeholder {
            width: 150px;
            height: 150px;
          }

          .maurice-avatar svg {
            width: 100px;
            height: 100px;
          }

          .guide-story {
            gap: 32px;
          }

          .story-section {
            padding: 24px;
          }

          .credentials-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .credential {
            padding: 20px;
            gap: 12px;
          }

          .guide-mission {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  )
}

export default GuideSection