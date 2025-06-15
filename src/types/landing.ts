export interface NavigationItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
