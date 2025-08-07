import { useState, useEffect, useRef, useCallback } from 'react'

// Task 5.0: Add Apple-Style Animations and Interactive Elements

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true,
    delay = 0,
    duration = 600
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef(null)

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries
    
    if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
      setTimeout(() => {
        setIsVisible(true)
        if (triggerOnce) {
          setHasTriggered(true)
        }
      }, delay)
    } else if (!triggerOnce && !entry.isIntersecting) {
      setIsVisible(false)
    }
  }, [delay, triggerOnce, hasTriggered])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [handleIntersection, threshold, rootMargin])

  return {
    elementRef,
    isVisible,
    animationClass: isVisible ? 'animate-in' : 'animate-out',
    style: {
      '--animation-duration': `${duration}ms`,
      '--animation-delay': `${delay}ms`
    }
  }
}

export const useStaggeredAnimation = (itemCount, options = {}) => {
  const {
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px'
  } = options

  const [visibleItems, setVisibleItems] = useState(new Set())
  const [hasTriggered, setHasTriggered] = useState(false)
  const containerRef = useRef(null)

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries
    
    if (entry.isIntersecting && !hasTriggered) {
      setHasTriggered(true)
      
      // Stagger the animation of child items
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, i]))
        }, i * staggerDelay)
      }
    }
  }, [itemCount, staggerDelay, hasTriggered])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    })

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [handleIntersection, threshold, rootMargin])

  const isItemVisible = useCallback((index) => {
    return visibleItems.has(index)
  }, [visibleItems])

  return {
    containerRef,
    isItemVisible,
    visibleItems
  }
}

export const useParallaxScroll = (speed = 0.5) => {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * speed
      
      setOffset(rate)
    }

    // Throttled scroll handler for performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [speed])

  return {
    elementRef,
    offset,
    transform: `translateY(${offset}px)`
  }
}

export const useHoverAnimation = (options = {}) => {
  const {
    scale = 1.05,
    duration = 300,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
  } = options

  const [isHovered, setIsHovered] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return {
    elementRef,
    isHovered,
    style: {
      transform: isHovered ? `scale(${scale})` : 'scale(1)',
      transition: `transform ${duration}ms ${easing}`
    }
  }
}

export default useScrollAnimation