"use client";

import { Monitor, LayoutGrid, LucideIcon } from "lucide-react";

export interface AdvertisingFormatCardProps {
  icon: "monitor" | "layout";
  title: string;
  description: string;
}

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  layout: LayoutGrid,
};

export default function AdvertisingFormatCard({ icon, title, description }: AdvertisingFormatCardProps) {
  const IconComponent = iconMap[icon];
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-background-card border border-white/5">
      <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
        <IconComponent className="text-primary-400" size={20} />
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-foreground-muted text-sm">{description}</p>
      </div>
    </div>
  );
}
