"use client";

import { 
  Sparkles, Users, Target, Heart, Lightbulb, Shield,
  ArrowRight, MapPin, Calendar, Award, Rocket, Globe,
  Monitor, Wifi, Gamepad2
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PageAnimations from "@/components/animations/PageAnimations";
import DomaciBadge from "@/components/ui/DomaciBadge";
import Partners from "@/components/sections/Partners";
import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const stats = [
    { value: "10+", label: language === "bs" ? "Godina iskustva" : "Years of experience", icon: Calendar },
    { value: "12+", label: language === "bs" ? "AI rješenja" : "AI solutions", icon: Sparkles },
    { value: "52+", label: language === "bs" ? "Zadovoljnih klijenata" : "Satisfied clients", icon: Users },
    { value: "90+", label: language === "bs" ? "Završenih projekata" : "Completed projects", icon: Award },
  ];

  const values = [
    {
      title: t.about.innovation,
      description: t.about.innovationDesc,
      icon: Lightbulb,
      color: "purple",
    },
    {
      title: t.about.quality,
      description: t.about.qualityDesc,
      icon: Award,
      color: "pink",
    },
    {
      title: t.about.partnership,
      description: t.about.partnershipDesc,
      icon: Heart,
      color: "cyan",
    },
    {
      title: t.about.reliability,
      description: t.about.reliabilityDesc,
      icon: Shield,
      color: "purple",
    },
  ];

  const services = [
    { title: "Saraya Display", description: language === "bs" ? "Interaktivni displeji s AI avatarima" : "Interactive displays with AI avatars", icon: Monitor },
    { title: "Saraya Connect", description: language === "bs" ? "Wi-Fi hotspot rješenja" : "Wi-Fi hotspot solutions", icon: Wifi },
    { title: language === "bs" ? "Web Rješenja" : "Web Solutions", description: language === "bs" ? "Moderne web aplikacije" : "Modern web applications", icon: Globe },
    { title: language === "bs" ? "Igre" : "Games", description: language === "bs" ? "Interaktivne igre i gamifikacija" : "Interactive games and gamification", icon: Gamepad2 },
  ];
  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[100px] md:blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[80px] md:blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              {language === "bs" ? "Domaći proizvod iz" : "Domestic product from"} <span className="text-gradient">{language === "bs" ? "Bosne i Hercegovine" : "Bosnia and Herzegovina"}</span>
            </h1>

            <p data-gsap="hero-desc" className="text-sm md:text-lg lg:text-xl text-foreground-muted mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === "bs" 
                ? "Saraya Solutions je bosanskohercegovačka tehnološka kompanija koja razvija inovativna digitalna rješenja. Od interaktivnih displeja s AI avatarima do naprednih Wi-Fi hotspot sustava, stvaramo tehnologije koje transformiraju način na koji brendovi komuniciraju sa svojim korisnicima."
                : "Saraya Solutions is a Bosnian technology company developing innovative digital solutions. From interactive displays with AI avatars to advanced Wi-Fi hotspot systems, we create technologies that transform the way brands communicate with their users."}
            </p>

            <div data-gsap="hero-info" className="flex items-center gap-3 text-foreground-muted text-sm md:text-base">
              <MapPin className="text-primary-400" size={18} />
              <span>{language === "bs" ? "Sarajevo, Bosna i Hercegovina" : "Sarajevo, Bosnia and Herzegovina"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section data-gsap="benefits-bar" className="py-6 md:py-10 bg-primary-500/10 border-y border-primary-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <DomaciBadge variant="large" />
            {(language === "bs" 
              ? ["10+ godina iskustva", "Inovativna rješenja", "Podrška 24/7", "Pouzdani partneri"]
              : ["10+ years of experience", "Innovative solutions", "24/7 Support", "Reliable partners"]
            ).map((benefit, index) => (
              <div
                key={index}
                data-gsap="benefits-item"
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground-muted text-xs md:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div data-gsap="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-gsap="stat"
                className="p-6 rounded-2xl bg-background-card border border-primary-500/20 text-center group hover:border-primary-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-primary-400" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-foreground-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-gsap="content-left">
              <Badge variant="secondary" className="mb-4">
                <Rocket size={14} className="mr-2" />
                {language === "bs" ? "Naša priča" : "Our story"}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "bs" ? "Od ideje do" : "From idea to"} <span className="text-gradient">{language === "bs" ? "realnosti" : "reality"}</span>
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  {language === "bs" 
                    ? "Saraya Solutions je nastala iz vizije da tehnologija može biti pristupačnija, interaktivnija i korisnija za svakodnevno poslovanje. Kao domaća kompanija iz Bosne i Hercegovine, ponosni smo na to što razvijamo vrhunska rješenja koja konkuriraju globalnim standardima."
                    : "Saraya Solutions was born from the vision that technology can be more accessible, interactive, and useful for everyday business. As a domestic company from Bosnia and Herzegovina, we are proud to develop premium solutions that compete with global standards."}
                </p>
                <p>
                  {language === "bs"
                    ? "Naš tim stručnjaka kombinira duboko razumijevanje lokalnog tržišta s najnovijim globalnim tehnološkim trendovima. Od AR i VR tehnologija, preko AI chatbotova i avatara, do naprednih Wi-Fi mreža — stvaramo rješenja koja transformiraju način na koji brendovi komuniciraju sa svojim korisnicima."
                    : "Our team of experts combines deep understanding of the local market with the latest global technology trends. From AR and VR technologies, through AI chatbots and avatars, to advanced Wi-Fi networks — we create solutions that transform the way brands communicate with their users."}
                </p>
                <p>
                  {language === "bs"
                    ? "Danas sarađujemo s vodećim kompanijama u regiji, uključujući Aria Mall, BBI Banku, NLB Banku i BH Telecom, pomažući im da ostvare svoje digitalne ciljeve i stvore nezaboravna korisnička iskustva."
                    : "Today we collaborate with leading companies in the region, including Aria Mall, BBI Bank, NLB Bank, and BH Telecom, helping them achieve their digital goals and create unforgettable user experiences."}
                </p>
              </div>
            </div>

            <div data-gsap="content-right" className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-pink-500/20 border border-primary-500/20 p-8 flex items-center justify-center">
                <div data-gsap="cards-grid" className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      data-gsap="card"
                      className="p-4 rounded-xl bg-background-card/80 backdrop-blur-sm border border-white/10 text-center"
                    >
                      <service.icon className="text-primary-400 mx-auto mb-2" size={24} />
                      <div className="text-white text-sm font-medium">{service.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              <Heart size={14} className="mr-2" />
              {t.about.valuesTitle} {t.about.valuesTitleHighlight}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Principi koji nas" : "Principles that"} <span className="text-gradient">{language === "bs" ? "vode" : "guide us"}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {language === "bs" 
                ? "Naše vrijednosti definiraju način na koji radimo i kako pristupamo svakom projektu i svakom klijentu."
                : "Our values define the way we work and how we approach every project and every client."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} glow={value.color === "purple" ? "purple" : "pink"}>
                <div data-gsap="card">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    value.color === "purple" ? "bg-primary-500/20" 
                    : value.color === "pink" ? "bg-pink-500/20" 
                    : "bg-cyan-500/20"
                  }`}>
                    <value.icon className={
                      value.color === "purple" ? "text-primary-400" 
                      : value.color === "pink" ? "text-pink-400" 
                      : "text-cyan-400"
                    } size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-foreground-muted">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-8">
            <div
              data-gsap="card"
              className="p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-background-card border border-primary-500/20"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-6">
                <Target className="text-primary-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.about.missionTitle} {t.about.missionTitleHighlight}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {t.about.missionDescription}
              </p>
            </div>

            <div
              data-gsap="card"
              className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-background-card border border-pink-500/20"
            >
              <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                <Sparkles className="text-pink-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.about.visionTitle} {t.about.visionTitleHighlight}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {t.about.visionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-background" />
        <div data-gsap="parallax" className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="cta" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "saradnju" : "collaboration"}</span>?
            </h2>
            <p className="text-foreground-muted mb-8">
              {language === "bs" 
                ? "Kontaktirajte nas i saznajte kako možemo pomoći vašem poslovanju da ostvari digitalne ciljeve kroz naša inovativna rješenja."
                : "Contact us and find out how we can help your business achieve digital goals through our innovative solutions."}
            </p>
            <Button variant="primary" size="lg">
              {t.nav.contactUs}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
