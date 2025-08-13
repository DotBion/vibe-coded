import React, { useState } from 'react';
import { Download, Eye, Share2, CheckCircle, Loader, X } from 'lucide-react';
import { Template, UserData } from '../types';
import WebsitePreview from './WebsitePreview';

interface WebsiteGeneratorProps {
  template: Template;
  userData: UserData;
  onBack: () => void;
}

const WebsiteGenerator: React.FC<WebsiteGeneratorProps> = ({ template, userData, onBack }) => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [generatedWebsite, setGeneratedWebsite] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  React.useEffect(() => {
    // Simulate website generation process
    const generateWebsite = async () => {
      try {
        setIsGenerating(true);
        setError(null);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Generate website data (in a real app, this would call an API)
        const website = {
          id: `website-${Date.now()}`,
          templateId: template.id,
          userData,
          generatedAt: new Date(),
          downloadUrl: '#',
          previewUrl: '#'
        };
        
        setGeneratedWebsite(website);
      } catch (err) {
        setError('Failed to generate website. Please try again.');
      } finally {
        setIsGenerating(false);
      }
    };

    generateWebsite();
  }, [template, userData]);

  const handleDownload = () => {
    // In a real app, this would trigger a download
    alert('Download functionality would be implemented here');
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleShare = () => {
    // In a real app, this would share the website
    alert('Share functionality would be implemented here');
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  if (isGenerating) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <Loader className="h-16 w-16 text-primary-600 mx-auto mb-6 animate-spin" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Generating Your Website
        </h2>
        <p className="text-gray-600 mb-6">
          We're creating your personalized {template.name} website. This may take a few moments.
        </p>
        <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
          <div className="bg-primary-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-red-500 mb-6">
          <X className="h-16 w-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Generation Failed
        </h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button onClick={onBack} className="btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Website Generated Successfully!
          </h2>
          <p className="text-gray-600">
            Your personalized {template.name} website is ready.
          </p>
        </div>

        <div className="card mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Template:</span>
              <span className="font-medium">{template.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Generated:</span>
              <span className="font-medium">
                {generatedWebsite.generatedAt.toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ID:</span>
              <span className="font-medium font-mono text-xs">{generatedWebsite.id}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <button
            onClick={handleDownload}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
          
          <button
            onClick={handlePreview}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>Preview</span>
          </button>
          
          <button
            onClick={handleShare}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>

        <div className="text-center">
          <button onClick={onBack} className="btn-secondary">
            Generate Another Website
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">What's Next?</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Download your website files</li>
            <li>• Upload to your web hosting service</li>
            <li>• Customize further if needed</li>
            <li>• Share with friends and colleagues</li>
          </ul>
        </div>
      </div>

      {/* Website Preview Modal */}
      <WebsitePreview
        template={template}
        userData={userData}
        isOpen={isPreviewOpen}
        onClose={closePreview}
      />
    </>
  );
};

export default WebsiteGenerator;
