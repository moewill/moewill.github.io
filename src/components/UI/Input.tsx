'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    type = 'text',
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-nagara-white nagara-caption"
          >
            {label}
          </label>
        )}
        
        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nagara-white/60">
              {leftIcon}
            </div>
          )}
          
          {/* Input Field */}
          <input
            ref={ref}
            type={type}
            id={inputId}
            className={cn(
              // Base styles
              'w-full px-4 py-3 rounded-nagara-lg',
              'bg-nagara-charcoal border border-nagara-white/20',
              'text-nagara-white placeholder-nagara-white/50',
              'transition-all duration-300 ease-out',
              'focus:outline-none focus:ring-2 focus:ring-nagara-gold focus:border-nagara-gold/50',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'focus:scale-105',
              
              // Icon spacing
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              
              // Error state
              hasError && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              
              className
            )}
            {...props}
          />
          
          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-nagara-white/60">
              {rightIcon}
            </div>
          )}
        </div>
        
        {/* Helper Text / Error */}
        <div className="min-h-[20px]">
          {error && (
            <p className="text-sm text-red-400 nagara-body">
              {error}
            </p>
          )}
          {!error && helperText && (
            <p className="text-sm text-nagara-white/60 nagara-body">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className,
    label,
    error,
    helperText,
    id,
    rows = 4,
    ...props
  }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-nagara-white nagara-caption"
          >
            {label}
          </label>
        )}
        
        {/* Textarea Field */}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            // Base styles
            'w-full px-4 py-3 rounded-nagara-lg',
            'bg-nagara-charcoal border border-nagara-white/20',
            'text-nagara-white placeholder-nagara-white/50',
            'transition-all duration-300 ease-out',
            'focus:outline-none focus:ring-2 focus:ring-nagara-gold focus:border-nagara-gold/50',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'resize-vertical min-h-[100px]',
            'focus:scale-105',
            
            // Error state
            hasError && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            
            className
          )}
          {...props}
        />
        
        {/* Helper Text / Error */}
        <div className="min-h-[20px]">
          {error && (
            <p className="text-sm text-red-400 nagara-body">
              {error}
            </p>
          )}
          {!error && helperText && (
            <p className="text-sm text-nagara-white/60 nagara-body">
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';