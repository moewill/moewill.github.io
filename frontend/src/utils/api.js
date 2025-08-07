import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const customError = new Error(error.response.data.detail || 'An error occurred')
      customError.status = error.response.status
      customError.data = error.response.data
      throw customError
    } else if (error.request) {
      const customError = new Error('Network error - please check your connection')
      customError.status = 0
      throw customError
    } else {
      const customError = new Error('Request failed')
      customError.status = 0
      throw customError
    }
  }
)

export const captureEmail = async (email) => {
  try {
    const response = await apiClient.post('/email/capture', { email })
    return response.data
  } catch (error) {
    throw error
  }
}

export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health')
    return response.data
  } catch (error) {
    throw error
  }
}

export default apiClient