import React, { useState } from 'react';
import { ArrowRight, Sparkles, Globe, Zap, Link, Search } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onViewTemplates: () => void;
  onAnalyzeUrl: (url: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, onViewTemplates, onAnalyzeUrl }) => {
  const [urlInput, setUrlInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyzeUrl = async () => {
    if (!urlInput.trim()) return;
    
    setIsAnalyzing(true);
    try {
      // Validate URL format
      const url = new URL(urlInput.startsWith('http') ? urlInput : `https://${urlInput}`);
      onAnalyzeUrl(url.href);
    } catch (error) {
      alert('Please enter a valid URL');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyzeUrl();
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">
              Create your personal website in minutes
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your Personal Website
            <span className="text-primary-600 block">Without Coding</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Choose from beautiful, professional templates and customize them with your personal information. 
            Get a fully functional website ready to deploy in minutes.
          </p>

          {/* URL Analysis Section */}
          <div className="url-input-section mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <Link className="h-5 w-5 text-primary-600" />
              <span>Or analyze any website as a template</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Enter a website URL and we'll analyze it to create a similar template for you
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g., brittanychiang.com"
                  className="url-input-field"
                />
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={handleAnalyzeUrl}
                disabled={isAnalyzing || !urlInput.trim()}
                className="btn-primary px-6 py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    <span>Analyze</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Examples: brittanychiang.com, dribbble.com, behance.net
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={onGetStarted}
              className="btn-primary text-lg px-8 py-3 inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={onViewTemplates}
              className="btn-secondary text-lg px-8 py-3"
            >
              View Templates
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Template</h3>
              <p className="text-gray-600">Browse our collection of professional website templates</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customize</h3>
              <p className="text-gray-600">Fill in your details and customize the design</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
                <Sparkles className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download</h3>
              <p className="text-gray-600">Get your website files ready to deploy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
