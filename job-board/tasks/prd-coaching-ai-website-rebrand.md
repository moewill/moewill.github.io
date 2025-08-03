# PRD: Complete Website Rebrand for AI Automation Coaching Services

## 1. Introduction/Overview

Transform the existing DevSecOps-focused website into a premium AI automation platform specifically targeting $1M+ coaching and consulting practices. This is a complete content and service pivot while maintaining the Apple iPhone aesthetic and premium positioning.

**Problem Being Solved:** High-revenue coaches need sophisticated AI automation but lack technical expertise to implement it securely and effectively. Current AI vendors offer generic solutions that don't understand the coaching industry's unique privacy, personalization, and ROI requirements.

**Goal:** Create a conversion-optimized website that positions Maurice Williams as the premier AI automation partner for elite coaching practices.

## 2. Goals

### Primary Goals
1. **Complete Service Pivot**: Transform from DevSecOps/SOC 2 to AI automation for coaches
2. **Premium Positioning**: Target $1M+ coaching practices with capability-based pricing ($5K-$18K)
3. **Trust Building**: Leverage technical background as differentiator vs. generic AI vendors
4. **Conversion Optimization**: Drive bookings for "AI Workflow Assessment" calls
5. **Scalable Architecture**: Support individual capability detail pages and future modules

### Success Metrics
- Qualified assessment bookings from $1M+ coaches
- Time spent on capability detail pages
- Contact form submissions with revenue qualification
- Reduced bounce rate on capability sections
- Engagement with social proof elements

## 3. User Stories

### Primary User: $1M+ Coach/Consultant CEO
- **As a** successful coach with $1M+ revenue, **I want to** understand how AI can eliminate my admin bottlenecks **so that** I can scale without hiring more staff
- **As a** privacy-conscious coach, **I want to** know my client data is secure **so that** I can maintain trust and compliance
- **As a** ROI-focused business owner, **I want to** see measurable outcomes and pricing **so that** I can justify the investment
- **As a** non-technical executive, **I want to** understand capabilities in business terms **so that** I can make informed decisions

### Secondary User: Coaching Practice Operations Manager
- **As an** ops manager, **I want to** understand implementation timeline **so that** I can plan team adoption
- **As an** efficiency-focused professional, **I want to** see specific workflow improvements **so that** I can prioritize which modules to implement first

## 4. MVP Definition

### Core MVP Components
1. **Homepage with StoryBrand flow** adapted for coaching market
2. **7 Capability overview sections** on main page with CTAs to detail pages
3. **Individual detail pages** for each of the 7 AI capability modules
4. **Assessment booking flow** with Calendly integration
5. **Social proof placeholders** with 3 different proof types
6. **Privacy/security positioning** as competitive differentiator
7. **Performance bonus explanation** in FAQ/objections section

### Out of MVP Scope
- Interactive capability configurator
- ROI calculator tools
- Client portal previews
- Video testimonials
- Case study database

## 5. Functional Requirements (MoSCoW)

### Must Have (M)
1. **Complete content replacement** - Remove all DevSecOps/SOC 2 references
2. **New navigation structure** reflecting coaching AI services
3. **Hero section** with coaching-specific headline and value props
4. **7 capability modules overview** with business-focused descriptions
5. **Individual capability detail pages** for each module
6. **Assessment booking CTA** throughout the site
7. **Social proof section** with 3 placeholder types
8. **FAQ/objections section** including performance bonus explanation
9. **Privacy/security positioning** as differentiator
10. **Mobile-responsive design** maintaining Apple aesthetic

### Should Have (S)
1. **Before/after transformation visuals** for each capability
2. **Pricing transparency** with bundle options
3. **Module-specific illustrations** showing automation in action
4. **Trust indicators** leveraging 17+ years experience
5. **Coaching industry pain point illustrations**
6. **Performance bonus details** and KPI examples

### Could Have (C)
1. **Interactive module selector** for bundle configuration
2. **ROI estimation tools** for different practice sizes
3. **Capability comparison matrix**
4. **Implementation timeline visualizations**
5. **Privacy compliance badges** and certifications

### Won't Have (W)
1. **E-commerce functionality** for instant purchasing
2. **Client portal integration** or previews
3. **Live chat functionality** (focus on assessment bookings)
4. **Multi-language support**
5. **Video hosting infrastructure**

## 6. Key Function Signatures

### Page Router Functions
```javascript
// Navigation to capability detail pages
navigateToCapability(capabilityId: string) -> void

// Assessment booking flow
bookAssessment(formData: ContactInfo) -> CalendlyURL

// Social proof content loading
loadSocialProof(proofType: 'testimonial' | 'case-study' | 'metric') -> ProofData[]
```

### Content Management Functions
```javascript
// Capability module data structure
getCapabilityDetails(moduleId: string) -> CapabilityModule {
  title: string,
  description: string,
  kpis: string[],
  outcomes: string[],
  pricing: PricingTier,
  timeline: string
}

// Social proof data structure
getSocialProof() -> SocialProofData {
  testimonials: Testimonial[],
  caseStudies: CaseStudy[],
  metrics: BusinessMetric[]
}
```

## 7. Interface Definitions

### Capability Module Interface
```typescript
interface CapabilityModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  primaryKPIs: string[];
  outcomes: string[];
  pricing: {
    single: number;
    bundle2: number;
    bundle4: number;
  };
  timeline: string;
  integrations: string[];
}
```

### Social Proof Interface
```typescript
interface SocialProofData {
  testimonials: {
    id: string;
    clientName: string;
    clientRole: string;
    practiceSize: string;
    quote: string;
    results?: string;
  }[];
  caseStudies: {
    id: string;
    title: string;
    challenge: string;
    solution: string;
    results: string;
    metrics: string;
  }[];
  businessMetrics: {
    id: string;
    metric: string;
    value: string;
    context: string;
  }[];
}
```

## 8. API Contract Definitions

### Assessment Booking API
```json
POST /api/book-assessment
Request: {
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "practiceRevenue": "string",
  "primaryChallenge": "string",
  "currentTools": "string[]",
  "urgency": "string"
}

Response: {
  "calendlyUrl": "string",
  "bookingId": "string",
  "assessmentType": "workflow-analysis",
  "duration": "15-minutes"
}
```

### Capability Inquiry API
```json
POST /api/capability-inquiry
Request: {
  "capabilityIds": "string[]",
  "contactInfo": "ContactInfo",
  "practiceDetails": "PracticeInfo"
}

Response: {
  "estimatedROI": "string",
  "recommendedModules": "string[]",
  "nextSteps": "string"
}
```

## 9. Technical Standards

### Frontend Framework
- **HTML5/CSS3/JavaScript** - Maintain current static site approach
- **Apple iPhone CSS patterns** - Preserve existing aesthetic classes
- **CSS Grid/Flexbox** - Responsive layouts for capability modules
- **Intersection Observer API** - Smooth scroll animations

### Performance Standards
- **Page load time** < 3 seconds on 3G
- **First Contentful Paint** < 1.5 seconds
- **Cumulative Layout Shift** < 0.1
- **Lighthouse Performance Score** > 90

### Design System
- **Apple SF Pro fonts** - Maintain premium typography
- **Color palette** - Keep existing Apple-inspired colors
- **Component library** - Extend current button/form styles
- **Animation patterns** - Subtle, performance-optimized transitions

## 10. Non-Goals (Out of Scope)

1. **E-commerce integration** - No instant purchasing, focus on consultative sales
2. **Complex user authentication** - Static site with contact forms
3. **Multi-tenant client portals** - Individual client implementations handled separately
4. **Real-time chat support** - Drive to assessment bookings instead
5. **Content management system** - Continue with direct file editing
6. **A/B testing infrastructure** - Manual content iterations
7. **Analytics dashboard** - Use existing Google Analytics
8. **Email marketing integration** - Handle via external platforms

## 11. Future Iterations

### Phase 2 (Post-MVP)
1. **Interactive capability configurator** for bundle selection
2. **ROI calculator tools** based on practice size and modules
3. **Video testimonials** and case study showcase
4. **Implementation timeline visualizer**
5. **Coaching industry benchmarking tools**

### Phase 3 (Advanced Features)
1. **Client portal previews** for each capability
2. **Live demo scheduling** for complex modules
3. **Partner integration showcases** (CRM, calendar, etc.)
4. **Advanced social proof automation**
5. **Performance bonus tracking portal**

## 12. Design Considerations

### Apple Aesthetic Preservation
- **Clean, minimal layouts** with generous white space
- **Premium typography** using SF Pro Display/Text
- **Subtle shadows and depth** without over-design
- **Smooth animations** that enhance rather than distract
- **Consistent color palette** with coaching-appropriate accents

### Coaching Industry Adaptation
- **Business language** instead of technical jargon
- **ROI-focused messaging** throughout all sections
- **Privacy emphasis** as key differentiator
- **Time-saving benefits** prominently featured
- **Scale without hiring** as core value prop

### Conversion Optimization
- **Single primary CTA** - Assessment booking throughout
- **Progressive disclosure** - Overview to detail page flow
- **Social proof placement** - Multiple touchpoints
- **Objection handling** - Integrated FAQ sections
- **Trust building** - Technical credibility positioning

## 13. Technical Considerations

### Content Migration Strategy
1. **Complete content replacement** - No gradual transition
2. **URL structure changes** - New capability-based navigation
3. **SEO considerations** - Meta tags for coaching market
4. **Image optimization** - New visuals for each capability
5. **Form integration** - Enhanced Calendly booking flow

### Performance Implications
- **7 new detail pages** - Optimize for fast loading
- **Visual assets** - SVG animations and illustrations
- **Font loading** - Minimize layout shift
- **JavaScript optimization** - Progressive enhancement approach

### Hosting Considerations
- **GitHub Pages compatibility** - Maintain static site benefits
- **CDN optimization** - Fast global delivery
- **Mobile performance** - Coaching executives on-the-go
- **Accessibility compliance** - WCAG 2.1 AA standards

## 14. Success Metrics

### Primary Metrics
1. **Assessment booking rate** - Target: 2-3% of unique visitors
2. **Qualified lead percentage** - $1M+ practice verification
3. **Capability page engagement** - Time spent on detail pages
4. **Contact form conversion** - Inquiry to assessment booking rate

### Secondary Metrics
1. **Bounce rate reduction** - Improved content relevance
2. **Session duration increase** - Engaging capability content
3. **Mobile conversion rate** - Executive mobile usage
4. **Social proof interaction** - Testimonial/case study engagement

### Leading Indicators
1. **Organic search impressions** for coaching AI terms
2. **Referral traffic** from coaching industry sites
3. **Social media engagement** with capability content
4. **Email signup rate** for capability updates

## 15. Open Questions

### Content & Messaging
1. **Assessment call naming** - "AI Workflow Assessment" vs "Efficiency Snapshot" vs alternative?
2. **Social proof priority** - Which of the 3 placeholder types should be most prominent?
3. **Technical credibility positioning** - How strongly to emphasize Fortune 500 experience?
4. **Performance bonus presentation** - FAQ only or dedicated section?

### Design & UX
1. **Capability detail page depth** - How technical should implementations details be?
2. **Visual style for coaching market** - Any warmth additions to Apple aesthetic?
3. **Social proof design** - Cards, testimonials, metrics - which layout converts best?
4. **Mobile capability showcase** - How to present 7 modules effectively on mobile?

### Technical Implementation
1. **Analytics setup** - Coaching-specific conversion tracking needs?
2. **Form data handling** - Additional qualification questions for assessment booking?
3. **Page load optimization** - Image/content prioritization strategy?
4. **SEO strategy** - Coaching industry keyword targeting approach?

---

**Document Version:** 1.0  
**Created:** 2025-01-03  
**Target Completion:** 2-3 weeks from approval  
**Primary Stakeholder:** Maurice Williams  
**Technical Lead:** Claude Code Assistant