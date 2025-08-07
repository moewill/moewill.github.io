import React from 'react'
import LoadingScreen from './components/LoadingScreen'
import AppleNavigation from './components/AppleNavigation'
import HeroSection from './components/sections/HeroSection'
import ProblemSection from './components/sections/ProblemSection'
import SolutionSection from './components/sections/SolutionSection'
import GuideSection from './components/sections/GuideSection'
import PlanSection from './components/sections/PlanSection'
import ComparisonSection from './components/sections/ComparisonSection'
import CapabilitiesSection from './components/sections/CapabilitiesSection'
import SuccessSection from './components/sections/SuccessSection'
import ProofSection from './components/sections/ProofSection'
import AssessmentSection from './components/sections/AssessmentSection'
import { useLoadingScreen } from './hooks/useLoadingScreen'
import './styles/apple.css'

function App() {
  const { isLoading, isVisible, handleLoadingComplete } = useLoadingScreen()

  return (
    <div className="app">
      <LoadingScreen 
        isVisible={isVisible} 
        onComplete={handleLoadingComplete} 
      />
      
      {!isLoading && (
        <>
          <AppleNavigation />
          <main>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <GuideSection />
            <PlanSection />
            <ComparisonSection />
            <CapabilitiesSection />
            <SuccessSection />
            <ProofSection />
            <AssessmentSection />
          </main>
        </>
      )}
    </div>
  )
}

export default App