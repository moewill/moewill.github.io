'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AccessibleNavigationProps {
  className?: string;
}

interface NavigationItem {
  href: string;
  label: string;
  ariaLabel?: string;
  description?: string;
}

const navigationItems: NavigationItem[] = [
  { 
    href: '/', 
    label: 'Home',
    ariaLabel: 'Go to homepage',
    description: 'Return to the main page'
  },
  { 
    href: '/services', 
    label: 'Services',
    ariaLabel: 'View our services',
    description: 'Explore our technical consulting services'
  },
  { 
    href: '/about', 
    label: 'About',
    ariaLabel: 'Learn about Maurice Rashad',
    description: 'Learn more about our expertise and approach'
  },
  { 
    href: '/contact', 
    label: 'Contact',
    ariaLabel: 'Contact us for consultation',
    description: 'Get in touch to discuss your technical needs'
  },
];

export const AccessibleNavigation: React.FC<AccessibleNavigationProps> = ({ 
  className 
}) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!navRef.current) return;

      const items = navRef.current.querySelectorAll('[data-nav-item]');
      
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          setIsKeyboardNavigation(true);
          setFocusedIndex(prev => {
            const nextIndex = prev < items.length - 1 ? prev + 1 : 0;
            (items[nextIndex] as HTMLElement)?.focus();
            return nextIndex;
          });
          break;
          
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          setIsKeyboardNavigation(true);
          setFocusedIndex(prev => {
            const nextIndex = prev > 0 ? prev - 1 : items.length - 1;
            (items[nextIndex] as HTMLElement)?.focus();
            return nextIndex;
          });
          break;
          
        case 'Home':
          event.preventDefault();
          setIsKeyboardNavigation(true);
          setFocusedIndex(0);
          (items[0] as HTMLElement)?.focus();
          break;
          
        case 'End':
          event.preventDefault();
          setIsKeyboardNavigation(true);
          const lastIndex = items.length - 1;
          setFocusedIndex(lastIndex);
          (items[lastIndex] as HTMLElement)?.focus();
          break;
          
        case 'Escape':
          setIsKeyboardNavigation(false);
          setFocusedIndex(-1);
          (document.activeElement as HTMLElement)?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset keyboard navigation on mouse interaction
  const handleMouseEnter = () => {
    setIsKeyboardNavigation(false);
    setFocusedIndex(-1);
  };

  // Skip to main content link
  const SkipToMainContent = () => (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-nagara-gold text-nagara-black px-4 py-2 rounded-nagara-md font-semibold transition-all duration-200"
      onFocus={() => setIsKeyboardNavigation(true)}
    >
      Skip to main content
    </a>
  );

  return (
    <>
      <SkipToMainContent />
      
      <nav
        ref={navRef}
        className={cn(
          'flex items-center space-x-8',
          className
        )}
        role="navigation"
        aria-label="Main navigation"
        onMouseEnter={handleMouseEnter}
      >
        {navigationItems.map((item, index) => {
          const isActive = pathname === item.href;
          const isFocused = isKeyboardNavigation && focusedIndex === index;
          
          return (
            <motion.div
              key={item.href}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={item.href}
                data-nav-item
                className={cn(
                  'relative block px-3 py-2 text-sm font-medium transition-all duration-300',
                  'focus:outline-none focus:ring-2 focus:ring-nagara-gold focus:ring-offset-2 focus:ring-offset-nagara-black',
                  'rounded-nagara-md',
                  isActive
                    ? 'text-nagara-gold'
                    : 'text-nagara-white hover:text-nagara-gold',
                  isFocused && 'ring-2 ring-nagara-gold ring-offset-2 ring-offset-nagara-black'
                )}
                aria-label={item.ariaLabel}
                aria-current={isActive ? 'page' : undefined}
                tabIndex={0}
                onFocus={() => {
                  setIsKeyboardNavigation(true);
                  setFocusedIndex(index);
                }}
                onBlur={() => {
                  if (!isKeyboardNavigation) {
                    setFocusedIndex(-1);
                  }
                }}
              >
                <span className="relative z-10">
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-nagara-gold"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Focus indicator */}
                {isFocused && (
                  <motion.div
                    className="absolute inset-0 bg-nagara-gold/10 rounded-nagara-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Tooltip for screen readers */}
                <span className="sr-only">
                  {item.description}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </>
  );
};

// Accessibility hook for keyboard navigation
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Tab trap for modal/menu contexts
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

// ARIA live region for announcements
export const LiveRegion: React.FC<{ 
  message: string; 
  priority?: 'polite' | 'assertive' 
}> = ({ 
  message, 
  priority = 'polite' 
}) => (
  <div
    aria-live={priority}
    aria-atomic="true"
    className="sr-only"
  >
    {message}
  </div>
);

// Focus management utilities
export const focusManagement = {
  // Focus the first focusable element in a container
  focusFirst: (container: HTMLElement) => {
    const focusable = container.querySelector(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    focusable?.focus();
  },
  
  // Focus the last focusable element in a container
  focusLast: (container: HTMLElement) => {
    const focusable = container.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const lastElement = focusable[focusable.length - 1] as HTMLElement;
    lastElement?.focus();
  },
  
  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusable = container.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusable.length === 0) return;
    
    const firstElement = focusable[0] as HTMLElement;
    const lastElement = focusable[focusable.length - 1] as HTMLElement;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  },
};