"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

interface DomaciBadgeProps {
  variant?: "badge" | "inline" | "large";
  className?: string;
  showText?: boolean;
}

export default function DomaciBadge({ 
  variant = "badge", 
  className = "",
  showText = true 
}: DomaciBadgeProps) {
  if (variant === "large") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
          <Image
            src="/images/bih-znak.png"
            alt="Bosna i Hercegovina"
            fill
            className="object-contain"
          />
        </div>
        {showText && (
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm md:text-base">Domaći proizvod</span>
            <span className="text-foreground-muted text-xs">Bosna i Hercegovina</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
          <Image
            src="/images/bih-znak.png"
            alt="BiH"
            fill
            className="object-contain"
          />
        </div>
        {showText && (
          <span className="text-foreground-muted text-xs md:text-sm">Domaći proizvod iz BiH</span>
        )}
      </div>
    );
  }

  // Default badge variant
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 ${className}`}>
      <div className="relative w-4 h-4 md:w-5 md:h-5 flex-shrink-0">
        <Image
          src="/images/bih-znak.png"
          alt="BiH"
          fill
          className="object-contain"
        />
      </div>
      {showText && (
        <span className="text-primary-400 text-xs md:text-sm font-medium">Domaći proizvod iz BiH</span>
      )}
    </div>
  );
}
