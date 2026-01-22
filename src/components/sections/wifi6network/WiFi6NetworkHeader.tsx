"use client";

import { Wifi } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/lib/i18n";

export default function WiFi6NetworkHeader() {
  const { language } = useLanguage();

  return (
    <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
      <Badge variant="accent" className="mb-4">
        <Wifi size={16} className="mr-2" />
        {language === "bs" ? "Naša Mreža" : "Our Network"}
      </Badge>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
        {language === "bs" ? "Najbrža i najstabilnija" : "Fastest and most stable"}{" "}
        <span className="text-gradient">WiFi 6</span>{" "}
        {language === "bs" ? "mreža" : "network"}
      </h2>
      <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
        {language === "bs"
          ? "Saraya koristi najnoviju WiFi 6 tehnologiju za brzu, stabilnu i sigurnu konekciju."
          : "Saraya uses the latest WiFi 6 technology for fast, stable and secure connection."}
      </p>
    </div>
  );
}
