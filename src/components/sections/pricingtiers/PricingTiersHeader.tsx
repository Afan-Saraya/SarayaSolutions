import React from "react";

interface PricingTiersHeaderProps {
  language?: string;
}

export default function PricingTiersHeader({ language = "bs" }: PricingTiersHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {language === "bs" ? "Paketi" : "Packages"} <span className="text-gradient">{language === "bs" ? "usluga" : "available"}</span>
      </h2>
      <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
        {language === "bs" ? "Odaberite paket koji odgovara vašim potrebama" : "Choose the package that suits your needs"}
      </p>
    </div>
  );
}
