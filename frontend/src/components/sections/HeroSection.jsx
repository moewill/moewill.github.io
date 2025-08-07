import React from 'react'
import { originalContent } from '../../data/originalContent'

const HeroSection = () => {
  const { hero } = originalContent

  return (
    <section id="hero" className="apple-section apple-section-large">
      <div className="apple-container">
        <div className="hero-content">
          <h1 className="apple-headline-large hero-headline">
            {hero.headline}
          </h1>
          <p className="apple-body-large hero-subheadline">
            {hero.subheadline}
          </p>

          {/* Proof Points */}
          <div className="hero-proof-points">
            {hero.proofPoints.map((point, index) => (
              <div key={index} className="proof-point">
                <div className="proof-icon">{point.icon}</div>
                <div className="proof-content">
                  <span className="apple-body-medium proof-title">{point.title}</span>
                  <span className="apple-body-small proof-description">{point.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust-indicators">
            {hero.trustIndicators.map((indicator, index) => (
              <div key={index} className="trust-indicator">
                <span className="apple-body-small">{indicator}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hero-cta">
            <button 
              className="apple-button apple-button-primary hero-cta-button"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {hero.cta.primary}
            </button>
            <p className="apple-body-small hero-cta-subtext">
              {hero.cta.subtext}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding-top: 60px; /* Account for fixed navigation */
        }

        .hero-headline {
          margin-bottom: 24px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-subheadline {
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          color: var(--apple-text-secondary);
        }

        .hero-proof-points {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .proof-point {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .proof-icon {
          font-size: 32px;
          line-height: 1;
          margin-bottom: 8px;
        }

        .proof-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .proof-title {
          font-weight: 600;
          color: var(--apple-text-primary);
        }

        .proof-description {
          color: var(--apple-text-secondary);
          line-height: 1.4;
        }

        .hero-cta-subtext {
          color: var(--apple-text-secondary);
          margin-top: 12px;
        }

        .hero-trust-indicators {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 48px;
          align-items: center;
        }

        .trust-indicator {
          opacity: 0.8;
        }

        .hero-cta {
          margin-bottom: 40px;
        }

        .hero-cta-button {
          font-size: 17px;
          padding: 16px 32px;
          min-height: 50px;
          border-radius: 12px;
          font-weight: 500;
        }

        /* Animations */
        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          animation: heroReveal 1s ease-out 0.5s forwards;
        }

        @keyframes heroReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .proof-point {
          opacity: 0;
          transform: translateY(20px);
          animation: proofPointReveal 0.6s ease-out forwards;
        }

        .proof-point:nth-child(1) { animation-delay: 1s; }
        .proof-point:nth-child(2) { animation-delay: 1.2s; }
        .proof-point:nth-child(3) { animation-delay: 1.4s; }

        @keyframes proofPointReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .hero-content {
            padding-top: 40px;
          }

          .hero-headline {
            margin-bottom: 20px;
          }

          .hero-subheadline {
            margin-bottom: 32px;
          }

          .hero-proof-points {
            gap: 32px;
            margin-bottom: 32px;
          }

          .proof-point {
            gap: 8px;
          }

          .proof-icon {
            font-size: 28px;
          }

          .hero-trust-indicators {
            margin-bottom: 32px;
          }

          .hero-cta-button {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 600px) {
          .hero-proof-points {
            flex-direction: column;
            gap: 24px;
          }

          .proof-point {
            flex-direction: row;
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection