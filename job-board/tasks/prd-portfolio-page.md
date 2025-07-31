# Product Requirements Document: Portfolio Page with Job Board Integration

## Introduction/Overview
Create a dedicated portfolio page that showcases all projects (including the new Job Board) in an elegant, unified presentation. The job board will be repositioned as one of Maurice's portfolio projects, alongside existing projects like Enterprise Infrastructure Transformation and Maurice Chat AI Agent. The navigation will be updated to "Portfolio" and projects will open in modal overlays to keep users engaged on the main site.

## Goals
- Consolidate all projects into a unified, elegant portfolio presentation
- Reposition the job board as a featured portfolio project rather than a standalone tool
- Create a reusable project data structure that can be used across multiple pages
- Implement modal-based project viewing to improve user engagement and retention
- Maintain consistent branding and user experience across all portfolio interactions

## User Stories
- **As a visitor**, I want to see all of Maurice's projects in one organized location so I can understand his capabilities
- **As a potential client**, I want to view project details in a modal so I can explore multiple projects without losing my place
- **As a recruiter**, I want to see technical skills and project outcomes clearly displayed for each portfolio item
- **As a returning visitor**, I want easy navigation between the main site and portfolio without losing context

## MVP Definition
A complete portfolio page that:
- Displays all 3 projects (Enterprise Infrastructure, Maurice Chat AI, Job Board) in an elegant grid layout
- Uses JSON data structure for easy project management
- Opens project details in modal overlays instead of navigating away
- Updates main navigation from "Job Board" to "Portfolio"
- Maintains consistent styling with the main website theme
- Includes the job board as a functional project within the modal system

## Functional Requirements

### Must Have (M)
1. **M1**: Create `/portfolio/index.html` page with elegant project showcase layout
2. **M2**: Extract existing project data into `projects.json` file for reusable data structure
3. **M3**: Add Job Board as third project in the JSON data with appropriate details
4. **M4**: Update main navigation to replace "Job Board" with "Portfolio" link
5. **M5**: Implement modal overlay system for project detail viewing
6. **M6**: Create project detail modal that displays:
   - Project title, description, and company/context
   - Technology stack tags
   - Project outcomes or key features
   - Action buttons (View Live, GitHub, Case Study, etc.)
7. **M7**: Ensure modal opens job board in embedded iframe or direct integration
8. **M8**: Maintain consistent Tailwind styling matching main website theme
9. **M9**: Include responsive design for mobile and desktop viewing
10. **M10**: Add modal close functionality (X button, ESC key, outside click)

### Should Have (S)
11. **S1**: Smooth animations for modal open/close transitions
12. **S2**: Loading states for modal content
13. **S3**: Keyboard navigation support (tab, arrow keys)
14. **S4**: Project filtering or sorting options

### Could Have (C)
15. **C1**: Project search functionality
16. **C2**: Social sharing buttons for individual projects
17. **C3**: Project view analytics tracking

### Won't Have (W)
18. **W1**: User accounts or personalization
19. **W2**: Project comments or feedback systems
20. **W3**: Integration with external portfolio platforms
21. **W4**: Real-time project status updates

## Key Function Signatures

```javascript
// Load and parse projects data
function loadProjects(): Promise<Project[]>

// Display projects in grid layout
function renderProjectGrid(projects: Project[]): void

// Open project modal with details
function openProjectModal(projectId: string): void

// Close project modal
function closeProjectModal(): void

// Handle keyboard navigation
function handleKeyboardNav(event: KeyboardEvent): void

// Initialize modal functionality
function initializeModals(): void
```

## Interface Definitions

```typescript
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // FontAwesome class
  iconGradient: string; // Tailwind gradient classes
  tags: string[];
  status: string;
  statusIcon: string;
  actionButton: {
    text: string;
    url: string;
    icon: string;
    target?: string;
  };
  modalContent?: {
    detailedDescription: string;
    features: string[];
    technologies: string[];
    outcomes?: string[];
  };
}

interface ModalState {
  isOpen: boolean;
  currentProject: Project | null;
  element: HTMLElement | null;
}
```

## Technical Standards
- **Framework**: Vanilla JavaScript with Tailwind CSS (matching main site)
- **Data Storage**: JSON file for project data management
- **Styling**: Tailwind CSS with consistent color scheme and animations
- **Modals**: Custom modal implementation with accessibility features
- **Icons**: FontAwesome 6.0 for consistency with main site
- **Responsive**: Mobile-first design with proper breakpoints
- **File Structure**: Single HTML file with embedded CSS/JS following site pattern

## Non-Goals (Out of Scope)
- CMS or admin interface for project management
- User-generated content or comments
- Integration with external portfolio platforms (Behance, Dribbble)
- Real-time collaboration features
- Version control for project data
- Advanced analytics beyond basic view tracking

## Future Iterations
- Project case study pages with detailed breakdowns
- Client testimonials integration
- Interactive project demos or screenshots
- Integration with GitHub API for real-time project stats
- Advanced filtering and search capabilities
- Project timeline or chronological view

## Design Considerations
- **Layout**: 3-column grid on desktop, 1-column on mobile, following main site patterns
- **Modal Design**: Full-screen overlay with centered content, matching site's aesthetic
- **Project Cards**: Similar to existing project cards but optimized for portfolio viewing
- **Color Scheme**: Maintain existing primary (#0EA5E9), accent (#06B6D4), success (#10B981) colors
- **Typography**: Consistent with main site hierarchy and spacing
- **Animations**: Subtle transitions for modal open/close, hover effects on cards

## Technical Considerations
- **Job Board Integration**: Modal should either iframe the job board or replicate key functionality
- **JSON Structure**: Design for easy addition of future projects
- **Modal Accessibility**: Proper ARIA labels, focus management, keyboard navigation
- **Performance**: Lazy loading of modal content, efficient DOM manipulation
- **SEO**: Ensure portfolio page is crawlable and includes appropriate meta tags
- **Cross-browser**: Support modern browsers, graceful degradation for older ones

## Success Metrics
- Portfolio page loads successfully and displays all 3 projects
- Modal system works smoothly across all devices and browsers
- Job board remains fully functional within modal context
- Navigation update from "Job Board" to "Portfolio" is seamless
- No JavaScript errors in browser console
- Mobile responsive design works on actual devices
- Load time remains under 3 seconds for portfolio page

## Open Questions
1. Should the job board modal be a full-screen takeover or a large centered modal?
2. Do we need breadcrumb navigation within modals?
3. Should we include project screenshots or mockups in the JSON data?
4. How should we handle the job board's CSV dependency within the modal context?
5. Should the portfolio page have its own unique URL structure (/portfolio/project-name)?
6. Do we want to track individual project view analytics?