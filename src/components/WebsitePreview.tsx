import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';
import { Template, UserData } from '../types';

interface WebsitePreviewProps {
  template: Template;
  userData: UserData;
  isOpen: boolean;
  onClose: () => void;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ template, userData, isOpen, onClose }) => {
  if (!isOpen) return null;

  const renderWebsiteContent = () => {
    // Check if this is a URL-analyzed template
    if (template.id.startsWith('url-template-') && template.designData) {
      return renderDynamicWebsite(template, userData);
    }

    // Fall back to predefined templates
    switch (template.id) {
      case 'portfolio-minimal':
        return renderPortfolioMinimal(userData);
      case 'business-card':
        return renderBusinessCard(userData);
      case 'blog-personal':
        return renderBlogPersonal(userData);
      case 'resume-cv':
        return renderResumeCV(userData);
      default:
        return renderDefaultWebsite(userData);
    }
  };

  const renderDynamicWebsite = (template: Template, userData: UserData) => {
    const design = template.designData!;
    
    return (
      <div 
        className="min-h-screen"
        style={{ 
          backgroundColor: design.colors.background,
          color: design.colors.text,
          fontFamily: design.typography.bodyFont
        }}
      >
        {/* Header */}
        <header 
          className="py-16"
          style={{ backgroundColor: design.colors.primary }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 
              className="font-bold mb-4"
              style={{ 
                fontSize: design.typography.fontSize.h1,
                fontFamily: design.typography.headingFont,
                color: design.colors.background
              }}
            >
              {userData.heroTitle || userData.fullName || 'Your Name'}
            </h1>
            <p 
              className="text-xl mb-2"
              style={{ color: design.colors.surface }}
            >
              {userData.title || 'Professional Title'}
            </p>
            {userData.location && (
              <p 
                className="text-lg"
                style={{ color: design.colors.surface }}
              >
                {userData.location}
              </p>
            )}
          </div>
        </header>

        {/* About Section */}
        {userData.bio && (
          <section 
            className="py-16"
            style={{ backgroundColor: design.colors.surface }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <h2 
                className="text-3xl font-bold mb-8 text-center"
                style={{ 
                  fontSize: design.typography.fontSize.h2,
                  fontFamily: design.typography.headingFont,
                  color: design.colors.primary
                }}
              >
                About Me
              </h2>
              <div 
                className="rounded-lg p-8"
                style={{ 
                  backgroundColor: design.colors.background,
                  boxShadow: design.style.shadows === 'none' ? 'none' : 
                             design.style.shadows === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' : 
                             '0 10px 25px rgba(0,0,0,0.15)'
                }}
              >
                <p 
                  className="text-lg leading-relaxed"
                  style={{ fontSize: design.typography.fontSize.body }}
                >
                  {userData.bio}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {userData.experience && (
          <section 
            className="py-16"
            style={{ backgroundColor: design.colors.background }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <h2 
                className="text-3xl font-bold mb-8 text-center"
                style={{ 
                  fontSize: design.typography.fontSize.h2,
                  fontFamily: design.typography.headingFont,
                  color: design.colors.primary
                }}
              >
                Experience
              </h2>
              <div 
                className="rounded-lg p-8"
                style={{ 
                  backgroundColor: design.colors.surface,
                  boxShadow: design.style.shadows === 'none' ? 'none' : 
                             design.style.shadows === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' : 
                             '0 10px 25px rgba(0,0,0,0.15)'
                }}
              >
                <p 
                  className="text-lg leading-relaxed"
                  style={{ fontSize: design.typography.fontSize.body }}
                >
                  {userData.experience}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {userData.projects && (
          <section 
            className="py-16"
            style={{ backgroundColor: design.colors.surface }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <h2 
                className="text-3xl font-bold mb-8 text-center"
                style={{ 
                  fontSize: design.typography.fontSize.h2,
                  fontFamily: design.typography.headingFont,
                  color: design.colors.primary
                }}
              >
                Projects
              </h2>
              <div 
                className="rounded-lg p-8"
                style={{ 
                  backgroundColor: design.colors.background,
                  boxShadow: design.style.shadows === 'none' ? 'none' : 
                             design.style.shadows === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' : 
                             '0 10px 25px rgba(0,0,0,0.15)'
                }}
              >
                <p 
                  className="text-lg leading-relaxed"
                  style={{ fontSize: design.typography.fontSize.body }}
                >
                  {userData.projects}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {userData.services && (
          <section 
            className="py-16"
            style={{ backgroundColor: design.colors.background }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <h2 
                className="text-3xl font-bold mb-8 text-center"
                style={{ 
                  fontSize: design.typography.fontSize.h2,
                  fontFamily: design.typography.headingFont,
                  color: design.colors.primary
                }}
              >
                Services
              </h2>
              <div 
                className="rounded-lg p-8"
                style={{ 
                  backgroundColor: design.colors.surface,
                  boxShadow: design.style.shadows === 'none' ? 'none' : 
                             design.style.shadows === 'subtle' ? '0 1px 3px rgba(0,0,0,0.1)' : 
                             '0 10px 25px rgba(0,0,0,0.15)'
                }}
              >
                <p 
                  className="text-lg leading-relaxed"
                  style={{ fontSize: design.typography.fontSize.body }}
                >
                  {userData.services}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {userData.skills && (
          <section 
            className="py-16"
            style={{ backgroundColor: design.colors.surface }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <h2 
                className="text-3xl font-bold mb-8 text-center"
                style={{ 
                  fontSize: design.typography.fontSize.h2,
                  fontFamily: design.typography.headingFont,
                  color: design.colors.primary
                }}
              >
                Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(userData.skills as string)?.split(',').map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-2 rounded-lg text-center font-medium"
                    style={{ 
                      backgroundColor: design.colors.accent,
                      color: design.colors.background
                    }}
                  >
                    {skill.trim()}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section 
          className="py-16"
          style={{ backgroundColor: design.colors.primary }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ 
                fontSize: design.typography.fontSize.h2,
                fontFamily: design.typography.headingFont,
                color: design.colors.background
              }}
            >
              Get In Touch
            </h2>
            <div className="space-y-4">
              <p 
                className="text-xl"
                style={{ color: design.colors.surface }}
              >
                {userData.email || 'your.email@example.com'}
              </p>
              {userData.phone && (
                <p 
                  className="text-xl"
                  style={{ color: design.colors.surface }}
                >
                  {userData.phone}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Keep the existing template renderers as fallbacks
  const renderPortfolioMinimal = (userData: UserData) => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">{userData.fullName || 'Your Name'}</h1>
          <p className="text-xl text-gray-300">{userData.title || 'Professional Title'}</p>
          <p className="text-gray-400 mt-2">{userData.location || 'Location'}</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              {userData.bio || 'Your bio will appear here...'}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(userData.skills as string)?.split(',').map((skill, index) => (
              <div key={index} className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg text-center">
                {skill.trim()}
              </div>
            )) || (
              <div className="col-span-full text-center text-gray-500">Skills will appear here...</div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-4">
            <p className="text-xl">{userData.email || 'your.email@example.com'}</p>
            {userData.phone && <p className="text-xl">{userData.phone}</p>}
            <div className="flex justify-center space-x-6 mt-8">
              {userData.github && (
                <a href={userData.github as string} className="text-blue-400 hover:text-blue-300">
                  GitHub
                </a>
              )}
              {userData.linkedin && (
                <a href={userData.linkedin as string} className="text-blue-400 hover:text-blue-300">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderBusinessCard = (userData: UserData) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          {/* Company Logo Placeholder */}
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-gray-500 text-2xl font-bold">
              {userData.companyName ? (userData.companyName as string).charAt(0) : 'C'}
            </span>
          </div>

          {/* Company Name */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {userData.companyName || 'Company Name'}
          </h1>

          {/* Personal Info */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {userData.fullName || 'Your Name'}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {userData.title || 'Professional Title'}
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-700">
            <p className="text-lg">{userData.email || 'your.email@example.com'}</p>
            {userData.phone && <p className="text-lg">{userData.phone}</p>}
            {userData.location && <p className="text-lg">{userData.location}</p>}
          </div>

          {/* Company Description */}
          {userData.bio && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">{userData.bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderBlogPersonal = (userData: UserData) => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">{userData.fullName || 'Your Name'}</h1>
          <p className="text-xl text-red-100">{userData.title || 'Blog Title'}</p>
        </div>
      </header>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Post</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to My Blog</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {userData.bio || 'This is where your featured blog post content will appear...'}
            </p>
            <div className="text-sm text-gray-500">
              Published on {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-4">
            <p className="text-xl">{userData.email || 'your.email@example.com'}</p>
            {userData.phone && <p className="text-xl">{userData.phone}</p>}
          </div>
        </div>
      </section>
    </div>
  );

  const renderResumeCV = (userData: UserData) => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">{userData.fullName || 'Your Name'}</h1>
          <p className="text-xl text-blue-100">{userData.title || 'Professional Title'}</p>
          <p className="text-blue-200 mt-2">{userData.location || 'Location'}</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Summary</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              {userData.bio || 'Your professional summary will appear here...'}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {userData.experience && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Work Experience</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {userData.experience}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
          <div className="space-y-4">
            <p className="text-xl">{userData.email || 'your.email@example.com'}</p>
            {userData.phone && <p className="text-xl">{userData.phone}</p>}
            {userData.location && <p className="text-xl">{userData.location}</p>}
          </div>
        </div>
      </section>
    </div>
  );

  const renderDefaultWebsite = (userData: UserData) => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">{userData.heroTitle || userData.fullName || 'Your Name'}</h1>
          <p className="text-xl text-gray-300">{userData.title || 'Professional Title'}</p>
          <p className="text-gray-400 mt-4">{userData.location || 'Location'}</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              {userData.bio || 'Your bio will appear here...'}
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {userData.experience && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 whitespace-pre-line">
                {userData.experience}
              </p>
            </div>
          </div>
        </section>
      )}
      {userData.projects && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 whitespace-pre-line">
                {userData.projects}
              </p>
            </div>
          </div>
        </section>
      )}
      {userData.services && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 whitespace-pre-line">
                {userData.services}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-4">
            <p className="text-xl">{userData.email || 'your.email@example.com'}</p>
            {userData.phone && <p className="text-xl">{userData.phone}</p>}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="preview-modal">
      <div className="preview-backdrop" onClick={onClose}></div>
      <div className="preview-content">
        <div className="preview-header">
          <h2 className="text-xl font-bold text-gray-900">
            Preview: {template.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="preview-body">
          {renderWebsiteContent()}
        </div>
        
        <div className="preview-footer">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Template: {template.category}
            </span>
            <div className="flex space-x-3">
              <button
                onClick={() => window.open(template.demoUrl, '_blank')}
                className="btn-secondary flex items-center space-x-2"
                aria-label="View original website"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Original</span>
              </button>
              <button
                onClick={() => {/* Download functionality */}}
                className="btn-primary flex items-center space-x-2"
                aria-label="Download website"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
