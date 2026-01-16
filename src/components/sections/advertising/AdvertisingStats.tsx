"use client";

import AdvertisingStatCard from "./AdvertisingStatCard";

export interface StatItem {
  value: string;
  label: string;
}

export interface AdvertisingStatsProps {
  stats: StatItem[];
}

export default function AdvertisingStats({ stats }: AdvertisingStatsProps) {
  return (
    <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <div key={index} data-gsap="card">
          <AdvertisingStatCard value={stat.value} label={stat.label} />
        </div>
      ))}
    </div>
  );
}
