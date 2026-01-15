"use client";

export interface FeaturesHeaderProps {
  /** Badge text above title */
  badge?: string;
  /** Main title (supports HTML for gradient text) */
  title?: string;
  /** Description text */
  description?: string;
}

export default function FeaturesHeader({
  badge = "Naša ponuda",
  title = 'Proizvodi i <span class="text-gradient">usluge</span>',
  description = "Kompletna tehnološka rješenja za vaše poslovanje - od hardvera do softvera",
}: FeaturesHeaderProps) {
  return (
    <div className="text-center mb-10 md:mb-16">
      <span className="text-primary-400 text-xs md:text-sm font-medium tracking-wider uppercase">
        {badge}
      </span>
      <h2 
        className="text-xl md:text-3xl lg:text-4xl font-bold mt-2 mb-3 md:mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
