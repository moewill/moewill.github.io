'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-nagara-gold hover:bg-nagara-gold/90 text-nagara-black font-semibold shadow-nagara-dramatic',
  secondary: 'bg-nagara-white hover:bg-nagara-white/90 text-nagara-black font-semibold shadow-nagara-soft',
  ghost: 'bg-transparent hover:bg-nagara-white/10 text-nagara-white border border-nagara-white/20 hover:border-nagara-white/40',
  outline: 'bg-transparent hover:bg-nagara-gold/10 text-nagara-gold border border-nagara-gold hover:border-nagara-gold/80',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 rounded-nagara-lg',
          'transition-all duration-300 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-nagara-gold focus:ring-offset-2 focus:ring-offset-nagara-black',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'relative overflow-hidden',
          'hover:scale-105 active:scale-95',
          
          // Variant styles
          buttonVariants[variant],
          
          // Size styles
          buttonSizes[size],
          
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {/* Content */}
        <span className="relative flex items-center gap-2">
          {isLoading && (
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          )}
          {leftIcon && !isLoading && leftIcon}
          {children}
          {rightIcon && !isLoading && rightIcon}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';