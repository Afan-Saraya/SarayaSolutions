"use client";

import { LucideIcon } from "lucide-react";
import DisplayTechHeader from "./DisplayTechHeader";
import DisplayTechCards from "./DisplayTechCards";

interface DisplayTech {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface DisplayTechSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  technologies: DisplayTech[];
}

export default function DisplayTechSection({
  title,
  titleGradient,
  description,
  technologies,
}: DisplayTechSectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <DisplayTechHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <DisplayTechCards technologies={technologies} />
      </div>
    </section>
  );
}
