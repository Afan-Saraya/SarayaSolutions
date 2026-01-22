"use client";

export interface ImportanceStat {
  value: string;
  label: string;
  color: "green" | "purple" | "cyan";
}

export interface PagesImportanceProps {
  title?: string;
  description?: string;
  stats?: ImportanceStat[];
}

const colorClasses = {
  green: "text-accent-green",
  purple: "text-primary-400",
  cyan: "text-cyan-400",
};

const defaultStats: ImportanceStat[] = [
  { value: "50K+", label: "Aktivnih korisnika", color: "green" },
  { value: "100+", label: "Partnera", color: "purple" },
  { value: "24/7", label: "Dostupnost", color: "cyan" },
];

export default function PagesImportance({
  title = "Zašto su ove stranice važne?",
  description = "Saraya Connect stranice transformiraju običan Wi-Fi pristup u bogato korisničko iskustvo. Korisnici ne samo da dobivaju besplatan internet, već i pristup ekskluzivnim sadržajima, nagradama i lokalnim informacijama — sve na jednom mjestu.",
  stats = defaultStats,
}: PagesImportanceProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
      <h3 className="text-white font-bold mb-3">{title}</h3>
      <p className="text-foreground-muted text-sm mb-6 max-w-3xl">{description}</p>
      <div className="flex flex-wrap gap-8">
        {stats.map((stat, index) => {
          const colorClass = colorClasses[stat.color];
          return (
            <div key={index} className="text-center">
              <p className={`text-2xl font-bold ${colorClass}`}>{stat.value}</p>
              <p className="text-foreground-muted text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
