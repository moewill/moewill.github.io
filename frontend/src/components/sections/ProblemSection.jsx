import React from 'react'
import { originalContent } from '../../data/originalContent'

const ProblemSection = () => {
  const { problem } = originalContent

  return (
    <section id="problem" className="apple-section">
      <div className="apple-container">
        <div className="problem-content">
          <h2 className="apple-headline-medium problem-headline">
            {problem.headline}
          </h2>
          <p className="apple-body-large problem-subheadline">
            {problem.description}
          </p>

          <div className="problem-grid">
            {problem.challenges.map((challenge, index) => (
              <div key={index} className="problem-card apple-card">
                <div className="problem-icon">{challenge.icon}</div>
                <h3 className="apple-headline-small problem-card-title">
                  {challenge.title}
                </h3>
                <p className="apple-body-medium problem-card-description">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

          <div className="problem-impact">
            <h3 className="apple-headline-small impact-headline">
              The Result?
            </h3>
            <p className="apple-body-large impact-description">
              {problem.bridge}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .problem-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .problem-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .problem-subheadline {
          margin-bottom: 60px;
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .problem-card {
          text-align: center;
          padding: 32px 24px;
          transition: all 0.3s ease;
          border: 1px solid var(--apple-border-light);
          background: rgba(255, 255, 255, 0.8);
        }

        .problem-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        }

        .problem-icon {
          font-size: 48px;
          margin-bottom: 20px;
          line-height: 1;
        }

        .problem-card-title {
          margin-bottom: 16px;
          color: var(--apple-text-primary);
        }

        .problem-card-description {
          color: var(--apple-text-secondary);
          line-height: 1.5;
        }

        .problem-impact {
          background: var(--apple-gray-light);
          border-radius: 16px;
          padding: 40px;
          max-width: 600px;
          margin: 0 auto;
        }

        .impact-headline {
          margin-bottom: 16px;
          color: var(--apple-text-primary);
        }

        .impact-description {
          color: var(--apple-text-primary);
          margin: 0;
        }

        .impact-description strong {
          color: #d32f2f;
          font-weight: 600;
        }

        /* Animation Classes */
        .problem-card {
          opacity: 0;
          transform: translateY(20px);
          animation: problemCardReveal 0.6s ease-out forwards;
        }

        .problem-card:nth-child(1) { animation-delay: 0.1s; }
        .problem-card:nth-child(2) { animation-delay: 0.2s; }
        .problem-card:nth-child(3) { animation-delay: 0.3s; }
        .problem-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes problemCardReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .problem-subheadline {
            margin-bottom: 40px;
          }

          .problem-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 40px;
          }

          .problem-card {
            padding: 24px 20px;
          }

          .problem-icon {
            font-size: 40px;
            margin-bottom: 16px;
          }

          .problem-impact {
            padding: 24px;
            margin: 0 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default ProblemSection