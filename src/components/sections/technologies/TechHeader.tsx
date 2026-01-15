"use client";

export interface TechHeaderProps {
  /** Badge text */
  badge?: string;
  /** Title (first part) */
  titleStart?: string;
  /** Title (gradient part) */
  titleGradient?: string;
}

export default function TechHeader({
  badge = "Tehnologije",
  titleStart = "Tehnologije koje pokreću",
  titleGradient = "Vaš uspjeh",
}: TechHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        {titleStart}{" "}
        <span className="text-gradient">{titleGradient}</span>
      </h2>
    </div>
  );
}
