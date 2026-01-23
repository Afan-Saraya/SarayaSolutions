import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import {
  HeroBlock,
  FeaturesBlock,
  ProductsBlock,
  CTABlock,
  PartnersBlock,
  TechnologiesBlock,
  BenefitsBlock,
  ProductHeroBlock,
  ServicesBlock,
} from './src/payload/blocks';

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor({}),
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'media',
      upload: {
        staticDir: 'public/uploads',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
        },
      ],
    },
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
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
            description: 'URL path for this page (e.g., "about", "products/display")',
          },
        },
        {
          name: 'language',
          type: 'select',
          label: 'Language',
          options: [
            { label: 'Bosnian', value: 'bs' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'bs',
          required: true,
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
          name: 'layout',
          type: 'blocks',
          label: 'Page Sections',
          minRows: 1,
          blocks: [
            HeroBlock,
            ProductHeroBlock,
            FeaturesBlock,
            ProductsBlock,
            ServicesBlock,
            BenefitsBlock,
            TechnologiesBlock,
            PartnersBlock,
            CTABlock,
          ],
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});

