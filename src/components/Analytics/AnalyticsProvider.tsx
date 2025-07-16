'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/utils/analytics-simple';

interface AnalyticsContextType {
  trackEvent: (event: { action: string; category: string; label?: string; value?: number }) => void;
  trackPageView: (url: string, title: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
  trackConsultationBooking: (serviceType: string) => void;
  trackServiceInquiry: (serviceType: string, inquirySource: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on mount
    analytics.initialize();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    const title = document.title;
    const url = window.location.href;
    analytics.trackPageView(url, title);
  }, [pathname]);

  const contextValue: AnalyticsContextType = {
    trackEvent: (event) => analytics.trackEvent(event),
    trackPageView: (url, title) => analytics.trackPageView(url, title),
    trackConversion: (conversionId, value) => analytics.trackConversion(conversionId, value),
    trackConsultationBooking: (serviceType) => 
      analytics.trackConsultationBooking(serviceType),
    trackServiceInquiry: (serviceType, inquirySource) => 
      analytics.trackServiceInquiry(serviceType, inquirySource),
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};