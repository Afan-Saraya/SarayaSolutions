"use client";

import { MapPin } from "lucide-react";
import Badge from "../../ui/Badge";

export interface CoverageHeaderProps {
  /** Badge text */
  badge?: string;
  /** Title (first part) */
  titleStart?: string;
  /** Title (gradient part) */
  titleGradient?: string;
  /** Description text */
  description?: string;
}

export default function CoverageHeader({
  badge = "Sarajevo & Okolina",
  titleStart = "Saraya Mreža",
  titleGradient = "Zone Pokrivenosti",
  description = "Saraya je etablirala svoju Wi-Fi mrežu u Sarajevu i okolini s besplatnim pristupom.",
}: CoverageHeaderProps) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <Badge variant="secondary" className="mb-3 md:mb-4">
        <MapPin size={14} className="mr-2" />
        {badge}
      </Badge>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
        {titleStart} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
