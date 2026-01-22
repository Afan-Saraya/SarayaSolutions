import React from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

interface PricingTiersCardsProps {
  language?: string;
}

const getPricingTiers = (language: string) => [
  {
    name: language === "bs" ? "Starter" : "Starter",
    description: language === "bs" ? "Za male narudžbe" : "For small orders",
    features: language === "bs" 
      ? ["1-100 komada", "Standardni materijali", "5-7 dana isporuka", "Email podrška"]
      : ["1-100 pieces", "Standard materials", "5-7 days delivery", "Email support"],
    highlight: false
  },
  {
    name: "Business",
    description: language === "bs" ? "Za redovne potrebe" : "For regular needs",
    features: language === "bs"
      ? ["100-1000 komada", "Premium materijali", "3-5 dana isporuka", "Prioritetna podrška", "Besplatan dizajn"]
      : ["100-1000 pieces", "Premium materials", "3-5 days delivery", "Priority support", "Free design"],
    highlight: true
  },
  {
    name: "Enterprise",
    description: language === "bs" ? "Za velike projekte" : "For large projects",
    features: language === "bs"
      ? ["1000+ komada", "Svi materijali", "Express isporuka", "Dedicirani menadžer", "Besplatan dizajn", "Popusti na količinu"]
      : ["1000+ pieces", "All materials", "Express delivery", "Dedicated manager", "Free design", "Volume discounts"],
    highlight: false
  },
];

export default function PricingTiersCards({ language = "bs" }: PricingTiersCardsProps) {
  const pricingTiers = getPricingTiers(language);

  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {pricingTiers.map((tier) => (
        <div
          key={tier.name}
          data-gsap="card"
          className={`p-6 md:p-8 rounded-2xl border transition-all ${
            tier.highlight 
              ? "bg-gradient-to-br from-accent-green/20 to-cyan-500/10 border-accent-green/40 scale-105" 
              : "bg-background-card border-primary-500/20"
          }`}
        >
          {tier.highlight && (
            <div className="text-xs text-accent-green font-medium mb-2">{language === "bs" ? "Najpopularniji" : "Most popular"}</div>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{tier.name}</h3>
          <p className="text-foreground-muted text-sm mb-4">{tier.description}</p>
          <ul className="space-y-2 mb-6">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <Check className={tier.highlight ? "text-accent-green" : "text-primary-400"} size={14} />
                <span className="text-foreground-muted">{feature}</span>
              </li>
            ))}
          </ul>
          <Button variant={tier.highlight ? "primary" : "outline"} className="w-full">
            {language === "bs" ? "Zatražite ponudu" : "Request quote"}
          </Button>
        </div>
      ))}
    </div>
  );
}
