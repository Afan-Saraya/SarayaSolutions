"use client";

import { LucideIcon } from "lucide-react";
import AppFeaturesHeader from "./AppFeaturesHeader";
import AppFeaturesGrid from "./AppFeaturesGrid";

interface AppFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface AppFeaturesSectionProps {
  title: string;
  titleGradient: string;
  features: AppFeature[];
}

export default function AppFeaturesSection({
  title,
  titleGradient,
  features,
}: AppFeaturesSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <AppFeaturesHeader 
          title={title}
          titleGradient={titleGradient}
        />
        <AppFeaturesGrid features={features} />
      </div>
    </section>
  );
}
