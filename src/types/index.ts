export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  children?: {
    name: string;
    href: string;
    description?: string;
  }[];
}

export interface FeatureItem {
  id: string;
  badge?: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
}

export interface StepItem {
  step: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  points: string[];
}

export interface BenefitGroup {
  badge: string;
  title: string;
  description: string;
  image: string;
  badgeTag: string;
  points: {
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar: string;
  rating?: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featured?: boolean;
  ctaText: string;
  includesText: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content?: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  stagger?: 'high' | 'low';
  arrowType?: 'left' | 'right' | 'center';
}

export interface CareerPosition {
  id?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  qualification: string;
  mode: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  desiredProfile?: string[];
  perks?: string[];
  trainingDetails?: string;
  bond?: string;
}
