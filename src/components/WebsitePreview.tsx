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
    switch (template.id) {
      case 'portfolio-minimal':
        return (
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

      case 'business-card':
        return (
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
                <p className="text-xl text-gray-600 mb-8">{userData.jobTitle || 'Job Title'}</p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-gray-700">{userData.email || 'email@company.com'}</p>
                  <p className="text-lg text-gray-700">{userData.phone || 'Phone Number'}</p>
                  {userData.address && (
                    <p className="text-lg text-gray-700">{userData.address}</p>
                  )}
                </div>

                {/* Services */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {userData.services || 'Services description will appear here...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'blog-personal':
        return (
          <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">{userData.blogTitle || 'My Personal Blog'}</h1>
                <p className="text-xl text-purple-100">{userData.tagline || 'Blog tagline'}</p>
                <p className="text-purple-200 mt-4">By {userData.fullName || 'Your Name'}</p>
              </div>
            </header>

            {/* About Section */}
            <section className="py-16">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
                <div className="prose prose-lg mx-auto">
                  <p className="text-gray-700 leading-relaxed">
                    {userData.bio || 'Your blog bio will appear here...'}
                  </p>
                </div>
              </div>
            </section>

            {/* Topics Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog Topics</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(userData.topics as string)?.split(',').map((topic, index) => (
                    <div key={index} className="bg-white px-6 py-4 rounded-lg shadow-sm text-center">
                      <span className="text-gray-700 font-medium">{topic.trim()}</span>
                    </div>
                  )) || (
                    <div className="col-span-full text-center text-gray-500">Topics will appear here...</div>
                  )}
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="py-16 bg-gray-900 text-white">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
                <p className="text-xl mb-6">{userData.email || 'your.email@blog.com'}</p>
                <div className="flex justify-center space-x-6">
                  {userData.socialTwitter && (
                    <a href={userData.socialTwitter as string} className="text-blue-400 hover:text-blue-300">
                      Twitter
                    </a>
                  )}
                  {userData.socialInstagram && (
                    <a href={userData.socialInstagram as string} className="text-pink-400 hover:text-pink-300">
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </section>
          </div>
        );

      case 'resume-cv':
        return (
          <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gray-900 text-white py-12">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-2">{userData.fullName || 'Your Name'}</h1>
                <p className="text-xl text-gray-300 mb-4">{userData.email || 'email@example.com'}</p>
                <p className="text-lg text-gray-400">{userData.phone || 'Phone Number'}</p>
                <p className="text-lg text-gray-400">{userData.location || 'Location'}</p>
              </div>
            </header>

            {/* Summary */}
            <section className="py-12 bg-gray-50">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  {userData.summary || 'Your professional summary will appear here...'}
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="py-12 bg-white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700 whitespace-pre-line">
                    {userData.experience || 'Your work experience will appear here...'}
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="py-12 bg-gray-50">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700 whitespace-pre-line">
                    {userData.education || 'Your education will appear here...'}
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="py-12 bg-white">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700 whitespace-pre-line">
                    {userData.skills || 'Your skills will appear here...'}
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            {userData.languages && (
              <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Languages</h2>
                  <p className="text-gray-700">{userData.languages}</p>
                </div>
              </section>
            )}
          </div>
        );

      default:
        // Handle custom URL-analyzed templates
        if (template.id.startsWith('url-template-')) {
          return (
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
        }

        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Template Preview</h2>
              <p className="text-gray-600">Preview for {template.name} template</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="preview-modal">
      {/* Backdrop */}
      <div className="preview-backdrop" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="preview-content">
          {/* Header */}
          <div className="preview-header">
            <h2 className="text-xl font-semibold text-gray-900">
              Preview: {template.name}
            </h2>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="preview-body">
            {renderWebsiteContent()}
          </div>

          {/* Footer */}
          <div className="preview-footer">
            <p className="text-sm text-gray-600">
              This is a preview of your generated website
            </p>
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="btn-secondary"
              >
                Close Preview
              </button>
              <button
                onClick={() => window.open('#', '_blank')}
                className="btn-primary flex items-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Open in New Tab</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
