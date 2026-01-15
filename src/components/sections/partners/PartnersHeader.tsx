"use client";

import { Building2 } from "lucide-react";

export interface PartnersHeaderProps {
  /** Badge text */
  badge?: string;
  /** Title (first part) */
  titleStart?: string;
  /** Title (gradient part) */
  titleGradient?: string;
  /** Description text */
  description?: string;
}

export default function PartnersHeader({
  badge = "Partneri",
  titleStart = "Kompanije s kojima",
  titleGradient = "sarađujemo",
  description = "Ponosni smo na saradnju s vodećim kompanijama u regiji",
}: PartnersHeaderProps) {
  return (
    <div className="text-center mb-10 md:mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Building2 className="text-primary-400" size={20} />
        <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">
          {badge}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {titleStart} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
