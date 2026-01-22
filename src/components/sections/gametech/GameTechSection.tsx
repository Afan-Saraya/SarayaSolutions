"use client";

import { LucideIcon } from "lucide-react";
import GameTechHeader from "./GameTechHeader";
import GameTechCards from "./GameTechCards";

interface GameTech {
  icon: LucideIcon;
  name: string;
  description: string;
  features: string[];
}

interface GameTechSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  technologies: GameTech[];
}

export default function GameTechSection({
  title,
  titleGradient,
  description,
  technologies,
}: GameTechSectionProps) {
  return (
    <section className="py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <GameTechHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <GameTechCards technologies={technologies} />
      </div>
    </section>
  );
}
