#!/bin/bash

# Maurice Williams Website - Stop Development Services
echo "🛑 Stopping Maurice Williams Website services..."

# Kill backend and frontend processes
pkill -f "uvicorn app.main:app" 2>/dev/null || true
pkill -f "npm run dev" 2>/dev/null || true
pkill -f "vite" 2>/dev/null || true

# Clean up PID files
rm -f .backend_pid .frontend_pid 2>/dev/null || true

echo "✅ All services stopped"