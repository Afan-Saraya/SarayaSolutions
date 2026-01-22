"use client";

import { 
  Wifi, Check, ArrowRight, Coffee, Hotel, ShoppingCart, Utensils,
  Shield, Database, Users, Target, TrendingUp, BarChart3, Sparkles,
  Monitor, Megaphone, Globe, Clock, Zap
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import ProductHero from "@/components/sections/ProductHero";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { useLanguage } from "@/lib/i18n";

export default function SarayaHotspotPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageAnimations />
      
      <ProductHero
        logoSrc="/images/logos/saraya hotspot.png"
        logoAlt="Saraya Hotspot"
        subtitle={language === "bs" ? "Vlastito Wi-Fi rješenje za vaš objekat" : "Custom Wi-Fi solution for your venue"}
        description={language === "bs" 
          ? "Ponudite gostima besplatan Wi-Fi sa brendiranim captive portalom. Prikupljajte podatke, komunicirajte i gradite lojalnost."
          : "Offer guests free Wi-Fi with branded captive portal. Collect data, communicate and build loyalty."}
        features={[
          language === "bs" ? "Brendirani portal" : "Branded portal",
          language === "bs" ? "Prikupljanje podataka" : "Data collection",
          language === "bs" ? "Marketing automatizacija" : "Marketing automation",
          language === "bs" ? "Real-time analitika" : "Real-time analytics",
        ]}
        primaryButtonText={language === "bs" ? "Zatražite demo" : "Request demo"}
        secondaryButtonText={language === "bs" ? "Kontaktirajte nas" : "Contact us"}
        secondaryButtonHref="/contact"
        customVisual={<DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />}
        glowColor1="bg-primary-500/15"
        glowColor2="bg-accent-green/20"
      />

      {/* WiFi 6 Network Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
        <div data-gsap="parallax" className="absolute top-1/4 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        <div data-gsap="parallax" className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="accent" className="mb-4">
              <Wifi size={16} className="mr-2" />
              {language === "bs" ? "Naša Mreža" : "Our Network"}
            </Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Najbrža i najstabilnija" : "Fastest and most stable"} <span className="text-gradient">WiFi 6</span> {language === "bs" ? "mreža" : "network"}
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" 
                ? "Saraya Hotspot koristi najnoviju WiFi 6 tehnologiju za brzu, stabilnu i sigurnu konekciju u vašem objektu."
                : "Saraya Hotspot uses the latest WiFi 6 technology for fast, stable and secure connection in your venue."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div data-gsap="card" className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-accent-green/10 to-background-card border border-accent-green/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent-green/20 flex items-center justify-center mb-6 border border-accent-green/30">
                <Wifi className="text-accent-green" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">WiFi 6</h3>
              <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
                {language === "bs" 
                  ? "Najnovija generacija bežične tehnologije sa brzinama do 9.6 Gbps i podrškom za više uređaja istovremeno."
                  : "Latest generation of wireless technology with speeds up to 9.6 Gbps and support for multiple devices simultaneously."}
              </p>
            </div>

            <div data-gsap="card" className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary-500/10 to-background-card border border-primary-500/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-6 border border-primary-500/30">
                <TrendingUp className="text-primary-400" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{language === "bs" ? "Stabilnost" : "Stability"}</h3>
              <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
                {language === "bs" 
                  ? "99.9% uptime sa redundantnim sistemima i automatskim failover-om za neprekidnu konekciju."
                  : "99.9% uptime with redundant systems and automatic failover for uninterrupted connection."}
              </p>
            </div>

            <div data-gsap="card" className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-background-card border border-cyan-500/20 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 border border-cyan-500/30">
                <Users className="text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{language === "bs" ? "Kapacitet" : "Capacity"}</h3>
              <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
                {language === "bs" 
                  ? "Podrška za 1000+ korisnika po access pointu bez gubitka performansi zahvaljujući OFDMA tehnologiji."
                  : "Support for 1000+ users per access point without performance loss thanks to OFDMA technology."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zašto Saraya Hotspot */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background to-background-dark" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="accent" className="mb-4">{language === "bs" ? "Prednosti" : "Benefits"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Zašto" : "Why"} <span className="text-gradient">Saraya Hotspot</span>?
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" 
                ? "Uporedite tradicionalni Wi-Fi sa Saraya Hotspot rješenjem"
                : "Compare traditional Wi-Fi with Saraya Hotspot solution"}
            </p>
          </div>

          <div data-gsap="comparison">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-10">
              {/* Tradicionalni Wi-Fi */}
              <div className="group p-8 md:p-10 rounded-3xl bg-gradient-to-br from-red-500/5 via-background-card to-background-card border border-red-500/20 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
                    <Wifi className="text-red-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{language === "bs" ? "Tradicionalni Wi-Fi" : "Traditional Wi-Fi"}</h3>
                    <p className="text-red-400 text-sm">{language === "bs" ? "Obični pristup" : "Basic access"}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {(language === "bs" ? [
                    "Samo internet pristup",
                    "Nema prikupljanja podataka",
                    "Nema marketinga",
                    "Nema analitike",
                    "Nema kontrole",
                    "Propuštene prilike"
                  ] : [
                    "Internet access only",
                    "No data collection",
                    "No marketing",
                    "No analytics",
                    "No control",
                    "Missed opportunities"
                  ]).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-foreground-muted">
                      <div className="w-2 h-2 rounded-full bg-red-400/50" />
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saraya Hotspot */}
              <div className="group p-8 md:p-10 rounded-3xl bg-gradient-to-br from-accent-green/10 via-primary-500/5 to-background-card border-2 border-accent-green/40 hover:border-accent-green/60 transition-all duration-300 relative shadow-xl shadow-accent-green/10">
                <div className="absolute -top-4 right-6">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-green to-accent-green/80 text-white text-xs font-bold shadow-lg">
                    ✨ {language === "bs" ? "Preporučeno" : "Recommended"}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent-green/20 flex items-center justify-center border border-accent-green/40 group-hover:scale-110 transition-transform">
                    <Wifi className="text-accent-green" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Saraya Hotspot</h3>
                    <p className="text-accent-green text-sm font-medium">{language === "bs" ? "Pametno rješenje" : "Smart solution"}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {(language === "bs" ? [
                    "Internet + Marketing alat",
                    "Prikupljanje email adresa",
                    "Automatske kampanje",
                    "Detaljni izvještaji",
                    "Potpuna kontrola",
                    "Povećanje prodaje"
                  ] : [
                    "Internet + Marketing tool",
                    "Email collection",
                    "Automated campaigns",
                    "Detailed reports",
                    "Full control",
                    "Increased sales"
                  ]).map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="text-accent-green flex-shrink-0" size={18} />
                      <span className="text-white text-sm md:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div data-gsap="fade-in" className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent-green/10 via-primary-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-accent-green" size={24} />
                  </div>
                  <p className="text-white font-semibold text-lg">
                    {language === "bs" 
                      ? "Pretvorite Wi-Fi u marketinški alat koji donosi rezultate"
                      : "Turn Wi-Fi into a marketing tool that delivers results"}
                  </p>
                </div>
                <Button variant="primary" size="lg" className="flex-shrink-0">
                  {language === "bs" ? "Saznajte više" : "Learn more"}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Šta Dobivate */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="primary" className="mb-4"><Sparkles size={14} className="mr-2" />{language === "bs" ? "Funkcije" : "Features"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Šta" : "What You"} <span className="text-gradient">{language === "bs" ? "Dobivate" : "Get"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" ? "Kompletno Wi-Fi rješenje prilagođeno vašem poslovanju" : "Complete Wi-Fi solution tailored to your business"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: language === "bs" ? "Brendirani Captive Portal" : "Branded Captive Portal", description: language === "bs" ? "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand — vaš logo, boje i dizajn." : "Fully customized login page that represents your brand — your logo, colors and design.", icon: Monitor, color: "purple", features: language === "bs" ? ["Vaš brend & dizajn", "Prilagođeni sadržaj", "Integracija sa sistemima"] : ["Your brand & design", "Custom content", "System integration"] },
              { title: language === "bs" ? "Marketing & Promocije" : "Marketing & Promotions", description: language === "bs" ? "Prikazujte ponude i promocije korisnicima prilikom spajanja. Prikupljajte email adrese i slajte kampanje." : "Display offers and promotions to users when connecting. Collect email addresses and send campaigns.", icon: Megaphone, color: "green", features: language === "bs" ? ["Email marketing", "Promocije & popusti", "Loyalty programi"] : ["Email marketing", "Promotions & discounts", "Loyalty programs"], popular: true },
              { title: language === "bs" ? "Analitika & Izvještaji" : "Analytics & Reports", description: language === "bs" ? "Pratite ponašanje korisnika, demografske podatke i dobivajte detaljne izvještaje o performansama." : "Track user behavior, demographic data and get detailed performance reports.", icon: BarChart3, color: "cyan", features: language === "bs" ? ["Real-time statistika", "Demografski podaci", "Detaljni izvještaji"] : ["Real-time statistics", "Demographic data", "Detailed reports"] },
            ].map((item, index) => (
              <div key={index} data-gsap="card" className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                item.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-background-card border-primary-500/20 hover:border-primary-500/40"
                : item.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-background-card border-accent-green/20 hover:border-accent-green/40"
                : "bg-gradient-to-br from-cyan-500/10 to-background-card border-cyan-500/20 hover:border-cyan-500/40"
              }`}>
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-accent-green text-white text-xs font-medium">
                      {language === "bs" ? "Najpopularnije" : "Most Popular"}
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 ${
                  item.color === "purple" ? "bg-primary-500/20" : item.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                }`}>
                  <item.icon className={item.color === "purple" ? "text-primary-400" : item.color === "green" ? "text-accent-green" : "text-cyan-400"} size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className={item.color === "purple" ? "text-primary-400" : item.color === "green" ? "text-accent-green" : "text-cyan-400"} size={14} />
                      <span className="text-foreground-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Captive Portal Features */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
        <div data-gsap="parallax" className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div data-gsap="parallax" className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="primary" className="mb-4"><Shield size={14} className="mr-2" />{language === "bs" ? "Portal Funkcije" : "Portal Features"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Moćan" : "Powerful"} <span className="text-gradient">{language === "bs" ? "Captive Portal" : "Captive Portal"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" ? "Sve što vam treba za uspješan Wi-Fi marketing" : "Everything you need for successful Wi-Fi marketing"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="group p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-500/10 via-background-card to-background-card border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center border border-primary-500/30 group-hover:scale-110 transition-transform">
                  <Database className="text-primary-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">{language === "bs" ? "Prikupljanje Podataka" : "Data Collection"}</h3>
              </div>
              <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                {language === "bs" ? "Prikupljajte vrijedne podatke o vašim gostima kroz različite metode prijave." : "Collect valuable data about your guests through various login methods."}
              </p>
              <div className="space-y-3">
                {(language === "bs" ? ["Email prijava", "Social media login (Facebook, Google)", "SMS verifikacija", "Demografski podaci (starost, spol)", "Interesi i preferencije"] : ["Email login", "Social media login (Facebook, Google)", "SMS verification", "Demographic data (age, gender)", "Interests and preferences"]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-primary-500/5 border border-primary-500/10 hover:border-primary-500/20 transition-all">
                    <Check className="text-primary-400 flex-shrink-0" size={18} />
                    <span className="text-foreground-muted text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group p-8 md:p-10 rounded-3xl bg-gradient-to-br from-accent-green/10 via-background-card to-background-card border border-accent-green/30 hover:border-accent-green/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-green/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-green/20 flex items-center justify-center border border-accent-green/30 group-hover:scale-110 transition-transform">
                  <Megaphone className="text-accent-green" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">{language === "bs" ? "Marketing Automatizacija" : "Marketing Automation"}</h3>
              </div>
              <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                {language === "bs" ? "Automatski komunicirajte sa gostima i gradite dugoročne odnose." : "Automatically communicate with guests and build long-term relationships."}
              </p>
              <div className="space-y-3">
                {(language === "bs" ? ["Welcome email kampanje", "Automatski newsletter", "Personalizirane ponude", "Birthday & special occasion emails", "Re-engagement kampanje"] : ["Welcome email campaigns", "Automatic newsletter", "Personalized offers", "Birthday & special occasion emails", "Re-engagement campaigns"]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-accent-green/5 border border-accent-green/10 hover:border-accent-green/20 transition-all">
                    <Check className="text-accent-green flex-shrink-0" size={18} />
                    <span className="text-foreground-muted text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-gsap="fade-in" className="grid md:grid-cols-3 gap-6">
            {[
              { title: language === "bs" ? "Loyalty Program" : "Loyalty Program", description: language === "bs" ? "Nagradite redovne goste" : "Reward regular guests", icon: Sparkles, color: "purple" },
              { title: language === "bs" ? "Geo Targeting" : "Geo Targeting", description: language === "bs" ? "Ciljajte po lokaciji" : "Target by location", icon: Target, color: "green" },
              { title: language === "bs" ? "A/B Testing" : "A/B Testing", description: language === "bs" ? "Testirajte kampanje" : "Test campaigns", icon: BarChart3, color: "cyan" },
            ].map((feature, index) => (
              <div key={index} className={`group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                feature.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-background-card border-primary-500/20 hover:border-primary-500/40"
                : feature.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-background-card border-accent-green/20 hover:border-accent-green/40"
                : "bg-gradient-to-br from-cyan-500/10 to-background-card border-cyan-500/20 hover:border-cyan-500/40"
              }`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 ${
                  feature.color === "purple" ? "bg-primary-500/20" : feature.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                }`}>
                  <feature.icon className={feature.color === "purple" ? "text-primary-400" : feature.color === "green" ? "text-accent-green" : "text-cyan-400"} size={24} />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-foreground-muted text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Meni & Rezervacije */}
      <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="accent" className="mb-4"><Utensils size={14} className="mr-2" />{language === "bs" ? "Dodatne Opcije" : "Additional Options"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Online Meni &" : "Online Menu &"} <span className="text-gradient">{language === "bs" ? "Rezervacije" : "Reservations"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" ? "Dodatne funkcije za ugostiteljske objekte" : "Additional features for hospitality venues"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-gsap="card" className="group p-8 md:p-10 rounded-3xl bg-gradient-to-br from-accent-green/10 via-background-card to-background-card border border-accent-green/30 hover:border-accent-green/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-green/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-green/20 flex items-center justify-center border border-accent-green/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Utensils className="text-accent-green" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{language === "bs" ? "Digitalni Meni" : "Digital Menu"}</h3>
                  <p className="text-accent-green text-sm font-medium">{language === "bs" ? "sa QR Kodom" : "with QR Code"}</p>
                </div>
              </div>
              <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                {language === "bs" ? "Gosti skeniraju QR kod i vide vaš meni na svom telefonu. Bez potrebe za printanim menijima." : "Guests scan QR code and see your menu on their phone. No need for printed menus."}
              </p>
              <div className="space-y-3">
                {(language === "bs" ? ["QR kod za svaki sto", "Višejezični meni", "Slike jela", "Alergeni i sastojci", "Lako ažuriranje"] : ["QR code for each table", "Multilingual menu", "Dish images", "Allergens and ingredients", "Easy updates"]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-accent-green/5 border border-accent-green/10 hover:border-accent-green/20 transition-all">
                    <Check className="text-accent-green flex-shrink-0" size={18} />
                    <span className="text-foreground-muted text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="card" className="group p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-500/10 via-background-card to-background-card border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center border border-primary-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Clock className="text-primary-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{language === "bs" ? "Online Rezervacije" : "Online Reservations"}</h3>
                  <p className="text-primary-400 text-sm font-medium">{language === "bs" ? "Stolova" : "Tables"}</p>
                </div>
              </div>
              <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                {language === "bs" ? "Gosti mogu rezervisati sto direktno sa captive portala ili vašeg web sajta." : "Guests can reserve a table directly from captive portal or your website."}
              </p>
              <div className="space-y-3">
                {(language === "bs" ? ["Real-time dostupnost", "Automatske potvrde", "SMS & Email notifikacije", "Upravljanje stolovima", "Integracija sa portalom"] : ["Real-time availability", "Automatic confirmations", "SMS & Email notifications", "Table management", "Portal integration"]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-primary-500/5 border border-primary-500/10 hover:border-primary-500/20 transition-all">
                    <Check className="text-primary-400 flex-shrink-0" size={18} />
                    <span className="text-foreground-muted text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kompletno Rješenje */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
        <div data-gsap="parallax" className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div data-gsap="parallax" className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="primary" className="mb-4"><Sparkles size={14} className="mr-2" />{language === "bs" ? "Sve na jednom mjestu" : "All in one place"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Kompletno" : "Complete"} <span className="text-gradient">{language === "bs" ? "Rješenje" : "Solution"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" 
                ? "Saraya Hotspot može biti dio kompletnog ekosistema za vaš objekat" 
                : "Saraya Hotspot can be part of a complete ecosystem for your venue"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-8 mb-12">
            <div data-gsap="card" className="group p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-background-card to-background-card border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mx-auto mb-4 border border-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Wifi className="text-cyan-400" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{language === "bs" ? "Vlastiti Captive Portal" : "Custom Captive Portal"}</h3>
              </div>
              <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Potpuno prilagođen portal sa vašim brendingom, bojama i sadržajem. Prikupljajte podatke i komunicirajte sa gostima."
                  : "Fully customized portal with your branding, colors and content. Collect data and communicate with guests."}
              </p>
              <div className="space-y-3">
                {(language === "bs" 
                  ? ["Vaš logo i dizajn", "Prilagođeni sadržaj", "Email marketing", "Social media login", "Analitika korisnika"]
                  : ["Your logo and design", "Custom content", "Email marketing", "Social media login", "User analytics"]
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/20 transition-all">
                    <Check className="text-cyan-400 flex-shrink-0" size={16} />
                    <span className="text-foreground-muted text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="card" className="group p-8 rounded-3xl bg-gradient-to-br from-accent-green/10 via-background-card to-background-card border-2 border-accent-green/40 hover:border-accent-green/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-green/20 relative">
              <div className="absolute -top-4 right-6">
                <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-green to-accent-green/80 text-white text-xs font-bold shadow-lg">
                  ✨ {language === "bs" ? "Popularno" : "Popular"}
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-green/5 flex items-center justify-center mx-auto mb-4 border border-accent-green/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Utensils className="text-accent-green" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{language === "bs" ? "Online Meniji" : "Online Menus"}</h3>
              </div>
              <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Za kafiće i restorane - digitalni meniji sa QR kodovima. Gosti skeniraju i vide ponudu na svom telefonu."
                  : "For cafes and restaurants - digital menus with QR codes. Guests scan and see the offer on their phone."}
              </p>
              <div className="space-y-3">
                {(language === "bs" 
                  ? ["QR kod meniji", "Višejezična podrška", "Slike i opisi jela", "Alergeni i sastojci", "Instant ažuriranje"]
                  : ["QR code menus", "Multilingual support", "Dish images and descriptions", "Allergens and ingredients", "Instant updates"]
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-accent-green/5 border border-accent-green/10 hover:border-accent-green/20 transition-all">
                    <Check className="text-accent-green flex-shrink-0" size={16} />
                    <span className="text-foreground-muted text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="card" className="group p-8 rounded-3xl bg-gradient-to-br from-primary-500/10 via-background-card to-background-card border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-500/5 flex items-center justify-center mx-auto mb-4 border border-primary-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Monitor className="text-primary-400" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{language === "bs" ? "Displej Integracija" : "Display Integration"}</h3>
              </div>
              <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Povežite Saraya Display sa Hotspot sistemom. Interaktivni ekrani sa Wi-Fi pristupom i informacijama."
                  : "Connect Saraya Display with Hotspot system. Interactive screens with Wi-Fi access and information."}
              </p>
              <div className="space-y-3">
                {(language === "bs" 
                  ? ["Interaktivni displej", "Wi-Fi pristup", "Info punktovi", "Navigacija", "AI Avatar asistenti"]
                  : ["Interactive display", "Wi-Fi access", "Info points", "Navigation", "AI Avatar assistants"]
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-primary-500/5 border border-primary-500/10 hover:border-primary-500/20 transition-all">
                    <Check className="text-primary-400 flex-shrink-0" size={16} />
                    <span className="text-foreground-muted text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-gsap="fade-in" className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-500/10 via-cyan-500/5 to-accent-green/10 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {language === "bs" ? "Sve povezano u jedan sistem" : "Everything connected in one system"}
                </h3>
                <p className="text-foreground-muted text-base md:text-lg mb-6 leading-relaxed">
                  {language === "bs" 
                    ? "Saraya Hotspot, Online Meniji i Displej mogu raditi zajedno kao jedinstveno rješenje. Gosti se spajaju na Wi-Fi, vide meni na displeju ili telefonu, i rezervišu sto - sve kroz jedan sistem."
                    : "Saraya Hotspot, Online Menus and Display can work together as a unified solution. Guests connect to Wi-Fi, see the menu on display or phone, and reserve a table - all through one system."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="primary" className="text-sm">{language === "bs" ? "Wi-Fi" : "Wi-Fi"}</Badge>
                  <Badge variant="accent" className="text-sm">{language === "bs" ? "Meniji" : "Menus"}</Badge>
                  <Badge variant="secondary" className="text-sm">{language === "bs" ? "Displej" : "Display"}</Badge>
                  <Badge variant="secondary" className="text-sm">{language === "bs" ? "Rezervacije" : "Reservations"}</Badge>
                  <Badge variant="secondary" className="text-sm">{language === "bs" ? "Marketing" : "Marketing"}</Badge>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button variant="primary" size="lg" className="group">
                  {language === "bs" ? "Saznajte više" : "Learn more"}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Za Koje Industrije */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="primary" className="mb-4"><Target size={14} className="mr-2" />{language === "bs" ? "Industrije" : "Industries"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Za Koje" : "For Which"} <span className="text-gradient">{language === "bs" ? "Industrije" : "Industries"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" ? "Saraya Hotspot je idealan za sve objekte koji žele ponuditi Wi-Fi svojim gostima" : "Saraya Hotspot is ideal for all venues that want to offer Wi-Fi to their guests"}
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background-card via-background-card to-background-card/50 border border-white/10">
                <div className="grid grid-cols-2 gap-4 relative">
                  {[
                    { title: language === "bs" ? "Kafići & Barovi" : "Cafes & Bars", subtitle: language === "bs" ? "Wi-Fi + Online meni" : "Wi-Fi + Online menu", icon: Coffee, color: "purple" },
                    { title: language === "bs" ? "Restorani" : "Restaurants", subtitle: language === "bs" ? "Wi-Fi + Rezervacije" : "Wi-Fi + Reservations", icon: Utensils, color: "cyan" },
                    { title: language === "bs" ? "Hoteli" : "Hotels", subtitle: language === "bs" ? "Guest Wi-Fi + Services" : "Guest Wi-Fi + Services", icon: Hotel, color: "green" },
                    { title: language === "bs" ? "Trgovački Centri" : "Shopping Centers", subtitle: language === "bs" ? "Wi-Fi + Navigacija" : "Wi-Fi + Navigation", icon: ShoppingCart, color: "pink" },
                  ].map((item, index) => (
                    <div key={index} data-gsap="card" className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                      item.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-background-card border-primary-500/30 hover:border-primary-500/50" 
                      : item.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-background-card border-accent-green/30 hover:border-accent-green/50" 
                      : item.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-background-card border-cyan-500/30 hover:border-cyan-500/50" 
                      : "bg-gradient-to-br from-pink-500/10 to-background-card border-pink-500/30 hover:border-pink-500/50"
                    }`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                        item.color === "purple" ? "bg-primary-500/20" : item.color === "green" ? "bg-accent-green/20" : item.color === "cyan" ? "bg-cyan-500/20" : "bg-pink-500/20"
                      }`}>
                        <item.icon className={item.color === "purple" ? "text-primary-400" : item.color === "green" ? "text-accent-green" : item.color === "cyan" ? "text-cyan-400" : "text-pink-400"} size={24} />
                      </div>
                      <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                      <p className="text-foreground-muted text-xs">{item.subtitle}</p>
                    </div>
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-accent-green to-accent-green/80 flex items-center justify-center shadow-xl shadow-accent-green/40 z-10 border-4 border-background-card">
                    <Wifi className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div data-gsap="card" className="p-8 rounded-3xl bg-gradient-to-br from-background-card via-background-card to-background-card/50 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-green/20 flex items-center justify-center">
                    <Sparkles className="text-accent-green" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-xl">{language === "bs" ? "Ključne Prednosti" : "Key Benefits"}</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: language === "bs" ? "Prikupljanje Podataka" : "Data Collection", subtitle: language === "bs" ? "Email, demografija" : "Email, demographics", icon: Database, color: "text-primary-400", bgColor: "bg-primary-500/10" },
                    { title: language === "bs" ? "Povećanje Prodaje" : "Sales Increase", subtitle: language === "bs" ? "Direktne promocije" : "Direct promotions", icon: TrendingUp, color: "text-accent-green", bgColor: "bg-accent-green/10" },
                    { title: language === "bs" ? "Ciljani Marketing" : "Targeted Marketing", subtitle: language === "bs" ? "Personalizacija" : "Personalization", icon: Target, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
                    { title: language === "bs" ? "Analitika" : "Analytics", subtitle: language === "bs" ? "Real-time podaci" : "Real-time data", icon: BarChart3, color: "text-pink-400", bgColor: "bg-pink-500/10" },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${item.bgColor} border border-white/5 hover:border-white/10 transition-all`}>
                      <div className="flex-shrink-0">
                        <item.icon className={item.color} size={22} />
                      </div>
                      <div>
                        <p className="text-white text-base font-semibold mb-1">{item.title}</p>
                        <p className="text-foreground-muted text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div data-gsap="fade-in" className="grid grid-cols-4 gap-4">
                {[
                  { value: "+45%", label: language === "bs" ? "Povrat" : "Return", color: "text-accent-green", bgColor: "from-accent-green/20 to-accent-green/5", borderColor: "border-accent-green/30" },
                  { value: "+30%", label: "Email", color: "text-primary-400", bgColor: "from-primary-500/20 to-primary-500/5", borderColor: "border-primary-500/30" },
                  { value: "+25%", label: language === "bs" ? "Boravak" : "Dwell", color: "text-cyan-400", bgColor: "from-cyan-500/20 to-cyan-500/5", borderColor: "border-cyan-500/30" },
                  { value: "+20%", label: language === "bs" ? "Prodaja" : "Sales", color: "text-pink-400", bgColor: "from-pink-500/20 to-pink-500/5", borderColor: "border-pink-500/30" },
                ].map((stat, index) => (
                  <div key={index} className={`p-5 rounded-2xl bg-gradient-to-br ${stat.bgColor} border ${stat.borderColor} text-center hover:scale-105 transition-transform`}>
                    <p className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                    <p className="text-foreground-muted text-xs font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tehnologija */}
      <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="accent" className="mb-4"><Zap size={14} className="mr-2" />{language === "bs" ? "Tehnologija" : "Technology"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Napredna" : "Advanced"} <span className="text-gradient">{language === "bs" ? "Tehnologija" : "Technology"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" 
                ? "Koristimo najnovije tehnologije za brz, siguran i pouzdan Wi-Fi"
                : "We use the latest technologies for fast, secure and reliable Wi-Fi"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Wi-Fi 6", description: language === "bs" ? "Najnoviji standard" : "Latest standard", detail: language === "bs" ? "Do 40% brži" : "Up to 40% faster", icon: Wifi, color: "cyan" },
              { title: "Cloud-based", description: language === "bs" ? "Upravljanje iz oblaka" : "Cloud management", detail: language === "bs" ? "Pristup svuda" : "Access anywhere", icon: Globe, color: "purple" },
              { title: language === "bs" ? "Skalabilnost" : "Scalability", description: language === "bs" ? "Raste sa vama" : "Grows with you", detail: language === "bs" ? "1-1000+ AP" : "1-1000+ AP", icon: TrendingUp, color: "green" },
              { title: "24/7 Uptime", description: "99.9% SLA", detail: language === "bs" ? "Garantovano" : "Guaranteed", icon: Shield, color: "pink" },
            ].map((tech, index) => (
              <div key={index} data-gsap="card" className={`group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                tech.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-background-card border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
                : tech.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-background-card border-primary-500/20 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10"
                : tech.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-background-card border-accent-green/20 hover:border-accent-green/40 hover:shadow-xl hover:shadow-accent-green/10"
                : "bg-gradient-to-br from-pink-500/10 to-background-card border-pink-500/20 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/10"
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                  tech.color === "cyan" ? "bg-cyan-500/20 border border-cyan-500/30"
                  : tech.color === "purple" ? "bg-primary-500/20 border border-primary-500/30"
                  : tech.color === "green" ? "bg-accent-green/20 border border-accent-green/30"
                  : "bg-pink-500/20 border border-pink-500/30"
                }`}>
                  <tech.icon className={
                    tech.color === "cyan" ? "text-cyan-400"
                    : tech.color === "purple" ? "text-primary-400"
                    : tech.color === "green" ? "text-accent-green"
                    : "text-pink-400"
                  } size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold text-xl mb-2">{tech.title}</h4>
                  <p className="text-foreground-muted text-sm mb-3">{tech.description}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    tech.color === "cyan" ? "bg-cyan-500/20 text-cyan-400"
                    : tech.color === "purple" ? "bg-primary-500/20 text-primary-400"
                    : tech.color === "green" ? "bg-accent-green/20 text-accent-green"
                    : "bg-pink-500/20 text-pink-400"
                  }`}>
                    {tech.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div data-gsap="fade-in" className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-primary-500/10 to-accent-green/10 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-green to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {language === "bs" ? "Enterprise-grade infrastruktura" : "Enterprise-grade infrastructure"}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {language === "bs" 
                      ? "Ista tehnologija koju koriste najveće kompanije svijeta"
                      : "Same technology used by the world's largest companies"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <div className="text-center px-4 py-2 rounded-xl bg-background-card/50 border border-white/10">
                  <p className="text-accent-green font-bold text-lg">99.9%</p>
                  <p className="text-foreground-muted text-xs">Uptime</p>
                </div>
                <div className="text-center px-4 py-2 rounded-xl bg-background-card/50 border border-white/10">
                  <p className="text-cyan-400 font-bold text-lg">&lt;50ms</p>
                  <p className="text-foreground-muted text-xs">Latency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="primary" className="mb-4"><Clock size={14} className="mr-2" />{language === "bs" ? "Jednostavna Instalacija" : "Easy Setup"}</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Kako" : "How"} <span className="text-gradient">{language === "bs" ? "Funkcioniše" : "It Works"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
              {language === "bs" 
                ? "Od prvog kontakta do aktivnog Hotspot sistema u 5 koraka"
                : "From first contact to active Hotspot system in 5 steps"}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: language === "bs" ? "Konsultacija" : "Consultation",
                  description: language === "bs" 
                    ? "Razgovaramo o vašim potrebama, broju lokacija i željenim funkcijama. Besplatna konzultacija bez obaveza."
                    : "We discuss your needs, number of locations and desired features. Free consultation with no obligations.",
                  duration: language === "bs" ? "30 min" : "30 min",
                  icon: Users,
                  color: "primary"
                },
                {
                  step: "02",
                  title: language === "bs" ? "Dizajn Portala" : "Portal Design",
                  description: language === "bs" 
                    ? "Kreiramo brendirani captive portal sa vašim logom, bojama i sadržajem. Dobivate preview prije lansiranja."
                    : "We create branded captive portal with your logo, colors and content. You get preview before launch.",
                  duration: language === "bs" ? "2-3 dana" : "2-3 days",
                  icon: Monitor,
                  color: "green"
                },
                {
                  step: "03",
                  title: language === "bs" ? "Instalacija Opreme" : "Equipment Installation",
                  description: language === "bs" 
                    ? "Naš tim instalira Wi-Fi opremu na vašoj lokaciji. Brza i profesionalna instalacija bez prekida rada."
                    : "Our team installs Wi-Fi equipment at your location. Fast and professional installation without work interruption.",
                  duration: language === "bs" ? "1 dan" : "1 day",
                  icon: Wifi,
                  color: "cyan"
                },
                {
                  step: "04",
                  title: language === "bs" ? "Konfiguracija" : "Configuration",
                  description: language === "bs" 
                    ? "Podešavamo sistem, testiramo sve funkcije i obučavamo vaš tim kako da koristi dashboard."
                    : "We configure system, test all features and train your team how to use dashboard.",
                  duration: language === "bs" ? "1 dan" : "1 day",
                  icon: Target,
                  color: "pink"
                },
                {
                  step: "05",
                  title: language === "bs" ? "Go Live!" : "Go Live!",
                  description: language === "bs" 
                    ? "Vaš Hotspot je aktivan! Počinjete prikupljati podatke i komunicirati sa gostima. 24/7 podrška dostupna."
                    : "Your Hotspot is active! You start collecting data and communicating with guests. 24/7 support available.",
                  duration: language === "bs" ? "Odmah" : "Instant",
                  icon: Sparkles,
                  color: "green"
                },
              ].map((item, index) => (
                <div key={index} data-gsap="card" className="relative group">
                  <div className={`flex flex-col md:flex-row gap-6 p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                    item.color === "primary" ? "bg-gradient-to-br from-primary-500/10 to-background-card border-primary-500/30 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10" :
                    item.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-background-card border-accent-green/30 hover:border-accent-green/50 hover:shadow-xl hover:shadow-accent-green/10" :
                    item.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-background-card border-cyan-500/30 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10" :
                    "bg-gradient-to-br from-pink-500/10 to-background-card border-pink-500/30 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10"
                  }`}>
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                        item.color === "primary" ? "bg-primary-500/20 border-2 border-primary-500/40" :
                        item.color === "green" ? "bg-accent-green/20 border-2 border-accent-green/40" :
                        item.color === "cyan" ? "bg-cyan-500/20 border-2 border-cyan-500/40" :
                        "bg-pink-500/20 border-2 border-pink-500/40"
                      }`}>
                        <item.icon className={
                          item.color === "primary" ? "text-primary-400" :
                          item.color === "green" ? "text-accent-green" :
                          item.color === "cyan" ? "text-cyan-400" :
                          "text-pink-400"
                        } size={32} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                        <span className={`text-3xl font-bold ${
                          item.color === "primary" ? "text-primary-400" :
                          item.color === "green" ? "text-accent-green" :
                          item.color === "cyan" ? "text-cyan-400" :
                          "text-pink-400"
                        }`}>{item.step}</span>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <span className={`md:ml-auto px-4 py-1.5 rounded-full text-sm font-semibold ${
                          item.color === "primary" ? "bg-primary-500/20 text-primary-400" :
                          item.color === "green" ? "bg-accent-green/20 text-accent-green" :
                          item.color === "cyan" ? "bg-cyan-500/20 text-cyan-400" :
                          "bg-pink-500/20 text-pink-400"
                        }`}>
                          <Clock size={14} className="inline mr-1" />
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-foreground-muted text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className={`hidden md:block absolute left-10 top-full w-1 h-6 ${
                      item.color === "primary" ? "bg-gradient-to-b from-primary-500/40 to-transparent" :
                      item.color === "green" ? "bg-gradient-to-b from-accent-green/40 to-transparent" :
                      item.color === "cyan" ? "bg-gradient-to-b from-cyan-500/40 to-transparent" :
                      "bg-gradient-to-b from-pink-500/40 to-transparent"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <div data-gsap="fade-in" className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary-500/10 via-cyan-500/10 to-accent-green/10 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-green to-primary-500 flex items-center justify-center">
                    <Zap className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl mb-1">
                      {language === "bs" ? "Ukupno vrijeme: 5-7 dana" : "Total time: 5-7 days"}
                    </p>
                    <p className="text-foreground-muted text-sm">
                      {language === "bs" 
                        ? "Od prvog kontakta do aktivnog sistema. Brže od konkurencije."
                        : "From first contact to active system. Faster than competition."}
                    </p>
                  </div>
                </div>
                <Button variant="primary" size="lg">
                  {language === "bs" ? "Započnite sada" : "Start now"}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div data-gsap="cta">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-500/10 via-accent-green/10 to-cyan-500/10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-green to-primary-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-accent-green/20">
                  <Wifi className="text-white" size={36} />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "vlastiti Wi-Fi" : "your own Wi-Fi"}</span>?
                </h2>
                <p className="text-foreground-muted text-base md:text-lg max-w-2xl mx-auto">
                  {language === "bs" 
                    ? "Pridružite se 50+ objekata koji već koriste Saraya Hotspot i povećavaju angažman gostiju."
                    : "Join 50+ venues already using Saraya Hotspot and increasing guest engagement."}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Users, value: "+45%", label: language === "bs" ? "Povrat gostiju" : "Guest return" },
                  { icon: TrendingUp, value: "+30%", label: language === "bs" ? "Email lista" : "Email list" },
                  { icon: Sparkles, value: "5-7", label: language === "bs" ? "Dana setup" : "Days setup" },
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-background-card/50 backdrop-blur-sm border border-white/10 text-center">
                    <stat.icon className="text-accent-green mx-auto mb-2" size={24} />
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-foreground-muted text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" size="lg" className="flex-1 sm:flex-initial">
                  {language === "bs" ? "Zatražite ponudu" : "Request quote"}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-initial">
                  {language === "bs" ? "Zakažite demo" : "Schedule demo"}
                </Button>
              </div>

              <p className="text-center text-foreground-muted text-sm mt-6">
                {language === "bs" 
                  ? "Besplatna konzultacija • Bez obaveza • Odgovor u 24h"
                  : "Free consultation • No obligations • Response in 24h"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
