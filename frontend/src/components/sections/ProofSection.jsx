import React, { useState } from 'react'

const ProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Business Growth Coach",
      company: "Chen Coaching International",
      revenue: "$2.3M Annual Revenue",
      image: "https://via.placeholder.com/80x80",
      quote: "Maurice's AI system didn't just save me time—it transformed my entire coaching practice. I'm now working with 2.5x more clients while delivering better results than ever before. The lead qualification alone has been worth the entire investment.",
      results: ["Saved 25 hours weekly", "150% increase in client capacity", "$400K additional annual revenue", "40% improvement in client outcomes"],
      videoUrl: "#"
    },
    {
      name: "Marcus Rodriguez",
      title: "Executive Leadership Coach", 
      company: "Rodriguez Executive Solutions",
      revenue: "$1.8M Annual Revenue",
      image: "https://via.placeholder.com/80x80",
      quote: "The AI content system maintains my voice and expertise while scaling my reach exponentially. It's like having a team of expert assistants who never sleep. My group coaching program now serves 100+ executives with 95% satisfaction scores.",
      results: ["80% automation of content creation", "Doubled revenue in 12 months", "100+ clients in group program", "20% reduction in working hours"],
      videoUrl: "#"
    },
    {
      name: "Jennifer Thompson",
      title: "Life Transformation Coach",
      company: "Thompson Method",
      revenue: "$1.2M Annual Revenue", 
      image: "https://via.placeholder.com/80x80",
      quote: "I was skeptical about AI in coaching, but Maurice's system preserves the human connection while eliminating all the busywork. My clients get better outcomes because I can focus 100% on coaching instead of admin tasks.",
      results: ["Eliminated 20+ hours of admin weekly", "Improved client retention by 65%", "$200K increase in annual revenue", "Launched successful online course"],
      videoUrl: "#"
    },
    {
      name: "David Kim",
      title: "Sales Performance Coach",
      company: "Kim Sales Academy", 
      revenue: "$3.1M Annual Revenue",
      image: "https://via.placeholder.com/80x80",
      quote: "The ROI measurement capabilities alone justify the investment. I can now prove to clients exactly how my coaching impacts their revenue. This has allowed me to double my coaching fees while maintaining 100% client satisfaction.",
      results: ["Doubled coaching fees", "100% client satisfaction maintained", "Proven ROI measurement system", "Expanded to enterprise clients"],
      videoUrl: "#"
    }
  ]

  const trustIndicators = [
    {
      icon: "🏆",
      title: "Industry Recognition",
      description: "Featured in Forbes, Entrepreneur, and Harvard Business Review for AI innovation in coaching"
    },
    {
      icon: "🔒",
      title: "Privacy Certified",
      description: "SOC 2 Type II compliant with enterprise-grade security standards"
    },
    {
      icon: "📊",
      title: "Proven Results",
      description: "98% of coaches achieve projected time savings within 30 days of implementation"
    },
    {
      icon: "🎯",
      title: "Success Guarantee",
      description: "60-day performance guarantee with full refund if targets aren't met"
    }
  ]

  const clientLogos = [
    "Acme Coaching Co.",
    "Success Strategies Inc.",
    "Peak Performance Partners",
    "Growth Accelerators LLC",
    "Elite Executive Coaching",
    "Transform Leadership Group"
  ]

  return (
    <section id="proof" className="apple-section apple-section-large" style={{ background: 'var(--apple-gray-light)' }}>
      <div className="apple-container">
        <div className="proof-content">
          <div className="proof-header">
            <h2 className="apple-headline-medium proof-headline">
              Trusted by Leading Coaches Worldwide
            </h2>
            <p className="apple-body-large proof-subheadline">
              Join hundreds of successful coaches who've transformed their practices with AI automation. 
              Real results from real coaching professionals.
            </p>
          </div>

          {/* Featured Testimonials */}
          <div className="testimonials-section">
            <div className="testimonial-navigation">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`testimonial-nav-item ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="nav-item-image">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="nav-avatar"
                    />
                  </div>
                  <div className="nav-item-info">
                    <span className="apple-body-medium nav-name">{testimonial.name}</span>
                    <span className="apple-body-small nav-title">{testimonial.title}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="testimonial-content">
              <div className="testimonial-main">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="avatar-image"
                    />
                  </div>
                  <div className="testimonial-info">
                    <h3 className="apple-headline-small testimonial-name">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="apple-body-medium testimonial-title">
                      {testimonials[activeTestimonial].title}
                    </p>
                    <p className="apple-body-small testimonial-company">
                      {testimonials[activeTestimonial].company}
                    </p>
                    <p className="apple-body-small testimonial-revenue">
                      {testimonials[activeTestimonial].revenue}
                    </p>
                  </div>
                </div>

                <blockquote className="testimonial-quote">
                  <p className="apple-body-large quote-text">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                </blockquote>

                <div className="testimonial-results">
                  <h4 className="apple-body-medium results-title">Key Results:</h4>
                  <div className="results-grid">
                    {testimonials[activeTestimonial].results.map((result, index) => (
                      <div key={index} className="result-item">
                        <span className="result-check">✓</span>
                        <span className="apple-body-medium result-text">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <h3 className="apple-headline-small trust-headline">
              Why Coaches Trust Maurice
            </h3>
            <div className="trust-grid">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="trust-card">
                  <div className="trust-icon">{indicator.icon}</div>
                  <h4 className="apple-body-medium trust-title">
                    {indicator.title}
                  </h4>
                  <p className="apple-body-small trust-description">
                    {indicator.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Logos */}
          <div className="client-logos">
            <h3 className="apple-headline-small logos-headline">
              Coaching Practices We've Transformed
            </h3>
            <div className="logos-grid">
              {clientLogos.map((logo, index) => (
                <div key={index} className="logo-item">
                  <span className="apple-body-small logo-text">{logo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="social-stats">
            <div className="stat-item">
              <div className="apple-headline-medium stat-number">200+</div>
              <p className="apple-body-medium stat-label">Coaches Transformed</p>
            </div>
            <div className="stat-item">
              <div className="apple-headline-medium stat-number">25M+</div>
              <p className="apple-body-medium stat-label">Hours Saved Annually</p>
            </div>
            <div className="stat-item">
              <div className="apple-headline-medium stat-number">$50M+</div>
              <p className="apple-body-medium stat-label">Additional Revenue Generated</p>
            </div>
            <div className="stat-item">
              <div className="apple-headline-medium stat-number">98%</div>
              <p className="apple-body-medium stat-label">Success Rate</p>
            </div>
          </div>

          <div className="proof-cta">
            <h3 className="apple-headline-small cta-headline">
              Join These Successful Coaches
            </h3>
            <p className="apple-body-medium cta-description">
              Get your personalized assessment and discover how AI can transform 
              your coaching practice with the same proven results.
            </p>
            <button 
              className="apple-button apple-button-primary proof-cta-button"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Success Plan
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .proof-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .proof-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .proof-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .proof-subheadline {
          color: var(--apple-text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .testimonials-section {
          background: var(--apple-white);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 80px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 0.5px solid var(--apple-border-light);
        }

        .testimonial-navigation {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--apple-border-light);
        }

        .testimonial-nav-item {
          display: flex;
          gap: 16px;
          align-items: center;
          padding: 16px;
          border: 1px solid var(--apple-border-light);
          border-radius: 12px;
          background: var(--apple-white);
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .testimonial-nav-item:hover {
          border-color: var(--apple-blue);
        }

        .testimonial-nav-item.active {
          background: var(--apple-blue);
          border-color: var(--apple-blue);
          color: white;
        }

        .testimonial-nav-item.active .nav-name,
        .testimonial-nav-item.active .nav-title {
          color: white;
        }

        .nav-item-image {
          flex-shrink: 0;
        }

        .nav-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }

        .nav-item-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-name {
          font-weight: 600;
          color: var(--apple-text-primary);
        }

        .nav-title {
          color: var(--apple-text-secondary);
        }

        .testimonial-content {
          min-height: 400px;
        }

        .testimonial-header {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .testimonial-avatar {
          flex-shrink: 0;
        }

        .avatar-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .testimonial-name {
          margin: 0;
          color: var(--apple-text-primary);
        }

        .testimonial-title {
          margin: 0;
          color: var(--apple-text-secondary);
        }

        .testimonial-company {
          margin: 0;
          color: var(--apple-text-secondary);
          font-style: italic;
        }

        .testimonial-revenue {
          margin: 0;
          color: var(--apple-blue);
          font-weight: 600;
        }

        .testimonial-quote {
          margin: 0 0 32px 0;
          padding: 24px;
          background: var(--apple-gray-light);
          border-radius: 16px;
          border-left: 4px solid var(--apple-blue);
        }

        .quote-text {
          margin: 0;
          font-style: italic;
          color: var(--apple-text-primary);
          line-height: 1.6;
        }

        .testimonial-results {
          background: rgba(52, 199, 89, 0.05);
          border-radius: 12px;
          padding: 24px;
        }

        .results-title {
          margin-bottom: 16px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .result-check {
          color: #34c759;
          font-weight: 600;
          flex-shrink: 0;
        }

        .result-text {
          color: var(--apple-text-primary);
        }

        .trust-indicators {
          margin-bottom: 80px;
        }

        .trust-headline {
          text-align: center;
          margin-bottom: 48px;
          color: var(--apple-text-primary);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .trust-card {
          background: var(--apple-white);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
          transition: all 0.3s ease;
        }

        .trust-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .trust-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .trust-title {
          margin-bottom: 12px;
          color: var(--apple-text-primary);
          font-weight: 600;
        }

        .trust-description {
          color: var(--apple-text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        .client-logos {
          margin-bottom: 80px;
        }

        .logos-headline {
          text-align: center;
          margin-bottom: 32px;
          color: var(--apple-text-primary);
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .logo-item {
          background: var(--apple-white);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          border: 0.5px solid var(--apple-border-light);
        }

        .logo-text {
          color: var(--apple-text-secondary);
          font-weight: 600;
        }

        .social-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin-bottom: 80px;
          padding: 40px;
          background: var(--apple-white);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 0.5px solid var(--apple-border-light);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          margin-bottom: 8px;
          color: var(--apple-blue);
          font-weight: 700;
        }

        .stat-label {
          color: var(--apple-text-secondary);
          margin: 0;
        }

        .proof-cta {
          text-align: center;
          background: var(--apple-white);
          border-radius: 20px;
          padding: 48px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border: 0.5px solid var(--apple-border-light);
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

        .proof-cta-button {
          font-size: 17px;
          padding: 16px 32px;
          min-height: 50px;
          border-radius: 12px;
          font-weight: 500;
        }

        /* Animation Classes */
        .testimonial-content {
          opacity: 0;
          animation: testimonialReveal 0.5s ease-out forwards;
        }

        @keyframes testimonialReveal {
          to {
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .proof-header {
            margin-bottom: 60px;
          }

          .testimonials-section {
            padding: 24px;
            margin-bottom: 60px;
          }

          .testimonial-navigation {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 32px;
          }

          .testimonial-nav-item {
            padding: 12px;
            gap: 12px;
          }

          .nav-avatar {
            width: 40px;
            height: 40px;
          }

          .testimonial-header {
            flex-direction: column;
            gap: 16px;
            align-items: center;
            text-align: center;
          }

          .avatar-image {
            width: 64px;
            height: 64px;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }

          .trust-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .trust-card {
            padding: 24px;
          }

          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .logo-item {
            padding: 16px;
          }

          .social-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            padding: 24px;
            margin-bottom: 60px;
          }

          .proof-cta {
            padding: 32px 24px;
            margin: 0 16px;
          }
        }

        @media (max-width: 600px) {
          .social-stats {
            grid-template-columns: 1fr;
          }

          .logos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default ProofSection