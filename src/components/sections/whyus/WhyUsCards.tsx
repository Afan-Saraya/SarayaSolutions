"use client";

import { LucideIcon } from "lucide-react";

interface WhyUsItem {
  icon: LucideIcon;
  text: string;
}

interface WhyUsCardsProps {
  items: WhyUsItem[];
}

export default function WhyUsCards({ items }: WhyUsCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          data-gsap="card" 
          className="flex items-center gap-3 p-3 rounded-xl bg-background-card border border-primary-500/10"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
            <item.icon className="text-primary-400" size={16} />
          </div>
          <span className="text-white text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
