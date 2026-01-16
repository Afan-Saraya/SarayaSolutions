"use client";

import { 
  Smartphone, Tablet, Monitor, ArrowRight,
  Cloud, Apple, Play, Zap, Shield, RefreshCw, Bell
} from "lucide-react";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import ProductHero from "@/components/sections/ProductHero";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { useLanguage } from "@/lib/i18n";

const getPlatforms = (language: string) => [
  { 
    name: "iOS", 
    icon: Apple, 
    description: language === "bs" ? "iPhone & iPad aplikacije" : "iPhone & iPad apps",
    features: ["Swift", "SwiftUI", "App Store"],
    color: "bg-gradient-to-br from-gray-500/20 to-gray-600/10 border-gray-500/30"
  },
  { 
    name: "Android", 
    icon: Play, 
    description: language === "bs" ? "Android telefoni i tableti" : "Android phones & tablets",
    features: ["Kotlin", "Jetpack Compose", "Play Store"],
    color: "bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30"
  },
  { 
    name: "Cross-Platform", 
    icon: Monitor, 
    description: language === "bs" ? "Jedna baza koda za sve" : "One codebase for all",
    features: ["React Native", "Flutter", language === "bs" ? "Brži razvoj" : "Faster dev"],
    color: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30"
  },
];

const getAppShowcase = (language: string) => [
  {
    name: "Saraya Hotspot",
    type: language === "bs" ? "Web Aplikacija" : "Web App",
    description: language === "bs" ? "Captive portal za WiFi mreže" : "Captive portal for WiFi networks",
    url: "https://hs.sarayasolutions.com/",
  },
  {
    name: "Pametno Odabrano",
    type: "E-commerce App",
    description: language === "bs" ? "Mobilna kupovina" : "Mobile shopping",
    url: "https://pametnoodabrano.com/",
  },
];

const getProcess = (language: string) => [
  { 
    step: "01", 
    title: "Discovery", 
    description: language === "bs" ? "Analiziramo vaše potrebe i definiramo ciljeve projekta" : "We analyze your needs and define project goals",
    duration: language === "bs" ? "1-2 sedmice" : "1-2 weeks"
  },
  { 
    step: "02", 
    title: language === "bs" ? "Dizajn" : "Design", 
    description: language === "bs" ? "Kreiramo wireframe i UI/UX dizajn aplikacije" : "We create wireframe and UI/UX design",
    duration: language === "bs" ? "2-3 sedmice" : "2-3 weeks"
  },
  { 
    step: "03", 
    title: language === "bs" ? "Razvoj" : "Development", 
    description: language === "bs" ? "Gradimo aplikaciju s redovnim demo verzijama" : "We build the app with regular demos",
    duration: language === "bs" ? "6-12 sedmica" : "6-12 weeks"
  },
  { 
    step: "04", 
    title: language === "bs" ? "Testiranje" : "Testing", 
    description: language === "bs" ? "QA testiranje i beta verzija za korisnike" : "QA testing and beta version for users",
    duration: language === "bs" ? "2-3 sedmice" : "2-3 weeks"
  },
  { 
    step: "05", 
    title: language === "bs" ? "Lansiranje" : "Launch", 
    description: language === "bs" ? "Objava na App Store i Play Store" : "Publishing to App Store and Play Store",
    duration: language === "bs" ? "1 sedmica" : "1 week"
  },
];

const getFeatures = (language: string) => [
  { icon: Zap, title: language === "bs" ? "Native performanse" : "Native performance", desc: language === "bs" ? "Brze i responzivne aplikacije" : "Fast and responsive apps" },
  { icon: Shield, title: language === "bs" ? "Sigurnost" : "Security", desc: language === "bs" ? "Biometrija i enkripcija" : "Biometrics and encryption" },
  { icon: RefreshCw, title: language === "bs" ? "Offline mod" : "Offline mode", desc: language === "bs" ? "Radi i bez interneta" : "Works without internet" },
  { icon: Bell, title: language === "bs" ? "Push notifikacije" : "Push notifications", desc: language === "bs" ? "Angažirajte korisnike" : "Engage your users" },
  { icon: Cloud, title: language === "bs" ? "Cloud sync" : "Cloud sync", desc: language === "bs" ? "Sinkronizacija podataka" : "Data synchronization" },
  { icon: Tablet, title: language === "bs" ? "Tablet podrška" : "Tablet support", desc: language === "bs" ? "Optimizirano za sve ekrane" : "Optimized for all screens" },
];

export default function ApplicationsPage() {
  const { language } = useLanguage();
  const platforms = getPlatforms(language);
  const appShowcase = getAppShowcase(language);
  const process = getProcess(language);
  const features = getFeatures(language);

  return (
    <>
      <PageAnimations />

      <ProductHero
        logoSrc="/images/logos/aplikacije.png"
        logoAlt="Saraya Aplikacije"
        titleGradient=""
        subtitle={language === "bs" 
          ? "Aplikacije koje korisnici vole"
          : "Applications that users love"}
        description={language === "bs" 
          ? "Od koncepta do App Store-a — razvijamo mobilne aplikacije koje rješavaju stvarne probleme i oduševljavaju korisnike."
          : "From concept to App Store — we develop mobile applications that solve real problems and delight users."}
        features={[
          language === "bs" ? "iOS & Android" : "iOS & Android",
          language === "bs" ? "Native performanse" : "Native performance",
          language === "bs" ? "Push notifikacije" : "Push notifications",
          language === "bs" ? "Offline podrška" : "Offline support",
        ]}
        primaryButtonText={language === "bs" ? "Započnite projekt" : "Start project"}
        secondaryButtonText={language === "bs" ? "Pogledajte primjere" : "View examples"}
        customVisual={<DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />}
        glowColor1="bg-cyan-500/15"
        glowColor2="bg-primary-500/20"
      />

      {/* Platform Comparison */}
      <section className="py-12 md:py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Odaberite" : "Choose your"} <span className="text-gradient">{language === "bs" ? "platformu" : "platform"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Razvijamo za sve platforme — odaberite onu koja najbolje odgovara vašim potrebama." : "We develop for all platforms — choose the one that best suits your needs."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                data-gsap="card"
                className={`p-6 md:p-8 rounded-2xl border ${platform.color} hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <platform.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-foreground-muted text-sm mb-4">{platform.description}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-md bg-white/10 text-white/80 text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 left-0 w-64 md:w-[400px] h-64 md:h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Proces" : "Development"} <span className="text-gradient">{language === "bs" ? "razvoja" : "process"}</span>
            </h2>
          </div>

          {/* Timeline */}
          <div data-gsap="cards-grid" className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-primary-500 to-pink-500" />
            
            {process.map((item, index) => (
              <div
                key={item.step}
                data-gsap="card"
                className={`relative flex items-center gap-4 md:gap-8 mb-6 md:mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/20 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="text-cyan-400 font-bold">{item.step}</span>
                    <span className="text-white font-bold">{item.title}</span>
                  </div>
                  <p className="text-foreground-muted text-sm mb-2">{item.description}</p>
                  <span className="text-xs text-primary-400">{item.duration}</span>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-primary-500 flex-shrink-0 z-10" />
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Funkcionalnosti" : "Features"} <span className="text-gradient">{language === "bs" ? "aplikacija" : "included"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                data-gsap="card"
                className="p-4 md:p-6 rounded-2xl bg-background-card border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-foreground-muted text-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Naše" : "Our"} <span className="text-gradient">{language === "bs" ? "aplikacije" : "apps"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {appShowcase.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                data-gsap="card"
                className="group p-6 rounded-2xl bg-background-card border border-primary-500/20 hover:border-primary-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/30 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-cyan-400 mb-1 block">{app.type}</span>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">{app.name}</h3>
                    <p className="text-foreground-muted text-sm">{app.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-primary-500/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="cta" className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Imate ideju za" : "Have an idea for an"} <span className="text-gradient">{language === "bs" ? "aplikaciju" : "app"}</span>?
            </h2>
            <p className="text-foreground-muted text-sm md:text-base mb-6 md:mb-8">
              {language === "bs" 
                ? "Razgovarajmo o vašoj ideji i pretvorimo je u stvarnost. Besplatne konzultacije!"
                : "Let's talk about your idea and turn it into reality. Free consultation!"}
            </p>
            <Button variant="primary" size="lg">
              {language === "bs" ? "Kontaktirajte nas" : "Contact us"}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
