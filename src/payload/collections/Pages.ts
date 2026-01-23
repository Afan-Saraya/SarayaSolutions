import { CollectionConfig } from 'payload/types';
import {
  HeroBlock,
  FeaturesBlock,
  ProductsBlock,
  CTABlock,
  PartnersBlock,
  TechnologiesBlock,
} from '../blocks';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'The URL path for this page (e.g., "about", "products/display")',
      },
    },
    {
      name: 'language',
      type: 'select',
      required: true,
      defaultValue: 'bs',
      options: [
        { label: 'Bosnian', value: 'bs' },
        { label: 'English', value: 'en' },
      ],
      label: 'Language',
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title',
      admin: {
        description: 'SEO title for search engines',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
      admin: {
        description: 'SEO description for search engines',
      },
    },
    {
      name: 'metaImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Meta Image',
      admin: {
        description: 'Image for social media sharing',
      },
    },
    {
      name: 'sections',
      type: 'blocks',
      label: 'Page Sections',
      minRows: 1,
      blocks: [
        HeroBlock,
        FeaturesBlock,
        ProductsBlock,
        CTABlock,
        PartnersBlock,
        TechnologiesBlock,
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
