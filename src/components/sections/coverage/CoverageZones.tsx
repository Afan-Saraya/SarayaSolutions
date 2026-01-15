"use client";

import { MapPin, Wifi } from "lucide-react";

export interface ZoneItem {
  id: string;
  name: string;
  mapUrl: string;
  location: string;
  radius: string;
  zoneName: string;
  color: "purple" | "green" | "cyan";
  locationIcon?: string;
}

export interface CoverageZonesProps {
  /** Array of coverage zones */
  zones?: ZoneItem[];
  /** Active status text */
  activeText?: string;
}

const colorClasses = {
  purple: {
    border: "border-primary-500/20",
    shadow: "shadow-primary-500/10",
    headerBorder: "border-primary-500/10",
    iconBg: "bg-primary-500/20",
    iconColor: "text-primary-400",
    zoneBg: "bg-primary-500/20",
    zoneBorder: "border-primary-500/50",
    wifiBg: "bg-primary-500",
    wifiShadow: "shadow-primary-500/50",
    labelBg: "bg-primary-500/90",
    radiusColor: "text-primary-400",
  },
  green: {
    border: "border-accent-green/20",
    shadow: "shadow-accent-green/10",
    headerBorder: "border-accent-green/10",
    iconBg: "bg-accent-green/20",
    iconColor: "text-accent-green",
    zoneBg: "bg-accent-green/20",
    zoneBorder: "border-accent-green/50",
    wifiBg: "bg-accent-green",
    wifiShadow: "shadow-accent-green/50",
    labelBg: "bg-accent-green/90",
    radiusColor: "text-accent-green",
  },
  cyan: {
    border: "border-cyan-500/20",
    shadow: "shadow-cyan-500/10",
    headerBorder: "border-cyan-500/10",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    zoneBg: "bg-cyan-500/20",
    zoneBorder: "border-cyan-500/50",
    wifiBg: "bg-cyan-500",
    wifiShadow: "shadow-cyan-500/50",
    labelBg: "bg-cyan-500/90",
    radiusColor: "text-cyan-400",
  },
};

const defaultZones: ZoneItem[] = [
  {
    id: "centar",
    name: "Centar Sarajeva",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.4100%2C43.8560%2C18.4320%2C43.8620&layer=mapnik&marker=43.8590%2C18.4210",
    location: "Ferhadija • Titova",
    radius: "~1.2 km radius",
    zoneName: "Zona 1 - Centar",
    color: "purple",
    locationIcon: "📍",
  },
  {
    id: "skenderija",
    name: "Skenderija",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.4050%2C43.8540%2C18.4200%2C43.8600&layer=mapnik&marker=43.8570%2C18.4125",
    location: "Centar Skenderija",
    radius: "~500 m radius",
    zoneName: "Zona 2 - Skenderija",
    color: "green",
    locationIcon: "📍",
  },
  {
    id: "bjelasnica",
    name: "Bjelašnica",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.2500%2C43.7100%2C18.2900%2C43.7350&layer=mapnik&marker=43.7225%2C18.2700",
    location: "Olimpijska planina",
    radius: "~800 m radius",
    zoneName: "Zona 3 - Bjelašnica",
    color: "cyan",
    locationIcon: "🏔️",
  },
];

export default function CoverageZones({
  zones = defaultZones,
  activeText = "Aktivno",
}: CoverageZonesProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {zones.map((zone) => {
        const colors = colorClasses[zone.color];
        return (
          <div
            key={zone.id}
            className={`rounded-2xl overflow-hidden border ${colors.border} shadow-xl ${colors.shadow} bg-background-card`}
          >
            {/* Header */}
            <div className={`p-3 md:p-4 border-b ${colors.headerBorder} flex items-center justify-between`}>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full ${colors.iconBg} flex items-center justify-center`}>
                  <MapPin className={colors.iconColor} size={12} />
                </div>
                <span className="text-white font-medium text-xs md:text-sm">{zone.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-accent-green text-[10px] md:text-xs">{activeText}</span>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-[4/3]">
              <iframe
                src={zone.mapUrl}
                className="w-full h-full border-0 pointer-events-none"
                style={{ filter: 'saturate(0.8) contrast(1.1)' }}
                loading="lazy"
                title={`Saraya Wi-Fi zona - ${zone.name}`}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background-card/60 to-transparent" />
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className={`absolute w-[55%] h-[55%] rounded-full ${colors.zoneBg} border-2 ${colors.zoneBorder} border-dashed flex items-center justify-center`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${colors.wifiBg} flex items-center justify-center shadow-lg ${colors.wifiShadow}`}>
                    <Wifi className="text-white" size={16} />
                  </div>
                </div>
                <div className={`absolute bottom-[15%] px-3 py-1 rounded-full ${colors.labelBg} text-white text-[9px] md:text-xs font-medium`}>
                  {zone.zoneName}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={`p-3 md:p-4 border-t ${colors.headerBorder}`}>
              <div className="flex items-center justify-between text-[9px] md:text-xs text-foreground-muted">
                <span>{zone.locationIcon} {zone.location}</span>
                <span className={`${colors.radiusColor} font-medium`}>{zone.radius}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
