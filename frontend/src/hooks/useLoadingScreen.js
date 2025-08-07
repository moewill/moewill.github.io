import { useState, useEffect } from 'react'

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if this is the first visit in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoadingScreen')
    return !hasSeenLoading
  })

  const [isVisible, setIsVisible] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      // Mark as seen for this session
      sessionStorage.setItem('hasSeenLoadingScreen', 'true')
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Allow fade-out animation to complete
  }

  return {
    isLoading,
    isVisible,
    handleLoadingComplete
  }
}