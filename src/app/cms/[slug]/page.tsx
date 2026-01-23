import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPageBySlug, getAllPageSlugs } from '@/lib/payload/getPage';
import RenderBlocks from '@/components/payload/RenderBlocks';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    lang?: 'bs' | 'en';
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const language = searchParams.lang || 'bs';
  const page = await getPageBySlug(params.slug, language);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.title,
    description: page.metaDescription,
  };
}

export default async function CMSPage({ params, searchParams }: PageProps) {
  const language = searchParams.lang || 'bs';
  const page = await getPageBySlug(params.slug, language);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <RenderBlocks sections={page.layout} language={language} />
      </main>
      <Footer />
    </>
  );
}
