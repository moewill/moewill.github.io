// Image management and optimization utilities

// Placeholder image configurations for development
export const PLACEHOLDER_IMAGES = {
  // Hero section images
  HERO_MACBOOK: '/images/hero/macbook-coding.jpg',
  HERO_BACKGROUND: '/images/hero/tech-abstract.jpg',
  
  // Service-specific images
  STRATEGIC_CONSULTING: '/images/services/consultation-meeting.jpg',
  IMPLEMENTATION: '/images/services/code-development.jpg',
  TRAINING: '/images/services/workshop-training.jpg',
  AI_LEAD_GENERATION: '/images/services/ai-automation.jpg',
  
  // Tech demonstration images
  VSCODE_CLAUDE: '/images/tech/vscode-claude-demo.jpg',
  VOICE_AGENT: '/images/tech/voice-agent-interface.jpg',
  MACBOOK_SIDE: '/images/tech/macbook-side-lighting.jpg',
  
  // Background patterns
  DARK_ABSTRACT: '/images/backgrounds/dark-abstract.jpg',
  TECH_PATTERN: '/images/backgrounds/tech-pattern.jpg',
} as const;

// Image optimization settings
export const IMAGE_SIZES = {
  HERO: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw',
  SERVICE_CARD: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  TECH_DEMO: '(max-width: 768px) 100vw, 60vw',
  BACKGROUND: '100vw',
} as const;

// High-quality image requirements for production
export const IMAGE_REQUIREMENTS = {
  HERO_MACBOOK: {
    description: 'MacBook Pro with dramatic side lighting showing code editor',
    dimensions: '1920x1080',
    style: 'High-contrast, professional photography, dark background with selective lighting',
    content: 'Modern MacBook Pro open with VSCode or development environment visible',
  },
  VSCODE_CLAUDE: {
    description: 'VSCode interface with Claude Code/Cline extension active',
    dimensions: '1600x1000',
    style: 'Clean screenshot with dramatic lighting overlay',
    content: 'VSCode with Claude Code extension, showing AI assistance in action',
  },
  VOICE_AGENT: {
    description: 'Website mockup showing voice agent interface with customer dialogue',
    dimensions: '1400x900',
    style: 'Professional UI screenshot with realistic chat bubbles',
    content: 'Voice agent interface showing satisfied customer interaction',
  },
  CONSULTATION: {
    description: 'Professional consultation meeting setup',
    dimensions: '1200x800',
    style: 'Corporate photography with sophisticated lighting',
    content: 'Modern office setting, laptop, professional atmosphere',
  },
  AI_AUTOMATION: {
    description: 'Abstract representation of AI and automation',
    dimensions: '1200x800',
    style: 'Futuristic, high-tech visualization with dark theme',
    content: 'Network nodes, data flow, AI visualization elements',
  },
} as const;

// Temporary placeholder generator (for development)
export const generatePlaceholderUrl = (width: number, height: number, text?: string) => {
  const placeholderText = text ? encodeURIComponent(text) : 'Nagara%20Tech';
  return `https://images.unsplash.com/${width}x${height}/?${placeholderText}&bg=000000&color=ffffff`;
};

// Image optimization utility
export const getOptimizedImageProps = (
  src: string,
  alt: string,
  sizes: string,
  priority: boolean = false
) => ({
  src,
  alt,
  sizes,
  priority,
  quality: 90,
  placeholder: 'blur' as const,
  blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
});