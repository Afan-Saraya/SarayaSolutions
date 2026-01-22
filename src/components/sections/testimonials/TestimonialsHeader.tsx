"use client";

interface TestimonialsHeaderProps {
  title: string;
  titleGradient: string;
}

export default function TestimonialsHeader({
  title,
  titleGradient,
}: TestimonialsHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
    </div>
  );
}
