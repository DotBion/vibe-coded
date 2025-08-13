import React, { useState } from 'react';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { Template, UserData, Field } from '../types';

interface UserInputFormProps {
  template: Template;
  onBack: () => void;
  onSubmit: (userData: UserData) => void;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ template, onBack, onSubmit }) => {
  const [userData, setUserData] = useState<UserData>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (fieldId: string, value: string | File) => {
    setUserData(prev => ({ ...prev, [fieldId]: value }));
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }));
    }
  };

  const handleFileChange = (fieldId: string, file: File | null) => {
    if (file) {
      setUserData(prev => ({ ...prev, [fieldId]: file }));
    }
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    
    template.requiredFields.forEach(field => {
      if (field.required && (!userData[field.id] || userData[field.id] === '')) {
        newErrors[field.id] = `${field.label} is required`;
      }
      
      // Email validation
      if (field.type === 'email' && userData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData[field.id] as string)) {
          newErrors[field.id] = 'Please enter a valid email address';
        }
      }
      
      // URL validation
      if (field.type === 'url' && userData[field.id]) {
        try {
          new URL(userData[field.id] as string);
        } catch {
          newErrors[field.id] = 'Please enter a valid URL';
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(userData);
    }
  };

  const renderField = (field: Field) => {
    const fieldValue = userData[field.id] || '';
    const fieldError = errors[field.id];

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            value={fieldValue as string}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            rows={4}
            className={`input-field ${fieldError ? 'border-red-500' : ''}`}
          />
        );

      case 'select':
        return (
          <select
            id={field.id}
            value={fieldValue as string}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className={`input-field ${fieldError ? 'border-red-500' : ''}`}
          >
            <option value="">Select an option</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );

      case 'file':
        return (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label
                htmlFor={field.id}
                className="btn-secondary cursor-pointer inline-flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Choose File</span>
              </label>
              {userData[field.id] && (
                <button
                  type="button"
                  onClick={() => handleFileChange(field.id, null)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {userData[field.id] && (
              <div className="text-sm text-gray-600">
                Selected: {(userData[field.id] as File).name}
              </div>
            )}
            <input
              id={field.id}
              type="file"
              onChange={(e) => handleFileChange(field.id, e.target.files?.[0] || null)}
              className="hidden"
              accept="image/*"
            />
          </div>
        );

      default:
        return (
          <input
            id={field.id}
            type={field.type}
            value={fieldValue as string}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={`input-field ${fieldError ? 'border-red-500' : ''}`}
          />
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="btn-secondary inline-flex items-center space-x-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Templates</span>
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Customize Your {template.name}
        </h2>
        <p className="text-gray-600">
          Fill in your personal details to generate your website.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {template.requiredFields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            
            {renderField(field)}
            
            {errors[field.id] && (
              <p className="mt-1 text-sm text-red-600">{errors[field.id]}</p>
            )}
            
            {field.validation && (
              <p className="mt-1 text-sm text-gray-500">{field.validation}</p>
            )}
          </div>
        ))}

        <div className="pt-4">
          <button type="submit" className="w-full btn-primary">
            Generate My Website
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInputForm;
