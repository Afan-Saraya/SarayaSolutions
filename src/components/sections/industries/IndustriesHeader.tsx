"use client";

import Badge from "@/components/ui/Badge";
import { Target } from "lucide-react";

export interface IndustriesHeaderProps {
  badge?: string;
  titleStart?: string;
  titleGradient?: string;
  description?: string;
}

export default function IndustriesHeader({
  badge = "Industrije",
  titleStart = "Rješenje za",
  titleGradient = "Svaku Industriju",
  description = "Saraya Connect prilagođava se potrebama vašeg poslovanja i donosi mjerljive rezultate.",
}: IndustriesHeaderProps) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <Badge variant="accent" className="mb-3">
        <Target size={14} className="mr-2" />
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
