"use client";

import { Monitor } from "lucide-react";

export interface SizeItem {
  size: string;
  ideal: string;
  color: "purple" | "green" | "blue" | "cyan";
}

export interface SizeCardsProps {
  sizes: SizeItem[];
}

export default function SizeCards({ sizes }: SizeCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {sizes.map((item, idx) => (
        <div
          key={idx}
          data-gsap="card"
          className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${
            item.color === "purple"
              ? "bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20"
              : item.color === "green"
              ? "bg-gradient-to-br from-accent-green/10 to-emerald-600/5 border-accent-green/20"
              : item.color === "blue"
              ? "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20"
              : "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
              item.color === "purple"
                ? "bg-primary-500/20"
                : item.color === "green"
                ? "bg-accent-green/20"
                : item.color === "blue"
                ? "bg-blue-500/20"
                : "bg-cyan-500/20"
            }`}
          >
            <Monitor
              className={
                item.color === "purple"
                  ? "text-primary-400"
                  : item.color === "green"
                  ? "text-accent-green"
                  : item.color === "blue"
                  ? "text-blue-400"
                  : "text-cyan-400"
              }
              size={24}
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{item.size}</h3>
          <p className="text-foreground-muted text-sm">{item.ideal}</p>
        </div>
      ))}
    </div>
  );
}
