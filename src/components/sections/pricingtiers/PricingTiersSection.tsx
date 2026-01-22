import React from "react";
import PricingTiersHeader from "./PricingTiersHeader";
import PricingTiersCards from "./PricingTiersCards";

interface PricingTiersSectionProps {
  language?: string;
}

export default function PricingTiersSection({ language = "bs" }: PricingTiersSectionProps) {
  return (
    <section className="py-12 md:py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <PricingTiersHeader language={language} />
        <PricingTiersCards language={language} />
      </div>
    </section>
  );
}
