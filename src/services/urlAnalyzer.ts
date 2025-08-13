import { AnalyzedWebsite, DesignData, ContentSection } from '../types';

export class UrlAnalyzerService {
  private static instance: UrlAnalyzerService;

  static getInstance(): UrlAnalyzerService {
    if (!UrlAnalyzerService.instance) {
      UrlAnalyzerService.instance = new UrlAnalyzerService();
    }
    return UrlAnalyzerService.instance;
  }

  async analyzeWebsite(url: string): Promise<AnalyzedWebsite> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const domain = this.extractDomainName(url);
    const websiteType = this.detectWebsiteType(url, domain);
    
    return {
      url,
      title: this.generateTitle(domain, websiteType),
      description: this.generateDescription(domain, websiteType),
      sections: this.generateSections(websiteType),
      designData: this.generateDesignData(websiteType, domain, url),
      contentStructure: this.generateContentStructure(websiteType)
    };
  }

  private extractDomainName(url: string): string {
    try {
      const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
      return domain.replace('www.', '').split('.')[0];
    } catch {
      return 'custom';
    }
  }

  private detectWebsiteType(url: string, domain: string): string {
    const lowerDomain = domain.toLowerCase();
    const lowerUrl = url.toLowerCase();

    // Portfolio/Personal websites
    if (lowerDomain.includes('brittany') || lowerDomain.includes('portfolio') || 
        lowerDomain.includes('personal') || lowerDomain.includes('dev') ||
        lowerDomain.includes('designer') || lowerDomain.includes('creative') ||
        lowerDomain.includes('chiang')) {
      return 'portfolio';
    }

    // Business/Company websites
    if (lowerDomain.includes('company') || lowerDomain.includes('business') || 
        lowerDomain.includes('corp') || lowerDomain.includes('inc') ||
        lowerDomain.includes('agency') || lowerDomain.includes('studio')) {
      return 'business';
    }

    // Blog/Content websites
    if (lowerDomain.includes('blog') || lowerDomain.includes('news') || 
        lowerDomain.includes('magazine') || lowerDomain.includes('media') ||
        lowerDomain.includes('content') || lowerDomain.includes('publish')) {
      return 'blog';
    }

    // E-commerce websites
    if (lowerDomain.includes('shop') || lowerDomain.includes('store') || 
        lowerDomain.includes('ecommerce') || lowerDomain.includes('market') ||
        lowerDomain.includes('buy') || lowerDomain.includes('sell')) {
      return 'ecommerce';
    }

    // SaaS/App websites
    if (lowerDomain.includes('app') || lowerDomain.includes('saas') || 
        lowerDomain.includes('platform') || lowerDomain.includes('tool') ||
        lowerDomain.includes('software') || lowerDomain.includes('service')) {
      return 'saas';
    }

    // Default to modern portfolio
    return 'modern-portfolio';
  }

  private generateTitle(domain: string, type: string): string {
    const domainName = domain.charAt(0).toUpperCase() + domain.slice(1);
    
    switch (type) {
      case 'portfolio':
        return `${domainName} Portfolio`;
      case 'business':
        return `${domainName} Business`;
      case 'blog':
        return `${domainName} Blog`;
      case 'ecommerce':
        return `${domainName} Store`;
      case 'saas':
        return `${domainName} Platform`;
      default:
        return `${domainName} Website`;
    }
  }

  private generateDescription(domain: string, type: string): string {
    const domainName = domain.charAt(0).toUpperCase() + domain.slice(1);
    
    switch (type) {
      case 'portfolio':
        return `A professional portfolio website inspired by ${domainName}, featuring modern design and smooth interactions.`;
      case 'business':
        return `A professional business website template inspired by ${domainName}, perfect for companies and agencies.`;
      case 'blog':
        return `A content-focused blog template inspired by ${domainName}, designed for writers and content creators.`;
      case 'ecommerce':
        return `An e-commerce website template inspired by ${domainName}, optimized for online stores.`;
      case 'saas':
        return `A SaaS platform template inspired by ${domainName}, perfect for software and service companies.`;
      default:
        return `A modern website template inspired by ${domainName}, featuring clean design and responsive layout.`;
    }
  }

  private generateSections(type: string): string[] {
    switch (type) {
      case 'portfolio':
        return ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      case 'business':
        return ['hero', 'about', 'services', 'team', 'testimonials', 'contact'];
      case 'blog':
        return ['header', 'hero', 'featured', 'articles', 'sidebar', 'newsletter', 'footer'];
      case 'ecommerce':
        return ['header', 'hero', 'featured-products', 'categories', 'testimonials', 'contact', 'footer'];
      case 'saas':
        return ['hero', 'features', 'pricing', 'testimonials', 'about', 'contact'];
      default:
        return ['hero', 'about', 'services', 'contact'];
    }
  }

  private generateDesignData(type: string, domain: string, url: string): DesignData {
    // Special handling for known portfolio websites
    if (domain.toLowerCase().includes('brittany') || domain.toLowerCase().includes('chiang')) {
      return this.getBrittanyChiangStyle();
    }

    const baseColors = this.getBaseColors(type);
    
    return {
      colors: {
        primary: baseColors.primary,
        secondary: baseColors.secondary,
        accent: baseColors.accent,
        background: baseColors.background,
        text: baseColors.text,
        surface: baseColors.surface
      },
      typography: this.getTypography(type),
      layout: this.getLayout(type),
      style: this.getStyle(type)
    };
  }

  private getBrittanyChiangStyle(): DesignData {
    return {
      colors: {
        primary: '#0a192f', // Dark navy background
        secondary: '#8892b0', // Light gray text
        accent: '#64ffda', // Teal accent
        background: '#0a192f', // Dark navy
        text: '#ccd6f6', // Light blue text
        surface: '#112240' // Slightly lighter navy for cards
      },
      typography: {
        headingFont: 'Inter, system-ui, sans-serif',
        bodyFont: 'Inter, system-ui, sans-serif',
        fontSize: {
          h1: '4.5rem',
          h2: '2.5rem',
          h3: '1.875rem',
          body: '1.125rem'
        }
      },
      layout: {
        type: 'portfolio',
        spacing: 'spacious',
        sections: ['hero', 'about', 'experience', 'projects', 'skills', 'contact'],
        features: ['sidebar-navigation', 'smooth-scroll', 'skill-tags', 'professional-layout']
      },
      style: {
        shadows: 'subtle',
        borders: 'none',
        animations: 'subtle'
      }
    };
  }

  private getBaseColors(type: string) {
    switch (type) {
      case 'portfolio':
        return {
          primary: '#1a1a1a',
          secondary: '#3b82f6',
          accent: '#f59e0b',
          background: '#ffffff',
          text: '#1f2937',
          surface: '#f8fafc'
        };
      case 'business':
        return {
          primary: '#2563eb',
          secondary: '#64748b',
          accent: '#10b981',
          background: '#ffffff',
          text: '#1f2937',
          surface: '#f1f5f9'
        };
      case 'blog':
        return {
          primary: '#dc2626',
          secondary: '#6b7280',
          accent: '#059669',
          background: '#ffffff',
          text: '#374151',
          surface: '#f9fafb'
        };
      case 'ecommerce':
        return {
          primary: '#7c3aed',
          secondary: '#6b7280',
          accent: '#f59e0b',
          background: '#ffffff',
          text: '#1f2937',
          surface: '#f8fafc'
        };
      case 'saas':
        return {
          primary: '#0891b2',
          secondary: '#64748b',
          accent: '#f59e0b',
          background: '#ffffff',
          text: '#0f172a',
          surface: '#f1f5f9'
        };
      default:
        return {
          primary: '#3b82f6',
          secondary: '#64748b',
          accent: '#10b981',
          background: '#ffffff',
          text: '#1f2937',
          surface: '#f8fafc'
        };
    }
  }

  private getTypography(type: string) {
    const baseFonts = {
      headingFont: 'Inter, system-ui, sans-serif',
      bodyFont: 'Inter, system-ui, sans-serif',
      fontSize: {
        h1: '3.75rem',
        h2: '2.25rem',
        h3: '1.875rem',
        body: '1.125rem'
      }
    };

    switch (type) {
      case 'portfolio':
        return {
          ...baseFonts,
          headingFont: 'Inter, system-ui, sans-serif',
          fontSize: {
            h1: '4.5rem',
            h2: '3rem',
            h3: '2rem',
            body: '1.25rem'
          }
        };
      case 'business':
        return {
          ...baseFonts,
          headingFont: 'Inter, system-ui, sans-serif',
          fontSize: {
            h1: '3.75rem',
            h2: '2.25rem',
            h3: '1.875rem',
            body: '1.125rem'
          }
        };
      default:
        return baseFonts;
    }
  }

  private getLayout(type: string) {
    switch (type) {
      case 'portfolio':
        return {
          type: 'portfolio',
          spacing: 'spacious',
          sections: ['hero', 'about', 'experience', 'projects', 'skills', 'contact'],
          features: ['sidebar-navigation', 'smooth-scroll', 'skill-tags', 'professional-layout']
        };
      case 'business':
        return {
          type: 'business',
          spacing: 'comfortable',
          sections: ['hero', 'about', 'services', 'team', 'testimonials', 'contact'],
          features: ['grid-layout', 'cards', 'testimonials', 'contact-form']
        };
      case 'blog':
        return {
          type: 'blog',
          spacing: 'comfortable',
          sections: ['header', 'hero', 'featured', 'articles', 'sidebar', 'newsletter', 'footer'],
          features: ['article-grid', 'sidebar-navigation', 'search', 'categories']
        };
      default:
        return {
          type: 'modern',
          spacing: 'comfortable',
          sections: ['hero', 'about', 'services', 'contact'],
          features: ['responsive', 'modern-design', 'clean-layout']
        };
    }
  }

  private getStyle(type: string) {
    switch (type) {
      case 'portfolio':
        return {
          shadows: 'subtle',
          borders: 'none',
          animations: 'subtle'
        };
      case 'business':
        return {
          shadows: 'subtle',
          borders: 'rounded',
          animations: 'subtle'
        };
      case 'blog':
        return {
          shadows: 'none',
          borders: 'sharp',
          animations: 'none'
        };
      default:
        return {
          shadows: 'subtle',
          borders: 'rounded',
          animations: 'subtle'
        };
    }
  }

  private generateContentStructure(type: string): ContentSection[] {
    switch (type) {
      case 'portfolio':
        return [
          {
            type: 'hero',
            title: 'Hero Section',
            content: 'Introduction and main headline',
            layout: 'full-width',
            priority: 'high'
          },
          {
            type: 'about',
            title: 'About Me',
            content: 'Personal story and background',
            layout: 'contained',
            priority: 'high'
          },
          {
            type: 'experience',
            title: 'Work Experience',
            content: 'Professional journey and achievements',
            layout: 'contained',
            priority: 'medium'
          },
          {
            type: 'portfolio',
            title: 'Projects',
            content: 'Showcase of work and projects',
            layout: 'grid',
            priority: 'high'
          },
          {
            type: 'contact',
            title: 'Get In Touch',
            content: 'Contact information and form',
            layout: 'contained',
            priority: 'medium'
          }
        ];
      case 'business':
        return [
          {
            type: 'hero',
            title: 'Hero Section',
            content: 'Company introduction and value proposition',
            layout: 'full-width',
            priority: 'high'
          },
          {
            type: 'about',
            title: 'About Us',
            content: 'Company story and mission',
            layout: 'contained',
            priority: 'high'
          },
          {
            type: 'services',
            title: 'Our Services',
            content: 'What we offer to clients',
            layout: 'grid',
            priority: 'high'
          },
          {
            type: 'team',
            title: 'Our Team',
            content: 'Meet the people behind the company',
            layout: 'grid',
            priority: 'medium'
          },
          {
            type: 'contact',
            title: 'Contact Us',
            content: 'Get in touch with our team',
            layout: 'contained',
            priority: 'medium'
          }
        ];
      default:
        return [
          {
            type: 'hero',
            title: 'Hero Section',
            content: 'Main introduction and call to action',
            layout: 'full-width',
            priority: 'high'
          },
          {
            type: 'about',
            title: 'About',
            content: 'Information about the subject',
            layout: 'contained',
            priority: 'medium'
          },
          {
            type: 'contact',
            title: 'Contact',
            content: 'How to get in touch',
            layout: 'contained',
            priority: 'medium'
          }
        ];
    }
  }
}
