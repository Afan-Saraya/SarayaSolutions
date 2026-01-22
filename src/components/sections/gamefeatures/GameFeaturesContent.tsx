"use client";

import { Check } from "lucide-react";

interface GameFeaturesContentProps {
  title: string;
  titleGradient: string;
  description: string;
  features: string[];
}

export default function GameFeaturesContent({
  title,
  titleGradient,
  description,
  features,
}: GameFeaturesContentProps) {
  return (
    <div data-gsap="content-left">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-8 leading-relaxed">
        {description}
      </p>

      <div data-gsap="list" className="grid grid-cols-1 gap-2 md:gap-4">
        {features.map((feature, index) => (
          <div key={index} data-gsap="list-item" className="flex items-center gap-2 md:gap-3">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
              <Check className="text-accent-green" size={10} />
            </div>
            <span className="text-foreground-muted text-xs md:text-base">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
