#!/bin/bash

echo "🚀 Building Personal Website Generator for production..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

# Build the production version
echo "🔨 Building production build..."
docker run --rm -v $(pwd):/app -v /app/node_modules -w /app personal-website-generator npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful! Production files are in the 'dist' directory."
    echo ""
    echo "📁 Files ready for deployment:"
    ls -la dist/
    echo ""
    echo "🌐 To deploy to Vercel:"
    echo "   1. Push your code to GitHub"
    echo "   2. Connect your repository to Vercel"
    echo "   3. Deploy automatically!"
    echo ""
    echo "📋 Or deploy manually:"
    echo "   vercel --prod"
else
    echo "❌ Build failed. Check the error messages above."
    exit 1
fi
