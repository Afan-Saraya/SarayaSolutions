"use client";

import { MapPin, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface WhyChooseContentProps {
  /** Location text */
  location?: string;
  /** Badge text */
  badgeText?: string;
  /** Show domestic badge */
  showBadge?: boolean;
  /** Title (first part) */
  titleStart?: string;
  /** Title (gradient part) */
  titleGradient?: string;
  /** Description text */
  description?: string;
  /** Highlights list */
  highlights?: string[];
  /** Link text */
  linkText?: string;
  /** Link href */
  linkHref?: string;
}

export default function WhyChooseContent({
  location = "Sarajevo, BiH",
  badgeText = "Domaći proizvod iz BiH",
  showBadge = true,
  titleStart = "Zašto odabrati",
  titleGradient = "Saraya Solutions?",
  description = "Saraya Solutions je bosanskohercegovačka tehnološka kompanija koja razvija inovativna digitalna rješenja. Naši proizvodi su rezultat godina istraživanja i razvoja, prilagođeni potrebama modernog poslovanja.",
  highlights = [
    "Vlastita Wi-Fi mreža u centru Sarajeva",
    "AI avatari koji govore 99+ jezika",
    "4K interaktivni displeji",
    "Captive portal s marketing automatizacijom",
    "Podrška i održavanje 24/7",
  ],
  linkText = "Saznajte više o nama",
  linkHref = "/about",
}: WhyChooseContentProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <MapPin className="text-primary-400" size={18} />
          <span className="text-primary-400 text-xs md:text-sm font-medium tracking-wider uppercase">
            {location}
          </span>
        </div>
        {showBadge && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20">
            <div className="relative w-4 h-4 md:w-5 md:h-5 flex-shrink-0">
              <Image
                src="/images/bih-znak.png"
                alt="BiH"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-primary-400 text-xs md:text-sm font-medium">{badgeText}</span>
          </div>
        )}
      </div>
      
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
        {titleStart}{" "}
        <span className="text-gradient">{titleGradient}</span>
      </h2>
      
      <p className="text-foreground-muted text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
        {description}
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-8">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0">
              <Check className="text-accent-green" size={12} />
            </div>
            <span className="text-foreground-muted text-xs md:text-sm">{highlight}</span>
          </div>
        ))}
      </div>

      <Link href={linkHref}>
        <button className="flex items-center gap-2 text-primary-400 font-medium text-sm md:text-base hover:translate-x-1 transition-transform">
          {linkText}
          <ArrowRight size={18} />
        </button>
      </Link>
    </div>
  );
}
