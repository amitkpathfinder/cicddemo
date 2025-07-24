#!/bin/bash
set -e

echo "🚀 Starting CI/CD pipeline..."

# Pull latest code (if you're tracking main branch)
echo "📥 Pulling latest changes..."
git pull origin main

# Shut down existing containers and volumes
echo "🧹 Cleaning up existing Docker containers and volumes..."
docker-compose down -v

# Rebuild and restart containers
echo "🔧 Rebuilding and starting containers..."
docker-compose up --build -d

# Wait for backend to start
echo "⏳ Waiting for backend to become healthy..."
until curl -s http://localhost:5000/api/users; do
  echo "⌛ Backend not ready yet. Retrying in 3 seconds..."
  sleep 3
done

echo "✅ Backend is up and running!"

# Optional: Run a test request to verify
echo "🔎 Testing user endpoint..."
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'

echo -e "\n🎉 CI/CD pipeline completed successfully."

