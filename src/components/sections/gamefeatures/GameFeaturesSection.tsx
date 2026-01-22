"use client";

import GameFeaturesContent from "./GameFeaturesContent";
import GameFeaturesVisual from "./GameFeaturesVisual";

interface GameFeaturesSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  features: string[];
}

export default function GameFeaturesSection({
  title,
  titleGradient,
  description,
  features,
}: GameFeaturesSectionProps) {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <GameFeaturesContent 
            title={title}
            titleGradient={titleGradient}
            description={description}
            features={features}
          />
          <GameFeaturesVisual />
        </div>
      </div>
    </section>
  );
}
