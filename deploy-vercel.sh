#!/bin/bash

echo "🚀 Deploying Personal Website Generator to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log in to Vercel..."
    vercel login
fi

# Build the project
echo "🔨 Building project..."
./build.sh

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Cannot deploy."
    exit 1
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your app should now be live on Vercel!"
echo ""
echo "📋 Next steps:"
echo "   1. Check your Vercel dashboard"
echo "   2. Configure custom domain (optional)"
echo "   3. Set up environment variables if needed"
