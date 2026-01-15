"use client";

import { MapPin, Award, Users, Rocket, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DomaciBadge from "../ui/DomaciBadge";
import { useLanguage } from "@/lib/i18n";

export default function Products() {
  const { language } = useLanguage();

  const achievements = [
    { value: "10+", label: language === "bs" ? "Godina iskustva" : "Years of experience", icon: Award },
    { value: "90+", label: language === "bs" ? "Završenih projekata" : "Completed projects", icon: Rocket },
    { value: "52+", label: language === "bs" ? "Zadovoljnih klijenata" : "Satisfied clients", icon: Users },
    { value: "3", label: language === "bs" ? "Wi-Fi zone u Sarajevu" : "Wi-Fi zones in Sarajevo", icon: MapPin },
  ];

  const highlights = language === "bs" ? [
    "Vlastita Wi-Fi mreža u centru Sarajeva",
    "AI avatari koji govore 99+ jezika",
    "4K interaktivni displeji",
    "Captive portal s marketing automatizacijom",
    "Podrška i održavanje 24/7",
  ] : [
    "Own Wi-Fi network in central Sarajevo",
    "AI avatars speaking 99+ languages",
    "4K interactive displays",
    "Captive portal with marketing automation",
    "24/7 support and maintenance",
  ];

  return (
    <section data-gsap="company-section" className="py-16 md:py-24 relative overflow-hidden bg-background-dark">
      {/* Background glow */}
      <div data-gsap="parallax" className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div data-gsap="parallax" className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Company Info */}
          <div data-gsap="company-info">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary-400" size={18} />
                <span className="text-primary-400 text-xs md:text-sm font-medium tracking-wider uppercase">
                  Sarajevo, BiH
                </span>
              </div>
              <DomaciBadge variant="badge" />
            </div>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              {language === "bs" ? "Zašto odabrati" : "Why choose"}{" "}
              <span className="text-gradient">Saraya Solutions?</span>
            </h2>
            
            <p className="text-foreground-muted text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              {language === "bs" 
                ? "Saraya Solutions je bosanskohercegovačka tehnološka kompanija koja razvija inovativna digitalna rješenja. Naši proizvodi su rezultat godina istraživanja i razvoja, prilagođeni potrebama modernog poslovanja."
                : "Saraya Solutions is a Bosnian technology company developing innovative digital solutions. Our products are the result of years of research and development, tailored to the needs of modern business."
              }
            </p>

            {/* Highlights */}
            <div data-gsap="highlights-list" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-8">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  data-gsap="highlight-item"
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0">
                    <Check className="text-accent-green" size={12} />
                  </div>
                  <span className="text-foreground-muted text-xs md:text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <button className="flex items-center gap-2 text-primary-400 font-medium text-sm md:text-base hover:translate-x-1 transition-transform">
                {language === "bs" ? "Saznajte više o nama" : "Learn more about us"}
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Right - Stats & Logo */}
          <div className="relative">
            {/* Logo Display */}
            <div data-gsap="company-logo" className="mb-6 md:mb-8 p-6 md:p-8 rounded-2xl bg-background-card border border-primary-500/20 flex items-center justify-center">
              <Image
                src="/images/logoSaraya.png"
                alt="Saraya Solutions"
                width={280}
                height={80}
                className="w-48 md:w-64 h-auto"
              />
            </div>

            {/* Stats Grid */}
            <div data-gsap="stats-grid" className="grid grid-cols-2 gap-3 md:gap-4">
              {achievements.map((stat) => (
                <div
                  key={stat.label}
                  data-gsap="stat-card"
                  className="p-4 md:p-6 rounded-xl bg-background-card border border-primary-500/10 hover:border-primary-500/30 transition-all hover:scale-[1.03]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                      <stat.icon className="text-primary-400" size={16} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gradient">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-foreground-muted text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
