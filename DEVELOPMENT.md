# Development Guide

This guide will help you set up the development environment and contribute to the Personal Website Generator project.

## Development Setup

### Prerequisites
- Docker Desktop
- Git
- A code editor (VS Code recommended)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-website-generator
   ```

2. **Start the development environment**
   ```bash
   ./start.sh
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

4. **Start coding!**
   The application will automatically reload when you make changes to the source code.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # App header with navigation
│   ├── Hero.tsx        # Landing page hero section
│   ├── TemplateCard.tsx # Individual template display
│   ├── TemplateGrid.tsx # Template grid with search/filter
│   ├── UserInputForm.tsx # Dynamic form for user input
│   └── WebsiteGenerator.tsx # Website generation process
├── data/               # Static data
│   └── templates.ts    # Template definitions and required fields
├── types/              # TypeScript type definitions
│   └── index.ts        # App interfaces and types
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Development Workflow

### Adding New Templates

1. **Edit `src/data/templates.ts`**
   ```typescript
   {
     id: 'unique-template-id',
     name: 'Template Name',
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

2. **Add template preview image**
   Place your template preview image in the `public/templates/` directory

3. **Test the template**
   Restart the app and verify the new template appears in the grid

### Adding New Form Field Types

1. **Update types in `src/types/index.ts`**
   ```typescript
   export interface Field {
     id: string;
     label: string;
     type: 'text' | 'email' | 'textarea' | 'url' | 'select' | 'file' | 'newType';
     required: boolean;
     placeholder?: string;
     options?: string[];
     validation?: string;
   }
   ```

2. **Update the form component in `src/components/UserInputForm.tsx`**
   Add a new case in the `renderField` function to handle the new field type

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in `src/index.css`.

**Custom CSS Classes:**
```css
@layer components {
  .btn-primary {
    @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
}
```

## Testing

### Manual Testing
1. Start the development server: `./start.sh`
2. Test template selection
3. Test form validation
4. Test responsive design on different screen sizes
5. Test file uploads

### Browser Testing
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Building for Production

```bash
# Build the production version
docker run --rm -v $(pwd):/app -w /app personal-website-generator npm run build

# The built files will be in the `dist/` directory
```

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Find what's using the port
   lsof -i :3000
   
   # Kill the process or use a different port
   ```

2. **Docker container not starting**
   ```bash
   # Check Docker logs
   docker logs website-generator
   
   # Check if Docker is running
   docker info
   ```

3. **Changes not reflecting**
   ```bash
   # Restart the container
   ./stop.sh && ./start.sh
   ```

### Performance Tips

1. **Use volume mounts for development**
   The Docker setup uses volume mounts so changes are reflected immediately

2. **Optimize images**
   Use appropriate image formats and sizes for template previews

3. **Lazy loading**
   Consider implementing lazy loading for template images

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Code Style

- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

## Deployment

The application can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Build the production version and upload the `dist/` folder contents.
