"use client";

import { MapPin, Wifi } from "lucide-react";
import Image from "next/image";

export interface ZoneItem {
  id: string;
  name: string;
  gifUrl: string;
  location: string;
  radius: string;
  color: "purple" | "green" | "cyan";
}

export interface CoverageZonesProps {
  /** Array of coverage zones */
  zones?: ZoneItem[];
}

const colorClasses = {
  purple: {
    wifiBg: "bg-primary-500",
  },
  green: {
    wifiBg: "bg-accent-green",
  },
  cyan: {
    wifiBg: "bg-cyan-500",
  },
};

const defaultZones: ZoneItem[] = [
  {
    id: "centar",
    name: "Centar Sarajeva",
    gifUrl: "/images/mreza-titova-carsija.gif",
    location: "Ferhadija • Titova",
    radius: "~1.2 km",
    color: "purple",
  },
  {
    id: "skenderija",
    name: "Skenderija",
    gifUrl: "/images/mreza-vilsonovo.gif",
    location: "Centar Skenderija",
    radius: "~500 m",
    color: "green",
  },
  {
    id: "bjelasnica",
    name: "Bjelašnica",
    gifUrl: "/images/mreza-bjelasnica.gif",
    location: "Olimpijska planina",
    radius: "~800 m",
    color: "cyan",
  },
];

export default function CoverageZones({
  zones = defaultZones,
}: CoverageZonesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
      {zones.map((zone) => {
        const colors = colorClasses[zone.color];
        return (
          <div
            key={zone.id}
            className="rounded-2xl overflow-hidden bg-background-card border border-white/10 hover:border-white/20 transition-all"
          >
            {/* Map/GIF */}
            <div className="relative aspect-[4/3]">
              <Image 
                src={zone.gifUrl} 
                alt={`Saraya Wi-Fi - ${zone.name}`} 
                fill 
                className="object-cover" 
                unoptimized 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
              <div className="absolute top-3 left-3 flex gap-1">
                <button className="w-6 h-6 rounded bg-white/90 flex items-center justify-center text-gray-700 text-sm font-bold">+</button>
                <button className="w-6 h-6 rounded bg-white/90 flex items-center justify-center text-gray-700 text-sm font-bold">−</button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl ${colors.wifiBg}`}>
                  <Wifi className="text-white" size={20} />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold">{zone.name}</h3>
                  <p className="text-foreground-muted text-sm flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-red-400" />{zone.location}
                  </p>
                </div>
                <span className="text-foreground-muted text-sm">{zone.radius}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
