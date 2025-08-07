# Troubleshooting Guide

## Common Issues and Solutions

### Docker Build Failures

#### Backend Docker Build Issues

**Problem**: Backend Docker build fails with dependency errors
```
ERROR: Could not find a version that satisfies the requirement...
```

**Solutions**:
1. Clear Docker cache: `docker system prune -a`
2. Update requirements.txt with specific versions
3. Rebuild without cache: `docker build --no-cache -t backend backend/`

**Problem**: Python virtual environment issues
```
ModuleNotFoundError: No module named 'app'
```

**Solutions**:
1. Check PYTHONPATH in Dockerfile
2. Ensure all __init__.py files exist
3. Verify working directory is set correctly

#### Frontend Docker Build Issues

**Problem**: npm install fails with permission errors
```
EACCES: permission denied, mkdir '/app/node_modules'
```

**Solutions**:
1. Use node user in Dockerfile: `USER node`
2. Set correct ownership: `RUN chown -R node:node /app`
3. Clear npm cache: `npm cache clean --force`

**Problem**: Build fails due to memory issues
```
FATAL ERROR: Ineffective mark-compacts near heap limit
```

**Solutions**:
1. Increase Node.js memory: `NODE_OPTIONS="--max-old-space-size=4096"`
2. Use multi-stage builds to reduce memory usage
3. Build locally first to verify

### API Errors

#### Database Connection Issues

**Problem**: SQLite database locked
```
database is locked
```

**Solutions**:
1. Check for zombie processes: `ps aux | grep python`
2. Remove lock file: `rm app.db-wal app.db-shm`
3. Restart backend container: `docker-compose restart backend`

**Problem**: Migration errors
```
Target database is not up to date
```

**Solutions**:
1. Run migrations manually: `alembic upgrade head`
2. Check migration files in alembic/versions/
3. Reset database if in development: `rm app.db && alembic upgrade head`

#### Email Capture API Issues

**Problem**: Rate limiting too aggressive
```
429 Too Many Requests
```

**Solutions**:
1. Increase rate limit in config.py: `RATE_LIMIT_PER_MINUTE = 10`
2. Implement user-specific rate limiting
3. Add retry logic in frontend

**Problem**: Email validation failures
```
422 Unprocessable Entity
```

**Solutions**:
1. Check email regex pattern in models/email.py
2. Test email format: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
3. Enable debug logging to see validation details

### Frontend Issues

#### React Component Errors

**Problem**: Component not rendering
```
TypeError: Cannot read properties of undefined
```

**Solutions**:
1. Check prop types and default values
2. Add error boundaries to catch errors
3. Use optional chaining: `data?.property`

**Problem**: API calls failing
```
Network Error or CORS issues
```

**Solutions**:
1. Check CORS configuration in backend main.py
2. Verify API_BASE_URL in .env
3. Test API endpoints directly: `curl http://localhost:8000/api/health`

#### CSS and Styling Issues

**Problem**: Tailwind classes not applying
```
Styles not loading or purged incorrectly
```

**Solutions**:
1. Check tailwind.config.js content paths
2. Verify CSS imports in main.jsx
3. Rebuild with: `npm run build`

**Problem**: Responsive design broken
```
Mobile layout issues
```

**Solutions**:
1. Test breakpoints: `md:`, `lg:`, `xl:`
2. Check viewport meta tag in index.html
3. Use browser dev tools to test responsive design

### Docker Compose Issues

#### Service Communication Problems

**Problem**: Backend not accessible from frontend
```
Connection refused or timeout
```

**Solutions**:
1. Check service names in docker-compose.yml
2. Verify network configuration
3. Use service names instead of localhost: `http://backend:8000`

**Problem**: Health checks failing
```
unhealthy container status
```

**Solutions**:
1. Increase health check timeout
2. Check curl availability in container
3. Test health endpoint manually: `docker exec -it container_name curl http://localhost:8000/api/health`

#### Volume and Data Issues

**Problem**: Data not persisting
```
Database resets on container restart
```

**Solutions**:
1. Check volume mounts in docker-compose.yml
2. Verify permissions: `chmod 755 data/`
3. Use named volumes instead of bind mounts

**Problem**: File permissions in volumes
```
Permission denied when writing files
```

**Solutions**:
1. Match user IDs: `USER 1000:1000` in Dockerfile
2. Set proper ownership: `chown -R 1000:1000 /app/data`
3. Use Docker volume with proper permissions

### SSL and Security Issues

#### Certificate Problems

**Problem**: SSL certificate errors
```
certificate verify failed
```

**Solutions**:
1. Check certificate paths in nginx.conf
2. Verify certificate validity: `openssl x509 -in cert.pem -text -noout`
3. Generate new certificates for development

**Problem**: Security headers not applied
```
Missing security headers
```

**Solutions**:
1. Check middleware configuration in main.py
2. Verify nginx proxy settings
3. Test headers: `curl -I http://localhost:8000/api/health`

### Performance Issues

#### Slow API Response Times

**Problem**: API responses > 1 second
```
High response times in logs
```

**Solutions**:
1. Add database indexes to frequently queried fields
2. Implement connection pooling
3. Add caching layer with Redis
4. Profile slow endpoints with structlog

**Problem**: Frontend loading slowly
```
Large bundle sizes or slow rendering
```

**Solutions**:
1. Analyze bundle with: `npm run build -- --analyze`
2. Implement code splitting
3. Optimize images and assets
4. Enable gzip compression in nginx

### Development Environment Issues

#### Hot Reload Not Working

**Problem**: Changes not reflected in browser
```
Frontend not updating on file changes
```

**Solutions**:
1. Check volume mounts in docker-compose.yml
2. Verify Vite dev server configuration
3. Restart development containers

**Problem**: Environment variables not loaded
```
undefined environment variables
```

**Solutions**:
1. Check .env file location and syntax
2. Verify variable names (VITE_ prefix for frontend)
3. Restart containers after .env changes

### Production Deployment Issues

#### Memory and Resource Constraints

**Problem**: Out of memory errors
```
Container killed due to OOM
```

**Solutions**:
1. Increase container memory limits
2. Optimize Docker images (multi-stage builds)
3. Monitor resource usage: `docker stats`

**Problem**: Disk space issues
```
No space left on device
```

**Solutions**:
1. Clean up Docker: `docker system prune -af`
2. Rotate logs: `logrotate`
3. Monitor disk usage: `df -h`

## Getting Help

### Logs and Debugging

1. **Backend logs**: `docker-compose logs backend`
2. **Frontend logs**: `docker-compose logs frontend`
3. **All services**: `docker-compose logs -f`
4. **Container shell**: `docker exec -it container_name /bin/sh`

### Health Checks

1. **Backend health**: `curl http://localhost:8000/api/health`
2. **Frontend**: `curl http://localhost:3000`
3. **Database status**: Check logs for connection messages
4. **Docker status**: `docker-compose ps`

### Performance Monitoring

1. **Resource usage**: `docker stats`
2. **API response times**: Check X-Process-Time header
3. **Database queries**: Enable SQL logging
4. **Network latency**: Use browser dev tools

## Preventive Measures

1. **Regular backups**: Automate database backups
2. **Health monitoring**: Set up monitoring alerts
3. **Dependency updates**: Keep packages updated
4. **Security scanning**: Regular vulnerability scans
5. **Load testing**: Test under expected traffic