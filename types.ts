export interface NavItem {
  label: string;
  path: string;
}

export interface BentoItem {
  title: string;
  description: string;
  colSpan: string;
  bgImage?: string;
  type: 'video' | 'timeline' | 'masonry' | 'graph';
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

// Declare global Tailwind object
declare global {
  interface Window {
    tailwind?: {
      config: any;
      css?: {
        refresh: () => void;
      };
    };
  }
}