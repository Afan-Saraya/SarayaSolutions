"use client";

import { Smartphone } from "lucide-react";

interface App {
  name: string;
  type: string;
  description: string;
  url: string;
}

interface AppShowcaseCardsProps {
  apps: App[];
}

export default function AppShowcaseCards({ apps }: AppShowcaseCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {apps.map((app) => (
        <a
          key={app.name}
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          data-gsap="card"
          className="group p-6 rounded-2xl bg-background-card border border-primary-500/20 hover:border-primary-500/40 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Smartphone className="text-primary-400" size={24} />
            </div>
            <div>
              <span className="text-xs text-cyan-400 mb-1 block">{app.type}</span>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">{app.name}</h3>
              <p className="text-foreground-muted text-sm">{app.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
