"use client";

import { Megaphone, ShoppingBag, BarChart3, LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: "megaphone" | "shopping" | "chart";
}

export interface PortalFeaturesProps {
  /** Array of feature items */
  features?: FeatureItem[];
}

const iconMap: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  shopping: ShoppingBag,
  chart: BarChart3,
};

const defaultFeatures: FeatureItem[] = [
  {
    title: "Brendirani Captive Portal",
    description: "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand i komunicira s korisnicima.",
    icon: "megaphone",
  },
  {
    title: "Marketing & Promocije",
    description: "Prikazujte ponude, najave i promocije korisnicima prilikom spajanja na Wi-Fi.",
    icon: "shopping",
  },
  {
    title: "Analitika Ponašanja",
    description: "Pratite kako se korisnici kreću, koliko ostaju i što ih zanima — podaci za bolje odluke.",
    icon: "chart",
  },
];

export default function PortalFeatures({
  features = defaultFeatures,
}: PortalFeaturesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
      {features.map((feature) => {
        const Icon = iconMap[feature.icon] || Megaphone;
        const colorClasses = 
          feature.icon === "megaphone" 
            ? { border: "border-primary-500/20 hover:border-primary-500/40", bg: "bg-primary-500/20", icon: "text-primary-400" }
            : feature.icon === "shopping"
            ? { border: "border-accent-green/20 hover:border-accent-green/40", bg: "bg-accent-green/20", icon: "text-accent-green" }
            : { border: "border-cyan-500/20 hover:border-cyan-500/40", bg: "bg-cyan-500/20", icon: "text-cyan-400" };
        
        return (
          <div 
            key={feature.title} 
            className={`p-6 rounded-2xl bg-background-card border transition-all hover:scale-[1.02] ${colorClasses.border}`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses.bg}`}>
              <Icon className={colorClasses.icon} size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">{feature.title}</h3>
            <p className="text-foreground-muted text-sm">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
