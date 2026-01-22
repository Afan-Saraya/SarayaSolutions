"use client";

import Badge from "@/components/ui/Badge";
import { RefreshCw } from "lucide-react";

export interface PortalHeaderProps {
  /** Badge text */
  badge?: string;
  /** Title (first part) */
  titleStart?: string;
  /** Title (gradient part) */
  titleGradient?: string;
  /** Description text */
  description?: string;
}

export default function PortalHeader({
  badge = "Portal Rješenja",
  titleStart = "Captivni",
  titleGradient = "Portal",
  description = "Prilagodljivi portali koji omogućavaju potpunu kontrolu nad sadržajem.",
}: PortalHeaderProps) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <Badge variant="primary" className="mb-3">
        <RefreshCw size={14} className="mr-2" />
        {badge}
      </Badge>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {titleStart} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
