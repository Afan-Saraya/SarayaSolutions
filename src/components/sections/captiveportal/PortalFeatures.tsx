"use client";

import { Megaphone, ShoppingBag, BarChart3, LucideIcon } from "lucide-react";
import Card from "../../ui/Card";

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
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {features.map((feature) => {
        const Icon = iconMap[feature.icon] || Megaphone;
        return (
          <Card key={feature.title} glow="purple">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4">
                <Icon className="text-primary-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-foreground-muted text-sm">{feature.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
