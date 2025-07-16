'use client';

import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { PageTransition } from '@/components/Animations';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-nagara-black">
      <Navigation />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </div>
  );
};