import React, { useState } from 'react'
import { useScrollAnimation, useStaggeredAnimation } from '../../hooks/useScrollAnimation'
import { originalContent } from '../../data/originalContent'

const CapabilitiesSection = () => {
  const [activeCapability, setActiveCapability] = useState(0)
  const { capabilities } = originalContent
  
  const headerAnimation = useScrollAnimation({ delay: 200 })
  const tabsAnimation = useStaggeredAnimation(capabilities.modules.length, { staggerDelay: 100 })


  return (
    <section id="capabilities" className="apple-section apple-section-large">
      <div className="apple-container">
        <div className="capabilities-content">
          <div 
            ref={headerAnimation.elementRef}
            className={`capabilities-header scroll-reveal ${headerAnimation.animationClass}`}
            style={headerAnimation.style}
          >
            <h2 className="apple-headline-medium capabilities-headline">
              {capabilities.headline}
            </h2>
            <p className="apple-body-large capabilities-subheadline">
              Purpose-built automation modules that integrate seamlessly into your existing workflow, 
              each designed to solve specific coaching business challenges.
            </p>
          </div>

          <div className="capabilities-interface">
            {/* Capability Modules Grid */}
            <div 
              ref={tabsAnimation.containerRef}
              className="capability-modules-grid"
            >
              {capabilities.modules.map((module, index) => (
                <div
                  key={index}
                  className={`capability-module apple-hover ${tabsAnimation.isItemVisible(index) ? 'stagger-item animate-in' : 'stagger-item'}`}
                  onClick={() => setActiveCapability(index)}
                >
                  <div className="module-icon">{module.icon}</div>
                  <h3 className="apple-headline-small module-title">
                    {module.title}
                  </h3>
                  <p className="apple-body-medium module-subtitle">
                    {module.subtitle}
                  </p>
                  <p className="apple-body-medium module-description">
                    {module.description}
                  </p>
                  <div className="module-pricing">{module.pricing}</div>
                </div>
              ))}
            </div>

            {/* Bundle Pricing */}
            <div className="bundle-pricing">
              <h3 className="bundle-title">{capabilities.bundlePricing.title}</h3>
              <div className="bundle-options">
                {capabilities.bundlePricing.options.map((option, index) => (
                  <div key={index} className="bundle-option">
                    <span className="bundle-name">{option.name}:</span>
                    <span className="bundle-price">{option.price}</span>
                  </div>
                ))}
              </div>
              <p className="bundle-note">{capabilities.bundlePricing.note}</p>
            </div>
          </div>

          <div className="capabilities-cta">
            <h3 className="apple-headline-small cta-headline">
              Ready to See These in Action?
            </h3>
            <p className="apple-body-medium cta-description">
              Get your personalized capability assessment and discover which AI modules 
              will have the biggest impact on your coaching practice.
            </p>
            <button 
              className="apple-button apple-button-primary capabilities-cta-button"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Assessment
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .capabilities-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .capabilities-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .capabilities-headline {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
        }

        .capabilities-subheadline {
          color: var(--apple-text-secondary);
          max-width: 800px;
          margin: 0 auto;
        }

        .capabilities-interface {
          margin-bottom: 80px;
        }

        .capability-modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }

        .capability-module {
          background: var(--apple-white);
          border: 1px solid var(--apple-border-light);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .module-icon {
          font-size: 48px;
          margin-bottom: 20px;
          line-height: 1;
        }

        .module-title {
          margin-bottom: 12px;
          color: var(--apple-text-primary);
        }

        .module-subtitle {
          margin-bottom: 16px;
          color: var(--apple-blue);
          font-weight: 600;
        }

        .module-description {
          margin-bottom: 24px;
          color: var(--apple-text-secondary);
          line-height: 1.5;
        }

        .module-pricing {
          font-size: 18px;
          font-weight: 600;
          color: var(--apple-text-primary);
          padding: 8px 16px;
          background: var(--apple-gray-light);
          border-radius: 8px;
          display: inline-block;
        }

        .bundle-pricing {
          background: var(--apple-gray-light);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          margin-bottom: 40px;
        }

        .bundle-title {
          margin-bottom: 24px;
          color: var(--apple-text-primary);
          font-size: 24px;
          font-weight: 600;
        }

        .bundle-options {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .bundle-option {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .bundle-name {
          color: var(--apple-text-secondary);
          font-weight: 500;
        }

        .bundle-price {
          color: var(--apple-blue);
          font-weight: 700;
          font-size: 20px;
        }

        .bundle-note {
          color: var(--apple-text-secondary);
          font-size: 14px;
          margin: 0;
        }

        .capabilities-cta {
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

        .capabilities-cta-button {
          font-size: 17px;
          padding: 16px 32px;
          min-height: 50px;
          border-radius: 12px;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .capabilities-header {
            margin-bottom: 60px;
          }

          .capability-modules-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 40px;
          }

          .capability-module {
            padding: 24px;
          }

          .module-icon {
            font-size: 40px;
            margin-bottom: 16px;
          }

          .bundle-pricing {
            padding: 24px;
            margin-bottom: 32px;
          }

          .bundle-options {
            flex-direction: column;
            gap: 20px;
          }

          .capabilities-cta {
            padding: 32px 24px;
            margin: 0 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default CapabilitiesSection