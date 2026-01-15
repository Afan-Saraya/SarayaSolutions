"use client";

import { ArrowRight, Play, Check } from "lucide-react";
import Button from "../../ui/Button";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export interface Hero2ContentProps {
  /** Logo image source */
  logoSrc?: string;
  /** Description text */
  description?: string;
  /** Feature highlights array */
  features?: string[];
  /** Primary button text */
  primaryButtonText?: string;
  /** Secondary button text */
  secondaryButtonText?: string;
  /** Show features list */
  showFeatures?: boolean;
  /** Accent color for features (green or purple) */
  accentColor?: "green" | "purple";
}

export default function Hero2Content({
  logoSrc = "/images/logos/saraya connect.png",
  description,
  features,
  primaryButtonText,
  secondaryButtonText,
  showFeatures = true,
  accentColor = "green",
}: Hero2ContentProps) {
  const { language } = useLanguage();

  const defaultDescription = language === "bs" 
    ? "Pretvorite besplatni Wi-Fi u moćan marketing alat. Prikupljajte podatke, komunicirajte s korisnicima i gradite lojalnost — sve kroz jednu platformu."
    : "Turn free Wi-Fi into a powerful marketing tool. Collect data, communicate with users and build loyalty — all through one platform.";
  const defaultFeatures = language === "bs" 
    ? ["Captive Portal", "Marketing platforma", "Analitika korisnika", "Skalabilnost"]
    : ["Captive Portal", "Marketing platform", "User analytics", "Scalability"];
  const defaultPrimaryBtn = language === "bs" ? "Hotspot solucije" : "Hotspot solutions";
  const defaultSecondaryBtn = "Video";

  const finalDescription = description ?? defaultDescription;
  const finalFeatures = features ?? defaultFeatures;
  const finalPrimaryBtn = primaryButtonText ?? defaultPrimaryBtn;
  const finalSecondaryBtn = secondaryButtonText ?? defaultSecondaryBtn;

  const colorClasses = accentColor === "green" 
    ? "bg-accent-green/20 text-accent-green" 
    : "bg-primary-500/20 text-primary-400";

  return (
    <div className="text-center lg:text-left">
      <div className="relative h-10 md:h-14 lg:h-16 w-56 md:w-72 lg:w-80 mb-4 md:mb-6 mx-auto lg:mx-0">
        <Image
          src={logoSrc}
          alt="Saraya Connect"
          fill
          className="object-contain object-center lg:object-left"
        />
      </div>

      <p className="text-sm md:text-base lg:text-lg text-foreground-muted mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
        {finalDescription}
      </p>

      {/* Feature highlights */}
      {showFeatures && (
        <div className="grid grid-cols-2 gap-3 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
          {finalFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses}`}>
                <Check size={12} />
              </div>
              <span className="text-foreground-muted text-xs md:text-sm">{feature}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
        <Button variant="primary" size="lg">
          {finalPrimaryBtn}
          <ArrowRight className="ml-2" size={20} />
        </Button>
        <Button variant="outline" size="lg">
          <Play className="mr-2" size={18} />
          {finalSecondaryBtn}
        </Button>
      </div>
    </div>
  );
}
