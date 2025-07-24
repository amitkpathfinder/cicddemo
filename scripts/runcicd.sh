#!/bin/bash
set -e

echo "\n🔁 Pulling latest changes..."
git pull origin main

echo "\n📦 Building client..."
cd ../client && npm install && npm run build

echo "\n🔧 Testing server..."
cd ../server && npm install && npm test

echo "\n🚀 Restarting server..."
pm2 restart server || pm2 start index.js --name server

echo "\n✅ Local CI/CD complete."
