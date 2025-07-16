'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.46, 0.45, 0.94] as const, // Dramatic easing
  duration: 0.6,
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  className 
}) => {
  return (
    <motion.main
      className={cn('min-h-screen', className)}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.main>
  );
};

// Specialized wrapper for service pages
export const ServicePageWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  className 
}) => {
  return (
    <motion.main
      className={cn('min-h-screen pt-20', className)}
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: {
          opacity: 0,
          x: 50,
          scale: 0.95,
        },
        in: {
          opacity: 1,
          x: 0,
          scale: 1,
        },
        out: {
          opacity: 0,
          x: -50,
          scale: 1.05,
        },
      }}
      transition={{
        type: 'tween',
        ease: [0.16, 1, 0.3, 1], // Bounce easing
        duration: 0.8,
      }}
    >
      {children}
    </motion.main>
  );
};

// Layout wrapper with consistent page structure
export const LayoutWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  className 
}) => {
  return (
    <motion.div
      className={cn('relative', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};