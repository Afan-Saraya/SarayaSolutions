"use client";

import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export interface HeroContentProps {
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
}

export default function HeroContent({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink = "/about",
}: HeroContentProps) {
  const { t, language } = useLanguage();

  const defaultTitle = language === "bs" 
    ? 'Inovativna tehnološka rješenja za <span class="text-gradient">moderno poslovanje</span>'
    : 'Innovative technology solutions for <span class="text-gradient">modern business</span>';
  const defaultDescription = language === "bs"
    ? "Saraya Solutions razvija napredne digitalne proizvode - od interaktivnih displeja s AI avatarima do pametnih Wi-Fi hotspot sustava. Transformirajte način na koji komunicirate s korisnicima."
    : "Saraya Solutions develops advanced digital products - from interactive displays with AI avatars to smart Wi-Fi hotspot systems. Transform the way you communicate with users.";

  const finalTitle = title ?? defaultTitle;
  const finalDescription = description ?? defaultDescription;
  const finalPrimaryBtn = primaryButtonText ?? t.nav.contactUs;
  const finalSecondaryBtn = secondaryButtonText ?? t.nav.about;

  return (
    <div className="text-center lg:text-left">
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
  );
}
