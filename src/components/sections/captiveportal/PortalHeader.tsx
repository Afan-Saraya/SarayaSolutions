"use client";

export interface PortalHeaderProps {
  /** Title (first part) */
  titleStart?: string;
  /** Title (gradient part) */
  titleGradient?: string;
  /** Description text */
  description?: string;
}

export default function PortalHeader({
  titleStart = "Captivni Portal /",
  titleGradient = "Hotspot Stranica",
  description = "Prilagodljivi captivni portali koji omogućavaju potpunu kontrolu nad sadržajem.",
}: PortalHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {titleStart} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
