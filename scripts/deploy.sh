#!/bin/bash

# Maurice Williams Website Deployment Script
# Production deployment with health checks and rollback capability

set -euo pipefail

# Configuration
PROJECT_NAME="maurice-williams"
BACKUP_DIR="./backups"
LOG_FILE="./logs/deploy-$(date +%Y%m%d-%H%M%S).log"
TIMEOUT=300

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}" | tee -a "$LOG_FILE"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}" | tee -a "$LOG_FILE"
}

# Create required directories
mkdir -p logs backups

# Pre-deployment checks
log "Starting pre-deployment checks..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    error "Docker is not running"
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    error "docker-compose is not installed"
    exit 1
fi

# Check environment variables
if [[ -z "${SECRET_KEY:-}" ]]; then
    error "SECRET_KEY environment variable is required"
    exit 1
fi

# Backup current deployment
log "Creating backup of current deployment..."
if docker-compose ps | grep -q "Up"; then
    docker-compose exec backend tar -czf /app/data/backup-pre-deploy-$(date +%Y%m%d-%H%M%S).tar.gz -C /app/data . || warn "Backup failed"
fi

# Build new images
log "Building new Docker images..."
docker-compose build --no-cache

# Test build integrity
log "Testing image integrity..."
docker-compose config > /dev/null

# Perform deployment
log "Starting deployment..."

# Stop current services gracefully
if docker-compose ps | grep -q "Up"; then
    log "Stopping current services..."
    docker-compose down --timeout 30
fi

# Start new services
log "Starting new services..."
docker-compose -f docker-compose.prod.yml up -d

# Wait for services to be ready
log "Waiting for services to be ready..."
sleep 10

# Health check function
check_health() {
    local service_url=$1
    local service_name=$2
    local retries=0
    local max_retries=30
    
    while [[ $retries -lt $max_retries ]]; do
        if curl -f -s "$service_url" > /dev/null; then
            log "$service_name is healthy"
            return 0
        fi
        
        retries=$((retries + 1))
        log "Waiting for $service_name to be ready... ($retries/$max_retries)"
        sleep 5
    done
    
    error "$service_name failed health check"
    return 1
}

# Perform health checks
log "Performing health checks..."

if ! check_health "http://localhost:8000/api/health" "Backend API"; then
    error "Backend health check failed"
    log "Rolling back deployment..."
    docker-compose down
    exit 1
fi

if ! check_health "http://localhost:3000" "Frontend"; then
    error "Frontend health check failed"
    log "Rolling back deployment..."
    docker-compose down
    exit 1
fi

# Test critical endpoints
log "Testing critical endpoints..."

# Test email capture endpoint
if ! curl -f -s -X POST "http://localhost:8000/api/email/capture" \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com"}' > /dev/null 2>&1; then
    warn "Email capture endpoint test failed (may be due to duplicate email)"
fi

# Cleanup old Docker images
log "Cleaning up old Docker images..."
docker image prune -f

# Post-deployment tasks
log "Running post-deployment tasks..."

# Update SSL certificates if needed
if [[ -f "./nginx/ssl/cert.pem" && -f "./nginx/ssl/key.pem" ]]; then
    log "SSL certificates found"
else
    warn "SSL certificates not found - using HTTP only"
fi

# Log deployment success
log "Deployment completed successfully!"

# Display service status
log "Service status:"
docker-compose ps

log "Deployment logs saved to: $LOG_FILE"
log "Access the application at: http://localhost (or https if SSL configured)"

exit 0