import React from 'react';
import { Metadata } from 'next';
import { HomeLayout } from '@/components/Layout';
import { HeroSection } from '@/components/Sections/HeroSection';
import { ServicesOverview } from '@/components/Sections/ServicesOverview';
import { AboutPreview } from '@/components/Sections/AboutPreview';
import { CTASection } from '@/components/Sections/CTASection';
import { generateMetadata } from '@/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Strategic Technology Leadership for Modern Business',
  description: 'Transform your business through proven technology solutions. Strategic consulting, implementation, and training services for sophisticated SMB leaders.',
  url: '/',
});

export default function Home() {
  return (
    <HomeLayout>
      <main id="main-content" className="relative">
        <HeroSection />
        <ServicesOverview />
        <AboutPreview />
        <CTASection />
      </main>
    </HomeLayout>
  );
}
