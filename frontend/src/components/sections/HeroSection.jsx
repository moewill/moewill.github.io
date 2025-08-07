import React from 'react'

const HeroSection = () => {
  return (
    <section id="hero" className="apple-section apple-section-large">
      <div className="apple-container">
        <div className="hero-content">
          <h1 className="apple-headline-large hero-headline">
            The Three Core AI Capabilities That Scale $1M+ Coaches
          </h1>
          <p className="apple-body-large hero-subheadline">
            Privacy-first AI automation for coaching practices: qualify better leads, 
            prove your impact, and streamline your team.
          </p>

          {/* Proof Points */}
          <div className="hero-proof-points">
            <div className="proof-point">
              <div className="proof-icon">🤖</div>
              <span className="apple-body-medium">Automate Admin Work</span>
            </div>
            <div className="proof-point">
              <div className="proof-icon">🔒</div>
              <span className="apple-body-medium">Privacy by Design</span>
            </div>
            <div className="proof-point">
              <div className="proof-icon">📈</div>
              <span className="apple-body-medium">Performance-Linked</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust-indicators">
            <div className="trust-indicator">
              <span className="apple-body-small">17+ years technical experience</span>
            </div>
            <div className="trust-indicator">
              <span className="apple-body-small">Built for coaches, not generic businesses</span>
            </div>
            <div className="trust-indicator">
              <span className="apple-body-small">Data never used to train public AI models</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hero-cta">
            <button 
              className="apple-button apple-button-primary hero-cta-button"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your AI Assessment
            </button>
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
        }

        .proof-icon {
          font-size: 32px;
          line-height: 1;
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