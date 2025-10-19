#!/bin/bash

# 🚀 Genomic Facility Website Deployment Script
# This script helps deploy the website to various platforms

set -e

echo "🧬 Genomic Facility Website Deployment Script"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}$1${NC}"
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_status "Node.js $(node -v) detected ✓"
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed."
        exit 1
    fi
    print_status "npm $(npm -v) detected ✓"
}

# Install dependencies
install_deps() {
    print_header "📦 Installing Dependencies"
    npm install
    print_status "Dependencies installed successfully ✓"
}

# Run tests and linting
run_tests() {
    print_header "🧪 Running Tests and Linting"
    
    # Run linting
    if npm run lint; then
        print_status "Linting passed ✓"
    else
        print_error "Linting failed. Please fix errors before deploying."
        exit 1
    fi
    
    # Build project
    if npm run build; then
        print_status "Build successful ✓"
    else
        print_error "Build failed. Please fix errors before deploying."
        exit 1
    fi
}

# Deploy to Vercel
deploy_vercel() {
    print_header "🚀 Deploying to Vercel"
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    print_status "Deploying to Vercel..."
    vercel --prod
    print_status "Deployed to Vercel successfully ✓"
}

# Deploy with Docker
deploy_docker() {
    print_header "🐳 Building and Deploying Docker Image"
    
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    # Build Docker image
    print_status "Building Docker image..."
    docker build -t genomic-facility:latest .
    
    # Tag with registry if provided
    if [ -n "$DOCKER_REGISTRY" ]; then
        docker tag genomic-facility:latest $DOCKER_REGISTRY/genomic-facility:latest
        print_status "Pushing to registry..."
        docker push $DOCKER_REGISTRY/genomic-facility:latest
    fi
    
    print_status "Docker deployment completed ✓"
}

# Deploy to GitHub Pages (documentation)
deploy_github_pages() {
    print_header "📚 Deploying Documentation to GitHub Pages"
    
    # Create docs directory if it doesn't exist
    mkdir -p docs
    
    # Copy documentation files
    cp README.md docs/
    cp CONTRIBUTING.md docs/
    cp DEPLOYMENT.md docs/
    cp GITHUB_SETUP.md docs/
    
    # Add and push to gh-pages branch
    git add docs/
    git commit -m "docs: Update documentation for GitHub Pages"
    git subtree push --prefix docs origin gh-pages
    
    print_status "Documentation deployed to GitHub Pages ✓"
}

# Main deployment function
main() {
    echo "Select deployment platform:"
    echo "1) Vercel (Recommended)"
    echo "2) Docker"
    echo "3) GitHub Pages (Documentation only)"
    echo "4) Local build only"
    echo "5) All platforms"
    
    read -p "Enter your choice (1-5): " choice
    
    case $choice in
        1)
            check_node
            check_npm
            install_deps
            run_tests
            deploy_vercel
            ;;
        2)
            check_node
            check_npm
            install_deps
            run_tests
            deploy_docker
            ;;
        3)
            deploy_github_pages
            ;;
        4)
            check_node
            check_npm
            install_deps
            run_tests
            print_status "Local build completed successfully ✓"
            ;;
        5)
            check_node
            check_npm
            install_deps
            run_tests
            deploy_vercel
            deploy_docker
            deploy_github_pages
            ;;
        *)
            print_error "Invalid choice. Please select 1-5."
            exit 1
            ;;
    esac
    
    print_header "🎉 Deployment Completed Successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Visit your deployed application"
    echo "2. Test all functionality"
    echo "3. Set up monitoring and analytics"
    echo "4. Configure custom domain (if applicable)"
}

# Check for help flag
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --help, -h     Show this help message"
    echo "  --vercel       Deploy to Vercel only"
    echo "  --docker       Deploy with Docker only"
    echo "  --docs         Deploy documentation to GitHub Pages only"
    echo "  --local        Local build only"
    echo ""
    echo "Environment Variables:"
    echo "  DOCKER_REGISTRY  Docker registry URL (e.g., docker.io/username)"
    echo ""
    echo "Examples:"
    echo "  $0              # Interactive deployment"
    echo "  $0 --vercel     # Deploy to Vercel only"
    echo "  DOCKER_REGISTRY=docker.io/username $0 --docker"
    exit 0
fi

# Handle command line arguments
case "$1" in
    --vercel)
        check_node
        check_npm
        install_deps
        run_tests
        deploy_vercel
        ;;
    --docker)
        check_node
        check_npm
        install_deps
        run_tests
        deploy_docker
        ;;
    --docs)
        deploy_github_pages
        ;;
    --local)
        check_node
        check_npm
        install_deps
        run_tests
        ;;
    *)
        main
        ;;
esac