"use client";

import TechTagsHeader from "./TechTagsHeader";
import TechTagsList from "./TechTagsList";

interface TechTagsSectionProps {
  title: string;
  titleGradient: string;
  technologies: string[];
}

export default function TechTagsSection({
  title,
  titleGradient,
  technologies,
}: TechTagsSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <TechTagsHeader 
          title={title}
          titleGradient={titleGradient}
        />
        <TechTagsList technologies={technologies} />
      </div>
    </section>
  );
}
