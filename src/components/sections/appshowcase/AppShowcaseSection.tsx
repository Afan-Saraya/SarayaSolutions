"use client";

import AppShowcaseHeader from "./AppShowcaseHeader";
import AppShowcaseCards from "./AppShowcaseCards";

interface App {
  name: string;
  type: string;
  description: string;
  url: string;
}

interface AppShowcaseSectionProps {
  title: string;
  titleGradient: string;
  apps: App[];
}

export default function AppShowcaseSection({
  title,
  titleGradient,
  apps,
}: AppShowcaseSectionProps) {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <AppShowcaseHeader 
          title={title}
          titleGradient={titleGradient}
        />
        <AppShowcaseCards apps={apps} />
      </div>
    </section>
  );
}
