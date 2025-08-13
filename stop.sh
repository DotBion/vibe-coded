#!/bin/bash

echo "🛑 Stopping Personal Website Generator..."

# Check if container exists and is running
if docker ps --format "table {{.Names}}" | grep -q "website-generator"; then
    echo "🔄 Stopping container..."
    docker stop website-generator
    echo "🗑️  Removing container..."
    docker rm website-generator
    echo "✅ Container stopped and removed successfully!"
elif docker ps -a --format "table {{.Names}}" | grep -q "website-generator"; then
    echo "🗑️  Removing stopped container..."
    docker rm website-generator
    echo "✅ Container removed successfully!"
else
    echo "ℹ️  No container found with name 'website-generator'"
fi

echo ""
echo "📋 Container status:"
docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep website-generator || echo "No website-generator container found"
