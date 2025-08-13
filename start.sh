#!/bin/bash

echo "🚀 Starting Personal Website Generator..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

# Stop and remove existing container if it exists
if docker ps -a --format "table {{.Names}}" | grep -q "website-generator"; then
    echo "🔄 Stopping existing container..."
    docker stop website-generator > /dev/null 2>&1
    docker rm website-generator > /dev/null 2>&1
fi

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t personal-website-generator . > /dev/null 2>&1

# Run the container
echo "🐳 Starting container..."
docker run -d -p 3000:3000 -v $(pwd):/app -v /app/node_modules --name website-generator personal-website-generator > /dev/null 2>&1

# Wait a moment for the app to start
echo "⏳ Waiting for app to start..."
sleep 5

# Check if container is running
if docker ps --format "table {{.Names}}" | grep -q "website-generator"; then
    echo "✅ Personal Website Generator is now running!"
    echo "🌐 Open your browser and go to: http://localhost:3000"
    echo ""
    echo "📋 Useful commands:"
    echo "  View logs: docker logs -f website-generator"
    echo "  Stop app:  docker stop website-generator"
    echo "  Restart:   docker restart website-generator"
else
    echo "❌ Failed to start the container. Check logs with: docker logs website-generator"
    exit 1
fi
