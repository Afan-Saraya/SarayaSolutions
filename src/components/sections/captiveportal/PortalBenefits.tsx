"use client";

import { Check } from "lucide-react";

export interface PortalBenefitsProps {
  /** Benefits section title */
  title?: string;
  /** Array of benefit strings */
  benefits?: string[];
}

const defaultBenefits = [
  "Potpuna prilagodba vašem brendu i poslovanju",
  "Skalabilnost — od jedne do stotine lokacija",
  "Integracija s loyalty programima i CRM sistemima",
  "Detaljni izvještaji o ponašanju korisnika",
  "Personalizirani sadržaji bazirani na lokaciji i vremenu",
];

export default function PortalBenefits({
  title = "Prednosti Saraya Hotspot Rješenja:",
  benefits = defaultBenefits,
}: PortalBenefitsProps) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-r from-primary-900/30 to-background-card border border-primary-500/20">
      <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check className="text-accent-green" size={12} />
            </div>
            <span className="text-foreground-muted text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
