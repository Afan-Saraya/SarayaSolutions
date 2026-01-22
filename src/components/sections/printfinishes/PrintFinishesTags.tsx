import React from "react";
import { Sparkles } from "lucide-react";

interface PrintFinishesTagsProps {
  language?: string;
}

const getFinishes = (language: string) => [
  { name: language === "bs" ? "Mat laminacija" : "Matte lamination", icon: Sparkles },
  { name: language === "bs" ? "Sjaj laminacija" : "Gloss lamination", icon: Sparkles },
  { name: "UV lak", icon: Sparkles },
  { name: language === "bs" ? "Foliotisak" : "Foil stamping", icon: Sparkles },
  { name: language === "bs" ? "Reljefni tisak" : "Embossing", icon: Sparkles },
  { name: language === "bs" ? "Soft touch" : "Soft touch", icon: Sparkles },
];

export default function PrintFinishesTags({ language = "bs" }: PrintFinishesTagsProps) {
  const finishes = getFinishes(language);

  return (
    <div data-gsap="tags" className="flex flex-wrap justify-center gap-3">
      {finishes.map((finish) => (
        <div
          key={finish.name}
          data-gsap="tag"
          className="px-4 py-2 rounded-full bg-background-card border border-accent-green/20 text-white text-sm font-medium hover:border-accent-green/50 hover:bg-accent-green/10 transition-all cursor-default flex items-center gap-2"
        >
          <finish.icon className="text-accent-green" size={14} />
          {finish.name}
        </div>
      ))}
    </div>
  );
}
