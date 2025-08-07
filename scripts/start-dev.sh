#!/bin/bash

# Maurice Williams Website - Development Start Script
set -e

echo "🚀 Starting Maurice Williams Website..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Function to start backend
start_backend() {
    echo -e "${BLUE}Starting Backend API...${NC}"
    cd backend
    
    # Create virtual environment if it doesn't exist
    if [ ! -d "venv" ]; then
        echo "Creating Python virtual environment..."
        python3 -m venv venv
    fi
    
    # Activate virtual environment and install dependencies
    source venv/bin/activate
    pip install -r requirements.txt > /dev/null 2>&1
    
    # Run migrations
    echo "Running database migrations..."
    alembic upgrade head
    
    # Start server
    echo -e "${GREEN}✅ Backend starting on http://localhost:8000${NC}"
    uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &
    BACKEND_PID=$!
    
    cd ..
    echo $BACKEND_PID > .backend_pid
}

# Function to start frontend
start_frontend() {
    echo -e "${BLUE}Starting Frontend...${NC}"
    cd frontend
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
        echo "Installing frontend dependencies..."
        npm install
    fi
    
    # Start development server
    echo -e "${GREEN}✅ Frontend starting on http://localhost:3000${NC}"
    npm run dev &
    FRONTEND_PID=$!
    
    cd ..
    echo $FRONTEND_PID > .frontend_pid
}

# Start services
start_backend
sleep 3
start_frontend

# Wait a moment for servers to start
sleep 5

# Test if services are running
echo -e "${BLUE}Testing services...${NC}"

if curl -s http://localhost:8000/api/health > /dev/null; then
    echo -e "${GREEN}✅ Backend API is running${NC}"
else
    echo -e "❌ Backend API failed to start"
fi

if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✅ Frontend is running${NC}"
else
    echo -e "❌ Frontend failed to start"
fi

echo ""
echo "🌟 Maurice Williams Website is running!"
echo ""
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend API: http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/api/docs"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Wait for user interrupt
trap 'kill $(cat .backend_pid .frontend_pid 2>/dev/null) 2>/dev/null; rm -f .backend_pid .frontend_pid; echo ""; echo "🛑 Services stopped"; exit 0' INT

# Keep script running
wait