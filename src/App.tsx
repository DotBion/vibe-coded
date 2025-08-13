import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TemplateGrid from './components/TemplateGrid';
import UserInputForm from './components/UserInputForm';
import WebsiteGenerator from './components/WebsiteGenerator';
import UrlAnalyzer from './components/UrlAnalyzer';
import { templates } from './data/templates';
import { Template, UserData } from './types';

type AppView = 'home' | 'templates' | 'input-form' | 'generator' | 'url-analyzer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [analyzedUrl, setAnalyzedUrl] = useState<string>('');

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setCurrentView('input-form');
  };

  const handleFormSubmit = (data: UserData) => {
    setUserData(data);
    setCurrentView('generator');
  };

  const handleBackToTemplates = () => {
    setCurrentView('templates');
    setSelectedTemplate(null);
    setUserData(null);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedTemplate(null);
    setUserData(null);
    setAnalyzedUrl('');
  };

  const handleGetStarted = () => {
    setCurrentView('templates');
  };

  const handleViewTemplates = () => {
    setCurrentView('templates');
  };

  const handleAnalyzeUrl = (url: string) => {
    setAnalyzedUrl(url);
    setCurrentView('url-analyzer');
  };

  const handleTemplateGenerated = (template: Template) => {
    setSelectedTemplate(template);
    setCurrentView('input-form');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero 
              onGetStarted={handleGetStarted}
              onViewTemplates={handleViewTemplates}
              onAnalyzeUrl={handleAnalyzeUrl}
            />
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Featured Templates
                  </h2>
                  <p className="text-xl text-gray-600">
                    Start with one of our most popular website templates
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {templates.slice(0, 4).map((template) => (
                    <div key={template.id} className="card hover:shadow-md transition-shadow duration-200 cursor-pointer" onClick={() => handleTemplateSelect(template)}>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                          <div className="text-xs">Template Preview</div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button onClick={handleViewTemplates} className="btn-primary">
                    View All Templates
                  </button>
                </div>
              </div>
            </div>
          </>
        );

      case 'templates':
        return (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <button
                  onClick={handleBackToHome}
                  className="btn-secondary inline-flex items-center space-x-2 mb-4"
                >
                  <span>← Back to Home</span>
                </button>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Choose Your Template
                </h1>
                <p className="text-gray-600">
                  Select a template that best fits your needs and style preferences.
                </p>
              </div>
              
              <TemplateGrid
                templates={templates}
                onSelectTemplate={handleTemplateSelect}
              />
            </div>
          </div>
        );

      case 'url-analyzer':
        return (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <UrlAnalyzer
                url={analyzedUrl}
                onBack={handleBackToHome}
                onTemplateGenerated={handleTemplateGenerated}
              />
            </div>
          </div>
        );

      case 'input-form':
        return selectedTemplate ? (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <UserInputForm
                template={selectedTemplate}
                onBack={handleBackToTemplates}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        ) : null;

      case 'generator':
        return selectedTemplate && userData ? (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <WebsiteGenerator
                template={selectedTemplate}
                userData={userData}
                onBack={handleBackToHome}
              />
            </div>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default App;
