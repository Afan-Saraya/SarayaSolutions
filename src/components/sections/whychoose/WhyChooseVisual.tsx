"use client";

import { MapPin, Award, Users, Rocket, LucideIcon } from "lucide-react";
import Image from "next/image";

export interface StatItem {
  value: string;
  label: string;
  icon: "award" | "rocket" | "users" | "mappin";
}

export interface WhyChooseVisualProps {
  /** Logo image source */
  logoSrc?: string;
  /** Logo alt text */
  logoAlt?: string;
  /** Stats array */
  stats?: StatItem[];
  /** Show logo card */
  showLogo?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  rocket: Rocket,
  users: Users,
  mappin: MapPin,
};

const defaultStats: StatItem[] = [
  { value: "10+", label: "Godina iskustva", icon: "award" },
  { value: "90+", label: "Završenih projekata", icon: "rocket" },
  { value: "52+", label: "Zadovoljnih klijenata", icon: "users" },
  { value: "3", label: "Wi-Fi zone u Sarajevu", icon: "mappin" },
];

export default function WhyChooseVisual({
  logoSrc = "/images/logoSaraya.png",
  logoAlt = "Saraya Solutions",
  stats = defaultStats,
  showLogo = true,
}: WhyChooseVisualProps) {
  return (
    <div className="relative">
      {/* Logo Display */}
      {showLogo && (
        <div className="mb-6 md:mb-8 p-6 md:p-8 rounded-2xl bg-background-card border border-primary-500/20 flex items-center justify-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={280}
            height={80}
            className="w-48 md:w-64 h-auto"
          />
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {stats.map((stat) => {
          const IconComponent = iconMap[stat.icon] || Award;
          return (
            <div
              key={stat.label}
              className="p-4 md:p-6 rounded-xl bg-background-card border border-primary-500/10 hover:border-primary-500/30 transition-all hover:scale-[1.03]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                  <IconComponent className="text-primary-400" size={16} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
              </div>
              <div className="text-foreground-muted text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
