import React from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'

const AppleNavigation = () => {
  const { isScrolled } = useScrollPosition()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`apple-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="apple-nav-content">
        {/* Maurice Logo */}
        <div className="apple-nav-logo" onClick={() => scrollToSection('hero')}>
          <svg width="28" height="28" viewBox="0 0 60 60" fill="none">
            <defs>
              <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#007AFF" />
                <stop offset="100%" stopColor="#005bb5" />
              </linearGradient>
            </defs>
            <path 
              d="M30 5 L47 15 L47 35 L30 45 L13 35 L13 15 Z" 
              stroke="url(#navLogoGradient)" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.9"
            />
            <text 
              x="18" 
              y="32" 
              fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" 
              fontSize="12" 
              fontWeight="600" 
              fill="url(#navLogoGradient)"
            >
              MW
            </text>
          </svg>
        </div>

        {/* Navigation Links */}
        <div className="apple-nav-links">
          <button 
            className="apple-nav-link"
            onClick={() => scrollToSection('problem')}
          >
            Challenge
          </button>
          <button 
            className="apple-nav-link"
            onClick={() => scrollToSection('capabilities')}
          >
            Capabilities
          </button>
          <button 
            className="apple-nav-link"
            onClick={() => scrollToSection('guide')}
          >
            About Maurice
          </button>
          <button 
            className="apple-nav-link"
            onClick={() => scrollToSection('success')}
          >
            Results
          </button>
          <button 
            className="apple-nav-link"
            onClick={() => scrollToSection('assessment')}
          >
            Assessment
          </button>
        </div>

        {/* Shopping Bag Icon */}
        <div className="apple-nav-bag">
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path 
              d="M3.5 6V4.5C3.5 2.01472 5.51472 0 8 0H9C11.4853 0 13.5 2.01472 13.5 4.5V6M3.5 6H2C1.44772 6 1 6.44772 1 7V18C1 19.1046 1.89543 20 3 20H14C15.1046 20 16 19.1046 16 18V7C16 6.44772 15.5523 6 15 6H13.5M3.5 6H13.5"
              stroke="#1d1d1f" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .apple-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 44px;
          background: rgba(251, 251, 253, 0.8);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 0.5px solid rgba(0, 0, 0, 0.18);
          z-index: 1000;
          transition: all 0.3s ease;
          will-change: background-color, backdrop-filter;
        }

        .apple-nav.scrolled {
          background: rgba(251, 251, 253, 0.95);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .apple-nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 22px;
        }

        .apple-nav-logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .apple-nav-logo:hover {
          opacity: 0.7;
        }

        .apple-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          flex: 1;
          justify-content: center;
        }

        .apple-nav-link {
          background: none;
          border: none;
          color: #1d1d1f;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif;
          font-size: 14px;
          font-weight: 400;
          cursor: pointer;
          padding: 8px 0;
          transition: opacity 0.3s ease;
          position: relative;
        }

        .apple-nav-link:hover {
          opacity: 0.7;
        }

        .apple-nav-bag {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: opacity 0.3s ease;
          padding: 8px;
        }

        .apple-nav-bag:hover {
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 767px) {
          .apple-nav-content {
            padding: 0 16px;
          }

          .apple-nav-links {
            gap: 20px;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .apple-nav-links::-webkit-scrollbar {
            display: none;
          }

          .apple-nav-link {
            font-size: 13px;
            white-space: nowrap;
          }

          .apple-nav-logo svg {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 600px) {
          .apple-nav-links {
            gap: 16px;
          }
          
          .apple-nav-link {
            font-size: 12px;
          }
        }

        /* Fallback for browsers without backdrop-filter */
        @supports not (backdrop-filter: blur(20px)) {
          .apple-nav {
            background: rgba(251, 251, 253, 0.95);
          }
        }
      `}</style>
    </nav>
  )
}

export default AppleNavigation