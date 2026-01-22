"use client";

export interface UseCasesHeaderProps {
  title?: string;
  titleGradient?: string;
  description?: string;
}

export default function UseCasesHeader({
  title = "Gdje se",
  titleGradient = "koriste?",
  description = "Saraya Display transformira prostore u različitim industrijama.",
}: UseCasesHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">{description}</p>
    </div>
  );
}
