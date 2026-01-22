"use client";

import PortfolioHeader from "./PortfolioHeader";
import PortfolioCards from "./PortfolioCards";

interface PortfolioProject {
  title: string;
  category: string;
  url: string;
  description: string;
  stats: string;
}

interface PortfolioSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  projects: PortfolioProject[];
}

export default function PortfolioSection({
  title,
  titleGradient,
  description,
  projects,
}: PortfolioSectionProps) {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div data-gsap="parallax" className="absolute top-0 right-0 w-64 md:w-[400px] h-64 md:h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <PortfolioHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <PortfolioCards projects={projects} />
      </div>
    </section>
  );
}
