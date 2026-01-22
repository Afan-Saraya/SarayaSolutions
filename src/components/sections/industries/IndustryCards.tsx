"use client";

import { Coffee, Utensils, Hotel, ShoppingCart, Wifi, LucideIcon } from "lucide-react";

export interface IndustryItem {
  title: string;
  subtitle: string;
  icon: "coffee" | "utensils" | "hotel" | "shopping";
  color: "purple" | "cyan" | "green" | "pink";
}

export interface IndustryCardsProps {
  industries?: IndustryItem[];
}

const iconMap: Record<string, LucideIcon> = {
  coffee: Coffee,
  utensils: Utensils,
  hotel: Hotel,
  shopping: ShoppingCart,
};

const colorClasses = {
  purple: {
    border: "border-primary-500/20",
    bg: "bg-primary-500/20",
    icon: "text-primary-400",
  },
  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/20",
    icon: "text-cyan-400",
  },
  green: {
    border: "border-accent-green/20",
    bg: "bg-accent-green/20",
    icon: "text-accent-green",
  },
  pink: {
    border: "border-pink-500/20",
    bg: "bg-pink-500/20",
    icon: "text-pink-400",
  },
};

const defaultIndustries: IndustryItem[] = [
  { title: "Kafići & Barovi", subtitle: "Online meni & rezervacije", icon: "coffee", color: "purple" },
  { title: "Restorani", subtitle: "Online meni & rezervacije", icon: "utensils", color: "cyan" },
  { title: "Hoteli", subtitle: "Check-in & usluge", icon: "hotel", color: "green" },
  { title: "Trgovački Centri", subtitle: "Navigacija & promocije", icon: "shopping", color: "pink" },
];

export default function IndustryCards({
  industries = defaultIndustries,
}: IndustryCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 relative p-4">
      {industries.map((item, index) => {
        const Icon = iconMap[item.icon];
        const colors = colorClasses[item.color];
        return (
          <div
            key={index}
            className={`p-4 md:p-5 rounded-2xl border bg-background-card transition-all hover:scale-[1.02] ${colors.border}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${colors.bg}`}>
              <Icon className={colors.icon} size={20} />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
            <p className="text-foreground-muted text-xs">{item.subtitle}</p>
          </div>
        );
      })}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-accent-green flex items-center justify-center shadow-lg shadow-accent-green/30 z-10">
        <Wifi className="text-white" size={24} />
      </div>
    </div>
  );
}
