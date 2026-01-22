"use client";

interface PortfolioHeaderProps {
  title: string;
  titleGradient: string;
  description: string;
}

export default function PortfolioHeader({
  title,
  titleGradient,
  description,
}: PortfolioHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
