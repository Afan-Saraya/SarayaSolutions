/**
 * TypeScript types for Payload CMS blocks
 * These types ensure type safety when working with Payload data
 */

export interface HeroBlockType {
  blockType: 'hero';
  badge?: string;
  titleStart: string;
  titleGradient: string;
  description: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  image?: {
    url: string;
    alt: string;
  };
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface FeaturesBlockType {
  blockType: 'features';
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  features: Feature[];
}

export interface Product {
  icon: string;
  title: string;
  description: string;
  link: string;
  color: 'purple' | 'green' | 'cyan' | 'pink';
}

export interface ProductsBlockType {
  blockType: 'products';
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  products: Product[];
}

export interface CTABlockType {
  blockType: 'cta';
  icon: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

export interface Partner {
  name: string;
  logo: {
    url: string;
    alt: string;
  };
}

export interface PartnersBlockType {
  blockType: 'partners';
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  partners: Partner[];
}

export interface Technology {
  icon: string;
  title: string;
  description: string;
}

export interface TechnologiesBlockType {
  blockType: 'technologies';
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  technologies: Technology[];
}

// Union type of all block types
export type BlockType =
  | HeroBlockType
  | FeaturesBlockType
  | ProductsBlockType
  | CTABlockType
  | PartnersBlockType
  | TechnologiesBlockType;

// Page type
export interface Page {
  id: string;
  title: string;
  slug: string;
  language: 'bs' | 'en';
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: {
    url: string;
    alt: string;
  };
  sections: BlockType[];
  status: 'draft' | 'published';
  publishedAt?: string;
  updatedAt: string;
  createdAt: string;
}

// API Response types
export interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export type PagesResponse = PayloadResponse<Page>;
