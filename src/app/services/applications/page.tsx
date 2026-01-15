"use client";

import { 
  Smartphone, Tablet, Monitor, ArrowRight, Check, 
  Cloud
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { useLanguage } from "@/lib/i18n";

const getAppTypes = (language: string) => [
  { title: language === "bs" ? "iOS & Android Aplikacije" : "iOS & Android Apps", description: language === "bs" ? "Nativne aplikacije optimizirane za performanse i korisničko iskustvo na svakoj platformi." : "Native apps optimized for performance and user experience on every platform.", icon: Smartphone, color: "purple" },
  { title: language === "bs" ? "Cross-Platform Rješenja" : "Cross-Platform Solutions", description: language === "bs" ? "Jedna baza koda za sve platforme — brži razvoj, niži troškovi, konzistentno iskustvo." : "One codebase for all platforms — faster development, lower costs, consistent experience.", icon: Monitor, color: "green" },
  { title: language === "bs" ? "Tablet Aplikacije" : "Tablet Apps", description: language === "bs" ? "Aplikacije dizajnirane za veće ekrane — idealne za POS sisteme, prezentacije i kioske." : "Apps designed for larger screens — ideal for POS systems, presentations and kiosks.", icon: Tablet, color: "cyan" },
  { title: language === "bs" ? "Cloud & Backend Sistemi" : "Cloud & Backend Systems", description: language === "bs" ? "Skalabilna serverska infrastruktura koja podržava rast vašeg poslovanja." : "Scalable server infrastructure that supports your business growth.", icon: Cloud, color: "purple" },
];

const getFeatures = (language: string) => [
  language === "bs" ? "Intuitivno korisničko sučelje" : "Intuitive user interface",
  language === "bs" ? "Offline funkcionalnost" : "Offline functionality",
  language === "bs" ? "Push notifikacije" : "Push notifications",
  language === "bs" ? "Biometrijska autentifikacija" : "Biometric authentication",
  language === "bs" ? "Integracija s postojećim sistemima" : "Integration with existing systems",
  language === "bs" ? "Real-time sinkronizacija" : "Real-time synchronization",
  language === "bs" ? "Detaljna analitika" : "Detailed analytics",
  language === "bs" ? "Kontinuirana podrška" : "Continuous support",
];

const getProcess = (language: string) => [
  { step: "01", title: "Discovery", description: language === "bs" ? "Definiramo ciljeve i zahtjeve" : "Defining goals and requirements" },
  { step: "02", title: language === "bs" ? "Dizajn" : "Design", description: language === "bs" ? "Kreiramo UI/UX prototip" : "Creating UI/UX prototype" },
  { step: "03", title: language === "bs" ? "Razvoj" : "Development", description: language === "bs" ? "Gradimo aplikaciju iterativno" : "Building the app iteratively" },
  { step: "04", title: language === "bs" ? "Testiranje" : "Testing", description: language === "bs" ? "Osiguravamo kvalitetu" : "Ensuring quality" },
  { step: "05", title: language === "bs" ? "Lansiranje" : "Launch", description: language === "bs" ? "Objavljujemo i podržavamo" : "Publishing and supporting" },
];

export default function ApplicationsPage() {
  const { language } = useLanguage();
  const appTypes = getAppTypes(language);
  const features = getFeatures(language);
  const process = getProcess(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-cyan-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Device Mockup */}
            <div data-gsap="hero-title" className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                {language === "bs" ? "Aplikacije koje" : "Applications that"} <span className="text-gradient">{language === "bs" ? "korisnici vole" : "users love"}</span>
              </h1>

              <p data-gsap="hero-desc" className="text-sm md:text-base lg:text-lg text-foreground-muted mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {language === "bs" 
                  ? "Od koncepta do App Store-a — razvijamo mobilne i desktop aplikacije koje rješavaju stvarne probleme i oduševljavaju korisnike."
                  : "From concept to App Store — we develop mobile and desktop applications that solve real problems and delight users."}
              </p>

              {/* Feature highlights */}
              <div data-gsap="hero-desc" className="grid grid-cols-2 gap-3 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                {(language === "bs" ? ["iOS & Android", "Cross-platform", "Native performanse", "UI/UX dizajn"] : ["iOS & Android", "Cross-platform", "Native performance", "UI/UX design"]).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-cyan-400" size={12} />
                    </div>
                    <span className="text-foreground-muted text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div data-gsap="hero-buttons" className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <Button variant="primary" size="lg">{language === "bs" ? "Započnite projekt" : "Start project"}<ArrowRight className="ml-2" size={20} /></Button>
                <Button variant="outline" size="lg">{language === "bs" ? "Pogledajte primjere" : "View examples"}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section data-gsap="benefits-bar" className="py-6 md:py-10 bg-cyan-500/10 border-y border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {(language === "bs" ? ["iOS & Android", "Cross-platform", "Native performanse", "UI/UX dizajn", "Kontinuirana podrška"] : ["iOS & Android", "Cross-platform", "Native performance", "UI/UX design", "Continuous support"]).map((benefit, index) => (
              <div key={index} data-gsap="benefits-item" className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground-muted text-xs md:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Vrste" : "Types of"} <span className="text-gradient">{language === "bs" ? "aplikacija" : "applications"}</span></h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">{language === "bs" ? "Razvijamo sve vrste aplikacija prilagođene vašim potrebama." : "We develop all types of applications tailored to your needs."}</p>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {appTypes.map((app) => (
              <Card key={app.title} glow={app.color === "purple" ? "purple" : "green"}>
                <div data-gsap="card">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
                    app.color === "purple" ? "bg-primary-500/20" : app.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                  }`}>
                    <app.icon className={app.color === "purple" ? "text-primary-400" : app.color === "green" ? "text-accent-green" : "text-cyan-400"} size={20} />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">{app.title}</h3>
                  <p className="text-foreground-muted text-xs md:text-base">{app.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Naš" : "Our"} <span className="text-gradient">{language === "bs" ? "proces" : "process"}</span></h2>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {process.map((item) => (
              <div key={item.step} data-gsap="card" className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <span className="text-lg md:text-2xl font-bold text-primary-400">{item.step}</span>
                </div>
                <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-gsap="content-left">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">{language === "bs" ? "Funkcionalnosti" : "Features of"} <span className="text-gradient">{language === "bs" ? "aplikacija" : "applications"}</span></h2>
              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-8 leading-relaxed">
                {language === "bs" 
                  ? "Svaka aplikacija koju razvijamo dolazi s naprednim funkcionalnostima."
                  : "Every application we develop comes with advanced features."}
              </p>

              <div data-gsap="list" className="grid grid-cols-1 gap-2 md:gap-4">
                {features.map((feature, index) => (
                  <div key={index} data-gsap="list-item" className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent-green" size={10} />
                    </div>
                    <span className="text-foreground-muted text-xs md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="content-right" className="relative hidden md:block">
              <div className="aspect-square rounded-2xl bg-background-card border border-primary-500/20 p-8 flex items-center justify-center">
                <div className="w-32 h-56 rounded-3xl bg-gradient-to-br from-primary-500/30 to-primary-600/20 border border-primary-500/30 flex items-center justify-center animate-float">
                  <Smartphone className="text-primary-400" size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="cta" className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Imate ideju za" : "Have an idea for an"} <span className="text-gradient">{language === "bs" ? "aplikaciju" : "application"}</span>?</h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto mb-6 md:mb-8">
              {language === "bs" 
                ? "Razgovarajmo o vašoj ideji i pretvorimo je u stvarnost."
                : "Let's talk about your idea and turn it into reality."}
            </p>
            <Button variant="primary" size="lg">{language === "bs" ? "Kontaktirajte nas" : "Contact us"}<ArrowRight className="ml-2" size={20} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
