// Nagara-inspired design system tokens

export const DESIGN_TOKENS = {
  // Color System - Inspired by Nagara's luxury aesthetic
  colors: {
    // Primary palette - blacks and whites for sophistication
    primary: {
      50: '#fafafa',   // Lightest white
      100: '#f5f5f5',  // Light gray
      200: '#e5e5e5',  // Medium light gray
      300: '#d4d4d4',  // Medium gray
      400: '#a3a3a3',  // Neutral gray
      500: '#737373',  // Medium dark gray
      600: '#525252',  // Dark gray
      700: '#404040',  // Darker gray
      800: '#262626',  // Very dark gray
      900: '#171717',  // Near black
      950: '#0a0a0a',  // Deep black
    },
    
    // Accent colors for selective highlighting
    accent: {
      gold: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#d4af37',  // Primary gold
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },
      silver: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#c0c0c0',  // Primary silver
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
    },
    
    // Semantic colors
    semantic: {
      success: {
        light: '#10b981',
        DEFAULT: '#059669',
        dark: '#047857',
      },
      warning: {
        light: '#f59e0b',
        DEFAULT: '#d97706',
        dark: '#b45309',
      },
      error: {
        light: '#ef4444',
        DEFAULT: '#dc2626',
        dark: '#b91c1c',
      },
      info: {
        light: '#3b82f6',
        DEFAULT: '#2563eb',
        dark: '#1d4ed8',
      },
    },
    
    // Background variations
    background: {
      primary: '#000000',      // Pure black
      secondary: '#0a0a0a',    // Deep black
      tertiary: '#1a1a1a',     // Charcoal
      surface: '#2a2a2a',      // Accent surface
      overlay: 'rgba(0, 0, 0, 0.8)',
    },
    
    // Text colors
    text: {
      primary: '#ffffff',      // Pure white
      secondary: '#f8f8f8',    // Near white
      tertiary: '#e5e5e5',     // Light gray
      muted: '#a3a3a3',        // Muted gray
      inverse: '#000000',      // Black (for light backgrounds)
    },
    
    // Border colors
    border: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      heavy: 'rgba(255, 255, 255, 0.3)',
      accent: '#d4af37',
    },
  },
  
  // Typography System
  typography: {
    // Font families
    fonts: {
      serif: ['Playfair Display', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    
    // Font sizes with line heights
    fontSize: {
      xs: { size: '0.75rem', lineHeight: '1rem' },
      sm: { size: '0.875rem', lineHeight: '1.25rem' },
      base: { size: '1rem', lineHeight: '1.5rem' },
      lg: { size: '1.125rem', lineHeight: '1.75rem' },
      xl: { size: '1.25rem', lineHeight: '1.75rem' },
      '2xl': { size: '1.5rem', lineHeight: '2rem' },
      '3xl': { size: '1.875rem', lineHeight: '2.25rem' },
      '4xl': { size: '2.25rem', lineHeight: '2.5rem' },
      '5xl': { size: '3rem', lineHeight: '1' },
      '6xl': { size: '3.75rem', lineHeight: '1' },
      '7xl': { size: '4.5rem', lineHeight: '1' },
      '8xl': { size: '6rem', lineHeight: '1' },
      '9xl': { size: '8rem', lineHeight: '1' },
    },
    
    // Font weights
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    // Letter spacing
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Spacing System
  spacing: {
    // Base spacing scale
    0: '0px',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    32: '8rem',      // 128px
    40: '10rem',     // 160px
    48: '12rem',     // 192px
    56: '14rem',     // 224px
    64: '16rem',     // 256px
    
    // Custom spacing for luxury feel
    section: {
      sm: '4rem',      // 64px
      md: '6rem',      // 96px
      lg: '8rem',      // 128px
      xl: '12rem',     // 192px
    },
  },
  
  // Animation System
  animation: {
    // Duration
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
      slowest: '1200ms',
    },
    
    // Easing functions
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      dramatic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      bounce: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    
    // Transform values
    transform: {
      slideUp: 'translateY(50px)',
      slideDown: 'translateY(-50px)',
      slideLeft: 'translateX(50px)',
      slideRight: 'translateX(-50px)',
      scaleUp: 'scale(1.05)',
      scaleDown: 'scale(0.95)',
    },
  },
  
  // Shadow System
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    dramatic: '0 35px 60px -12px rgba(0, 0, 0, 0.4)',
    
    // Glow effects
    glow: {
      gold: '0 0 20px rgba(212, 175, 55, 0.3)',
      silver: '0 0 20px rgba(192, 192, 192, 0.3)',
      white: '0 0 20px rgba(255, 255, 255, 0.2)',
    },
  },
  
  // Border Radius
  borderRadius: {
    none: '0px',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },
  
  // Z-index System
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    
    // Custom breakpoints for specific layouts
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
    ultrawide: '1920px',
  },
} as const;

// Type exports for TypeScript
export type ColorToken = keyof typeof DESIGN_TOKENS.colors;
export type SpacingToken = keyof typeof DESIGN_TOKENS.spacing;
export type TypographyToken = keyof typeof DESIGN_TOKENS.typography.fontSize;