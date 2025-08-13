export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  previewImage: string;
  githubUrl: string;
  demoUrl: string;
  tags: string[];
  requiredFields: Field[];
  designData?: DesignData; // New field for dynamic design
}

export interface Field {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'url' | 'select' | 'file';
  required: boolean;
  placeholder: string;
  options?: string[];
}

export interface UserData {
  [key: string]: string | string[] | File | undefined;
}

export interface GeneratedWebsite {
  template: Template;
  userData: UserData;
  html: string;
  css: string;
  js: string;
}

// New interfaces for dynamic design
export interface DesignData {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    surface: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
    };
  };
  layout: {
    type: 'minimal' | 'modern' | 'creative' | 'professional' | 'portfolio' | 'blog' | 'business';
    spacing: 'compact' | 'comfortable' | 'spacious';
    sections: string[];
    features: string[];
  };
  style: {
    shadows: 'none' | 'subtle' | 'prominent';
    borders: 'none' | 'rounded' | 'sharp';
    animations: 'none' | 'subtle' | 'prominent';
  };
}

export interface AnalyzedWebsite {
  url: string;
  title: string;
  description: string;
  sections: string[];
  designData: DesignData;
  contentStructure: ContentSection[];
}

export interface ContentSection {
  type: 'hero' | 'about' | 'services' | 'portfolio' | 'contact' | 'blog' | 'team' | 'testimonials';
  title: string;
  content: string;
  layout: 'full-width' | 'contained' | 'grid' | 'split';
  priority: 'high' | 'medium' | 'low';
}
