"use client";

import { LucideIcon } from "lucide-react";

export interface UseCaseItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface UseCaseCardsProps {
  useCases: UseCaseItem[];
}

export default function UseCaseCards({ useCases }: UseCaseCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {useCases.map((item, idx) => (
        <div
          key={idx}
          data-gsap="card"
          className="p-6 rounded-2xl bg-background-card border border-white/5 hover:border-primary-500/30 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4">
            <item.icon className="text-primary-400" size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
          <p className="text-foreground-muted text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
