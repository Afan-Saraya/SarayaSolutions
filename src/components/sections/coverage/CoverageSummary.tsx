"use client";

import { Wifi } from "lucide-react";

export interface StatItem {
  value: string;
  label: string;
  color?: "purple" | "green";
}

export interface CoverageSummaryProps {
  /** Main title */
  title?: string;
  /** Subtitle */
  subtitle?: string;
  /** Stats array */
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: "20k+", label: "Dnevnih korisnika", color: "purple" },
  { value: "99.9%", label: "Uptime", color: "green" },
];

export default function CoverageSummary({
  title = "3 aktivne zone pokrivenosti",
  subtitle = "Besplatan Wi-Fi za sve korisnike",
  stats = defaultStats,
}: CoverageSummaryProps) {
  return (
    <div className="mt-6 md:mt-10 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 via-accent-green/10 to-cyan-500/10 border border-primary-500/20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
            <Wifi className="text-primary-400" size={20} />
          </div>
          <div>
            <p className="text-white font-medium text-sm md:text-base">{title}</p>
            <p className="text-foreground-muted text-xs md:text-sm">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-xl md:text-2xl font-bold ${stat.color === "green" ? "text-accent-green" : "text-primary-400"}`}>
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
