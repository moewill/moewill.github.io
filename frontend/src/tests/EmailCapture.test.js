import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import EmailCapture from '../components/EmailCapture'
import * as api from '../utils/api'

vi.mock('../utils/api')

describe('EmailCapture', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders email form', () => {
    render(<EmailCapture />)
    
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get access/i })).toBeInTheDocument()
  })

  test('validates email format', async () => {
    render(<EmailCapture />)
    
    const input = screen.getByPlaceholderText(/enter your email/i)
    const button = screen.getByRole('button', { name: /get access/i })
    
    fireEvent.change(input, { target: { value: 'invalid-email' } })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    })
  })

  test('handles successful email capture', async () => {
    const mockResponse = { success: true, code: 'ABC123DEF0' }
    api.captureEmail.mockResolvedValue(mockResponse)
    
    render(<EmailCapture />)
    
    const input = screen.getByPlaceholderText(/enter your email/i)
    const button = screen.getByRole('button', { name: /get access/i })
    
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText(/success! your code: ABC123DEF0/i)).toBeInTheDocument()
    })
    
    expect(api.captureEmail).toHaveBeenCalledWith('test@example.com')
  })

  test('handles email already exists error', async () => {
    const mockError = new Error('Email already exists')
    mockError.status = 409
    api.captureEmail.mockRejectedValue(mockError)
    
    render(<EmailCapture />)
    
    const input = screen.getByPlaceholderText(/enter your email/i)
    const button = screen.getByRole('button', { name: /get access/i })
    
    fireEvent.change(input, { target: { value: 'duplicate@example.com' } })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText(/this email is already registered/i)).toBeInTheDocument()
    })
  })

  test('handles rate limiting error', async () => {
    const mockError = new Error('Too many requests')
    mockError.status = 429
    api.captureEmail.mockRejectedValue(mockError)
    
    render(<EmailCapture />)
    
    const input = screen.getByPlaceholderText(/enter your email/i)
    const button = screen.getByRole('button', { name: /get access/i })
    
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText(/too many requests/i)).toBeInTheDocument()
    })
  })
})