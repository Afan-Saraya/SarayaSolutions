# 🚀 Payload CMS Quick Start Guide

Get your Payload CMS up and running in 10 minutes!

## ✅ Prerequisites

- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas account
- Your existing Next.js + Storybook project

## 📦 Step 1: Install Dependencies

```bash
npm install payload @payloadcms/db-mongodb @payloadcms/richtext-slate @payloadcms/bundler-webpack
npm install --save-dev cross-env
```

## 🔧 Step 2: Environment Setup

Create `.env.local` in your project root:

```env
# Payload CMS Configuration
PAYLOAD_SECRET=your-super-secret-key-change-this-in-production
MONGODB_URI=mongodb://localhost:27017/saraya-cms

# Next.js Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional: For preview mode
PAYLOAD_PREVIEW_SECRET=another-secret-key
REVALIDATE_SECRET=revalidate-secret-key
```

**Important:** Generate secure secrets for production:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 📝 Step 3: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "cross-env PAYLOAD_CONFIG_PATH=payload.config.ts next dev",
    "build": "cross-env PAYLOAD_CONFIG_PATH=payload.config.ts next build",
    "start": "cross-env PAYLOAD_CONFIG_PATH=payload.config.ts next start",
    "payload": "cross-env PAYLOAD_CONFIG_PATH=payload.config.ts payload",
    "generate:blocks": "ts-node scripts/generatePayloadBlocks.ts"
  }
}
```

## 🗄️ Step 4: Start MongoDB

### Option A: Local MongoDB

```bash
# macOS (with Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

### Option B: MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env.local`

## 🎨 Step 5: Create Your First Admin User

Start the development server:

```bash
npm run dev
```

Navigate to: `http://localhost:3000/admin`

You'll see the Payload admin interface. Create your first admin user:
- Email: `admin@sarayasolutions.com`
- Password: (choose a strong password)

## 📄 Step 6: Create Your First Page

1. In the admin panel, click **Pages** in the sidebar
2. Click **Create New**
3. Fill in the form:
   - **Title**: "Home"
   - **Slug**: "home"
   - **Language**: Bosnian
   - **Status**: Published

4. Add a **Hero Section**:
   - Click **Add Section** → Choose **Hero**
   - **Title Start**: "Dobrodošli u"
   - **Title Gradient**: "Saraya Solutions"
   - **Description**: "Vodimo vas kroz digitalnu transformaciju"

5. Add a **CTA Section**:
   - Click **Add Section** → Choose **CTA**
   - **Title**: "Spremni za"
   - **Title Highlight**: "digitalnu transformaciju?"
   - **Description**: "Kontaktirajte nas danas"

6. Click **Save**

## 🌐 Step 7: View Your Page

Your page is now live at: `http://localhost:3000/cms/home`

## 🎯 Step 8: Add More Sections

Try adding these sections to your page:

### Features Section
```
Badge: "Naše usluge"
Title: "Što"
Title Highlight: "nudimo"
Features:
  - Icon: wifi
    Title: "Wi-Fi Rješenja"
    Description: "Napredna Wi-Fi infrastruktura"
  - Icon: smartphone
    Title: "Mobilne aplikacije"
    Description: "iOS i Android razvoj"
```

### Partners Section
```
Title: "Kompanije s kojima"
Title Highlight: "sarađujemo"
Partners:
  - Name: "Coca-Cola"
    Logo: (upload logo)
  - Name: "BH Telecom"
    Logo: (upload logo)
```

## 🔄 Step 9: Fetch Data in Your Components

### Server Component (Recommended)

```typescript
// app/page.tsx
import { getPageBySlug } from '@/lib/payload/getPage';
import RenderBlocks from '@/components/payload/RenderBlocks';

export default async function HomePage() {
  const page = await getPageBySlug('home', 'bs');
  
  if (!page) {
    return <div>Page not found</div>;
  }

  return <RenderBlocks sections={page.sections} />;
}

export const revalidate = 60; // ISR: Revalidate every 60 seconds
```

### Client Component

```typescript
'use client';

import { useEffect, useState } from 'react';
import { fetchPageFromAPI } from '@/lib/payload/getPage';
import RenderBlocks from '@/components/payload/RenderBlocks';

export default function ClientPage() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchPageFromAPI('home', 'bs').then(setPage);
  }, []);

  if (!page) return <div>Loading...</div>;

  return <RenderBlocks sections={page.sections} />;
}
```

## 🎨 Step 10: Customize Your Blocks

### Add a New Block

1. Create block definition:

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
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'author', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
      ],
    },
  ],
};
```

2. Register in Pages collection:

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

3. Create component:

```typescript
// src/components/sections/Testimonials.tsx
export default function Testimonials({ title, testimonials }) {
  return (
    <section className="py-24">
      <h2>{title}</h2>
      {testimonials.map((t, i) => (
        <div key={i}>
          <p>"{t.quote}"</p>
          <p>- {t.author}, {t.role}</p>
        </div>
      ))}
    </section>
  );
}
```

4. Map to component:

```typescript
// src/components/payload/RenderBlocks.tsx
import Testimonials from '@/components/sections/Testimonials';

const blockComponents = {
  // ...
  testimonials: Testimonials,
};
```

## 🔍 Testing Your Setup

### 1. Check Payload Admin
```
✅ http://localhost:3000/admin - Should show admin panel
```

### 2. Check API
```bash
curl http://localhost:3000/api/pages
```

Should return:
```json
{
  "docs": [...],
  "totalDocs": 1
}
```

### 3. Check Page Rendering
```
✅ http://localhost:3000/cms/home - Should show your page
```

## 🐛 Troubleshooting

### MongoDB Connection Error

**Error:** `MongoServerError: Authentication failed`

**Solution:**
```bash
# Check MongoDB is running
mongosh

# Or use MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/saraya-cms
```

### Payload Admin Not Loading

**Error:** `PAYLOAD_SECRET is missing`

**Solution:**
```bash
# Make sure .env.local exists and has PAYLOAD_SECRET
echo "PAYLOAD_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")" >> .env.local
```

### Build Errors

**Error:** `Cannot find module 'payload/config'`

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Kill process on port 3000
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## 📚 Next Steps

1. **Read the full documentation**: [PAYLOAD_CMS_INTEGRATION.md](./PAYLOAD_CMS_INTEGRATION.md)
2. **Check examples**: [PAYLOAD_EXAMPLES.md](./PAYLOAD_EXAMPLES.md)
3. **Auto-generate blocks**: Run `npm run generate:blocks`
4. **Set up webhooks** for automatic revalidation
5. **Configure preview mode** for content editors
6. **Add more collections** (Blog, Products, etc.)

## 🎉 You're Done!

You now have a fully functional Payload CMS integrated with your Next.js + Storybook project!

### What You Can Do Now:

✅ Create pages in Payload admin  
✅ Compose pages from Storybook components  
✅ Manage content without touching code  
✅ Preview changes before publishing  
✅ Support multiple languages  
✅ Optimize with ISR  

## 💡 Pro Tips

1. **Use ISR**: Set `revalidate` in your pages for better performance
2. **Cache API calls**: Use `unstable_cache` for frequently accessed data
3. **Set up webhooks**: Auto-revalidate when content changes
4. **Use TypeScript**: Generate types with `npm run payload generate:types`
5. **Backup your data**: Regularly export your MongoDB database

## 🆘 Need Help?

- 📖 [Full Documentation](./PAYLOAD_CMS_INTEGRATION.md)
- 💬 [Payload Discord](https://discord.gg/payload)
- 🐛 [Report Issues](https://github.com/payloadcms/payload/issues)
- 📧 Email: support@sarayasolutions.com

Happy building! 🚀
