"use client";

import { LucideIcon } from "lucide-react";
import PlatformsHeader from "./PlatformsHeader";
import PlatformsCards from "./PlatformsCards";

interface Platform {
  name: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  color: string;
}

interface PlatformsSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  platforms: Platform[];
}

export default function PlatformsSection({
  title,
  titleGradient,
  description,
  platforms,
}: PlatformsSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <PlatformsHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <PlatformsCards platforms={platforms} />
      </div>
    </section>
  );
}
