import React, { useState, useEffect } from 'react';
import { ArrowLeft, Globe, Eye, Download, CheckCircle, Loader, AlertCircle, Palette, Type, Layout, Sparkles } from 'lucide-react';
import { Template, Field, AnalyzedWebsite } from '../types';
import { UrlAnalyzerService } from '../services/urlAnalyzer';

interface UrlAnalyzerProps {
  url: string;
  onBack: () => void;
  onTemplateGenerated: (template: Template) => void;
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

      const analyzerService = UrlAnalyzerService.getInstance();
      const analysis = await analyzerService.analyzeWebsite(url);
      
      setAnalyzedData(analysis);
      setAnalysisStep('generating');

      // Generate template with design data
      await generateTemplate(analysis);

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
        name: analysis.title,
        description: analysis.description,
        category: 'Custom',
        previewImage: '/templates/custom-template.jpg',
        githubUrl: '#',
        demoUrl: url,
        tags: ['custom', 'url-inspired', 'professional', analysis.designData.layout.type],
        requiredFields: generateRequiredFields(analysis.sections),
        designData: analysis.designData
      };

      setGeneratedTemplate(template);
      setAnalysisStep('complete');

    } catch (err) {
      setError('Failed to generate template. Please try again.');
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
        case 'skills':
          return { id: 'skills', label: 'Skills', type: 'text', required: false, placeholder: 'e.g., React, TypeScript, Design' };
        case 'team':
          return { id: 'team', label: 'Team Members', type: 'textarea', required: false, placeholder: 'List your team members...' };
        case 'testimonials':
          return { id: 'testimonials', label: 'Testimonials', type: 'textarea', required: false, placeholder: 'Customer testimonials...' };
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

      {/* Analysis Progress */}
      {analysisStep === 'analyzing' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <Loader className="h-16 w-16 text-primary-600 animate-spin mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Analyzing Website Structure
          </h2>
          <p className="text-gray-600 mb-6">
            We're examining the design, layout, and content structure of {url}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-primary-600 h-3 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      )}

      {/* Template Generation */}
      {analysisStep === 'generating' && analyzedData && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <Sparkles className="h-16 w-16 text-primary-600 animate-pulse mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Generating Custom Template
          </h2>
          <p className="text-gray-600 mb-6">
            Creating a personalized template based on the analysis
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-primary-600 h-3 rounded-full animate-pulse" style={{ width: '90%' }}></div>
          </div>
        </div>
      )}

      {/* Analysis Results */}
      {analysisStep === 'complete' && analyzedData && generatedTemplate && (
        <div className="space-y-6">
          {/* Template Overview */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {generatedTemplate.name}
            </h2>
            <p className="text-gray-600 mb-6">{generatedTemplate.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Globe className="h-4 w-4" />
                <span>Inspired by: {url}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Layout className="h-4 w-4" />
                <span>Type: {analyzedData.designData.layout.type}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Sparkles className="h-4 w-4" />
                <span>Style: {analyzedData.designData.style.animations}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {generatedTemplate.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Design Analysis */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Colors */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <span>Color Palette</span>
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-4 h-4 rounded border border-gray-300" 
                      style={{ backgroundColor: analyzedData.designData.colors.primary }}
                    ></div>
                    <span className="text-sm text-gray-600">Primary: {analyzedData.designData.colors.primary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-4 h-4 rounded border border-gray-300" 
                      style={{ backgroundColor: analyzedData.designData.colors.secondary }}
                    ></div>
                    <span className="text-sm text-gray-600">Secondary: {analyzedData.designData.colors.secondary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-4 h-4 rounded border border-gray-300" 
                      style={{ backgroundColor: analyzedData.designData.colors.accent }}
                    ></div>
                    <span className="text-sm text-gray-600">Accent: {analyzedData.designData.colors.accent}</span>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Type className="h-4 w-4" />
                  <span>Typography</span>
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Heading: {analyzedData.designData.typography.headingFont}</p>
                  <p>Body: {analyzedData.designData.typography.bodyFont}</p>
                  <p>H1 Size: {analyzedData.designData.typography.fontSize.h1}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Website Sections</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {analyzedData.sections.map((section, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-center text-sm font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleUseTemplate}
              className="btn-primary flex-1 flex items-center justify-center space-x-2"
            >
              <Eye className="h-5 w-5" />
              <span>Use This Template</span>
            </button>
            <button
              onClick={onBack}
              className="btn-secondary flex-1 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Analyze Different URL</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlAnalyzer;
