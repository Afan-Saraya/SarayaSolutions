"use client";

import { LucideIcon } from "lucide-react";
import GameTypesHeader from "./GameTypesHeader";
import GameTypesCards from "./GameTypesCards";

interface GameType {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "purple" | "green" | "cyan";
}

interface GameTypesSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  gameTypes: GameType[];
}

export default function GameTypesSection({
  title,
  titleGradient,
  description,
  gameTypes,
}: GameTypesSectionProps) {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4">
        <GameTypesHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <GameTypesCards gameTypes={gameTypes} />
      </div>
    </section>
  );
}
