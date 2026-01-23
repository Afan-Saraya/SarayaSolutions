import { getPayloadClient } from '@/payload/payloadClient';

export interface PageData {
  id: string;
  title: string;
  slug: string;
  language: 'bs' | 'en';
  metaDescription?: string;
  layout: Array<{
    blockType: string;
    [key: string]: any;
  }>;
  updatedAt: string;
  createdAt: string;
}

/**
 * Fetch a page by slug from Payload CMS
 */
export async function getPageBySlug(slug: string, language: 'bs' | 'en' = 'bs'): Promise<PageData | null> {
  try {
    const payload = await getPayloadClient();
    
    const result = await payload.find({
      collection: 'pages',
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            language: {
              equals: language,
            },
          },
        ],
      },
      limit: 1,
    });

    if (result.docs.length === 0) {
      return null;
    }

    return result.docs[0] as PageData;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

/**
 * Get all published page slugs for static generation
 */
export async function getAllPageSlugs(): Promise<string[]> {
  try {
    const payload = await getPayloadClient();
    
    const result = await payload.find({
      collection: 'pages',
      limit: 1000,
    });

    return result.docs.map((doc: any) => doc.slug);
  } catch (error) {
    console.error('Error fetching page slugs:', error);
    return [];
  }
}

/**
 * Fetch page via REST API (client-side or SSR)
 */
export async function fetchPageFromAPI(slug: string, language: 'bs' | 'en' = 'bs'): Promise<PageData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
    const response = await fetch(
      `${baseUrl}/api/pages?where[slug][equals]=${slug}&where[language][equals]=${language}&limit=1`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    
    if (data.docs && data.docs.length > 0) {
      return data.docs[0];
    }

    return null;
  } catch (error) {
    console.error('Error fetching page from API:', error);
    return null;
  }
}
