# Payload CMS Integration Guide

This guide explains how Payload CMS is integrated with your Next.js + Storybook project.

## 🎯 Overview

The integration allows content editors to:
- Create dynamic pages using pre-built Storybook components
- Manage content without touching code
- Compose pages from reusable section blocks
- Preview changes before publishing

## 📁 Project Structure

```
saraya-solutions/
├── payload.config.ts                    # Main Payload configuration
├── src/
│   ├── payload/
│   │   ├── collections/
│   │   │   ├── Pages.ts                # Pages collection with blocks
│   │   │   ├── Media.ts                # Media/uploads collection
│   │   │   └── Users.ts                # Admin users
│   │   ├── blocks/
│   │   │   ├── HeroBlock.ts            # Hero section block
│   │   │   ├── FeaturesBlock.ts        # Features section block
│   │   │   ├── ProductsBlock.ts        # Products section block
│   │   │   ├── CTABlock.ts             # CTA section block
│   │   │   ├── PartnersBlock.ts        # Partners section block
│   │   │   └── TechnologiesBlock.ts    # Technologies section block
│   │   └── payloadClient.ts            # Payload client singleton
│   ├── lib/
│   │   └── payload/
│   │       └── getPage.ts              # Helper functions to fetch pages
│   ├── components/
│   │   ├── payload/
│   │   │   └── RenderBlocks.tsx        # Maps blocks to components
│   │   └── sections/                   # Your existing Storybook components
│   └── app/
│       ├── api/
│       │   └── [...slug]/
│       │       └── route.ts            # Payload API routes
│       └── cms/
│           └── [slug]/
│               └── page.tsx            # Dynamic CMS pages
```

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install payload @payloadcms/db-mongodb @payloadcms/richtext-slate
npm install --save-dev @payloadcms/bundler-webpack
```

### 2. Environment Variables

Create `.env.local`:

```env
# Payload CMS
PAYLOAD_SECRET=your-secret-key-here
MONGODB_URI=mongodb://localhost:27017/saraya-cms

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 3. Update package.json Scripts

```json
{
  "scripts": {
    "dev": "cross-env PAYLOAD_CONFIG_PATH=payload.config.ts next dev",
    "build": "cross-env PAYLOAD_CONFIG_PATH=payload.config.ts next build",
    "payload": "cross-env PAYLOAD_CONFIG_PATH=payload.config.ts payload"
  }
}
```

### 4. Start Development Server

```bash
npm run dev
```

Access Payload admin at: `http://localhost:3000/admin`

## 📝 How It Works

### 1. Block Definitions

Each Storybook section has a corresponding Payload block definition:

**Example: Hero Block** (`src/payload/blocks/HeroBlock.ts`)

```typescript
export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    { name: 'titleStart', type: 'text', required: true },
    { name: 'titleGradient', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    // ... more fields matching Hero component props
  ],
};
```

### 2. Pages Collection

The Pages collection uses these blocks:

```typescript
export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        HeroBlock,
        FeaturesBlock,
        ProductsBlock,
        // ... all your blocks
      ],
    },
  ],
};
```

### 3. Fetching Pages

**Server-side (Recommended):**

```typescript
import { getPageBySlug } from '@/lib/payload/getPage';

export default async function Page({ params }) {
  const page = await getPageBySlug(params.slug);
  return <RenderBlocks sections={page.sections} />;
}
```

**Client-side or API:**

```typescript
import { fetchPageFromAPI } from '@/lib/payload/getPage';

const page = await fetchPageFromAPI('about', 'bs');
```

### 4. Rendering Blocks

The `RenderBlocks` component maps block types to Storybook components:

```typescript
const blockComponents = {
  hero: Hero,
  features: Features,
  products: Products,
  cta: CTA,
  partners: Partners,
  technologies: Technologies,
};

export default function RenderBlocks({ sections }) {
  return sections.map((section) => {
    const Component = blockComponents[section.blockType];
    return <Component {...section} />;
  });
}
```

## 🎨 Creating a New Page in Payload

1. Go to `http://localhost:3000/admin`
2. Navigate to **Pages** collection
3. Click **Create New**
4. Fill in:
   - **Title**: "About Us"
   - **Slug**: "about"
   - **Language**: Bosnian or English
5. Add sections by clicking **Add Section**
6. Choose block type (Hero, Features, etc.)
7. Fill in the block fields
8. Set **Status** to "Published"
9. Click **Save**

Your page is now live at: `http://localhost:3000/cms/about`

## 🔄 Adding New Blocks

To add a new section from Storybook to Payload:

### Step 1: Create Block Definition

Create `src/payload/blocks/YourNewBlock.ts`:

```typescript
import { Block } from 'payload/types';

export const YourNewBlock: Block = {
  slug: 'yourNew',
  labels: {
    singular: 'Your New Section',
    plural: 'Your New Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Add fields matching your component props
  ],
};
```

### Step 2: Register in Pages Collection

Update `src/payload/collections/Pages.ts`:

```typescript
import { YourNewBlock } from '../blocks/YourNewBlock';

export const Pages: CollectionConfig = {
  // ...
  fields: [
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        HeroBlock,
        FeaturesBlock,
        YourNewBlock, // Add here
        // ...
      ],
    },
  ],
};
```

### Step 3: Map to Component

Update `src/components/payload/RenderBlocks.tsx`:

```typescript
import YourNewSection from '@/components/sections/YourNewSection';

const blockComponents = {
  hero: Hero,
  features: Features,
  yourNew: YourNewSection, // Add here
  // ...
};
```

## 📊 Example: Creating a Homepage

```json
{
  "title": "Home",
  "slug": "home",
  "language": "bs",
  "sections": [
    {
      "blockType": "hero",
      "titleStart": "Dobrodošli u",
      "titleGradient": "Saraya Solutions",
      "description": "Vodimo vas kroz digitalnu transformaciju",
      "primaryCTA": {
        "text": "Započnite projekt",
        "link": "/contact"
      }
    },
    {
      "blockType": "features",
      "title": "Naše",
      "titleHighlight": "usluge",
      "features": [
        {
          "icon": "wifi",
          "title": "Wi-Fi Rješenja",
          "description": "Napredna Wi-Fi infrastruktura"
        }
      ]
    },
    {
      "blockType": "partners",
      "title": "Kompanije s kojima",
      "titleHighlight": "sarađujemo"
    },
    {
      "blockType": "cta",
      "title": "Spremni za",
      "titleHighlight": "digitalnu transformaciju?",
      "description": "Kontaktirajte nas danas"
    }
  ]
}
```

## 🔍 REST API Examples

### Fetch All Pages

```bash
GET http://localhost:3000/api/pages
```

### Fetch Specific Page

```bash
GET http://localhost:3000/api/pages?where[slug][equals]=about&where[language][equals]=bs
```

### Fetch with Specific Fields

```bash
GET http://localhost:3000/api/pages?where[slug][equals]=about&depth=2
```

## 🎯 Benefits

1. **No Code Changes**: Content editors can create pages without developers
2. **Type Safety**: TypeScript ensures block data matches component props
3. **Reusable Components**: Use existing Storybook components
4. **Preview**: See changes before publishing
5. **Version Control**: Track content changes
6. **Multi-language**: Support for Bosnian and English
7. **SEO**: Built-in meta fields for each page
8. **Media Management**: Upload and manage images
9. **ISR**: Incremental Static Regeneration for performance

## 🛠️ Advanced Features

### Custom Field Types

```typescript
{
  name: 'customField',
  type: 'select',
  options: [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
  ],
}
```

### Conditional Fields

```typescript
{
  name: 'showButton',
  type: 'checkbox',
},
{
  name: 'buttonText',
  type: 'text',
  admin: {
    condition: (data) => data.showButton,
  },
}
```

### Rich Text

```typescript
{
  name: 'content',
  type: 'richText',
}
```

### Relationships

```typescript
{
  name: 'relatedPages',
  type: 'relationship',
  relationTo: 'pages',
  hasMany: true,
}
```

## 📚 Resources

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Next.js Integration](https://payloadcms.com/docs/getting-started/installation)
- [Block Fields](https://payloadcms.com/docs/fields/blocks)

## 🐛 Troubleshooting

### Payload Admin Not Loading

Check:
1. MongoDB is running
2. `PAYLOAD_SECRET` is set in `.env.local`
3. Port 3000 is not in use

### Block Not Rendering

Check:
1. Block is registered in `Pages.ts`
2. Component is mapped in `RenderBlocks.tsx`
3. Block slug matches component key

### TypeScript Errors

Run:
```bash
npm run payload generate:types
```

This generates TypeScript types from your Payload config.
