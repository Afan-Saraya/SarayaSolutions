# Payload CMS - Practical Examples

## 📋 Table of Contents

1. [Creating Pages](#creating-pages)
2. [Fetching Data](#fetching-data)
3. [Custom Blocks](#custom-blocks)
4. [API Usage](#api-usage)
5. [Advanced Patterns](#advanced-patterns)

## 🎨 Creating Pages

### Example 1: Simple About Page

```typescript
// In Payload Admin UI, create a new page with:
{
  "title": "About Us",
  "slug": "about",
  "language": "bs",
  "metaTitle": "O nama - Saraya Solutions",
  "metaDescription": "Saznajte više o Saraya Solutions",
  "sections": [
    {
      "blockType": "hero",
      "badge": "O nama",
      "titleStart": "Upoznajte",
      "titleGradient": "Saraya Solutions",
      "description": "Vodimo vas kroz digitalnu transformaciju sa inovativnim rješenjima",
      "primaryCTA": {
        "text": "Kontaktirajte nas",
        "link": "/contact"
      }
    },
    {
      "blockType": "features",
      "badge": "Naše vrijednosti",
      "title": "Što nas",
      "titleHighlight": "izdvaja",
      "features": [
        {
          "icon": "sparkles",
          "title": "Inovacija",
          "description": "Koristimo najnovije tehnologije"
        },
        {
          "icon": "users",
          "title": "Tim",
          "description": "Iskusni profesionalci"
        }
      ]
    }
  ]
}
```

### Example 2: Product Landing Page

```typescript
{
  "title": "Saraya Connect",
  "slug": "products/saraya-connect",
  "language": "bs",
  "sections": [
    {
      "blockType": "hero",
      "titleStart": "Saraya",
      "titleGradient": "Connect",
      "description": "Wi-Fi marketing platforma nove generacije"
    },
    {
      "blockType": "features",
      "title": "Ključne",
      "titleHighlight": "funkcionalnosti",
      "features": [
        {
          "icon": "wifi",
          "title": "Captive Portal",
          "description": "Prilagodljive stranice za prijavu"
        },
        {
          "icon": "smartphone",
          "title": "Mobilna aplikacija",
          "description": "iOS i Android podrška"
        }
      ]
    },
    {
      "blockType": "cta",
      "title": "Spremni za",
      "titleHighlight": "testiranje?",
      "description": "Kontaktirajte nas za demo",
      "primaryButton": {
        "text": "Zakaži demo",
        "link": "/contact"
      }
    }
  ]
}
```

## 🔄 Fetching Data

### Server Component (Recommended)

```typescript
// app/[slug]/page.tsx
import { getPageBySlug } from '@/lib/payload/getPage';
import RenderBlocks from '@/components/payload/RenderBlocks';

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug, 'bs');

  if (!page) {
    notFound();
  }

  return (
    <main>
      <h1>{page.title}</h1>
      <RenderBlocks sections={page.sections} />
    </main>
  );
}

// Enable ISR
export const revalidate = 60;

// Generate static paths
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}
```

### Client Component

```typescript
'use client';

import { useEffect, useState } from 'react';
import { fetchPageFromAPI } from '@/lib/payload/getPage';
import RenderBlocks from '@/components/payload/RenderBlocks';

export default function ClientPage({ slug }: { slug: string }) {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPage() {
      const data = await fetchPageFromAPI(slug, 'bs');
      setPage(data);
      setLoading(false);
    }
    loadPage();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!page) return <div>Page not found</div>;

  return <RenderBlocks sections={page.sections} />;
}
```

### API Route

```typescript
// app/api/page/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPageBySlug } from '@/lib/payload/getPage';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }

  return NextResponse.json(page);
}
```

## 🧩 Custom Blocks

### Creating a Testimonials Block

```typescript
// src/payload/blocks/TestimonialsBlock.ts
import { Block } from 'payload/types';

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'testimonials',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'rating',
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
      ],
    },
  ],
};
```

### Creating the Component

```typescript
// src/components/sections/Testimonials.tsx
'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: any;
  rating: number;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-2xl bg-background-card border border-white/10">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              
              <p className="text-foreground-muted mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar.url}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground-muted">
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Register the Block

```typescript
// src/payload/collections/Pages.ts
import { TestimonialsBlock } from '../blocks/TestimonialsBlock';

export const Pages: CollectionConfig = {
  // ...
  fields: [
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        HeroBlock,
        FeaturesBlock,
        TestimonialsBlock, // Add here
        // ...
      ],
    },
  ],
};
```

### Map to Component

```typescript
// src/components/payload/RenderBlocks.tsx
import Testimonials from '@/components/sections/Testimonials';

const blockComponents = {
  hero: Hero,
  features: Features,
  testimonials: Testimonials, // Add here
  // ...
};
```

## 🌐 API Usage

### Fetch All Pages

```bash
curl http://localhost:3000/api/pages
```

Response:
```json
{
  "docs": [
    {
      "id": "123",
      "title": "Home",
      "slug": "home",
      "sections": [...]
    }
  ],
  "totalDocs": 1,
  "limit": 10,
  "page": 1
}
```

### Fetch Specific Page

```bash
curl "http://localhost:3000/api/pages?where[slug][equals]=about&where[language][equals]=bs"
```

### Fetch with Depth

```bash
curl "http://localhost:3000/api/pages/123?depth=2"
```

This will populate all relationships (like media uploads) up to 2 levels deep.

### Create Page via API

```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "New Page",
    "slug": "new-page",
    "language": "bs",
    "sections": [
      {
        "blockType": "hero",
        "titleStart": "Hello",
        "titleGradient": "World"
      }
    ],
    "status": "published"
  }'
```

## 🚀 Advanced Patterns

### Conditional Rendering

```typescript
// src/components/payload/RenderBlocks.tsx
export default function RenderBlocks({ sections, language }: RenderBlocksProps) {
  return (
    <>
      {sections.map((section, index) => {
        const { blockType, ...blockData } = section;
        
        // Skip certain blocks based on conditions
        if (blockType === 'partners' && language === 'en') {
          return null; // Don't show partners section in English
        }
        
        const BlockComponent = blockComponents[blockType];
        
        if (!BlockComponent) {
          return null;
        }
        
        return <BlockComponent key={`${blockType}-${index}`} {...blockData} />;
      })}
    </>
  );
}
```

### Block Variants

```typescript
// Add variant field to block
{
  name: 'variant',
  type: 'select',
  options: [
    { label: 'Default', value: 'default' },
    { label: 'Compact', value: 'compact' },
    { label: 'Wide', value: 'wide' },
  ],
  defaultValue: 'default',
}

// Use in component
export default function Hero({ variant, ...props }: HeroProps) {
  const variantClasses = {
    default: 'py-24',
    compact: 'py-12',
    wide: 'py-32',
  };
  
  return (
    <section className={variantClasses[variant]}>
      {/* ... */}
    </section>
  );
}
```

### Preview Mode

```typescript
// app/api/preview/route.ts
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== process.env.PAYLOAD_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  draftMode().enable();
  redirect(`/cms/${slug}`);
}

// In page component
export default async function Page({ params }: PageProps) {
  const { isEnabled } = draftMode();
  
  const page = await getPageBySlug(params.slug, 'bs', {
    draft: isEnabled,
  });
  
  return <RenderBlocks sections={page.sections} />;
}
```

### Caching Strategy

```typescript
// lib/payload/cache.ts
import { unstable_cache } from 'next/cache';
import { getPageBySlug } from './getPage';

export const getCachedPage = unstable_cache(
  async (slug: string, language: 'bs' | 'en') => {
    return getPageBySlug(slug, language);
  },
  ['page'],
  {
    revalidate: 60, // Revalidate every 60 seconds
    tags: ['pages'],
  }
);

// Usage
import { getCachedPage } from '@/lib/payload/cache';

const page = await getCachedPage('about', 'bs');
```

### Webhooks for Revalidation

```typescript
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  const body = await request.json();
  const { slug, collection } = body;

  if (collection === 'pages') {
    // Revalidate specific page
    revalidatePath(`/cms/${slug}`);
    // Or revalidate all pages
    revalidateTag('pages');
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

Configure webhook in Payload:

```typescript
// payload.config.ts
export default buildConfig({
  // ...
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === 'update' || operation === 'create') {
          // Trigger revalidation
          await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-revalidate-secret': process.env.REVALIDATE_SECRET!,
            },
            body: JSON.stringify({
              slug: doc.slug,
              collection: req.collection?.config.slug,
            }),
          });
        }
      },
    ],
  },
});
```

## 🎯 Best Practices

1. **Always use TypeScript** for type safety
2. **Cache aggressively** with ISR and unstable_cache
3. **Use depth parameter** wisely to avoid over-fetching
4. **Implement preview mode** for content editors
5. **Set up webhooks** for automatic revalidation
6. **Version your blocks** to handle schema changes
7. **Document your blocks** with clear labels and descriptions
8. **Test with real content** before going live

## 📚 Additional Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
