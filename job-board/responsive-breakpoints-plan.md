# Responsive Breakpoints Plan for 8-Section Story Framework

## Current Apple Breakpoint System
Based on existing CSS analysis:
- **Desktop**: 1024px+ (full 2-column layouts)
- **Tablet**: 768px-1023px (simplified layouts)
- **Mobile**: 480px-767px (single column)
- **Small Mobile**: <480px (compact single column)

## Story Section Responsive Strategy

### Section 1: Hero (Above the Fold)
**Desktop (1024px+)**:
- Full-width hero with centered content
- Large headline (56px), subheadline (28px)
- Horizontal CTA buttons with spacing
- Trust indicators in sidebar/bottom

**Tablet (768-1023px)**:
- Maintain hero structure
- Slightly smaller headline (48px)
- Stacked CTA buttons if needed
- Trust indicators below content

**Mobile (480-767px)**:
- Single column layout
- Responsive headline (40px)
- Stacked CTA buttons (full width)
- Trust indicators as compact list

**Small Mobile (<480px)**:
- Compact padding and margins
- Headline (36px), subheadline (24px)
- Single CTA button focus
- Minimal trust indicators

### Section 2: Problem (Security Gaps)
**Desktop**: 
- 3-column cost breakdown layout
- Side-by-side problem/solution presentation
- Visual emphasis with icons/graphics

**Tablet**:
- 2-column cost breakdown
- Stacked problem/solution sections

**Mobile**:
- Single column cost breakdown
- Vertical problem presentation
- Simplified visual elements

### Section 3: Guide (About Maurice)
**Desktop**:
- 2-column layout (text + credentials)
- Credentials showcase with badges
- Authority indicators grid

**Tablet**:
- Modified 2-column with adjusted spacing
- Credentials in sidebar format

**Mobile**:
- Single column, text first
- Credentials as horizontal scroll or grid
- Simplified authority badges

### Section 4: Plan (3 Steps)
**Desktop**:
- Horizontal 3-step progression
- Large step numbers and descriptions
- Clear flow arrows between steps

**Tablet**:
- 3-step layout with adjusted spacing
- Maintain horizontal flow if possible

**Mobile**:
- Vertical step progression
- Larger step cards for touch
- Clear step separation

### Section 5: Success (Before/After)
**Desktop**:
- 2-column before/after comparison
- Visual divider/arrow between columns
- Icon-enhanced bullet points

**Tablet**:
- 2-column with tighter spacing
- Maintain comparison layout

**Mobile**:
- Stacked before/after sections
- Clear section headers
- Simplified bullet points

### Section 6: Proof (Case Studies)
**Desktop**:
- Grid layout for case studies (2x2 or 3x1)
- Hover effects and detailed metrics
- Interactive elements

**Tablet**:
- 2-column grid or single column
- Reduced hover complexity

**Mobile**:
- Single column case study cards
- Swipe-friendly card design
- Simplified metrics display

### Section 7: Transitional CTA (Playbook)
**Desktop**:
- 2-column layout (preview + form)
- Detailed playbook benefits
- Inline email capture form

**Tablet**:
- 2-column with adjusted proportions
- Simplified benefits list

**Mobile**:
- Single column, benefits first
- Full-width email capture form
- Streamlined content

### Section 8: Final CTA (Assessment)
**Desktop**:
- Centered content with emphasis
- Large CTA button
- Supporting urgency indicators

**Tablet**:
- Maintain centered layout
- Adjusted button sizing

**Mobile**:
- Full-width CTA button
- Simplified urgency messaging
- Touch-optimized elements

## Critical Breakpoint Implementation Notes

### Typography Scaling
```css
/* Desktop First Approach */
.story-headline {
  font-size: clamp(32px, 6vw, 56px);
}

.story-subheadline {
  font-size: clamp(18px, 4vw, 28px);
}

.story-body {
  font-size: clamp(16px, 2.5vw, 21px);
}
```

### Container Patterns
- Max-width: 1200px for content containers
- Padding: 22px on desktop, 16px on mobile
- Margin: Consistent with Apple spacing system

### Button Responsive Behavior
- Desktop: Inline buttons with spacing
- Tablet: Adjust button sizing
- Mobile: Full-width buttons for primary CTAs

### Grid System Adaptation
- Use CSS Grid with auto-fit for responsive cards
- Maintain 40px gap on desktop, 24px on mobile
- Ensure touch targets meet 44px minimum on mobile

### Performance Considerations
- Load critical CSS inline for above-the-fold section
- Progressive enhancement for interactive elements
- Optimize images for different screen densities