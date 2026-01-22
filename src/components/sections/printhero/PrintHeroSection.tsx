"use client";

import { Printer, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";

interface QuickBenefit {
  icon: LucideIcon;
  text: string;
}

interface PrintHeroSectionProps {
  badge: string;
  title: string;
  titleGradient: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  quickBenefits: QuickBenefit[];
}

export default function PrintHeroSection({
  badge,
  title,
  titleGradient,
  description,
  primaryButtonText,
  secondaryButtonText,
  quickBenefits,
}: PrintHeroSectionProps) {
  return (
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-accent-green/20 rounded-full blur-[120px]" />
      <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div data-gsap="hero-title" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/20 border border-accent-green/30 mb-4">
            <Printer className="text-accent-green" size={14} />
            <span className="text-accent-green text-xs font-medium">{badge}</span>
          </div>
          
          <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
            {title} <span className="text-gradient">{titleGradient}</span>
          </h1>

          <p data-gsap="hero-desc" className="text-sm md:text-base lg:text-lg text-foreground-muted mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div data-gsap="hero-buttons" className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            <Button variant="primary" size="lg">
              {primaryButtonText}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg">{secondaryButtonText}</Button>
          </div>

          {/* Quick Benefits */}
          <div data-gsap="hero-desc" className="flex flex-wrap justify-center gap-4 md:gap-8">
            {quickBenefits.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="text-accent-green" size={16} />
                <span className="text-foreground-muted text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
