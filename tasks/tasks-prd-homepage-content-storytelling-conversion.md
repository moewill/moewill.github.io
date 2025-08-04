# Task List: Homepage Content & Storytelling Conversion

Based on PRD: `prd-homepage-content-storytelling-conversion.md`

## Relevant Files

- `index.html` - Main homepage file requiring content updates and new sections
- `css/components/module-cards.css` - New CSS component for Apple-style product module cards
- `css/components/comparison-table.css` - New CSS component for competitor comparison table
- `css/components/conversion-ctas.css` - Enhanced CTA styling for improved conversion
- `css/story-sections.css` - Updated content section styling for new messaging
- `css/apple-iphone-style.css` - Enhanced base Apple styling for new components
- `js/apple-iphone-authentic.js` - Enhanced JavaScript for new interactive elements
- `netlify/functions/contact.js` - Updated form handler for assessment submissions

### Notes

- Follow existing Apple design system established in `css/apple-iphone-style.css`
- Maintain responsive design patterns used throughout the site
- Test all interactive elements on mobile devices for optimal conversion
- Ensure all content changes maintain SEO optimization and accessibility standards

## Tasks

- [x] 1.0 Hero Section Content & Messaging Update
  - [x] 1.1 Replace hero headline with "The Three Core AI Capabilities That Scale $1M+ Coaches"
  - [x] 1.2 Update subheadline to privacy-first automation messaging (15-20 words)
  - [x] 1.3 Change primary CTA button text to "Book Your Snapshot Call" with explanatory subtext
  - [x] 1.4 Replace existing trust indicators with new coaching-specific credentials
  - [x] 1.5 Update hero section CSS classes and styling to match new content hierarchy
  - [x] 1.6 Test hero section responsiveness on mobile, tablet, and desktop

- [x] 2.0 Three Modules Product Section Implementation
  - [x] 2.1 Create new HTML section for three core AI modules after problem section
  - [x] 2.2 Build Apple-style product cards for KPI & Progress Dashboard AI ($5K)
  - [x] 2.3 Build Apple-style product cards for Lead Qualification & Pre-Sales AI ($5K)
  - [x] 2.4 Build Apple-style product cards for Internal Ops Assistant AI ($5K)
  - [x] 2.5 Add bundle pricing display (2 modules: $9K, 3 modules: $12K)
  - [x] 2.6 Include "+$599/mo tuning & support" messaging prominently
  - [x] 2.7 Create CSS component file `css/components/module-cards.css` with Apple-style card design
  - [x] 2.8 Implement responsive grid layout for module cards (3 columns desktop, 1 column mobile)
  - [x] 2.9 Add hover effects and smooth transitions matching Apple aesthetics
  - [x] 2.10 Test module section across all screen sizes and devices

- [x] 3.0 Competitor Comparison Table Creation
  - [x] 3.1 Create new HTML section for "Why We're Different" comparison
  - [x] 3.2 Build responsive comparison table with features: Lead Qualification AI, KPI Dashboard, Internal Ops Assistant, Privacy-First, Speed, Pricing
  - [x] 3.3 Populate "Others" column with generic/enterprise-focused descriptions
  - [x] 3.4 Populate "Maurice Williams" column highlighting coaching-specific advantages
  - [x] 3.5 Create CSS component file `css/components/comparison-table.css`
  - [x] 3.6 Implement mobile-responsive design (collapse to accordion below 768px)
  - [x] 3.7 Add visual emphasis for Maurice's advantages (color, icons, highlighting)
  - [x] 3.8 Ensure table accessibility with proper ARIA labels and keyboard navigation
  - [x] 3.9 Test comparison table functionality and readability across devices

- [x] 4.0 Problem & Proof Sections Content Enhancement
  - [x] 4.1 Update problem section headline to "Your Business is Growing — But So Is the Admin Work"
  - [x] 4.2 Restructure pain points as clear bullet list with coaching-specific context
  - [x] 4.3 Replace existing proof section metrics with new specific claims
  - [x] 4.4 Add "50%+ time saved for client-facing teams" metric with context
  - [x] 4.5 Add "Privacy-first: client PII never used for model training" trust indicator
  - [x] 4.6 Add "Delivered mission-critical systems for SaaS, media, and coaching clients" credibility marker
  - [x] 4.7 Update final CTA section headline to "Stop Wasting Time. Start Scaling."
  - [x] 4.8 Optimize copy throughout for plain language and business outcome focus
  - [x] 4.9 Ensure multiple privacy-first mentions throughout content for competitive advantage

- [x] 5.0 CSS Components & Responsive Design Implementation
  - [x] 5.1 Create `css/components/module-cards.css` with Apple-style product card styling
  - [x] 5.2 Create `css/components/comparison-table.css` with responsive table design
  - [x] 5.3 Create `css/components/conversion-ctas.css` with enhanced CTA button styling
  - [x] 5.4 Update `css/story-sections.css` with new content section layouts
  - [x] 5.5 Enhance `css/apple-iphone-style.css` with additional Apple-consistent components
  - [x] 5.6 Implement responsive breakpoints for optimal mobile conversion
  - [x] 5.7 Add CSS animations and transitions for interactive elements
  - [x] 5.8 Optimize CSS for performance (minimize bundle size, critical CSS)
  - [x] 5.9 Test cross-browser compatibility (Chrome, Safari, Firefox, Edge)
  - [x] 5.10 Validate CSS and ensure no conflicts with existing styles

- [x] 6.0 JavaScript Functionality & Form Handling Enhancement
  - [x] 6.1 Update assessment form handling in existing JavaScript
  - [x] 6.2 Add form validation for new assessment questions and field requirements
  - [x] 6.3 Implement progressive form disclosure based on user selections
  - [x] 6.4 Add conversion event tracking for new CTA buttons and interactions
  - [x] 6.5 Create smooth scroll functionality for new section navigation
  - [x] 6.6 Add hover effects and interactive animations for module cards
  - [x] 6.7 Implement responsive behavior adjustments for mobile vs desktop
  - [x] 6.8 Add error handling and graceful fallbacks for all new interactive elements
  - [x] 6.9 Update existing `netlify/functions/contact.js` to handle new assessment data structure
  - [x] 6.10 Test all JavaScript functionality across browsers and devices
  - [x] 6.11 Ensure progressive enhancement (core functionality works without JavaScript)