"use client";

export interface AdvertisingStatCardProps {
  value: string;
  label: string;
}

export default function AdvertisingStatCard({ value, label }: AdvertisingStatCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-background-card border border-primary-500/20 text-center">
      <p className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">{value}</p>
      <p className="text-foreground-muted text-sm">{label}</p>
    </div>
  );
}
