"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export interface HeroVisualProps {
  /** Video source URL */
  videoSrc?: string;
  /** Years of experience stat */
  statYears?: string;
  /** Years label */
  statYearsLabel?: string;
  /** Projects count stat */
  statProjects?: string;
  /** Projects label */
  statProjectsLabel?: string;
  /** Support stat */
  statSupport?: string;
  /** Support label */
  statSupportLabel?: string;
  /** Technology stat */
  statTech?: string;
  /** Technology label */
  statTechLabel?: string;
  /** Domestic product label */
  statDomesticTitle?: string;
  /** Domestic product sublabel */
  statDomesticSubtitle?: string;
  /** Show floating stats */
  showStats?: boolean;
}

export default function HeroVisual({
  videoSrc = "/images/VRExperience.mp4",
  statYears = "10+",
  statYearsLabel,
  statProjects = "90+",
  statProjectsLabel,
  statSupport = "24/7",
  statSupportLabel,
  statTech = "AI",
  statTechLabel,
  statDomesticTitle,
  statDomesticSubtitle,
  showStats = true,
}: HeroVisualProps) {
  const { language } = useLanguage();

  const finalYearsLabel = statYearsLabel ?? (language === "bs" ? "Godina iskustva" : "Years of experience");
  const finalProjectsLabel = statProjectsLabel ?? (language === "bs" ? "Projekata" : "Projects");
  const finalSupportLabel = statSupportLabel ?? (language === "bs" ? "Podrška" : "Support");
  const finalTechLabel = statTechLabel ?? (language === "bs" ? "Tehnologija" : "Technology");
  const finalDomesticTitle = statDomesticTitle ?? (language === "bs" ? "Domaći" : "Domestic");
  const finalDomesticSubtitle = statDomesticSubtitle ?? (language === "bs" ? "proizvod" : "product");

  return (
    <div className="relative">
      <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square max-w-xs sm:max-w-sm lg:max-w-lg mx-auto">
        {/* Gradient Circle Background */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-primary-500/30 to-pink-500/30 blur-2xl" />

        {/* Video Container */}
        <div data-gsap="hero-video" className="absolute inset-1 sm:inset-2 lg:inset-4 rounded-xl lg:rounded-2xl bg-background-card border border-primary-500/20 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-primary-500/20 rounded-xl lg:rounded-2xl pointer-events-none" />
        </div>

        {/* Floating Stats Cards - Desktop */}
        {showStats && (
          <div className="hidden lg:block">
            <div data-gsap="hero-stat" className="absolute -top-4 -right-4 p-3 rounded-xl bg-background-card/90 backdrop-blur-sm border border-primary-500/20">
              <div className="text-2xl font-bold text-gradient">{statYears}</div>
              <div className="text-xs text-foreground-muted">{finalYearsLabel}</div>
            </div>
            <div data-gsap="hero-stat" className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-background-card/90 backdrop-blur-sm border border-accent-green/20">
              <div className="text-2xl font-bold text-accent-green">{statProjects}</div>
              <div className="text-xs text-foreground-muted">{finalProjectsLabel}</div>
            </div>
            <div data-gsap="hero-stat" className="absolute top-1/2 -right-8 p-3 rounded-xl bg-background-card/90 backdrop-blur-sm border border-pink-500/20">
              <div className="text-2xl font-bold text-pink-400">{statSupport}</div>
              <div className="text-xs text-foreground-muted">{finalSupportLabel}</div>
            </div>
            <div data-gsap="hero-stat" className="absolute top-1/4 -left-8 p-3 rounded-xl bg-background-card/90 backdrop-blur-sm border border-cyan-500/20">
              <div className="text-2xl font-bold text-cyan-400">{statTech}</div>
              <div className="text-xs text-foreground-muted">{finalTechLabel}</div>
            </div>
            <div data-gsap="hero-stat" className="absolute -bottom-4 -right-4 p-3 rounded-xl bg-background-card/90 backdrop-blur-sm border border-primary-500/20 flex items-center gap-2">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/images/bih-znak.png" alt="BiH" fill className="object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">{finalDomesticTitle}</div>
                <div className="text-xs text-foreground-muted leading-tight">{finalDomesticSubtitle}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Stats Grid */}
      {showStats && (
        <div className="grid grid-cols-5 gap-1.5 mt-4 lg:hidden">
          <div data-gsap="hero-stat" className="p-2 rounded-lg bg-background-card/80 backdrop-blur-sm border border-primary-500/20 text-center">
            <div className="text-sm sm:text-base font-bold text-gradient">{statYears}</div>
            <div className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">{finalYearsLabel}</div>
          </div>
          <div data-gsap="hero-stat" className="p-2 rounded-lg bg-background-card/80 backdrop-blur-sm border border-accent-green/20 text-center">
            <div className="text-sm sm:text-base font-bold text-accent-green">{statProjects}</div>
            <div className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">{finalProjectsLabel}</div>
          </div>
          <div data-gsap="hero-stat" className="p-2 rounded-lg bg-background-card/80 backdrop-blur-sm border border-pink-500/20 text-center">
            <div className="text-sm sm:text-base font-bold text-pink-400">{statSupport}</div>
            <div className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">{finalSupportLabel}</div>
          </div>
          <div data-gsap="hero-stat" className="p-2 rounded-lg bg-background-card/80 backdrop-blur-sm border border-cyan-500/20 text-center">
            <div className="text-sm sm:text-base font-bold text-cyan-400">{statTech}</div>
            <div className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">{finalTechLabel}</div>
          </div>
          <div data-gsap="hero-stat" className="p-2 rounded-lg bg-background-card/80 backdrop-blur-sm border border-primary-500/20 text-center flex flex-col items-center justify-center">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 mb-0.5">
              <Image src="/images/bih-znak.png" alt="BiH" fill className="object-contain" />
            </div>
            <div className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">{finalDomesticTitle} {finalDomesticSubtitle}</div>
          </div>
        </div>
      )}
    </div>
  );
}
