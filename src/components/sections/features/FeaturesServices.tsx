"use client";

import { Globe, Bot, Gamepad2, Printer, LucideIcon } from "lucide-react";
import Link from "next/link";

export interface ServiceItem {
  title: string;
  icon: "globe" | "bot" | "gamepad" | "printer";
  href: string;
  color: "purple" | "green" | "cyan" | "pink";
}

export interface FeaturesServicesProps {
  /** Label above services grid */
  label?: string;
  /** Array of services */
  services?: ServiceItem[];
}

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  bot: Bot,
  gamepad: Gamepad2,
  printer: Printer,
};

const defaultServices: ServiceItem[] = [
  { title: "Web rješenja", icon: "globe", href: "/services/web-solutions", color: "purple" },
  { title: "Aplikacije", icon: "bot", href: "/services/applications", color: "cyan" },
  { title: "Igre", icon: "gamepad", href: "/services/games", color: "pink" },
  { title: "Print", icon: "printer", href: "/services/print", color: "green" },
];

export default function FeaturesServices({
  label = "Također nudimo",
  services = defaultServices,
}: FeaturesServicesProps) {
  return (
    <>
      <div className="text-center mb-6">
        <span className="text-foreground-muted text-xs md:text-sm">{label}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Globe;
          return (
            <Link href={service.href} key={service.title}>
              <div
                className="p-4 md:p-6 rounded-xl bg-background-card border border-primary-500/10 hover:border-primary-500/30 transition-all text-center group cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  service.color === "purple" ? "bg-primary-500/20" 
                  : service.color === "green" ? "bg-accent-green/20"
                  : service.color === "cyan" ? "bg-cyan-500/20"
                  : "bg-accent-pink/20"
                }`}>
                  <IconComponent className={`${
                    service.color === "purple" ? "text-primary-400" 
                    : service.color === "green" ? "text-accent-green"
                    : service.color === "cyan" ? "text-cyan-400"
                    : "text-accent-pink"
                  }`} size={20} />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
