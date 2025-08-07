import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Capability Engine</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Privacy-first AI automation that eliminates admin work for 7 & 8-figure coaching practices.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Client Onboarding AI</li>
              <li>Session Recap & Follow-Up</li>
              <li>Lead Qualification</li>
              <li>Content Creation AI</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/mauricerashadwilliams" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://github.com/moewill" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Maurice Williams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer