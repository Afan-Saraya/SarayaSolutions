"use client";

import { Check } from "lucide-react";
import Image from "next/image";

interface BenefitsProps {
  benefits: string[];
  variant?: "purple" | "green" | "cyan" | "pink";
}

export default function Benefits({ benefits, variant = "purple" }: BenefitsProps) {
  const colorClasses = {
    purple: {
      bg: "bg-primary-500/10",
      border: "border-primary-500/20",
      icon: "bg-primary-500/20 text-primary-400",
      dot: "bg-primary-500",
    },
    green: {
      bg: "bg-accent-green/10",
      border: "border-accent-green/20",
      icon: "bg-accent-green/20 text-accent-green",
      dot: "bg-accent-green",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      icon: "bg-cyan-500/20 text-cyan-400",
      dot: "bg-cyan-500",
    },
    pink: {
      bg: "bg-accent-pink/10",
      border: "border-accent-pink/20",
      icon: "bg-accent-pink/20 text-accent-pink",
      dot: "bg-accent-pink",
    },
  };

  const colors = colorClasses[variant];
  const isDomaci = (text: string) => text.toLowerCase().includes("domaći") || text.toLowerCase().includes("bih");

  return (
    <section className={`py-6 md:py-10 ${colors.bg} border-y ${colors.border}`}>
      <div className="container mx-auto px-4">
        <div data-gsap="benefits" className="flex flex-wrap justify-center gap-3 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              {isDomaci(benefit) ? (
                <div className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                  <Image
                    src="/images/bih-znak.png"
                    alt="BiH"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className={`w-5 h-5 rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                  <Check size={12} />
                </div>
              )}
              <span className="text-foreground-muted text-xs md:text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
