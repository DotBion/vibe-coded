import React from 'react';
import { Globe, Github, Eye } from 'lucide-react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onSelect }) => {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200">
      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-gray-500 text-center">
          <Globe className="h-12 w-12 mx-auto mb-2" />
          <p className="text-sm">Template Preview</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {template.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {template.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-xs text-gray-500 mb-3">
          <span className="font-medium">Category:</span> {template.category}
        </div>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <a
          href={template.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-secondary flex items-center justify-center space-x-2 text-sm"
        >
          <Eye className="h-4 w-4" />
          <span>Preview</span>
        </a>
        <a
          href={template.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-secondary flex items-center justify-center space-x-2 text-sm"
        >
          <Github className="h-4 w-4" />
          <span>Source</span>
        </a>
      </div>
      
      <button
        onClick={() => onSelect(template)}
        className="w-full btn-primary"
      >
        Use This Template
      </button>
    </div>
  );
};

export default TemplateCard;
