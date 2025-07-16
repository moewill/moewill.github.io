import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Nagara-inspired color scheme
      colors: {
        // Primary blacks and whites for luxury feel
        'nagara-black': '#000000',
        'nagara-dark': '#0a0a0a',
        'nagara-charcoal': '#1a1a1a',
        'nagara-white': '#ffffff',
        'nagara-light': '#f8f8f8',
        
        // Accent colors for selective highlighting
        'nagara-gold': '#d4af37',
        'nagara-silver': '#c0c0c0',
        'nagara-accent': '#2a2a2a',
        
        // Subtle grays for depth
        'nagara-gray-100': '#f5f5f5',
        'nagara-gray-200': '#eeeeee',
        'nagara-gray-300': '#e0e0e0',
        'nagara-gray-400': '#bdbdbd',
        'nagara-gray-500': '#9e9e9e',
        'nagara-gray-600': '#757575',
        'nagara-gray-700': '#616161',
        'nagara-gray-800': '#424242',
        'nagara-gray-900': '#212121',
      },
      
      // Typography matching Nagara's style
      fontFamily: {
        'nagara-serif': ['Playfair Display', 'serif'],
        'nagara-sans': ['Inter', 'system-ui', 'sans-serif'],
        'nagara-mono': ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'nagara-xs': ['0.75rem', { lineHeight: '1rem' }],
        'nagara-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'nagara-base': ['1rem', { lineHeight: '1.5rem' }],
        'nagara-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'nagara-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'nagara-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'nagara-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'nagara-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'nagara-5xl': ['3rem', { lineHeight: '1' }],
        'nagara-6xl': ['3.75rem', { lineHeight: '1' }],
        'nagara-7xl': ['4.5rem', { lineHeight: '1' }],
        'nagara-8xl': ['6rem', { lineHeight: '1' }],
        'nagara-9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Animations matching Nagara's smooth transitions
      animation: {
        'nagara-fade-in': 'nagara-fade-in 0.8s ease-out',
        'nagara-slide-up': 'nagara-slide-up 0.6s ease-out',
        'nagara-slide-down': 'nagara-slide-down 0.6s ease-out',
        'nagara-slide-left': 'nagara-slide-left 0.8s ease-out',
        'nagara-slide-right': 'nagara-slide-right 0.8s ease-out',
        'nagara-scale-in': 'nagara-scale-in 0.5s ease-out',
        'nagara-parallax': 'nagara-parallax 20s linear infinite',
        'nagara-float': 'nagara-float 6s ease-in-out infinite',
      },
      
      keyframes: {
        'nagara-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'nagara-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'nagara-slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'nagara-slide-left': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'nagara-slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'nagara-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'nagara-parallax': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'nagara-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      // Spacing for luxury feel
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Box shadows for depth
      boxShadow: {
        'nagara-subtle': '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'nagara-soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'nagara-medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'nagara-large': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'nagara-dramatic': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      
      // Border radius for modern feel
      borderRadius: {
        'nagara-sm': '0.25rem',
        'nagara-md': '0.375rem',
        'nagara-lg': '0.5rem',
        'nagara-xl': '0.75rem',
        'nagara-2xl': '1rem',
        'nagara-3xl': '1.5rem',
      },
      
      // Backdrop blur for glass effects
      backdropBlur: {
        'nagara-sm': '4px',
        'nagara-md': '8px',
        'nagara-lg': '16px',
        'nagara-xl': '24px',
      },
    },
  },
  plugins: [],
};

export default config;