import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ isVisible, onComplete }) => {
  const [animationPhase, setAnimationPhase] = useState('initial')

  useEffect(() => {
    if (!isVisible) return

    const timeline = [
      { phase: 'strokeAnimation', delay: 500 },
      { phase: 'colorTransition', delay: 2000 },
      { phase: 'textReveal', delay: 2500 },
      { phase: 'fadeOut', delay: 3000 }
    ]

    timeline.forEach(({ phase, delay }) => {
      setTimeout(() => setAnimationPhase(phase), delay)
    })

    setTimeout(() => {
      onComplete?.()
    }, 4000)
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="loading-screen">
      <svg 
        className="maurice-logo-loader" 
        width="80" 
        height="80" 
        viewBox="0 0 60 60" 
        fill="none"
      >
        <defs>
          <linearGradient id="loadingLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop 
              offset="0%" 
              stopColor={animationPhase === 'colorTransition' || animationPhase === 'textReveal' || animationPhase === 'fadeOut' ? '#007AFF' : '#ffffff'}
              style={{
                transition: 'stop-color 0.5s ease'
              }}
            />
            <stop 
              offset="100%" 
              stopColor={animationPhase === 'colorTransition' || animationPhase === 'textReveal' || animationPhase === 'fadeOut' ? '#007AFF' : '#666666'}
              style={{
                transition: 'stop-color 0.5s ease'
              }}
            />
          </linearGradient>
        </defs>
        
        {/* Hexagon Path */}
        <path 
          d="M30 5 L47 15 L47 35 L30 45 L13 35 L13 15 Z" 
          stroke="url(#loadingLogoGradient)" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.8"
          strokeDasharray="100"
          strokeDashoffset={animationPhase === 'initial' ? '100' : '0'}
          style={{
            transition: 'stroke-dashoffset 2s ease'
          }}
        />
        
        {/* MW Text */}
        <text 
          x="20" 
          y="32" 
          fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" 
          fontSize="16" 
          fontWeight="600" 
          fill="url(#loadingLogoGradient)"
          opacity={animationPhase === 'textReveal' || animationPhase === 'fadeOut' ? 1 : 0}
          style={{
            transition: 'opacity 0.5s ease'
          }}
        >
          MW
        </text>
      </svg>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: ${animationPhase === 'fadeOut' ? 0 : 1};
          transition: opacity 1s ease-out;
        }
        
        .maurice-logo-loader {
          opacity: 0.3;
          transform: scale(0.8) rotate(0deg);
          animation: logoReveal 3s ease-in-out forwards;
        }
        
        @keyframes logoReveal {
          0% { 
            opacity: 0.3; 
            transform: scale(0.8) rotate(0deg); 
          }
          30% { 
            opacity: 1; 
            transform: scale(1.1) rotate(5deg); 
          }
          60% { 
            opacity: 1; 
            transform: scale(0.95) rotate(-2deg); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen