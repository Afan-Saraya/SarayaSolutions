"use client";

import React from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Products from '@/components/sections/Products';
import CTA from '@/components/sections/CTA';
import Partners from '@/components/sections/Partners';
import Technologies from '@/components/sections/Technologies';
import Benefits from '@/components/sections/Benefits';
import ProductHero from '@/components/sections/ProductHero';

// Map of block types to their corresponding components
const blockComponents: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  productHero: ProductHero,
  features: Features,
  products: Products,
  services: Products, // Services uses same component as Products
  benefits: Benefits,
  technologies: Technologies,
  partners: Partners,
  cta: CTA,
};

interface RenderBlocksProps {
  sections: Array<{
    blockType: string;
    [key: string]: any;
  }>;
  language?: 'bs' | 'en';
}

/**
 * Renders an array of Payload blocks as React components
 * Maps each block type to its corresponding Storybook component
 */
export default function RenderBlocks({ sections, language = 'bs' }: RenderBlocksProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        const { blockType, ...blockData } = section;
        const BlockComponent = blockComponents[blockType];

        if (!BlockComponent) {
          console.warn(`No component found for block type: ${blockType}`);
          return null;
        }

        // Pass all block data as props to the component, including language
        return (
          <BlockComponent 
            key={`${blockType}-${index}`} 
            {...blockData}
            language={language}
          />
        );
      })}
    </>
  );
}
