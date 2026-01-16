"use client";

export interface ServicesHeaderProps {
  title: string;
  titleHighlight: string;
}

export default function ServicesHeader({ title, titleHighlight }: ServicesHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        {title} <span className="text-gradient">{titleHighlight}</span>
      </h2>
    </div>
  );
}
