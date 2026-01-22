"use client";

interface TechTagsHeaderProps {
  title: string;
  titleGradient: string;
}

export default function TechTagsHeader({
  title,
  titleGradient,
}: TechTagsHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-2">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
    </div>
  );
}
