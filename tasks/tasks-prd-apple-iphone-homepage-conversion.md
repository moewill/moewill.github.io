# Task List: Apple iPhone-Style Homepage Conversion

Based on PRD: `prd-apple-iphone-homepage-conversion.md`

## Relevant Files

- `frontend/src/components/LoadingScreen.jsx` - 3-second animated logo loading screen with SVG hexagon
- `frontend/src/components/LoadingScreen.test.js` - Unit tests for loading screen animations
- `frontend/src/components/AppleNavigation.jsx` - Fixed global navigation with backdrop blur
- `frontend/src/components/AppleNavigation.test.js` - Unit tests for navigation component
- `frontend/src/components/sections/HeroSection.jsx` - Story section 1 hero component
- `frontend/src/components/sections/ProblemSection.jsx` - Story section 2 problem component
- `frontend/src/components/sections/SolutionSection.jsx` - Story section 2.5 solution component
- `frontend/src/components/sections/GuideSection.jsx` - Story section 3 about Maurice component
- `frontend/src/components/sections/PlanSection.jsx` - Story section 4 process component
- `frontend/src/components/sections/ComparisonSection.jsx` - Story section 4.5 comparison component
- `frontend/src/components/sections/CapabilitiesSection.jsx` - Story section 5 capabilities component
- `frontend/src/components/sections/SuccessSection.jsx` - Story section 6 results component
- `frontend/src/components/sections/ProofSection.jsx` - Story section 7 testimonials component
- `frontend/src/components/sections/AssessmentSection.jsx` - Story section 8 final CTA component
- `frontend/src/styles/apple.css` - Core Apple iPhone CSS styles and typography
- `frontend/src/styles/animations.css` - Loading screen and scroll animations
- `frontend/src/hooks/useScrollPosition.js` - Hook for navigation scroll effects
- `frontend/src/hooks/useLoadingScreen.js` - Hook for managing loading screen state
- `frontend/src/data/originalContent.js` - Extracted content from original site
- `frontend/src/utils/appleStyles.js` - Apple-specific styling utilities
- `content/sections/hero.md` - Hero section content in markdown format
- `content/sections/problem.md` - Problem section content
- `content/sections/solution.md` - Solution section content
- `content/sections/guide.md` - About Maurice section content
- `content/sections/plan.md` - Process section content
- `content/sections/comparison.md` - Comparison section content
- `content/sections/capabilities.md` - Capabilities section content
- `content/sections/success.md` - Success stories content
- `content/sections/proof.md` - Social proof content
- `content/sections/assessment.md` - Assessment CTA content

### Notes

- All section components should be placed in `frontend/src/components/sections/` directory
- Apple CSS styles will be integrated with existing Tailwind setup
- Original content extraction from `archive/original-site/index.html`
- Use Vitest for component testing: `npm test`
- Loading screen should conditionally render on first page load only

## Tasks

- [ ] 1.0 Set up Apple-Style Foundation and Loading Experience
  - [ ] 1.1 Create LoadingScreen component with 3-second SVG logo animation
  - [ ] 1.2 Implement hexagon SVG with stroke animation and color transitions
  - [ ] 1.3 Add rotation and scale effects with proper timing (3s duration)
  - [ ] 1.4 Create smooth fade-out transition to main content
  - [ ] 1.5 Add loading screen state management with useLoadingScreen hook
  - [ ] 1.6 Integrate Apple base CSS styles (17px font, SF Pro Display, antialiasing)
  - [ ] 1.7 Set up white background theme and Apple color palette (#1d1d1f)
  - [ ] 1.8 Configure smooth scroll behavior and performance optimizations

- [ ] 2.0 Implement Apple Global Navigation System
  - [ ] 2.1 Create AppleNavigation component with fixed positioning
  - [ ] 2.2 Implement backdrop blur filter (saturate(180%) blur(20px))
  - [ ] 2.3 Add rgba(251, 251, 253, 0.8) background with 44px height
  - [ ] 2.4 Create Maurice logo SVG with hexagon and MW text
  - [ ] 2.5 Add navigation links (Challenge, Capabilities, About Maurice, Results, Assessment)
  - [ ] 2.6 Implement shopping bag icon on right side
  - [ ] 2.7 Add scroll position detection with useScrollPosition hook
  - [ ] 2.8 Style navigation items with proper Apple spacing and opacity transitions
  - [ ] 2.9 Ensure responsive behavior across all breakpoints
  - [ ] 2.10 Add proper border-bottom styling (0.5px rgba(0,0,0,0.18))

- [ ] 3.0 Create All 10 StoryBrand Section Components
  - [ ] 3.1 Create HeroSection with "Three Core AI Capabilities" headline
  - [ ] 3.2 Create ProblemSection highlighting coach pain points and challenges
  - [ ] 3.3 Create SolutionSection explaining AI automation solutions
  - [ ] 3.4 Create GuideSection for About Maurice authority positioning
  - [ ] 3.5 Create PlanSection with clear 3-step process layout
  - [ ] 3.6 Create ComparisonSection with before/after or alternatives table
  - [ ] 3.7 Create CapabilitiesSection with 6 detailed AI modules
  - [ ] 3.8 Create SuccessSection showcasing client outcomes and metrics
  - [ ] 3.9 Create ProofSection with social proof and testimonials
  - [ ] 3.10 Create AssessmentSection with final CTA and risk reversal
  - [ ] 3.11 Set up proper section spacing and Apple grid system (1024px max-width)
  - [ ] 3.12 Ensure each section follows Apple's visual hierarchy patterns

- [ ] 4.0 Migrate Original Content and Apply Apple Typography
  - [ ] 4.1 Extract all original copy from archive/original-site/index.html
  - [ ] 4.2 Create content data structure with headlines, subheadlines, and body copy
  - [ ] 4.3 Migrate hero section content with exact original messaging
  - [ ] 4.4 Migrate proof points (Automate Admin Work, Privacy by Design, Performance-Linked)
  - [ ] 4.5 Migrate trust indicators (17+ years experience, coach-specific, privacy-first)
  - [ ] 4.6 Extract and organize capability module descriptions and features
  - [ ] 4.7 Migrate client success stories and testimonial content
  - [ ] 4.8 Extract comparison table data and assessment call details
  - [ ] 4.9 Apply Apple typography scale (48px, 32px, 24px, 17px headings)
  - [ ] 4.10 Implement proper line heights and spacing (1.47059 base line-height)
  - [ ] 4.11 Set up content markdown files for each section
  - [ ] 4.12 Create content validation to ensure 100% original copy preservation

- [ ] 5.0 Add Apple-Style Animations and Interactive Elements
  - [ ] 5.1 Implement scroll-triggered animations for section reveals
  - [ ] 5.2 Add hover animations on interactive elements (0.3s ease transitions)
  - [ ] 5.3 Create parallax effects on background elements
  - [ ] 5.4 Add capability modules with hover detail states
  - [ ] 5.5 Implement comparison table interactions and highlights
  - [ ] 5.6 Create assessment form with multi-step flow interactions
  - [ ] 5.7 Add social proof carousel/testimonials with smooth transitions
  - [ ] 5.8 Implement loading transitions between sections (0.8s ease-in-out)
  - [ ] 5.9 Add Apple-style button interactions and micro-animations
  - [ ] 5.10 Ensure 60fps performance for all animations
  - [ ] 5.11 Add animation timing controls (0.6s scroll reveals, 0.3s hovers)
  - [ ] 5.12 Implement cross-browser animation fallbacks and optimization