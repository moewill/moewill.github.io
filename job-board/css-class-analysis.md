# CSS Class Analysis: Modify vs. Create New

## Classes to PRESERVE (Apple Aesthetic Core)
### Typography & Layout
- `.section-headline` - Main section headlines (32-48px)
- `.section-subheadline` - Section subheadlines (21px)
- `.hero-headline` - Main hero headline (40-56px)
- `.hero-subheadline` - Hero subheadline (28px)

### Buttons & CTAs
- `.button-primary` - Blue filled buttons (#0071e3)
- `.button-secondary` - Outlined buttons
- `.button-outline` - Alternative outlined style
- `.button-filled` - Alternative filled style
- All button hover states and animations

### Layout Containers
- `.hero-section` - Hero section layout structure
- `.lineup-content` - Content container with max-width
- `.hero-content` - Hero content positioning
- `.hero-cta` - CTA button container

## Classes to MODIFY (Keep Structure, Update Content)
### Hero Section
- `.hero-section` - Keep layout, update content structure
- `.hero-content` - Keep positioning, update inner elements
- `.hero-headline` - Keep typography, update text
- `.hero-subheadline` - Keep styling, update text

### Contact Section (→ Final CTA)
- `.contact-section` - Keep layout, update messaging
- `.contact-content` - Keep container, update content structure

## Classes to REPURPOSE
### Lineup Section → Problem Section
- `.lineup-section` - Repurpose for problem section
- `.lineup-content` - Repurpose for problem content container
- `.model-grid` - Repurpose for cost breakdown layout
- `.model-card` - Repurpose for problem point cards

### Feature Security → Guide Section  
- `.feature-security` - Transform to guide section
- `.feature-content` - Keep grid layout for guide content
- `.feature-text` - Keep text column structure
- `.feature-visual` - Transform to credentials showcase

## Classes to REMOVE
### Service-Specific Classes
- `.model-pro`, `.model-standard`, `.model-compact`, `.model-previous`
- `.model-badge`, `.model-name`, `.model-description`, `.model-pricing`
- `.model-image`, `.model-features`, `.model-cta`
- `.service-device`, `.service-premium`, etc.

### Unused Feature Sections
- `.feature-ai` classes (if not repurposed)
- `.feature-devops` classes (if not repurposed)
- Device lineup specific classes

## NEW Classes to CREATE

### Story Section Structure
```css
.story-section-1 { /* Hero - based on .hero-section */ }
.story-section-2 { /* Problem - based on .lineup-section */ }
.story-section-3 { /* Guide - based on .feature-security */ }
.story-section-4 { /* Plan - NEW */ }
.story-section-5 { /* Success - NEW */ }
.story-section-6 { /* Proof - NEW */ }
.story-section-7 { /* Transitional CTA - NEW */ }
.story-section-8 { /* Final CTA - based on .contact-section */ }
```

### Problem Section (Section 2)
```css
.problem-section
.problem-content
.cost-breakdown
.cost-item
.cost-impact
.problem-solution-bridge
```

### Guide Section (Section 3)
```css
.guide-section
.guide-content
.credentials-showcase
.trust-indicators
.authority-badges
.experience-highlights
```

### Plan Section (Section 4)
```css
.plan-section
.plan-content
.plan-steps
.plan-step
.step-number
.step-title
.step-description
.plan-cta
```

### Success Section (Section 5)
```css
.success-section
.success-content
.before-after-comparison
.before-column
.after-column
.success-point
.transformation-arrow
```

### Proof Section (Section 6)
```css
.proof-section
.proof-content
.metrics-showcase
.metric-item
.metric-number
.metric-description
.case-studies-grid
.case-study-card
.proof-badge
```

### Transitional CTA Section (Section 7)
```css
.transitional-cta-section
.playbook-preview
.playbook-benefits
.benefit-item
.email-capture-form
.playbook-cta
```

### Assessment CTA Section (Section 8)
```css
.assessment-cta-section
.assessment-content
.assessment-headline
.assessment-benefits
.urgency-indicators
.final-cta-button
```

## Responsive Breakpoint Strategy
- Keep existing breakpoint structure: 1024px, 768px, 480px
- Ensure all new sections follow Apple's responsive patterns
- Maintain grid system consistency across all story sections