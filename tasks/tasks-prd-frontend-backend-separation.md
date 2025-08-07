# Task List: Frontend/Backend Separation with Template System

Based on PRD: `prd-frontend-backend-separation.md`

## Relevant Files

- `backend/app/main.py` - FastAPI application entry point with security middleware
- `backend/app/api/email.py` - Email capture API endpoints with validation
- `backend/app/models/email.py` - Pydantic models for email input/output validation
- `backend/app/database/connection.py` - SQLite database connection and session management
- `backend/app/database/models.py` - SQLAlchemy models for email captures table
- `backend/app/utils/security.py` - Security utilities (code generation, rate limiting)
- `backend/app/config.py` - Environment configuration and settings
- `backend/requirements.txt` - Python dependencies
- `backend/Dockerfile` - Docker container configuration for backend
- `frontend/src/App.jsx` - Main React application component
- `frontend/src/components/Layout.jsx` - Base layout component with header/footer
- `frontend/src/components/HomePage.jsx` - Homepage template component
- `frontend/src/components/EmailCapture.jsx` - Email capture form component
- `frontend/src/utils/api.js` - API client utilities for backend communication
- `frontend/src/utils/markdown.js` - Markdown parsing and rendering utilities
- `frontend/package.json` - Frontend dependencies and build scripts
- `frontend/vite.config.js` - Vite configuration for build system
- `frontend/Dockerfile` - Docker container configuration for frontend
- `content/pages/homepage.md` - Homepage content in markdown format
- `content/data/site-config.json` - Global site configuration
- `docker-compose.yml` - Multi-container application orchestration
- `nginx/nginx.conf` - Nginx reverse proxy configuration
- `nginx/ssl/` - SSL certificate directory for Let's Encrypt
- `backend/tests/test_docker_build.py` - Tests for Docker container build and health
- `frontend/tests/build.test.js` - Tests for frontend build process and asset generation
- `tests/integration/test_full_stack.py` - Integration tests for complete application stack
- `tests/css/test_styles.py` - CSS validation and consistency tests
- `.github/workflows/ci.yml` - CI/CD pipeline for automated testing

### Notes

- Use `pytest backend/tests/` to run backend tests
- Use `npm test` in frontend directory to run frontend tests  
- Use `docker-compose up --build` to run the full application stack
- Use `pytest tests/integration/` to run integration tests
- Use `npm run build` to test frontend build process
- Use `docker build backend/` to test backend Docker build
- Use `docker build frontend/` to test frontend Docker build
- Database migrations will be handled through SQLAlchemy with Alembic

## Tasks

- [x] 1.0 Set up Project Structure and Build System
  - [x] 1.1 Create backend directory structure with FastAPI project layout
  - [x] 1.2 Create frontend directory structure with React/Vite setup
  - [x] 1.3 Create content directory structure for markdown files
  - [x] 1.4 Set up Python virtual environment and install FastAPI dependencies
  - [x] 1.5 Initialize React project with Vite and install dependencies
  - [x] 1.6 Configure development environment variables and settings
  - [x] 1.7 Set up git ignore patterns for new directory structure
  - [x] 1.8 Create docker-compose.yml for local development

- [x] 2.0 Implement Secure FastAPI Backend with Email Capture
  - [x] 2.1 Create FastAPI main application with security middleware setup
  - [x] 2.2 Implement SQLite database models and connection management
  - [x] 2.3 Create Pydantic models for email input validation and responses
  - [x] 2.4 Implement email capture API endpoint with proper error handling
  - [x] 2.5 Add unique code generation utility with cryptographic randomness
  - [x] 2.6 Configure rate limiting middleware (5 requests per minute per IP)
  - [x] 2.7 Add CORS middleware with frontend origin restrictions
  - [x] 2.8 Implement security headers middleware (HSTS, CSP, etc.)
  - [x] 2.9 Add health check endpoint for monitoring
  - [x] 2.10 Create comprehensive error handling and logging
  - [x] 2.11 Write unit tests for all API endpoints and utilities
  - [x] 2.12 Add database migration system with Alembic

- [x] 3.0 Create React Frontend with Template System
  - [x] 3.1 Convert existing homepage HTML structure to React components
  - [x] 3.2 Create reusable Layout component with header and footer
  - [x] 3.3 Implement HomePage template component matching current design
  - [x] 3.4 Create EmailCapture component with form validation
  - [x] 3.5 Set up API client utilities for backend communication
  - [x] 3.6 Configure Tailwind CSS integration with existing styles
  - [x] 3.7 Implement error handling and loading states for API calls
  - [x] 3.8 Add responsive design support matching current breakpoints
  - [x] 3.9 Configure Vite for optimal production builds
  - [x] 3.10 Write component tests for all major components
  - [x] 3.11 Implement server-side rendering setup for SEO

- [x] 4.0 Implement Markdown Content Management System
  - [x] 4.1 Create markdown parsing utilities with remark/rehype
  - [x] 4.2 Set up content directory structure matching current site pages
  - [x] 4.3 Convert existing homepage content to markdown format
  - [x] 4.4 Implement Tailwind CSS class support in markdown processing
  - [x] 4.5 Create content injection system for React components
  - [x] 4.6 Add frontmatter support for page metadata (title, description, etc.)
  - [x] 4.7 Implement content validation and error handling
  - [x] 4.8 Create content hot-reload during development
  - [x] 4.9 Add support for image and asset references in markdown
  - [x] 4.10 Write tests for markdown parsing and content injection

- [x] 5.0 Configure Production Deployment Infrastructure
  - [x] 5.1 Create optimized Dockerfile for FastAPI backend
  - [x] 5.2 Create optimized Dockerfile for React frontend build
  - [x] 5.3 Configure Nginx reverse proxy with SSL termination
  - [x] 5.4 Set up Let's Encrypt certificate automation
  - [x] 5.5 Create production docker-compose.yml with proper networking
  - [x] 5.6 Configure environment variable management for production
  - [x] 5.7 Set up database backup and recovery procedures
  - [x] 5.8 Implement health checks and monitoring endpoints
  - [x] 5.9 Configure log aggregation and rotation
  - [x] 5.10 Create deployment scripts and CI/CD pipeline preparation
  - [x] 5.11 Document deployment procedures and troubleshooting guide

- [x] 6.0 Build System Testing and Validation
  - [x] 6.1 Create Docker build tests for backend container
  - [x] 6.2 Create Docker build tests for frontend container
  - [x] 6.3 Test backend API health checks and startup sequence
  - [x] 6.4 Test frontend build process and asset generation
  - [x] 6.5 Validate CSS compilation and Tailwind integration
  - [x] 6.6 Create integration tests for full Docker Compose stack
  - [x] 6.7 Test database initialization and migration processes
  - [x] 6.8 Validate Nginx configuration and reverse proxy functionality
  - [x] 6.9 Test SSL certificate handling and HTTPS redirects
  - [x] 6.10 Create automated CSS regression tests
  - [x] 6.11 Test markdown parsing and content injection pipeline
  - [x] 6.12 Validate API security headers and CORS configuration

- [x] 7.0 CSS Migration and Style System Integration
  - [x] 7.1 Audit existing CSS architecture for Tailwind compatibility
  - [x] 7.2 Create CSS migration plan for component-based styles
  - [x] 7.3 Test existing CSS classes work with new React components
  - [x] 7.4 Validate responsive breakpoints match current design
  - [x] 7.5 Create CSS purging configuration for production builds
  - [x] 7.6 Test CSS hot-reload in development environment
  - [x] 7.7 Validate Apple-inspired design system preservation
  - [x] 7.8 Create CSS performance tests (bundle size, load times)
  - [x] 7.9 Test CSS custom properties and variable usage
  - [x] 7.10 Validate print styles and accessibility features

- [x] 8.0 Error Handling and Troubleshooting Systems
  - [x] 8.1 Create comprehensive error handling for Docker build failures
  - [x] 8.2 Implement build failure diagnostics and logging
  - [x] 8.3 Create troubleshooting guides for common build issues
  - [x] 8.4 Test error recovery mechanisms for failed deployments
  - [x] 8.5 Validate API error responses and status codes
  - [x] 8.6 Test frontend error boundaries and fallback components
  - [x] 8.7 Create health check endpoints for all services
  - [x] 8.8 Implement automated rollback procedures for failed builds
  - [x] 8.9 Test database connection failure handling
  - [x] 8.10 Validate CSS fallbacks for unsupported features