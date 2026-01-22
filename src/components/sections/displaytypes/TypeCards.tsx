"use client";

import { LucideIcon } from "lucide-react";

export interface TypeItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "purple" | "green" | "cyan";
  features: string[];
}

export interface TypeCardsProps {
  types: TypeItem[];
}

export default function TypeCards({ types }: TypeCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
      {types.map((type) => (
        <div
          key={type.id}
          data-gsap="card"
          className={`p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 h-full ${
            type.color === "purple"
              ? "bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-primary-500/30 hover:shadow-primary-500/20 hover:shadow-xl"
              : type.color === "green"
              ? "bg-gradient-to-br from-accent-green/20 to-emerald-600/10 border-accent-green/30 hover:shadow-accent-green/20 hover:shadow-xl"
              : "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-xl"
          }`}
        >
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 ${
              type.color === "purple"
                ? "bg-primary-500/20"
                : type.color === "green"
                ? "bg-accent-green/20"
                : "bg-cyan-500/20"
            }`}
          >
            <type.icon
              className={
                type.color === "purple"
                  ? "text-primary-400"
                  : type.color === "green"
                  ? "text-accent-green"
                  : "text-cyan-400"
              }
              size={28}
            />
          </div>
          <h3 className="text-lg md:text-2xl font-bold text-white mb-3">{type.title}</h3>
          <p className="text-foreground-muted text-sm md:text-base mb-6">{type.description}</p>

          <div className="space-y-2">
            {type.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    type.color === "purple"
                      ? "bg-primary-500/20"
                      : type.color === "green"
                      ? "bg-accent-green/20"
                      : "bg-cyan-500/20"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 ${
                      type.color === "purple"
                        ? "text-primary-400"
                        : type.color === "green"
                        ? "text-accent-green"
                        : "text-cyan-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground-muted text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
