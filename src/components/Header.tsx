import React from 'react';
import { Globe, Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Personal Website Generator
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/your-username/personal-website-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
