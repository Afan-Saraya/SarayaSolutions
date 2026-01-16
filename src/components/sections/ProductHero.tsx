"use client";

import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProductHeroProps {
  // Title - logo image + gradient text
  logoSrc: string;
  logoAlt?: string;
  titleGradient?: string;
  // Content
  subtitle: string;
  description: string;
  features: string[];
  // Buttons
  primaryButtonText: string;
  primaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText: string;
  secondaryButtonHref?: string;
  secondaryButtonOnClick?: () => void;
  // Visual - 3D model iframe or custom
  iframeSrc?: string;
  customVisual?: ReactNode;
  // Colors
  glowColor1?: string;
  glowColor2?: string;
}

export default function ProductHero({
  logoSrc,
  logoAlt = "Saraya",
  titleGradient,
  subtitle,
  description,
  features,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonHref,
  secondaryButtonOnClick,
  iframeSrc,
  customVisual,
  glowColor1 = "bg-pink-500/15",
  glowColor2 = "bg-primary-500/20",
}: ProductHeroProps) {
  return (
    <section className="relative pt-24 pb-4 md:pt-32 md:pb-8 lg:pt-36 lg:pb-10 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient overflow-hidden" />
      <div data-gsap="parallax" className={`absolute top-1/4 left-0 w-64 md:w-[500px] h-64 md:h-[500px] ${glowColor1} rounded-full blur-[120px]`} />
      <div data-gsap="parallax" className={`absolute bottom-0 right-1/4 w-48 md:w-[400px] h-48 md:h-[400px] ${glowColor2} rounded-full blur-[100px]`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left - 3D Model / Visual */}
          <div data-gsap="hero-title" className="order-2 lg:order-1 flex justify-center lg:justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-12 bg-gradient-to-r from-primary-500/20 via-pink-500/15 to-cyan-500/20 rounded-full blur-3xl opacity-70" />
              
              {/* Visual Container */}
              {customVisual ? (
                customVisual
              ) : iframeSrc ? (
                <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-square">
                  <iframe
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    style={{ border: 'none', background: 'transparent' }}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                  />
                </div>
              ) : null}
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Title with Logo */}
            <div data-gsap="hero-title" className="mb-4 md:mb-6">
              <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-48 sm:w-56 md:w-64 lg:w-80 mx-auto lg:mx-0">
                <Image src={logoSrc} alt={logoAlt} fill className="object-contain object-center lg:object-left" />
              </div>
              {titleGradient && (
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mt-2 block">{titleGradient}</span>
              )}
            </div>
            
            {/* Subtitle */}
            <p data-gsap="hero-subtitle" className="text-base md:text-xl font-medium text-foreground mb-3 md:mb-4 max-w-lg mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* Description */}
            <p data-gsap="hero-desc" className="text-sm md:text-base text-foreground-muted mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>

            {/* Feature highlights */}
            <div data-gsap="hero-desc" className="grid grid-cols-2 gap-3 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-400" />
                  </div>
                  <span className="text-foreground-muted text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div data-gsap="hero-buttons" className="flex flex-wrap justify-center lg:justify-start gap-3">
              {primaryButtonHref ? (
                <Link href={primaryButtonHref}>
                  <Button variant="primary" size="md">{primaryButtonText}</Button>
                </Link>
              ) : (
                <Button variant="primary" size="md" onClick={primaryButtonOnClick}>{primaryButtonText}</Button>
              )}
              {secondaryButtonHref ? (
                <Link href={secondaryButtonHref}>
                  <Button variant="outline" size="md">{secondaryButtonText}</Button>
                </Link>
              ) : (
                <Button variant="outline" size="md" onClick={secondaryButtonOnClick}>{secondaryButtonText}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
