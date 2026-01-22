"use client";

export interface WhyDisplayHeaderProps {
  title?: string;
  titleGradient?: string;
}

export default function WhyDisplayHeader({
  title = "Zašto Saraya Display predstavlja",
  titleGradient = "vašu najbolju investiciju?",
}: WhyDisplayHeaderProps) {
  return (
    <div className="text-center mb-8 md:mb-16">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
    </div>
  );
}
