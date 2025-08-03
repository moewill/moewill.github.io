# Section Mapping Analysis: Current to Story Framework

## Current Homepage Structure
1. **loading-screen** - Keep (Apple aesthetic element)
2. **globalnav** - Keep (Apple navigation)
3. **hero-section** - Transform to Story Section 1 (Hero)
4. **lineup-section** (#services) - Replace with Story Section 2 (Problem)
5. **feature-ai** (#ai) - Remove/Repurpose
6. **feature-security** (#security) - Transform to Story Section 3 (Guide)
7. **feature-devops** (#devops) - Remove/Repurpose  
8. **contact-section** (#contact) - Transform to Story Section 8 (Final CTA)
9. **footer** - Keep (with updated links)

## Story Framework Mapping

### Section 1: Above the Fold (Hero)
**Current**: hero-section
**Action**: Transform content, keep CSS structure
**New Content**: "Secure Compliance. Modern Infrastructure. Faster Delivery."

### Section 2: The Problem 
**Current**: lineup-section (#services)
**Action**: Complete replacement
**New Content**: "Security Gaps and Slow Delivery Are Costing You More Than You Think."

### Section 3: The Guide
**Current**: feature-security (#security) 
**Action**: Transform content, keep layout structure
**New Content**: "I've Helped Organizations Prepare for SOC 2..."

### Section 4: The Plan
**Current**: None - NEW SECTION NEEDED
**Action**: Create new section after Section 3
**New Content**: "A Simple Plan to Go From Bottlenecks to Breakthroughs."

### Section 5: Success Outcomes
**Current**: None - NEW SECTION NEEDED  
**Action**: Create new section after Section 4
**New Content**: "What Life Looks Like After the Fix."

### Section 6: Proof & Results
**Current**: Scattered proof elements in existing sections
**Action**: Consolidate and enhance existing proof points
**New Content**: "Trusted by Teams for High-Stakes, Mission-Critical Projects."

### Section 7: Transitional CTA
**Current**: None - NEW SECTION NEEDED
**Action**: Create new section before final CTA
**New Content**: "Get the Compliance & Modernization Playbook..."

### Section 8: Final CTA
**Current**: contact-section (#contact)
**Action**: Transform content, keep form structure
**New Content**: "Stop Losing Time and Deals to Security Gaps..."

## Sections to Remove/Repurpose
- **feature-ai** (#ai) - Content may be integrated into proof points
- **feature-devops** (#devops) - Content may be integrated into guide section
- Current service lineup cards - Replace with story elements

## Navigation Updates Needed
- Update nav links to point to new story sections
- #services → #problem  
- #security → #guide
- #ai → Remove or point to #proof
- #devops → Remove or point to #guide
- #contact → #assessment or keep #contact

## CSS Classes to Preserve
- Apple aesthetic classes (globalnav, hero-section structure)
- Typography and spacing classes
- Animation and transition classes
- Responsive breakpoint patterns

## CSS Classes to Create
- story-section-1 through story-section-8
- problem-section, guide-section, plan-section, etc.
- before-after-comparison
- proof-metrics-showcase
- playbook-preview
- assessment-cta