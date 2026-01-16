"use client";

import { Megaphone, Wifi, Utensils, Check, LucideIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";

export interface ServiceCardItem {
  icon: "megaphone" | "wifi" | "utensils";
  badge: string;
  badgeVariant: "primary" | "accent" | "secondary";
  title: string;
  description: string;
  features: string[];
  color: "purple" | "green" | "cyan";
  highlighted?: boolean;
  highlightLabel?: string;
}

export interface ServicesCardsProps {
  cards: ServiceCardItem[];
}

const iconMap: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  wifi: Wifi,
  utensils: Utensils,
};

const colorMap = {
  purple: {
    bg: "from-primary-500/10",
    border: "border-primary-500/20 hover:border-primary-500/40",
    iconBg: "bg-primary-500/20",
    iconColor: "text-primary-400",
    glow: "bg-primary-500/10 group-hover:bg-primary-500/20",
    checkColor: "text-primary-400",
  },
  green: {
    bg: "from-accent-green/10",
    border: "border-accent-green/20 hover:border-accent-green/40",
    iconBg: "bg-accent-green/20",
    iconColor: "text-accent-green",
    glow: "bg-accent-green/10 group-hover:bg-accent-green/20",
    checkColor: "text-accent-green",
  },
  cyan: {
    bg: "from-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    glow: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    checkColor: "text-cyan-400",
  },
};

export default function ServicesCards({ cards }: ServicesCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid lg:grid-cols-3 gap-6 md:gap-8">
      {cards.map((card, index) => {
        const IconComponent = iconMap[card.icon];
        const colors = colorMap[card.color];

        return (
          <div
            key={index}
            data-gsap="card"
            className={`group relative p-8 rounded-3xl bg-gradient-to-b ${colors.bg} to-transparent border ${colors.border} transition-all duration-500 ${
              card.highlighted ? "lg:-mt-4 lg:mb-4" : ""
            }`}
          >
            {/* Glow effect */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.glow} rounded-full blur-[60px] transition-all`} />

            {/* Highlight label */}
            {card.highlighted && card.highlightLabel && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-accent-green text-white text-xs font-medium">
                  {card.highlightLabel}
                </span>
              </div>
            )}

            <div className="relative">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <IconComponent className={colors.iconColor} size={32} />
              </div>

              {/* Badge */}
              <Badge variant={card.badgeVariant} className="mb-4">
                {card.badge}
              </Badge>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-foreground-muted mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {card.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className={colors.checkColor} size={16} />
                    <span className="text-foreground-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
