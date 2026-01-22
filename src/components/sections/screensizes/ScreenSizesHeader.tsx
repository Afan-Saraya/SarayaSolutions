"use client";

import Badge from "@/components/ui/Badge";
import { Monitor } from "lucide-react";

export interface ScreenSizesHeaderProps {
  badgeText?: string;
  title?: string;
  titleGradient?: string;
  description?: string;
}

export default function ScreenSizesHeader({
  badgeText = "Veličine",
  title = "Odaberite",
  titleGradient = "savršenu veličinu",
  description = "Od kompaktnih 32\" do impresivnih 98\" ekrana - imamo rješenje za svaki prostor.",
}: ScreenSizesHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
      <Badge variant="primary" className="mb-4">
        <Monitor size={14} className="mr-2" />
        {badgeText}
      </Badge>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">{description}</p>
    </div>
  );
}
