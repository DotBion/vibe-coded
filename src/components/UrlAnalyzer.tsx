import React, { useState, useEffect } from 'react';
import { ArrowLeft, Globe, Eye, Download, CheckCircle, Loader, AlertCircle } from 'lucide-react';
import { Template, Field } from '../types';

interface UrlAnalyzerProps {
  url: string;
  onBack: () => void;
  onTemplateGenerated: (template: Template) => void;
}

interface AnalyzedWebsite {
  title: string;
  description: string;
  sections: string[];
  style: {
    colors: string[];
    layout: string;
    typography: string;
  };
}

const UrlAnalyzer: React.FC<UrlAnalyzerProps> = ({ url, onBack, onTemplateGenerated }) => {
  const [analysisStep, setAnalysisStep] = useState<'analyzing' | 'generating' | 'complete'>('analyzing');
  const [analyzedData, setAnalyzedData] = useState<AnalyzedWebsite | null>(null);
  const [generatedTemplate, setGeneratedTemplate] = useState<Template | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    analyzeWebsite();
  }, [url]);

  const analyzeWebsite = async () => {
    try {
      setAnalysisStep('analyzing');
      setError(null);

      // Simulate website analysis (in a real app, this would call an API)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock analysis results based on the URL
      const mockAnalysis: AnalyzedWebsite = {
        title: extractDomainName(url),
        description: `A professional website template inspired by ${extractDomainName(url)}`,
        sections: generateSectionsFromUrl(url),
        style: generateStyleFromUrl(url)
      };

      setAnalyzedData(mockAnalysis);
      setAnalysisStep('generating');

      // Generate template
      await generateTemplate(mockAnalysis);

    } catch (err) {
      setError('Failed to analyze website. Please try again.');
    }
  };

  const generateTemplate = async (analysis: AnalyzedWebsite) => {
    try {
      // Simulate template generation
      await new Promise(resolve => setTimeout(resolve, 2000));

      const template: Template = {
        id: `url-template-${Date.now()}`,
        name: `${analysis.title} Template`,
        description: analysis.description,
        category: 'Custom',
        previewImage: '/templates/custom-template.jpg',
        githubUrl: '#',
        demoUrl: url,
        tags: ['custom', 'url-inspired', 'professional'],
        requiredFields: generateRequiredFields(analysis.sections)
      };

      setGeneratedTemplate(template);
      setAnalysisStep('complete');

    } catch (err) {
      setError('Failed to generate template. Please try again.');
    }
  };

  const extractDomainName = (url: string): string => {
    try {
      const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
      return domain.replace('www.', '').split('.')[0];
    } catch {
      return 'Custom';
    }
  };

  const generateSectionsFromUrl = (url: string): string[] => {
    const domain = extractDomainName(url).toLowerCase();
    
    // Customize sections based on common website patterns
    if (domain.includes('portfolio') || domain.includes('brittany')) {
      return ['hero', 'about', 'experience', 'projects', 'contact'];
    } else if (domain.includes('blog') || domain.includes('news')) {
      return ['header', 'featured', 'articles', 'sidebar', 'footer'];
    } else if (domain.includes('business') || domain.includes('company')) {
      return ['hero', 'services', 'about', 'team', 'contact'];
    } else {
      return ['hero', 'about', 'services', 'contact'];
    }
  };

  const generateStyleFromUrl = (url: string) => {
    const domain = extractDomainName(url).toLowerCase();
    
    if (domain.includes('brittany') || domain.includes('portfolio')) {
      return {
        colors: ['#1a1a1a', '#ffffff', '#3b82f6', '#64748b'],
        layout: 'modern-minimal',
        typography: 'clean-serif'
      };
    } else if (domain.includes('creative') || domain.includes('design')) {
      return {
        colors: ['#f59e0b', '#ffffff', '#1f2937', '#10b981'],
        layout: 'creative-grid',
        typography: 'modern-display'
      };
    } else {
      return {
        colors: ['#3b82f6', '#ffffff', '#1f2937', '#6b7280'],
        layout: 'professional-standard',
        typography: 'professional-serif'
      };
    }
  };

  const generateRequiredFields = (sections: string[]): Field[] => {
    const baseFields: Field[] = [
      { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Your Full Name' },
      { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'your.email@example.com' }
    ];

    const sectionFields: Field[] = sections.map(section => {
      switch (section.toLowerCase()) {
        case 'hero':
          return { id: 'heroTitle', label: 'Hero Title', type: 'text', required: true, placeholder: 'Your main headline' };
        case 'about':
          return { id: 'bio', label: 'About Me', type: 'textarea', required: true, placeholder: 'Tell us about yourself...' };
        case 'experience':
          return { id: 'experience', label: 'Work Experience', type: 'textarea', required: true, placeholder: 'List your work experience...' };
        case 'projects':
          return { id: 'projects', label: 'Projects', type: 'textarea', required: true, placeholder: 'Describe your projects...' };
        case 'services':
          return { id: 'services', label: 'Services', type: 'textarea', required: true, placeholder: 'List your services...' };
        case 'contact':
          return { id: 'phone', label: 'Phone Number', type: 'text', required: false, placeholder: '+1 (555) 123-4567' };
        default:
          return { id: section.toLowerCase(), label: section.charAt(0).toUpperCase() + section.slice(1), type: 'text', required: false, placeholder: `Enter ${section}` };
      }
    });

    return [...baseFields, ...sectionFields];
  };

  const handleUseTemplate = () => {
    if (generatedTemplate) {
      onTemplateGenerated(generatedTemplate);
    }
  };

  if (error) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-red-500 mb-6">
          <AlertCircle className="h-16 w-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Analysis Failed
        </h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button onClick={onBack} className="btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="btn-secondary inline-flex items-center space-x-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Analyzing Website Template
        </h1>
        <p className="text-gray-600">
          We're analyzing <span className="font-mono text-primary-600">{url}</span> to create a custom template for you.
        </p>
      </div>

      {analysisStep === 'analyzing' && (
        <div className="text-center py-12">
          <Loader className="h-16 w-16 text-primary-600 mx-auto mb-6 animate-spin" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Analyzing Website Structure
          </h2>
          <p className="text-gray-600 mb-6">
            We're examining the layout, sections, and design patterns of the website.
          </p>
          <div className="analysis-progress max-w-md mx-auto">
            <div className="analysis-progress-bar animate-pulse" style={{ width: '40%' }}></div>
          </div>
        </div>
      )}

      {analysisStep === 'generating' && analyzedData && (
        <div className="text-center py-12">
          <Loader className="h-16 w-16 text-primary-600 mx-auto mb-6 animate-spin" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Generating Custom Template
          </h2>
          <p className="text-gray-600 mb-6">
            Creating a personalized template based on our analysis.
          </p>
          <div className="analysis-progress max-w-md mx-auto">
            <div className="analysis-progress-bar animate-pulse" style={{ width: '80%' }}></div>
          </div>
        </div>
      )}

      {analysisStep === 'complete' && generatedTemplate && (
        <div className="space-y-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Template Generated Successfully!
            </h2>
            <p className="text-gray-600">
              We've created a custom template inspired by {extractDomainName(url)}.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Template Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Template Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{generatedTemplate.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{generatedTemplate.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sections:</span>
                    <span className="font-medium">{generateSectionsFromUrl(url).length}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Required Fields</h4>
                <div className="text-sm text-gray-600">
                  {generatedTemplate.requiredFields.length} fields to customize
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleUseTemplate}
              className="btn-primary flex items-center justify-center space-x-2 px-8 py-3"
            >
              <Globe className="h-5 w-5" />
              <span>Use This Template</span>
            </button>
            <button
              onClick={onBack}
              className="btn-secondary px-8 py-3"
            >
              Generate Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlAnalyzer;
