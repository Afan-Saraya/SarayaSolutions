"use client";

import { LucideIcon } from "lucide-react";

interface Platform {
  name: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  color: string;
}

interface PlatformsCardsProps {
  platforms: Platform[];
}

export default function PlatformsCards({ platforms }: PlatformsCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          data-gsap="card"
          className={`p-6 md:p-8 rounded-2xl border ${platform.color} hover:scale-[1.02] transition-all duration-300`}
        >
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <platform.icon className="text-white" size={28} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{platform.name}</h3>
          <p className="text-foreground-muted text-sm mb-4">{platform.description}</p>
          <div className="flex flex-wrap gap-2">
            {platform.features.map((feature, idx) => (
              <span key={idx} className="px-2 py-1 rounded-md bg-white/10 text-white/80 text-xs">
                {feature}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
