"use client";

import { Database, TrendingUp, Target, BarChart3, Sparkles, LucideIcon } from "lucide-react";

export interface BenefitItem {
  title: string;
  subtitle: string;
  icon: "database" | "trending" | "target" | "chart";
  color: "purple" | "green" | "cyan" | "pink";
}

export interface IndustryBenefitsProps {
  title?: string;
  benefits?: BenefitItem[];
}

const iconMap: Record<string, LucideIcon> = {
  database: Database,
  trending: TrendingUp,
  target: Target,
  chart: BarChart3,
};

const colorClasses = {
  purple: "text-primary-400",
  green: "text-accent-green",
  cyan: "text-cyan-400",
  pink: "text-pink-400",
};

const defaultBenefits: BenefitItem[] = [
  { title: "Prikupljanje Podataka", subtitle: "Email, demografija", icon: "database", color: "purple" },
  { title: "Povećanje Prodaje", subtitle: "Direktne promocije", icon: "trending", color: "green" },
  { title: "Ciljani Marketing", subtitle: "Personalizacija", icon: "target", color: "cyan" },
  { title: "Analitika", subtitle: "Real-time podaci", icon: "chart", color: "pink" },
];

export default function IndustryBenefits({
  title = "Ključne Prednosti",
  benefits = defaultBenefits,
}: IndustryBenefitsProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="text-accent-green" size={20} />
        <h3 className="text-white font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {benefits.map((item, i) => {
          const Icon = iconMap[item.icon];
          const colorClass = colorClasses[item.color];
          return (
            <div key={i} className="flex items-start gap-3">
              <Icon className={colorClass} size={18} />
              <div>
                <p className="text-white text-sm font-medium">{item.title}</p>
                <p className="text-foreground-muted text-xs">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
