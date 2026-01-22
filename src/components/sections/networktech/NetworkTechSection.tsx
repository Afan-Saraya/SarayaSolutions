"use client";

import { LucideIcon } from "lucide-react";
import NetworkTechHeader from "./NetworkTechHeader";
import NetworkTechCards from "./NetworkTechCards";

interface NetworkTech {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface NetworkTechSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  technologies: NetworkTech[];
}

export default function NetworkTechSection({
  title,
  titleGradient,
  description,
  technologies,
}: NetworkTechSectionProps) {
  return (
    <section className="py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <NetworkTechHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <NetworkTechCards technologies={technologies} />
      </div>
    </section>
  );
}
