import React from "react";
import { Calendar, Sparkles, Users, Award } from "lucide-react";

interface AboutStatsCardsProps {
  language?: string;
}

const getStats = (language: string) => [
  { value: "10+", label: language === "bs" ? "Godina iskustva" : "Years of experience", icon: Calendar },
  { value: "12+", label: language === "bs" ? "AI rješenja" : "AI solutions", icon: Sparkles },
  { value: "52+", label: language === "bs" ? "Zadovoljnih klijenata" : "Satisfied clients", icon: Users },
  { value: "90+", label: language === "bs" ? "Završenih projekata" : "Completed projects", icon: Award },
];

export default function AboutStatsCards({ language = "bs" }: AboutStatsCardsProps) {
  const stats = getStats(language);

  return (
    <div data-gsap="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          data-gsap="stat"
          className="p-6 rounded-2xl bg-background-card border border-primary-500/20 text-center group hover:border-primary-500/40 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <stat.icon className="text-primary-400" size={24} />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-foreground-muted text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
