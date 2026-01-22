"use client";

import Card from "@/components/ui/Card";
import { Sparkles, Zap, Shield, LucideIcon } from "lucide-react";

export interface BenefitItem {
  icon: "sparkles" | "zap" | "shield";
  title: string;
  description: string;
}

export interface BenefitCardsProps {
  benefits?: BenefitItem[];
}

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  zap: Zap,
  shield: Shield,
};

const defaultBenefits: BenefitItem[] = [
  {
    icon: "sparkles",
    title: "Angažman koji konvertira",
    description:
      "Interaktivni sadržaji koji privlače pažnju i podstiču akciju — od informiranja do kupovine.",
  },
  {
    icon: "zap",
    title: "Fleksibilnost bez granica",
    description:
      "Mijenjajte sadržaj u realnom vremenu, prilagođavajte kampanje i reagirajte na trendove trenutno.",
  },
  {
    icon: "shield",
    title: "Kvaliteta koja traje",
    description:
      "Industrijski grade komponente dizajnirane za 24/7 rad u zahtjevnim uvjetima.",
  },
];

export default function BenefitCards({
  benefits = defaultBenefits,
}: BenefitCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      {benefits.map((benefit) => {
        const Icon = iconMap[benefit.icon];
        return (
          <Card key={benefit.title} glow="green">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent-green/20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Icon className="text-accent-green" size={24} />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4">
                {benefit.title}
              </h3>
              <p className="text-foreground-muted text-xs md:text-base">
                {benefit.description}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
