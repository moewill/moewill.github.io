import React, { useState } from 'react'
import { captureEmail } from '../utils/api'

const EmailCapture = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Please enter your email address')
      setIsSuccess(false)
      return
    }

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address')
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const response = await captureEmail(email)
      
      if (response.success) {
        setIsSuccess(true)
        setMessage(`Success! Your code: ${response.code}`)
        setEmail('')
      } else {
        setIsSuccess(false)
        setMessage(response.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setIsSuccess(false)
      
      if (error.status === 409) {
        setMessage('This email is already registered.')
      } else if (error.status === 429) {
        setMessage('Too many requests. Please try again later.')
      } else if (error.status === 422) {
        setMessage('Please enter a valid email address.')
      } else {
        setMessage('Unable to connect. Please try again later.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for capability assessment"
            className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !email}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              'Get Access'
            )}
          </button>
        </div>
        
        {message && (
          <div className={`text-center p-3 rounded-lg text-sm font-medium ${
            isSuccess 
              ? 'bg-green-900/50 text-green-200 border border-green-700' 
              : 'bg-red-900/50 text-red-200 border border-red-700'
          }`}>
            {message}
          </div>
        )}
      </form>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        Privacy-first. Your email is never shared or sold.
      </p>
    </div>
  )
}

export default EmailCapture