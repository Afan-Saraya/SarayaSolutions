"use client";

import { Wifi, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function WiFi6NetworkCards() {
  const { language } = useLanguage();

  const cards = [
    {
      icon: Wifi,
      title: "WiFi 6",
      description:
        language === "bs"
          ? "Najnovija generacija bežične tehnologije sa brzinama do 9.6 Gbps i podrškom za više uređaja istovremeno."
          : "Latest generation of wireless technology with speeds up to 9.6 Gbps and support for multiple devices simultaneously.",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: language === "bs" ? "Stabilnost" : "Stability",
      description:
        language === "bs"
          ? "99.9% uptime sa redundantnim sistemima i automatskim failover-om za neprekidnu konekciju."
          : "99.9% uptime with redundant systems and automatic failover for uninterrupted connection.",
      color: "purple",
    },
    {
      icon: Users,
      title: language === "bs" ? "Kapacitet" : "Capacity",
      description:
        language === "bs"
          ? "Podrška za 1000+ korisnika po access pointu bez gubitka performansi zahvaljujući OFDMA tehnologiji."
          : "Support for 1000+ users per access point without performance loss thanks to OFDMA technology.",
      color: "cyan",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          data-gsap="card"
          className={`p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 ${
            card.color === "green"
              ? "bg-gradient-to-br from-accent-green/10 to-background-card border border-accent-green/20"
              : card.color === "purple"
              ? "bg-gradient-to-br from-primary-500/10 to-background-card border border-primary-500/20"
              : "bg-gradient-to-br from-cyan-500/10 to-background-card border border-cyan-500/20"
          }`}
        >
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
              card.color === "green"
                ? "bg-accent-green/20 border border-accent-green/30"
                : card.color === "purple"
                ? "bg-primary-500/20 border border-primary-500/30"
                : "bg-cyan-500/20 border border-cyan-500/30"
            }`}
          >
            <card.icon
              className={
                card.color === "green"
                  ? "text-accent-green"
                  : card.color === "purple"
                  ? "text-primary-400"
                  : "text-cyan-400"
              }
              size={32}
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {card.title}
          </h3>
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
