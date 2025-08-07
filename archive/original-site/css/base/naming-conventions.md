# CSS Naming Conventions - Apple Design System

## BEM-Inspired Methodology

### Block, Element, Modifier Pattern
- **Block**: Standalone component (`.button`, `.card`, `.modal`)
- **Element**: Part of a block (`.button__text`, `.card__header`, `.modal__content`)
- **Modifier**: Variation of block or element (`.button--primary`, `.card--featured`, `.modal--large`)

### Naming Rules
1. Use lowercase letters only
2. Separate words with hyphens (kebab-case)
3. Use double underscores for elements: `block__element`
4. Use double hyphens for modifiers: `block--modifier`
5. Chain modifiers: `block__element--modifier`

## Semantic Component Vocabulary

### Layout Components
- `header` - Site header/navigation
- `footer` - Site footer
- `main` - Main content area
- `sidebar` - Sidebar content
- `container` - Content containers
- `grid` - Grid layouts

### UI Components
- `button` - Interactive buttons
- `card` - Content cards
- `modal` - Modal dialogs
- `form` - Form elements
- `nav` - Navigation menus
- `hero` - Hero sections
- `testimonial` - Testimonial components

### Utility Classes
- Prefixed with purpose: `u-`, `is-`, `has-`
- Example: `.u-text-center`, `.is-hidden`, `.has-shadow`

## State Classes
- `is-active` - Active state
- `is-disabled` - Disabled state
- `is-loading` - Loading state
- `is-visible` - Visible state
- `is-hidden` - Hidden state

## Examples
```css
/* Block */
.story-hero { }

/* Element */
.story-hero__headline { }
.story-hero__subheadline { }
.story-hero__cta { }

/* Modifier */
.story-hero--centered { }
.story-hero__cta--primary { }

/* State */
.story-hero.is-loading { }
```