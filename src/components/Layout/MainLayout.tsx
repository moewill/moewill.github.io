'use client';

import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { PageWrapper } from './PageWrapper';
import { ScrollProgressIndicator } from '@/components/Animations';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  showScrollProgress?: boolean;
  variant?: 'default' | 'service' | 'minimal';
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className,
  showScrollProgress = true,
  variant = 'default',
}) => {
  return (
    <div className={cn('min-h-screen bg-nagara-black text-nagara-white', className)}>
      {/* Scroll Progress Indicator */}
      {showScrollProgress && <ScrollProgressIndicator />}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <PageWrapper className={cn(
        'relative',
        variant === 'service' && 'pt-20',
        variant === 'minimal' && 'pt-16'
      )}>
        {children}
      </PageWrapper>
      
      {/* Footer */}
      {variant !== 'minimal' && <Footer />}
    </div>
  );
};

// Specialized layout for homepage
export const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainLayout variant="default" showScrollProgress>
      {children}
    </MainLayout>
  );
};

// Specialized layout for service pages
export const ServiceLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainLayout variant="service" showScrollProgress>
      {children}
    </MainLayout>
  );
};

// Specialized layout for contact/minimal pages
export const MinimalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainLayout variant="minimal" showScrollProgress={false}>
      {children}
    </MainLayout>
  );
};