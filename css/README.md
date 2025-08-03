# CSS Architecture Documentation

## Overview
This CSS architecture follows Apple's design system principles with a component-based approach using BEM-inspired naming conventions.

## File Structure
```
css/
├── base/                    # Foundation styles
│   ├── variables.css        # CSS custom properties
│   ├── reset.css           # Browser normalization
│   └── typography.css      # Typography system
├── layouts/                # Layout components
│   ├── header.css          # Header/navigation
│   ├── footer.css          # Footer
│   └── grid.css           # Grid system
├── components/             # UI components
│   ├── buttons.css         # Button variations
│   ├── cards.css          # Card components
│   ├── forms.css          # Form elements
│   ├── heroes.css         # Hero sections
│   ├── modals.css         # Modal dialogs
│   └── navigation.css     # Navigation menus
├── utilities/              # Utility classes
│   ├── spacing.css        # Margin/padding
│   ├── colors.css         # Color utilities
│   └── responsive.css     # Responsive helpers
└── main.css               # Main entry point

dist/
└── main.css               # Built/compiled CSS
```

## Naming Conventions
- **Blocks**: `.component-name`
- **Elements**: `.component-name__element`
- **Modifiers**: `.component-name--modifier`
- **Utilities**: `.u-utility-name`
- **States**: `.is-state-name`

## Usage
1. Include `dist/main.css` in your HTML
2. Use semantic class names following BEM conventions
3. Leverage utility classes for common patterns
4. Maintain Apple design system consistency

## Build Process
```bash
npm run css:build    # Build CSS
npm run css:watch    # Watch for changes
npm run css:minify   # Minified production build
npm run lint:css     # Lint CSS files
```

## Component Examples

### Button
```html
<button class="btn btn--primary btn--large">
    Primary Button
</button>
```

### Card
```html
<div class="card">
    <div class="card__header">
        <h3 class="card__title">Card Title</h3>
    </div>
    <p class="card__description">Card content...</p>
</div>
```

### Hero Section
```html
<section class="story-hero">
    <div class="story-hero__content">
        <h1 class="story-hero__headline">Hero Headline</h1>
        <p class="story-hero__subheadline">Supporting text</p>
        <div class="story-hero__cta">
            <a href="#" class="btn btn--primary">Call to Action</a>
        </div>
    </div>
</section>
```

## Maintenance
- Follow existing naming conventions
- Test changes across all breakpoints
- Use CSS custom properties for consistency
- Keep components modular and reusable
- Maintain visual consistency with Apple design principles