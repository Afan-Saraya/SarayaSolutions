"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function CTA() {
  const { language } = useLanguage();

  return (
    <section data-gsap="cta-section" className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-background" />
      <div data-gsap="parallax" className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div data-gsap="parallax" className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div data-gsap="cta-content" className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 md:mb-6">
            <Sparkles className="text-primary-400" size={32} />
          </div>

          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-6">
            {language === "bs" ? "Spremni za" : "Ready for"}{" "}
            <span className="text-gradient">{language === "bs" ? "digitalnu transformaciju?" : "digital transformation?"}</span>
          </h2>

          <p className="text-xs md:text-lg text-foreground-muted mb-6 md:mb-8">
            {language === "bs" 
              ? "Razgovarajmo o tome kako Saraya Solutions može pomoći vašem poslovanju da postigne tehnološke ciljeve."
              : "Let's talk about how Saraya Solutions can help your business achieve its technology goals."
            }
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Započnite projekt" : "Start a project"}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
