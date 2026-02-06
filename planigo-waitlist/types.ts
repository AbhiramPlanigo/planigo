// Fix: Added React import to resolve the 'React' namespace error for React.ReactNode.
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface RouteExample {
  from: string;
  to: string;
  image: string;
}