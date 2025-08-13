export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  previewImage: string;
  githubUrl: string;
  demoUrl: string;
  requiredFields: Field[];
  tags: string[];
}

export interface Field {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'url' | 'select' | 'file';
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: string;
}

export interface UserData {
  [key: string]: string | File;
}

export interface GeneratedWebsite {
  id: string;
  templateId: string;
  userData: UserData;
  generatedAt: Date;
  downloadUrl?: string;
  previewUrl?: string;
}
