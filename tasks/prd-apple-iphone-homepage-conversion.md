# PRD: Apple iPhone-Style Homepage Conversion

## Introduction/Overview
Convert the current React homepage to precisely replicate the original Apple iPhone-inspired design and StoryBrand marketing framework from https://moewill.github.io/, ensuring pixel-perfect visual fidelity and complete content coverage.

## Goals
1. **Visual Accuracy**: Achieve 100% visual parity with the original Apple iPhone aesthetic
2. **Content Completeness**: Implement all 10 story sections with original copy and messaging
3. **StoryBrand Framework**: Maintain the proven marketing narrative structure
4. **Performance**: Preserve Apple's smooth animations and loading experience
5. **Responsive Design**: Ensure mobile-first approach matches Apple's standards

## User Stories
- **As a visitor**, I want the exact same premium Apple experience as the original site
- **As a potential client**, I want to see the complete story-driven sales journey
- **As Maurice**, I want to maintain the proven conversion-optimized design
- **As a mobile user**, I want the same smooth experience across all devices
- **As a developer**, I want maintainable React components that preserve the design

## MVP Definition
- Complete visual recreation of all 10 story sections
- Apple-style global navigation with blur effects
- 3-second animated logo loading screen
- Exact typography, spacing, and color matching
- All original copy and content preserved
- Smooth scroll animations and transitions

## Functional Requirements

### Must Have (MVP)
1. **Apple Global Navigation**
   - Fixed position with rgba(251, 251, 253, 0.8) background
   - Backdrop blur filter: saturate(180%) blur(20px)
   - Exact 44px height with proper spacing
   - Maurice logo with hexagon and MW text
   - Navigation links: Challenge, Capabilities, About Maurice, Results, Assessment
   - Shopping bag icon (right side)

2. **Loading Screen Animation**
   - 3-second logo animation on page load
   - SVG hexagon with stroke animation
   - Color transition from white to blue (#007AFF)
   - Logo reveal with rotation and scale effects
   - Smooth fade-out to main content

3. **Complete Section Structure**
   - **Section 1**: Hero - "The Three Core AI Capabilities That Scale $1M+ Coaches"
   - **Section 2**: Problem - Coach pain points and challenges
   - **Section 2.5**: Solution - How AI automation solves problems
   - **Section 3**: Guide - About Maurice (authority positioning)
   - **Section 4**: Plan - Clear 3-step process
   - **Section 4.5**: Comparison - Before/After or alternatives
   - **Section 5**: Capabilities - 6 detailed AI modules
   - **Section 6**: Success - Client outcomes and metrics
   - **Section 7**: Proof - Social proof and testimonials
   - **Section 8**: Assessment - Final CTA with risk reversal

4. **Typography System**
   - SF Pro Display font family (-apple-system fallbacks)
   - 17px base font size, 1.47059 line height
   - Exact Apple color palette (#1d1d1f primary text)
   - Antialiased font smoothing
   - Proper heading hierarchy and spacing

5. **Apple Visual Elements**
   - White backgrounds (#fff) throughout
   - Subtle shadows and borders (0.5px rgba(0,0,0,0.18))
   - Apple's grid system (max-width: 1024px, 22px padding)
   - Smooth scroll behavior
   - Hover states with 0.3s transitions

### Should Have
6. **Enhanced Animations**
   - Scroll-triggered animations for section reveals
   - Parallax effects on background elements
   - Hover animations on interactive elements
   - Loading transitions between sections

7. **Interactive Elements**
   - Capability modules with hover details
   - Comparison table interactions
   - Assessment form with multi-step flow
   - Social proof carousel/testimonials

### Could Have
8. **Advanced Features**
   - Video backgrounds (Apple-style)
   - Interactive capability demonstrations
   - Animated statistics and counters
   - Advanced mobile interactions

## Key Component Structure

```jsx
// Main Components Needed
<LoadingScreen />           // 3-second logo animation
<AppleNavigation />        // Fixed global nav with blur
<HeroSection />            // Story section 1
<ProblemSection />         // Story section 2  
<SolutionSection />        // Story section 2.5
<GuideSection />           // Story section 3 (About Maurice)
<PlanSection />            // Story section 4 (Process)
<ComparisonSection />      // Story section 4.5
<CapabilitiesSection />    // Story section 5 (6 modules)
<SuccessSection />         // Story section 6 (Results)
<ProofSection />           // Story section 7 (Testimonials)
<AssessmentSection />      // Story section 8 (Final CTA)
```

## Content Requirements

### Original Copy to Preserve
1. **Hero Headline**: "The Three Core AI Capabilities That Scale $1M+ Coaches"
2. **Hero Subheadline**: "Privacy-first AI automation for coaching practices: qualify better leads, prove your impact, and streamline your team."
3. **Proof Points**: 
   - 🤖 Automate Admin Work
   - 🔒 Privacy by Design  
   - 📈 Performance-Linked
4. **Trust Indicators**:
   - 17+ years technical experience
   - Built for coaches, not generic businesses
   - Data never used to train public AI models

### Section-Specific Content
- All original headlines, subheadlines, and body copy
- Capability module descriptions and features
- Client success stories and testimonials
- Comparison table data
- Assessment call details and risk reversal copy

## CSS/Styling Requirements

### Apple iPhone CSS Recreation
```css
/* Core Apple Styles to Implement */
html {
    font-size: 17px;
    line-height: 1.47059;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
    background: #fff;
    color: #1d1d1f;
}

.globalnav {
    background: rgba(251, 251, 253, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    height: 44px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.18);
}
```

### Animation Specifications
- Logo loading animation: 3s duration with rotation and scale
- Hover transitions: 0.3s ease
- Scroll reveal: Progressive section animations
- Blur effects: Backdrop-filter support with fallbacks

## Technical Implementation

### React Component Architecture
```jsx
// Component Hierarchy
App.jsx
├── LoadingScreen.jsx (conditional render)
├── AppleNavigation.jsx (fixed position)
└── HomePage.jsx
    ├── HeroSection.jsx
    ├── ProblemSection.jsx
    ├── SolutionSection.jsx
    ├── GuideSection.jsx
    ├── PlanSection.jsx
    ├── ComparisonSection.jsx
    ├── CapabilitiesSection.jsx
    ├── SuccessSection.jsx
    ├── ProofSection.jsx
    └── AssessmentSection.jsx
```

### State Management
- Loading screen visibility state
- Navigation scroll position
- Section visibility for animations
- Assessment form state

### Performance Considerations
- Lazy load section content
- Optimize image assets
- Preload critical fonts
- Minimize animation overhead

## Design Specifications

### Visual Hierarchy
1. **Navigation**: Always visible, blur background
2. **Sections**: Full viewport or content-driven height
3. **Typography**: Apple's scale (48px, 32px, 24px, 17px)
4. **Spacing**: 22px base padding, consistent margins
5. **Colors**: White backgrounds, #1d1d1f text, #007AFF accents

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+
- Max width: 1024px container

### Animation Timing
- Page load: 3s logo animation
- Hover states: 0.3s ease
- Scroll reveals: 0.6s ease-out
- Section transitions: 0.8s ease-in-out

## Content Migration Strategy

### Phase 1: Structure Setup
1. Create all 10 section components
2. Implement Apple navigation
3. Add loading screen animation
4. Set up basic layouts

### Phase 2: Content Population  
1. Extract original copy from archive/original-site/
2. Recreate all headlines and body copy
3. Add capability modules data
4. Include social proof content

### Phase 3: Styling Polish
1. Implement exact Apple CSS styles
2. Add all animations and transitions
3. Perfect responsive behaviors
4. Cross-browser testing

## Success Metrics
- **Visual Accuracy**: 95%+ match to original design
- **Content Completeness**: 100% of original copy preserved
- **Performance**: <3s page load, smooth 60fps animations
- **Mobile Experience**: Identical functionality across devices
- **Conversion Rate**: Maintain or improve original performance

## Technical Considerations
- **Font Loading**: Preload SF Pro Display fonts
- **Image Optimization**: WebP format with fallbacks
- **CSS Architecture**: Maintain existing Tailwind while adding Apple styles
- **Animation Performance**: Use transform and opacity for smooth animations
- **Browser Support**: Ensure backdrop-filter fallbacks for older browsers

## Non-Goals (Out of Scope)
- Backend functionality changes (keep existing email capture)
- New features not in original design
- Alternative design variations
- Content strategy changes
- SEO meta tag modifications (already optimized)

## Open Questions
1. Should we implement the exact loading screen animation or simplify for React?
2. How should we handle the capability modules - recreate exactly or enhance?
3. Do we need to implement the shopping bag functionality or keep as visual element?
4. Should testimonials be static content or dynamic data?
5. How should we handle the assessment form - modal or separate page?

## Implementation Priority
1. **High Priority**: Navigation, hero, loading screen, basic sections
2. **Medium Priority**: Complete content migration, animations
3. **Low Priority**: Advanced interactions, performance optimizations

This conversion will restore the proven Apple iPhone aesthetic that drives conversions while maintaining the modern React architecture.