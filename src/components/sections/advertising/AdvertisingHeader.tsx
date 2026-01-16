"use client";

import Badge from "@/components/ui/Badge";
import { Megaphone } from "lucide-react";

export interface AdvertisingHeaderProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export default function AdvertisingHeader({
  badge,
  title,
  titleHighlight,
  description,
}: AdvertisingHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
      <Badge variant="primary" className="mb-4">
        <Megaphone size={14} className="mr-2" />
        {badge}
      </Badge>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        {title} <span className="text-gradient">{titleHighlight}</span>
      </h2>
      <p className="text-foreground-muted max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
