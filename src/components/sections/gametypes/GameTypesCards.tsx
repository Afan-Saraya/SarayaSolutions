"use client";

import { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

interface GameType {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "purple" | "green" | "cyan";
}

interface GameTypesCardsProps {
  gameTypes: GameType[];
}

export default function GameTypesCards({ gameTypes }: GameTypesCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {gameTypes.map((game) => (
        <Card key={game.title} glow={game.color === "purple" ? "purple" : "green"}>
          <div data-gsap="card">
            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
              game.color === "purple" ? "bg-primary-500/20" : game.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
            }`}>
              <game.icon className={game.color === "purple" ? "text-primary-400" : game.color === "green" ? "text-accent-green" : "text-cyan-400"} size={20} />
            </div>
            <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">{game.title}</h3>
            <p className="text-foreground-muted text-xs md:text-base">{game.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
