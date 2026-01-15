"use client";

import { Layers, Link2, Puzzle, Workflow } from "lucide-react";
import Card from "@/components/ui/Card";
import CTA from "@/components/sections/CTA";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import { useLanguage } from "@/lib/i18n";

const getModules = (language: string) => [
  { icon: Layers, title: language === "bs" ? "Modularna Arhitektura" : "Modular Architecture", description: language === "bs" ? "Gradite s nezavisnim, višekratnim komponentama koje rastu s vašim potrebama." : "Build with independent, reusable components that grow with your needs." },
  { icon: Puzzle, title: language === "bs" ? "Besprijekorna Integracija" : "Seamless Integration", description: language === "bs" ? "Povežite se s postojećim sistemima kroz naš fleksibilni API sloj." : "Connect with existing systems through our flexible API layer." },
  { icon: Workflow, title: language === "bs" ? "Automatizirani Procesi" : "Automated Processes", description: language === "bs" ? "Pojednostavite procese s inteligentnim mogućnostima automatizacije." : "Simplify processes with intelligent automation capabilities." },
  { icon: Link2, title: language === "bs" ? "Povezani Sistemi" : "Connected Systems", description: language === "bs" ? "Ujedinjeni protok podataka kroz sve vaše poslovne aplikacije." : "Unified data flow through all your business applications." },
];

export default function EcosystemPage() {
  const { language } = useLanguage();
  const modules = getModules(language);

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
              {language === "bs" ? "Kompletan" : "Complete"} <span className="text-gradient">{language === "bs" ? "Ekosistem Rješenja" : "Solution Ecosystem"}</span>
            </h1>
            <p data-gsap="hero-desc" className="text-sm md:text-lg lg:text-xl text-foreground-muted max-w-2xl leading-relaxed">
              {language === "bs" 
                ? "Otkrijte kako naša modularna platforma povezuje i skalira prema vašim rastućim poslovnim potrebama."
                : "Discover how our modular platform connects and scales to your growing business needs."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <Card key={module.title} glow="purple">
                <div data-gsap="card" className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <module.icon className="text-primary-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                    <p className="text-foreground-muted">{module.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div data-gsap="fade-in" className="mt-20 p-8 rounded-2xl bg-background-card border border-primary-500/10">
            <h3 className="text-2xl font-bold text-center mb-8">{language === "bs" ? "Kako se sve" : "How everything"} <span className="text-gradient">{language === "bs" ? "povezuje" : "connects"}</span></h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {(language === "bs" ? ["Unos", "Obrada", "Analiza", "Izlaz"] : ["Input", "Processing", "Analysis", "Output"]).map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="px-6 py-3 rounded-full bg-primary-500/20 text-primary-400 font-medium">{step}</div>
                  {i < 3 && <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-green hidden md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
