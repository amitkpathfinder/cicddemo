#!/bin/bash
set -e

echo "🚀 Starting application..."

# Shut down existing containers and volumes
echo "🧹 Cleaning up existing Docker containers and volumes..."
docker-compose down -v

# Rebuild and restart containers
echo "🔧 Rebuilding and starting containers..."
docker-compose up --build -d

echo "✅ Application containers started."
echo "➡️ Use 'docker-compose logs -f' to see the logs."
