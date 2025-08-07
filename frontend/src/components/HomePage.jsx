import React from 'react'
import EmailCapture from './EmailCapture'

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              The Capability Engine
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Privacy-first AI automation that eliminates admin work for 7 & 8-figure coaching practices
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Scale client capacity, deliver world-class experiences. Capability assessment available.
            </p>
            <EmailCapture />
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Modular AI assistants that integrate seamlessly into your coaching practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${capability.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Maurice</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              AI automation specialist and technical partner for high-growth coaching practices. 
              Expert in privacy-first solutions that scale without compromising client experience.
            </p>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Technical Expertise</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• AI/ML Integration</li>
                  <li>• Privacy-First Architecture</li>
                  <li>• Workflow Automation</li>
                  <li>• System Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Focus Areas</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• 7 & 8-Figure Coaches</li>
                  <li>• Client Experience</li>
                  <li>• Operational Efficiency</li>
                  <li>• Scalable Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Scale?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Get your capability assessment and discover how AI can eliminate admin work in your coaching practice.
          </p>
          <EmailCapture />
        </div>
      </section>
    </div>
  )
}

const capabilities = [
  {
    title: "Client Onboarding AI",
    description: "Automated client onboarding with personalized welcomes and instant setup",
    icon: "fas fa-user-plus"
  },
  {
    title: "Session Recap & Follow-Up",
    description: "Automatic session summaries and personalized follow-up workflows",
    icon: "fas fa-clipboard-check"
  },
  {
    title: "Lead Qualification AI",
    description: "Intelligent lead scoring and automated prospect nurturing",
    icon: "fas fa-filter"
  },
  {
    title: "Content Creation AI",
    description: "AI-powered content generation for courses, emails, and social media",
    icon: "fas fa-pen-fancy"
  },
  {
    title: "Internal Operations",
    description: "Streamlined internal workflows and team collaboration tools",
    icon: "fas fa-cogs"
  },
  {
    title: "KPI Dashboard",
    description: "Real-time analytics and performance insights for your practice",
    icon: "fas fa-chart-line"
  }
]

export default HomePage