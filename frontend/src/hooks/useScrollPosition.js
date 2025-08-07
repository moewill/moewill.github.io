import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updatePosition = () => {
      const currentScrollY = window.scrollY
      setScrollPosition(currentScrollY)
      setIsScrolled(currentScrollY > 0)
    }

    // Initial check
    updatePosition()

    // Throttled scroll listener for performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updatePosition()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollPosition,
    isScrolled
  }
}