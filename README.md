# Maurice Williams - The Capability Engine

Privacy-first AI automation that eliminates admin work for 7 & 8-figure coaching practices. Modern React frontend with secure FastAPI backend.

## 🚀 Quick Start

### Option 1: One-Command Start (Recommended)
```bash
./scripts/start-dev.sh
```

### Option 2: Manual Development Setup
```bash
# Terminal 1: Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# Terminal 2: Frontend  
cd frontend
npm install
npm run dev
```

### Option 3: Docker Compose
```bash
docker-compose up --build
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000  
- **API Documentation**: http://localhost:8000/api/docs
- **Health Check**: http://localhost:8000/api/health

## 🛑 Stop Services

```bash
./scripts/stop-dev.sh
# Or manually: Ctrl+C in terminals
```

## 🏗️ Architecture

### Frontend (React + Vite)
- **Modern React 18** with functional components and hooks
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for Apple-inspired design system
- **Responsive design** with mobile-first approach
- **Component-based** architecture for maintainability

### Backend (FastAPI)
- **FastAPI** for high-performance async API
- **SQLite** database with SQLAlchemy ORM
- **Pydantic** for data validation and serialization
- **Alembic** for database migrations
- **Security hardening** with rate limiting, CORS, headers

### Key Features
- ✅ **Email Capture**: Secure endpoint with unique code generation
- ✅ **Rate Limiting**: 5 requests/minute per IP
- ✅ **Input Validation**: Comprehensive Pydantic models
- ✅ **Error Handling**: Structured error responses
- ✅ **Health Checks**: Monitoring and observability
- ✅ **Database Migrations**: Version-controlled schema changes

## 📁 Project Structure

```
moewill.github.io/
├── 📱 frontend/                 # React frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── utils/             # API client, utilities
│   │   └── styles/            # Tailwind CSS
│   ├── package.json           # Dependencies
│   └── vite.config.js         # Build configuration
│
├── 🔧 backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/               # API endpoints
│   │   ├── models/            # Pydantic models
│   │   ├── database/          # SQLAlchemy models
│   │   └── utils/             # Security utilities
│   ├── alembic/               # Database migrations
│   └── requirements.txt       # Python dependencies
│
├── 📝 content/                 # Markdown content
│   ├── pages/                 # Page content
│   └── data/                  # Site configuration
│
├── 🐳 Docker files
│   ├── docker-compose.yml     # Development
│   └── docker-compose.prod.yml # Production
│
├── 🧪 tests/                   # Test suites
│   ├── integration/           # End-to-end tests
│   └── css/                   # Style validation
│
├── 🚀 scripts/                 # Utility scripts
│   ├── start-dev.sh          # Development startup
│   ├── stop-dev.sh           # Stop services
│   └── deploy.sh             # Production deployment
│
└── 📚 docs/                    # Documentation
    └── TROUBLESHOOTING.md     # Common issues
```

## 🛠️ Development

### Adding New Features
1. **Backend**: Add endpoints in `backend/app/api/`
2. **Frontend**: Create components in `frontend/src/components/`
3. **Database**: Use Alembic for schema changes
4. **Content**: Update markdown files in `content/`

### Running Tests
```bash
# Backend tests
cd backend && source venv/bin/activate
pytest app/tests/

# Frontend tests  
cd frontend
npm test

# Integration tests
pytest tests/integration/

# All tests via Docker
docker-compose -f docker-compose.test.yml up --build
```

### Database Operations
```bash
# Create migration
cd backend && source venv/bin/activate
alembic revision --autogenerate -m "Description"

# Apply migrations
alembic upgrade head

# Check database
sqlite3 backend/app.db "SELECT * FROM email_captures;"
```

## 🚀 Production Deployment

### Docker Deployment
```bash
# Production stack
docker-compose -f docker-compose.prod.yml up -d

# With automated deployment
./scripts/deploy.sh
```

### Manual Deployment
1. **Build frontend**: `cd frontend && npm run build`
2. **Configure Nginx**: Use provided nginx configurations
3. **SSL Setup**: Let's Encrypt certificates (see `nginx/ssl/README.md`)
4. **Environment**: Set production environment variables

## 🧪 API Testing

### Email Capture Endpoint
```bash
# Success case
curl -X POST "http://localhost:8000/api/email/capture" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Expected: {"success":true,"code":"ABC123DEF0","message":"Email captured successfully"}

# Duplicate email
curl -X POST "http://localhost:8000/api/email/capture" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Expected: 409 Conflict - {"detail":"Email already exists"}
```

### Health Check
```bash
curl http://localhost:8000/api/health
# Expected: {"status":"healthy","timestamp":1654321000.123}
```

## 🔒 Security Features

- **Rate Limiting**: Prevents abuse (5 req/min per IP)
- **CORS Protection**: Frontend-only origin restrictions  
- **Security Headers**: HSTS, CSP, X-Frame-Options, etc.
- **Input Validation**: Email format and length validation
- **SQL Injection Prevention**: SQLAlchemy ORM protection
- **Error Handling**: No sensitive data in error responses

## 📱 Content Management

### Updating Page Content
1. Edit markdown files in `content/pages/`
2. Use Tailwind CSS classes in markdown
3. Content hot-reloads in development
4. Supports frontmatter metadata

### Site Configuration
- Global settings: `content/data/site-config.json`
- Capabilities: Defined in site configuration
- SEO metadata: Frontmatter in markdown files

## 🏷️ Technologies Used

### Frontend Stack
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server  
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client for API calls
- **Remark** - Markdown processing
- **Vitest** - Unit testing framework

### Backend Stack  
- **FastAPI** - High-performance async API framework
- **SQLAlchemy** - SQL toolkit and ORM
- **Alembic** - Database migration tool
- **Pydantic** - Data validation using Python type hints
- **slowapi** - Rate limiting middleware
- **structlog** - Structured logging
- **pytest** - Testing framework

### Infrastructure
- **Docker** - Containerization
- **Nginx** - Reverse proxy and static file serving
- **SQLite** - Embedded database (dev), PostgreSQL (prod)
- **GitHub Actions** - CI/CD pipeline

## 📊 Performance

- **Frontend**: <3s page load, code splitting, asset optimization
- **Backend**: <100ms API response times, connection pooling
- **Database**: Indexed queries, migration-based schema
- **Security**: Minimal attack surface, comprehensive validation

## 📞 Support

### Getting Help
- **Documentation**: Check `docs/TROUBLESHOOTING.md`
- **Logs**: `docker-compose logs -f`
- **Health Checks**: Visit `/api/health` endpoints

### Common Commands
```bash
# View running processes
docker-compose ps

# Follow logs
docker-compose logs -f backend frontend

# Reset database
rm backend/app.db && cd backend && alembic upgrade head

# Clean rebuild
docker-compose down && docker-compose up --build
```

## 📄 License

© 2024 Maurice Williams. All rights reserved.

---

**🌟 Built with privacy-first AI automation for high-growth coaching practices**