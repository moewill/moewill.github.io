# Product Requirements Document: Job Board Display

## Introduction/Overview
Create a simple, static web page that displays active job listings from a CSV file, helping job hunters identify fresh opportunities and avoid wasting time on stale postings. The page will show how long each job has been active and use visual indicators to highlight job age, with older jobs (30+ days) being de-emphasized.

## Goals
- Provide job hunters with immediate visibility into job posting freshness
- Reduce time wasted on applying to stale job postings
- Create a simple, fast-loading static site suitable for GitHub Pages hosting
- Automatically process daily CSV updates to maintain current job listings

## User Stories
- **As a job hunter**, I want to see how many days a job has been active so I can prioritize fresh opportunities
- **As a job hunter**, I want older jobs to be visually de-emphasized so I don't waste time on stale postings
- **As a job hunter**, I want to click on job listings to go directly to the application page
- **As a job hunter**, I want to see all available job information in a clean, organized format

## MVP Definition
A single-page application that:
- Loads and parses the daily CSV file
- Displays only jobs active today (matching current date)
- Shows days active with visual indicators
- Provides clickable links to job applications
- Handles CSV loading errors gracefully
- Works as a static site on GitHub Pages

## Functional Requirements

### Must Have (M)
1. **M1**: Create new job board page at `/job-board/index.html`
2. **M2**: Add "Job Board" navigation link to main website navigation (both desktop and mobile)
3. **M3**: Load CSV file (`fake_jobs.csv`) from the job-board directory
4. **M4**: Calculate days active by comparing first appearance date with current browser date
5. **M5**: Display only jobs where the date field matches current date (active jobs only)
6. **M6**: Sort jobs by days active (newest first - 0 days at top)
7. **M7**: Style job listings based on age:
   - 0-2 days: Default/fresh styling
   - 3-6 days: Slight visual indicator (e.g., yellow accent)
   - 7-13 days: More prominent indicator (e.g., orange accent)
   - 14-29 days: Warning indicator (e.g., red accent)
   - 30+ days: Greyed out/de-emphasized
8. **M8**: Make job titles clickable links opening in same tab
9. **M9**: Display all CSV fields using column headers as field labels
10. **M10**: Handle CSV loading errors with user-friendly message
11. **M11**: Maintain consistent styling with main website (same color scheme and navigation)

### Should Have (S)
12. **S1**: Responsive design that works on mobile devices
13. **S2**: Loading indicator while CSV is being processed
14. **S3**: Clean, professional styling using Tailwind CSS

### Could Have (C)
15. **C1**: Job count display (e.g., "Showing 15 active jobs")
16. **C2**: Last updated timestamp

### Won't Have (W)
17. **W1**: Job filtering or search functionality
18. **W2**: Job bookmarking or favorites
19. **W3**: User accounts or personalization
20. **W4**: Backend database or API integration

## Key Function Signatures

```javascript
// Parse CSV and return job objects
function parseCSV(csvText: string): Job[]

// Calculate days between first seen and current date
function calculateDaysActive(firstSeenDate: string, currentDate: Date): number

// Filter jobs to only show active ones (date matches today)
function filterActiveJobs(jobs: Job[], currentDate: Date): Job[]

// Sort jobs by days active (newest first)
function sortJobsByAge(jobs: Job[]): Job[]

// Get appropriate CSS classes based on job age
function getJobAgeStyles(daysActive: number): string
```

## Interface Definitions

```typescript
interface Job {
  title: string;
  url: string;
  date: string; // YYYY-MM-DD format
  [key: string]: string; // Additional CSV fields
}

interface JobWithMetadata extends Job {
  daysActive: number;
  ageCategory: 'fresh' | 'recent' | 'week-old' | 'old' | 'stale';
}
```

## Technical Standards
- **Framework**: Vite for build tooling and development server
- **Styling**: Tailwind CSS for all styling (no custom CSS)
- **JavaScript**: Vanilla JavaScript ES6+ (no additional frameworks)
- **CSV Parsing**: Use built-in JavaScript methods or lightweight CSV parsing
- **Date Handling**: Use native JavaScript Date objects
- **File Structure**: Single HTML file with embedded/linked CSS and JS
- **Deployment**: Static files compatible with GitHub Pages

## Non-Goals (Out of Scope)
- Historical job tracking beyond current active status
- User authentication or personalization
- Job application management
- Integration with external job boards
- Advanced filtering or search capabilities
- Job alerts or notifications
- Data persistence beyond CSV file

## Future Iterations
- Search and filter functionality
- Job categorization and tagging
- Email alerts for new jobs
- Integration with multiple CSV sources
- Historical job posting analytics
- Mobile app version

## Design Considerations
- Use Tailwind's built-in color palette for age indicators:
  - Fresh jobs: Default text/border colors
  - 3-6 days: Yellow accent (`border-yellow-400`, `text-yellow-700`)
  - 7-13 days: Orange accent (`border-orange-400`, `text-orange-700`)
  - 14-29 days: Red accent (`border-red-400`, `text-red-700`)
  - 30+ days: Gray out (`text-gray-400`, `border-gray-300`)
- Card-based layout for job listings
- Clear typography hierarchy
- Adequate spacing and padding for readability

## Technical Considerations
- CSV file must be accessible via relative path for GitHub Pages
- Use `fetch()` API to load CSV file
- Handle CORS restrictions if any
- Ensure page works without JavaScript (graceful degradation)
- Consider CSV file size limits for browser parsing
- Use semantic HTML for accessibility
- **Navigation Integration**: Update main website's `index.html` navigation:
  - Add "Job Board" link to desktop navigation (line ~64-67)
  - Add "Job Board" link to mobile navigation (line ~85-87) 
  - Link should point to `/job-board/` and match existing styling
  - Use same hover effects and transitions as other nav items

## Success Metrics
- Page loads successfully on GitHub Pages
- CSV parsing works with daily automated updates
- Visual age indicators help users identify fresh jobs
- Zero JavaScript errors in browser console
- Mobile-responsive layout works across devices

## Open Questions
1. Should we cache the CSV parsing results in localStorage for performance?
2. What should happen if the CSV file is malformed or empty?
3. Should we display a "no active jobs" message when no jobs match today's date?
4. Do we need any analytics or usage tracking?
5. Should there be a manual refresh button or auto-refresh functionality?