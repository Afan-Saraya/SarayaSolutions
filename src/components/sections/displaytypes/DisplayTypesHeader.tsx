"use client";

export interface DisplayTypesHeaderProps {
  title?: string;
  titleGradient?: string;
  description?: string;
}

export default function DisplayTypesHeader({
  title = "Vrste",
  titleGradient = "displaya",
  description = "Saraya Display nudi rješenja prilagođena svakom prostoru i potrebi - od unutrašnjih do vanjskih lokacija.",
}: DisplayTypesHeaderProps) {
  return (
    <>
      <div data-gsap="section-header" className="text-center mb-4 md:mb-8">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
          {title} <span className="text-gradient">{titleGradient}</span>
        </h2>
      </div>
      <p data-gsap="fade-in" className="text-foreground-muted text-xs md:text-base text-center max-w-4xl mx-auto mb-8 md:mb-16">
        {description}
      </p>
    </>
  );
}
