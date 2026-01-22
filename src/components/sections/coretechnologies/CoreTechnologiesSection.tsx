"use client";

import { LucideIcon } from "lucide-react";
import CoreTechHeader from "./CoreTechHeader";
import CoreTechCards from "./CoreTechCards";

interface Technology {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  applications: string[];
  color: "purple" | "green" | "blue" | "cyan";
}

interface CoreTechnologiesSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  technologies: Technology[];
}

export default function CoreTechnologiesSection({
  title,
  titleGradient,
  description,
  technologies,
}: CoreTechnologiesSectionProps) {
  return (
    <section className="py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <CoreTechHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <CoreTechCards technologies={technologies} />
      </div>
    </section>
  );
}
