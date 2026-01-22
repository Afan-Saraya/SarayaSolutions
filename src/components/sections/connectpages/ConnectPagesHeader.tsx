"use client";

import Badge from "@/components/ui/Badge";

export interface ConnectPagesHeaderProps {
  badge?: string;
  titleStart?: string;
  titleGradient?: string;
  description?: string;
}

export default function ConnectPagesHeader({
  badge = "Na Captive Portalu",
  titleStart = "Saraya Connect",
  titleGradient = "Stranice",
  description = "Pored osnovne stranice za prijavu, korisnici na našoj javnoj Wi-Fi mreži imaju pristup ekskluzivnim stranicama koje pružaju dodatnu vrijednost.",
}: ConnectPagesHeaderProps) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <Badge variant="accent" className="mb-3">
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
