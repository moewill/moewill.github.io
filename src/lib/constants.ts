// Nagara-inspired design constants

export const COLORS = {
  // Primary blacks and whites
  NAGARA_BLACK: '#000000',
  NAGARA_DARK: '#0a0a0a',
  NAGARA_CHARCOAL: '#1a1a1a',
  NAGARA_WHITE: '#ffffff',
  NAGARA_LIGHT: '#f8f8f8',
  
  // Accent colors
  NAGARA_GOLD: '#d4af37',
  NAGARA_SILVER: '#c0c0c0',
  NAGARA_ACCENT: '#2a2a2a',
} as const;

export const FONTS = {
  SERIF: 'Playfair Display, serif',
  SANS: 'Inter, system-ui, sans-serif',
  MONO: 'JetBrains Mono, monospace',
} as const;

export const ANIMATIONS = {
  DURATION: {
    FAST: '0.3s',
    MEDIUM: '0.6s',
    SLOW: '0.8s',
    EXTRA_SLOW: '1.2s',
  },
  EASING: {
    SMOOTH: 'cubic-bezier(0.4, 0, 0.2, 1)',
    BOUNCE: 'cubic-bezier(0.16, 1, 0.3, 1)',
    DRAMATIC: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
} as const;

export const SERVICES = {
  STRATEGIC_CONSULTING: {
    id: 'strategic-consulting',
    title: 'Strategic Technical Consulting',
    price: '$99/month',
    description: 'Expert guidance on technical challenges and growth acceleration',
    features: [
      'Technical strategy & planning',
      'Growth-focused solutions',
      'Implementation roadmaps',
      '30-minute free consultation',
    ],
  },
  IMPLEMENTATION: {
    id: 'implementation',
    title: 'Complete Implementation Services',
    price: '$75/hour',
    description: 'Full-stack development and technical implementation',
    features: [
      'Custom development',
      'AI & automation systems',
      'Database optimization',
      'Performance enhancement',
    ],
  },
  TRAINING: {
    id: 'training',
    title: 'Executive Technology Training',
    price: '$99/workshop',
    description: 'Cutting-edge skills through hands-on workshops',
    features: [
      'Cybersecurity fundamentals',
      'AI agents & chatbots',
      'DevOps engineering',
      'Cloud technologies',
    ],
  },
  AI_LEAD_GENERATION: {
    id: 'ai-lead-generation',
    title: 'Revenue Acceleration Systems',
    price: '$149/month',
    description: 'AI-powered lead generation and sales automation',
    features: [
      'AI prospect identification',
      'Automated outreach campaigns',
      'Lead scoring & qualification',
      'CRM integration & reporting',
    ],
  },
} as const;

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;