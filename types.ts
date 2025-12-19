import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface UseCaseItem {
  title: string;
  scenario: string;
  solution: string;
  outcome: string;
  tags: string[];
}