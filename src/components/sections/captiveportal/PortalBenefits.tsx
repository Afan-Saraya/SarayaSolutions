"use client";

export interface PortalBenefitsProps {
  /** Benefits section title */
  title?: string;
  /** Array of benefit strings */
  benefits?: string[];
}

const defaultBenefits = [
  "Potpuna prilagodba vašem brendu",
  "Skalabilnost — od jedne do stotine lokacija",
  "Integracija s loyalty programima",
  "Detaljni izvještaji o ponašanju korisnika",
];

export default function PortalBenefits({
  title = "Prednosti Saraya Hotspot Rješenja",
  benefits = defaultBenefits,
}: PortalBenefitsProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
      <h3 className="text-lg md:text-xl font-bold text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0" />
            <span className="text-foreground-muted text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
