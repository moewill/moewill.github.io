# PRD: Frontend/Backend Separation with Template System

## Introduction/Overview
Transform the current static HTML website into a modern, maintainable architecture with React frontend and FastAPI backend. The primary goal is to implement a consistent templating system that allows easy content updates through markdown files while establishing a hardened API foundation for future functionality.

## Goals
1. **Template Consistency**: Create reusable page templates to eliminate HTML duplication and ensure consistent styling
2. **Content Management**: Enable easy content updates through markdown files for LLM-assisted content changes
3. **API Foundation**: Establish a secure, production-ready FastAPI backend with comprehensive security hardening
4. **Maintainability**: Reduce friction for content updates and future feature development
5. **Performance**: Maintain current SEO performance while enabling dynamic functionality

## User Stories
- **As a content manager**, I want to update page content via markdown files so that I can make changes without touching code
- **As a developer**, I want consistent page templates so that styling changes apply globally
- **As a site visitor**, I want to sign up for updates so that I can receive communications about services
- **As a system administrator**, I want a secure API foundation so that future features can be built safely
- **As an LLM assistant**, I want to modify markdown content and apply Tailwind CSS classes easily

## MVP Definition
- Convert existing homepage to React template with server-side rendering
- Create markdown-based content system for easy updates  
- Implement secure email capture API endpoint with SQLite storage
- Maintain current visual design and SEO performance
- Set up production-ready deployment architecture

## Functional Requirements

### Must Have (MVP)
1. **Frontend Template System**
   - Convert current homepage HTML to React component template
   - Implement server-side rendering for SEO
   - Create reusable layout components (header, footer, hero sections)
   - Support markdown content injection into templates

2. **Email Capture API**
   - Secure POST endpoint accepting email string input
   - Generate unique 10-character alphanumeric codes
   - Store email-code pairs in SQLite database
   - Return success/error responses with proper HTTP status codes

3. **Security Hardening**
   - Input validation using Pydantic models
   - Rate limiting implementation
   - CORS configuration
   - Security headers (HSTS, CSP, X-Frame-Options, etc.)
   - HTTPS redirect middleware
   - SQL injection prevention
   - Request size limiting

4. **Content Management**
   - Markdown file parsing for page content
   - Tailwind CSS class support in markdown
   - File-based content structure matching current site

### Should Have
5. **Production Infrastructure**
   - Docker containerization
   - Nginx reverse proxy configuration
   - Let's Encrypt SSL setup
   - Environment variable management
   - Logging and monitoring setup

6. **Development Workflow**
   - Vite build system for frontend
   - Hot reload for development
   - CSS build pipeline integration
   - Database migration system

### Could Have
7. **Enhanced Templates**
   - Service offering page template (for capabilities)
   - Blog post template
   - Portfolio project template

## Key Function Signatures

```python
# Email capture endpoint
async def capture_email(email: EmailInput) -> EmailResponse:
    """
    Input: EmailInput(email: str)
    Output: EmailResponse(success: bool, code: str, message: str)
    Side effects: Inserts record into SQLite database
    """

# Code generation utility  
def generate_unique_code(length: int = 10) -> str:
    """
    Input: length (default 10)
    Output: Unique alphanumeric string
    Side effects: None
    """

# Template rendering
def render_page_template(template_name: str, content_data: dict) -> str:
    """
    Input: template_name, content_data from markdown
    Output: Rendered HTML string
    Side effects: File system reads
    """
```

## Interface Definitions

### API Endpoints
```
POST /api/email/capture
  Request: {"email": "user@example.com"}
  Response: {"success": true, "code": "ABC123DEF0", "message": "Email captured successfully"}
  Status: 201 Created | 400 Bad Request | 429 Too Many Requests | 500 Internal Server Error

GET /api/health
  Response: {"status": "healthy", "timestamp": "2024-01-01T00:00:00Z"}
  Status: 200 OK
```

### Database Schema
```sql
CREATE TABLE email_captures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    code TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_email_captures_email ON email_captures(email);
CREATE INDEX idx_email_captures_code ON email_captures(code);
```

### Content Structure
```
content/
├── pages/
│   ├── homepage.md
│   ├── capabilities/
│   └── portfolio/
├── templates/
│   ├── base.jsx
│   ├── homepage.jsx
│   └── service.jsx
└── data/
    └── site-config.json
```

## API Contract Definitions

### Request/Response Schemas
```python
class EmailInput(BaseModel):
    email: str = Field(..., regex=r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', max_length=255)

class EmailResponse(BaseModel):
    success: bool
    code: Optional[str] = None
    message: str

class HealthResponse(BaseModel):
    status: Literal["healthy", "degraded", "unhealthy"]
    timestamp: datetime
```

### Error Codes
- 400: Invalid email format or missing required fields
- 409: Email already exists in database
- 429: Rate limit exceeded (max 5 requests per minute per IP)
- 500: Internal server error (database connection, etc.)

### Security Headers
```python
SECURITY_HEADERS = {
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin"
}
```

## Technical Standards

### Backend (FastAPI)
- **Framework**: FastAPI 0.104+ with Pydantic v2
- **Database**: SQLite with SQLAlchemy ORM for local development, PostgreSQL for production
- **Security**: 
  - Bcrypt for password hashing (future auth features)
  - slowapi for rate limiting
  - python-multipart for form handling
  - cryptographically secure random for code generation
- **Validation**: Pydantic models with regex patterns and length limits
- **Error Handling**: Custom exception handlers with structured error responses
- **Logging**: structlog for structured logging with correlation IDs

### Frontend (React + Vite)
- **Framework**: React 18+ with functional components and hooks
- **Build Tool**: Vite 4+ for fast development and optimized builds
- **Styling**: Tailwind CSS 3+ (integrate with existing CSS architecture)
- **Rendering**: Server-side rendering with React 18 streaming
- **State Management**: React Context for global state (minimal for MVP)
- **Markdown**: remark/rehype ecosystem for markdown processing

### Development Standards
- **Code Style**: Black + isort for Python, Prettier + ESLint for JavaScript
- **Type Safety**: TypeScript for frontend, Python type hints for backend  
- **Testing**: pytest for backend, Vitest for frontend
- **Git Hooks**: pre-commit hooks for linting and formatting
- **Environment**: .env files with validation, never commit secrets

## Non-Goals (Out of Scope)
- User authentication system (beyond email capture)
- Payment processing or e-commerce functionality  
- Admin dashboard for content management
- Multi-language support
- Real-time features (WebSocket, Server-Sent Events)
- Advanced analytics or tracking beyond basic metrics
- Migration of existing Netlify functions
- Social media integrations
- Email marketing automation (just capture for now)

## Future Iterations
- **Phase 2**: User authentication and account management
- **Phase 3**: Admin dashboard for content and email management  
- **Phase 4**: Advanced templating with component library
- **Phase 5**: Email marketing integration and automation
- **Phase 6**: Analytics dashboard and conversion tracking
- **Phase 7**: Multi-site support and white-label capabilities

## Design Considerations
- **Visual Consistency**: Maintain current Apple-inspired design system
- **Component Library**: Extract reusable components from existing CSS architecture
- **Responsive Design**: Preserve current mobile-first approach
- **Performance**: Target <100ms API response times, <3s page load times
- **SEO**: Maintain current search rankings with proper meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliance for all interactive elements

## Technical Considerations
- **Database**: Start with SQLite for simplicity, design for PostgreSQL migration
- **Deployment**: Docker containers with multi-stage builds for optimization
- **Monitoring**: Health checks, error tracking, and performance monitoring
- **Backup**: Automated database backups with point-in-time recovery
- **Scalability**: Design API routes and database queries for horizontal scaling
- **Security**: Regular dependency updates, security scanning in CI/CD pipeline

## Success Metrics
- **Development Velocity**: 50% reduction in time to update page content
- **Code Maintainability**: 80% reduction in duplicate HTML/CSS across pages
- **API Performance**: <100ms average response time for email capture endpoint
- **Security**: Zero critical vulnerabilities in production
- **SEO**: Maintain current search rankings (monitor for 30 days post-launch)
- **User Experience**: <3 second page load times on mobile
- **Content Updates**: Enable non-technical content updates via markdown files

## Open Questions
1. **Email Validation**: Should we implement real-time email validation or just format checking?
2. **Code Usage**: How will the generated codes be used in future features?
3. **Database Migration**: Timeline for PostgreSQL migration and triggers for switching?
4. **Template Inheritance**: How deep should the template nesting go for maximum flexibility?
5. **Content Versioning**: Do we need version control for markdown content changes?
6. **Rate Limiting**: Should rate limits be per-IP, per-email, or both?
7. **Error Handling**: What level of error detail should be exposed to the client?
8. **Deployment Strategy**: Blue-green deployment or rolling updates for zero downtime?