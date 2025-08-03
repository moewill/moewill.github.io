# Task List: Job Board Display Implementation

Based on PRD: `prd-job-board-display.md`

## Relevant Files

- `job-board/index.html` - Main job board page with embedded JavaScript and Tailwind styling (✅ Created)
- `job-board/fake_jobs.csv` - CSV data source containing job listings (✅ Already exists)
- `../index.html` - Main website navigation updated with "Job Board" links (✅ Modified)
- All functionality implemented as single HTML file with embedded CSS and JavaScript

### Notes

- Since this is a static site for GitHub Pages, we'll use a single HTML file with embedded JavaScript and Tailwind CSS
- No traditional unit tests needed as specified in PRD (vanilla JavaScript, static site)
- Vite can be used for development but final output should be static HTML/CSS/JS files

## Tasks

- [x] 1.0 Setup Project Structure and Navigation Integration
  - [x] 1.1 Add "Job Board" link to desktop navigation in main index.html (lines ~64-67)
  - [x] 1.2 Add "Job Board" link to mobile navigation in main index.html (lines ~85-87)
  - [x] 1.3 Ensure navigation links point to `/job-board/` with consistent styling
  - [x] 1.4 Test navigation links work correctly from main site

- [x] 2.0 Create Job Board HTML Page with Basic Layout
  - [x] 2.1 Create `/job-board/index.html` with basic HTML structure
  - [x] 2.2 Add Tailwind CSS CDN and match main site's theme configuration
  - [x] 2.3 Create consistent navigation header matching main site
  - [x] 2.4 Add main content area with loading indicator placeholder
  - [x] 2.5 Add error message container for CSV loading failures
  - [x] 2.6 Ensure mobile responsiveness with proper viewport meta tag

- [x] 3.0 Implement CSV Loading and Parsing Functionality
  - [x] 3.1 Create JavaScript function to fetch CSV file using relative path
  - [x] 3.2 Implement CSV parsing function to convert text to job objects
  - [x] 3.3 Add error handling for network failures and malformed CSV
  - [x] 3.4 Create loading state management (show/hide loading indicator)
  - [x] 3.5 Test CSV loading with existing fake_jobs.csv file

- [x] 4.0 Implement Job Processing and Display Logic
  - [x] 4.1 Create function to calculate days active from first seen date to current date
  - [x] 4.2 Implement filtering to show only jobs matching current date
  - [x] 4.3 Create sorting function to order jobs by days active (newest first)
  - [x] 4.4 Build job card HTML generation with all CSV fields displayed
  - [x] 4.5 Make job titles clickable links opening in same tab
  - [x] 4.6 Add "no active jobs" message for empty results

- [x] 5.0 Add Visual Age Indicators and Responsive Styling
  - [x] 5.1 Implement age-based styling function (fresh, recent, week-old, old, stale)
  - [x] 5.2 Apply Tailwind color classes based on job age (yellow, orange, red, gray)
  - [x] 5.3 Add job count display showing number of active jobs
  - [x] 5.4 Ensure fully responsive design works on mobile devices
  - [x] 5.5 Test all functionality with different job ages and dates
  - [x] 5.6 Verify styling consistency with main website theme

## Additional Testing & Validation Tasks

- [ ] 6.0 Live Testing and Bug Fixes
  - [ ] 6.1 Test job board page loads correctly on GitHub Pages
  - [ ] 6.2 Verify CSV loading works without CORS issues
  - [ ] 6.3 Test navigation between main site and job board
  - [ ] 6.4 Validate mobile responsiveness on actual devices
  - [ ] 6.5 Test error handling with malformed CSV data
  - [ ] 6.6 Verify job age calculations with different test dates