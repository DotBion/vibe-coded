# Personal Website Generator

A modern web application that allows users to create personalized websites by selecting from professional templates and filling in their personal details. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Templates**: Choose from a variety of professional website templates
- ✨ **Easy Customization**: Fill in forms with your personal information
- 🚀 **Instant Generation**: Get your website files ready to deploy in minutes
- 📱 **Responsive Design**: Works perfectly on all devices
- 🔍 **Smart Search**: Find templates by category, tags, or search terms
- 📁 **File Upload**: Support for profile images and logos
- 💾 **Download Ready**: Get your generated website as downloadable files

## Template Categories

- **Portfolio**: Showcase your work and skills
- **Business Card**: Professional contact information and services
- **Personal Blog**: Share your thoughts and experiences
- **Resume/CV**: Display your professional background

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Docker Desktop installed and running
- Git (for cloning the repository)
- Node.js 16+ (for local development)

### Quick Start with Docker

1. Clone the repository:
```bash
git clone https://github.com/your-username/personal-website-generator.git
cd personal-website-generator
```

2. Start the application:
```bash
./start.sh
```

3. Open your browser and navigate to `http://localhost:3000`

4. To stop the application:
```bash
./stop.sh
```

### Manual Docker Commands

If you prefer to run Docker commands manually:

```bash
# Build the image
docker build -t personal-website-generator .

# Run the container
docker run -d -p 3000:3000 -v $(pwd):/app -v /app/node_modules --name website-generator personal-website-generator

# View logs
docker logs -f website-generator

# Stop the container
docker stop website-generator

# Remove the container
docker rm website-generator
```

### Local Development (Alternative)

If you prefer to run locally without Docker:

1. Install Node.js 16+ and npm
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
# Build the production version
./build.sh

# The built files will be in the `dist/` directory
```

### Deploy to Vercel

#### Quick Deploy
```bash
# Deploy directly to Vercel
./deploy-vercel.sh
```

#### Manual Deploy
1. **Build the project:**
   ```bash
   ./build.sh
   ```

2. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

#### GitHub Integration (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Enable automatic deployments
4. Your app will deploy on every push to main

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # App header
│   ├── Hero.tsx        # Landing page hero section
│   ├── TemplateCard.tsx # Individual template display
│   ├── TemplateGrid.tsx # Template grid with search/filter
│   ├── UserInputForm.tsx # Dynamic form for user input
│   └── WebsiteGenerator.tsx # Website generation process
├── data/               # Static data
│   └── templates.ts    # Template definitions
├── types/              # TypeScript type definitions
│   └── index.ts        # App interfaces
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## How It Works

1. **Template Selection**: Users browse and select from available website templates
2. **Data Input**: Users fill out forms with their personal information
3. **Generation**: The app processes the template with user data
4. **Download**: Users receive their personalized website files

## Customization

### Adding New Templates

To add a new template, edit `src/data/templates.ts`:

```typescript
{
  id: 'your-template',
  name: 'Your Template Name',
  description: 'Template description',
  category: 'Category',
  previewImage: '/path/to/image.jpg',
  githubUrl: 'https://github.com/...',
  demoUrl: 'https://demo-url.com',
  tags: ['tag1', 'tag2'],
  requiredFields: [
    {
      id: 'fieldName',
      label: 'Field Label',
      type: 'text', // text, email, textarea, url, select, file
      required: true,
      placeholder: 'Placeholder text'
    }
  ]
}
```

### Styling

The app uses Tailwind CSS for styling. Custom styles can be added in `src/index.css`.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Enhancements

- [ ] Backend API for actual website generation
- [ ] More template categories
- [ ] Advanced customization options
- [ ] User accounts and saved websites
- [ ] Template marketplace
- [ ] SEO optimization tools
- [ ] Analytics integration
- [ ] Multi-language support

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using React and TypeScript
