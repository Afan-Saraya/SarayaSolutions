"use client";

export interface StatItem {
  value: string;
  label: string;
  color: "green" | "purple" | "cyan" | "pink";
}

export interface IndustryStatsProps {
  stats?: StatItem[];
}

const colorClasses = {
  green: "text-accent-green",
  purple: "text-primary-400",
  cyan: "text-cyan-400",
  pink: "text-pink-400",
};

const defaultStats: StatItem[] = [
  { value: "+45%", label: "Povrat", color: "green" },
  { value: "+30%", label: "Email", color: "purple" },
  { value: "+25%", label: "Boravak", color: "cyan" },
  { value: "+20%", label: "Prodaja", color: "pink" },
];

export default function IndustryStats({
  stats = defaultStats,
}: IndustryStatsProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {stats.map((stat, index) => {
        const colorClass = colorClasses[stat.color];
        return (
          <div
            key={index}
            className="p-4 rounded-2xl bg-background-card border border-white/10 text-center"
          >
            <p className={`text-xl md:text-2xl font-bold ${colorClass} mb-1`}>
              {stat.value}
            </p>
            <p className="text-foreground-muted text-xs">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
