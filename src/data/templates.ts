import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'portfolio-minimal',
    name: 'Minimal Portfolio',
    description: 'A clean, minimal portfolio template perfect for showcasing your work and skills.',
    category: 'Portfolio',
    previewImage: '/templates/portfolio-minimal.jpg',
    githubUrl: 'https://github.com/example/minimal-portfolio',
    demoUrl: 'https://minimal-portfolio-demo.netlify.app',
    tags: ['portfolio', 'minimal', 'clean', 'professional'],
    requiredFields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'John Doe' },
      { id: 'title', label: 'Professional Title', type: 'text', required: true, placeholder: 'Full Stack Developer' },
      { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'john@example.com' },
      { id: 'phone', label: 'Phone Number', type: 'text', required: false, placeholder: '+1 (555) 123-4567' },
      { id: 'location', label: 'Location', type: 'text', required: false, placeholder: 'San Francisco, CA' },
      { id: 'bio', label: 'Bio', type: 'textarea', required: true, placeholder: 'Tell us about yourself...' },
      { id: 'skills', label: 'Skills', type: 'textarea', required: true, placeholder: 'JavaScript, React, Node.js, Python...' },
      { id: 'github', label: 'GitHub URL', type: 'url', required: false, placeholder: 'https://github.com/username' },
      { id: 'linkedin', label: 'LinkedIn URL', type: 'url', required: false, placeholder: 'https://linkedin.com/in/username' },
      { id: 'profileImage', label: 'Profile Image', type: 'file', required: false }
    ]
  },
  {
    id: 'business-card',
    name: 'Business Card',
    description: 'A professional business card website with contact information and services.',
    category: 'Business',
    previewImage: '/templates/business-card.jpg',
    githubUrl: 'https://github.com/example/business-card',
    demoUrl: 'https://business-card-demo.netlify.app',
    tags: ['business', 'contact', 'professional', 'card'],
    requiredFields: [
      { id: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Acme Corporation' },
      { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Jane Smith' },
      { id: 'jobTitle', label: 'Job Title', type: 'text', required: true, placeholder: 'CEO' },
      { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'jane@acme.com' },
      { id: 'phone', label: 'Phone Number', type: 'text', required: true, placeholder: '+1 (555) 123-4567' },
      { id: 'address', label: 'Business Address', type: 'textarea', required: false, placeholder: '123 Business St, City, State' },
      { id: 'website', label: 'Website URL', type: 'url', required: false, placeholder: 'https://acme.com' },
      { id: 'services', label: 'Services Offered', type: 'textarea', required: true, placeholder: 'List your main services...' },
      { id: 'logo', label: 'Company Logo', type: 'file', required: false }
    ]
  },
  {
    id: 'blog-personal',
    name: 'Personal Blog',
    description: 'A beautiful personal blog template for sharing your thoughts and experiences.',
    category: 'Blog',
    previewImage: '/templates/blog-personal.jpg',
    githubUrl: 'https://github.com/example/personal-blog',
    demoUrl: 'https://personal-blog-demo.netlify.app',
    tags: ['blog', 'personal', 'writing', 'creative'],
    requiredFields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Alex Johnson' },
      { id: 'blogTitle', label: 'Blog Title', type: 'text', required: true, placeholder: 'My Personal Blog' },
      { id: 'tagline', label: 'Blog Tagline', type: 'text', required: false, placeholder: 'Sharing thoughts and experiences' },
      { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'alex@blog.com' },
      { id: 'bio', label: 'About Me', type: 'textarea', required: true, placeholder: 'Tell us about yourself and your blog...' },
      { id: 'topics', label: 'Blog Topics', type: 'textarea', required: true, placeholder: 'Technology, Travel, Food, Life...' },
      { id: 'socialTwitter', label: 'Twitter URL', type: 'url', required: false, placeholder: 'https://twitter.com/username' },
      { id: 'socialInstagram', label: 'Instagram URL', type: 'url', required: false, placeholder: 'https://instagram.com/username' },
      { id: 'profileImage', label: 'Profile Image', type: 'file', required: false }
    ]
  },
  {
    id: 'resume-cv',
    name: 'Resume/CV',
    description: 'A professional resume template that showcases your experience and qualifications.',
    category: 'Resume',
    previewImage: '/templates/resume-cv.jpg',
    githubUrl: 'https://github.com/example/resume-cv',
    demoUrl: 'https://resume-cv-demo.netlify.app',
    tags: ['resume', 'cv', 'professional', 'career'],
    requiredFields: [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Michael Brown' },
      { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'michael@email.com' },
      { id: 'phone', label: 'Phone Number', type: 'text', required: true, placeholder: '+1 (555) 123-4567' },
      { id: 'location', label: 'Location', type: 'text', required: true, placeholder: 'New York, NY' },
      { id: 'summary', label: 'Professional Summary', type: 'textarea', required: true, placeholder: 'Brief overview of your professional background...' },
      { id: 'experience', label: 'Work Experience', type: 'textarea', required: true, placeholder: 'List your work experience...' },
      { id: 'education', label: 'Education', type: 'textarea', required: true, placeholder: 'List your educational background...' },
      { id: 'skills', label: 'Skills', type: 'textarea', required: true, placeholder: 'List your key skills...' },
      { id: 'languages', label: 'Languages', type: 'textarea', required: false, placeholder: 'English (Native), Spanish (Fluent)...' },
      { id: 'profileImage', label: 'Profile Image', type: 'file', required: false }
    ]
  }
];
