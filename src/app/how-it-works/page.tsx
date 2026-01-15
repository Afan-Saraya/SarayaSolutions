"use client";

import { Upload, Cpu, Download, LineChart } from "lucide-react";
import CTA from "@/components/sections/CTA";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import { useLanguage } from "@/lib/i18n";

const getSteps = (language: string) => [
  { number: "01", icon: Upload, title: language === "bs" ? "Unos" : "Input", description: language === "bs" ? "Podijelite svoje zahtjeve, podatke i poslovne ciljeve s našim timom." : "Share your requirements, data, and business goals with our team." },
  { number: "02", icon: Cpu, title: language === "bs" ? "Obrada" : "Processing", description: language === "bs" ? "Naši stručnjaci analiziraju vaše zahtjeve i dizajniraju optimalno rješenje." : "Our experts analyze your requirements and design the optimal solution." },
  { number: "03", icon: Download, title: language === "bs" ? "Izlaz" : "Output", description: language === "bs" ? "Primite potpuno funkcionalno, testirano i dokumentirano rješenje." : "Receive a fully functional, tested, and documented solution." },
  { number: "04", icon: LineChart, title: language === "bs" ? "Analitika" : "Analytics", description: language === "bs" ? "Pratite metrike performansi i kontinuirano optimizirajte rješenje." : "Track performance metrics and continuously optimize the solution." },
];

export default function HowItWorksPage() {
  const { language } = useLanguage();
  const steps = getSteps(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              {language === "bs" ? "Kako" : "How It"} <span className="text-gradient">{language === "bs" ? "Funkcionira" : "Works"}</span>
            </h1>
            <p data-gsap="hero-desc" className="text-sm md:text-lg lg:text-xl text-foreground-muted max-w-2xl leading-relaxed">
              {language === "bs" 
                ? "Pojednostavljen proces dizajniran za efikasnu i efektivnu isporuku rezultata."
                : "A simplified process designed for efficient and effective delivery of results."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div data-gsap="list" className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} data-gsap="list-item" className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary-500 to-accent-green" />
                )}
                <div className="flex gap-6 mb-16">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-green flex items-center justify-center">
                      <step.icon className="text-white" size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background-card border-2 border-primary-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-400">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-foreground-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
