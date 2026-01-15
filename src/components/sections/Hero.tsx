"use client";

import { Sparkles, Star, Zap, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export interface HeroProps {
  /** Main title (use <span class="text-gradient">text</span> for highlighted part) */
  title?: string;
  /** Description text below the title */
  description?: string;
  /** Primary button text */
  primaryButtonText?: string;
  /** Primary button link */
  primaryButtonLink?: string;
  /** Secondary button text */
  secondaryButtonText?: string;
  /** Secondary button link */
  secondaryButtonLink?: string;
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
  /** Show decorative elements */
  showDecorations?: boolean;
  /** Show floating stats */
  showStats?: boolean;
}

export default function Hero({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink = "/about",
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
  showDecorations = true,
  showStats = true,
}: HeroProps) {
  const { t, language } = useLanguage();

  // Default values based on language
  const defaultTitle = language === "bs" 
    ? 'Inovativna tehnološka rješenja za <span class="text-gradient">moderno poslovanje</span>'
    : 'Innovative technology solutions for <span class="text-gradient">modern business</span>';
  const defaultDescription = language === "bs"
    ? "Saraya Solutions razvija napredne digitalne proizvode - od interaktivnih displeja s AI avatarima do pametnih Wi-Fi hotspot sustava. Transformirajte način na koji komunicirate s korisnicima."
    : "Saraya Solutions develops advanced digital products - from interactive displays with AI avatars to smart Wi-Fi hotspot systems. Transform the way you communicate with users.";
  const defaultPrimaryBtn = t.nav.contactUs;
  const defaultSecondaryBtn = t.nav.about;
  const defaultYearsLabel = language === "bs" ? "Godina iskustva" : "Years of experience";
  const defaultProjectsLabel = language === "bs" ? "Projekata" : "Projects";
  const defaultSupportLabel = language === "bs" ? "Podrška" : "Support";
  const defaultTechLabel = language === "bs" ? "Tehnologija" : "Technology";
  const defaultDomesticTitle = language === "bs" ? "Domaći" : "Domestic";
  const defaultDomesticSubtitle = language === "bs" ? "proizvod" : "product";

  // Use props or defaults
  const finalTitle = title ?? defaultTitle;
  const finalDescription = description ?? defaultDescription;
  const finalPrimaryBtn = primaryButtonText ?? defaultPrimaryBtn;
  const finalSecondaryBtn = secondaryButtonText ?? defaultSecondaryBtn;
  const finalYearsLabel = statYearsLabel ?? defaultYearsLabel;
  const finalProjectsLabel = statProjectsLabel ?? defaultProjectsLabel;
  const finalSupportLabel = statSupportLabel ?? defaultSupportLabel;
  const finalTechLabel = statTechLabel ?? defaultTechLabel;
  const finalDomesticTitle = statDomesticTitle ?? defaultDomesticTitle;
  const finalDomesticSubtitle = statDomesticSubtitle ?? defaultDomesticSubtitle;

  return (
    <section className="relative min-h-[100dvh] lg:min-h-screen flex items-center overflow-hidden pt-16 pb-8 lg:pt-0 lg:pb-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div data-gsap="parallax" className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div data-gsap="parallax" className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-pink-500/20 rounded-full blur-3xl" />

      {/* Decorative Elements - Hidden on mobile */}
      {showDecorations && (
        <>
          <div className="absolute top-20 right-20 text-primary-400/30 hidden md:block">
            <Star size={40} />
          </div>
          <div className="absolute top-40 left-20 text-pink-400/30 hidden md:block">
            <Sparkles size={30} />
          </div>
          <div className="absolute bottom-40 left-1/3 text-primary-400/20 hidden md:block">
            <Zap size={50} />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10 py-4 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 
              data-gsap="hero-title" 
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6"
              dangerouslySetInnerHTML={{ __html: finalTitle }}
            />

            <p data-gsap="hero-desc" className="text-sm md:text-lg text-foreground-muted mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0">
              {finalDescription}
            </p>

            <div data-gsap="hero-buttons" className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
              <Link href={primaryButtonLink}>
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                  {finalPrimaryBtn}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href={secondaryButtonLink}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                  {finalSecondaryBtn}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative order-1 lg:order-2">
            {/* Main Visual Container */}
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
                {/* Video Overlay for consistent look */}
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
        </div>
      </div>
    </section>
  );
}
