export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  location: string;
  year: string;
  surface: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string; // Name of Lucide icon
}

export interface Testimonial {
  id: string;
  author: string;
  projectType: string;
  text: string;
  rating: number;
  date: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  details: string;
  icon: string; // Name of Lucide icon
}

export interface InfoCard {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: string; // Name of Lucide icon
}
