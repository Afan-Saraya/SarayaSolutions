"use client";

interface WhyUsHeaderProps {
  title: string;
  titleGradient: string;
}

export default function WhyUsHeader({
  title,
  titleGradient,
}: WhyUsHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8">
      <h2 className="text-xl md:text-3xl font-bold mb-2">
        {title} <span className="text-gradient">{titleGradient}</span>?
      </h2>
    </div>
  );
}
