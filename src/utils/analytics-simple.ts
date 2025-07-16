'use client';

// Simple analytics implementation
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Event interface
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Simple analytics class
class SimpleAnalytics {
  private isInitialized = false;

  // Initialize analytics
  initialize() {
    if (this.isInitialized || typeof window === 'undefined') return;

    const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!gaId) return;

    // Load GA script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', gaId);

    this.isInitialized = true;
  }

  // Track page view
  trackPageView(url: string, title: string) {
    if (!this.isInitialized || !window.gtag) return;
    
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    });
  }

  // Track events
  trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized || !window.gtag) return;

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }

  // Track conversions
  trackConversion(conversionId: string, value?: number) {
    this.trackEvent({
      action: 'conversion',
      category: 'engagement',
      label: conversionId,
      value,
    });
  }

  // Track consultation bookings
  trackConsultationBooking(serviceType: string) {
    this.trackEvent({
      action: 'consultation_booking',
      category: 'conversion',
      label: serviceType,
      value: 1,
    });
  }

  // Track service inquiries
  trackServiceInquiry(serviceType: string, inquirySource: string) {
    this.trackEvent({
      action: 'service_inquiry',
      category: 'lead',
      label: `${serviceType}_${inquirySource}`,
    });
  }
}

// Export singleton
export const analytics = new SimpleAnalytics();

// Initialize on load
if (typeof window !== 'undefined') {
  analytics.initialize();
}