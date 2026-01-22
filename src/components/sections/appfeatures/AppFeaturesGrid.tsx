"use client";

import { LucideIcon } from "lucide-react";

interface AppFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface AppFeaturesGridProps {
  features: AppFeature[];
}

export default function AppFeaturesGrid({ features }: AppFeaturesGridProps) {
  return (
    <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          data-gsap="card"
          className="p-4 md:p-6 rounded-2xl bg-background-card border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
            <feature.icon className="text-cyan-400" size={24} />
          </div>
          <h3 className="text-sm md:text-base font-bold text-white mb-1">{feature.title}</h3>
          <p className="text-foreground-muted text-xs">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}
