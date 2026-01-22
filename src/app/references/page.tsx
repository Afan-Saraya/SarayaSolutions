"use client";

import { Building2, Landmark, Wifi, Gamepad2, Monitor, Sparkles, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import Partners from "@/components/sections/Partners";
import { useLanguage } from "@/lib/i18n";

export default function ReferencesPage() {
  const { t, language } = useLanguage();

  const references = [
    { 
      id: "aria-mall", 
      title: "Aria Mall", 
      subtitle: language === "bs" ? "Savremeni centar uživanja" : "Modern entertainment center", 
      description: language === "bs" 
        ? "ARIA Mall u Sarajevu je moderan kompleks koji spaja komercijalne i društvene prostore."
        : "ARIA Mall in Sarajevo is a modern complex that combines commercial and social spaces.", 
      solution: language === "bs" 
        ? "360 Saraya virtuelna šetnja s hiperrealističnim grafikama."
        : "360 Saraya virtual tour with hyperrealistic graphics.", 
      highlights: language === "bs" 
        ? ["360° Virtualna šetnja", "Hiperrealistične grafike", "Inovativni pristup"]
        : ["360° Virtual tour", "Hyperrealistic graphics", "Innovative approach"], 
      icon: Building2, 
      color: "purple" 
    },
    { 
      id: "bbi-banka", 
      title: "BBI Banka", 
      subtitle: language === "bs" ? "Wi-Fi Marketing Rješenje" : "Wi-Fi Marketing Solution", 
      description: language === "bs" 
        ? "Bosna Bank International je najbrže rastuća banka u BiH."
        : "Bosna Bank International is the fastest growing bank in BiH.", 
      solution: language === "bs" 
        ? "Wi-Fi marketing rješenje s Wi-Fi 6 mrežom za 10.000+ korisnika."
        : "Wi-Fi marketing solution with Wi-Fi 6 network for 10,000+ users.", 
      highlights: language === "bs" 
        ? ["Wi-Fi 6 mreža", "10.000+ korisnika", "Bankarsko okruženje"]
        : ["Wi-Fi 6 network", "10,000+ users", "Banking environment"], 
      icon: Landmark, 
      color: "green" 
    },
    { 
      id: "nlb-banka", 
      title: "NLB Banka", 
      subtitle: language === "bs" ? "Interaktivna Igra i Wi-Fi Mreža" : "Interactive Game and Wi-Fi Network", 
      description: language === "bs" 
        ? "NLB Banka d.d. iz Sarajeva dio je NLB Grupacije."
        : "NLB Banka d.d. from Sarajevo is part of the NLB Group.", 
      solution: language === "bs" 
        ? "Interaktivna igra skijaškog spusta s motion tracking tehnologijom."
        : "Interactive ski descent game with motion tracking technology.", 
      highlights: language === "bs" 
        ? ["Motion tracking igra", "In-game advertising", "Wi-Fi 6 mreža"]
        : ["Motion tracking game", "In-game advertising", "Wi-Fi 6 network"], 
      icon: Gamepad2, 
      color: "cyan" 
    },
    { 
      id: "bh-telecom", 
      title: "BH Telecom", 
      subtitle: language === "bs" ? "AI Rješenja i Digitalna Transformacija" : "AI Solutions and Digital Transformation", 
      description: language === "bs" 
        ? "BH Telecom je glavni telekomunikacijski operater u BiH."
        : "BH Telecom is the main telecommunications operator in BiH.", 
      solution: language === "bs" 
        ? "AI rješenja za maksimalnu vidljivost i digitalnu transformaciju."
        : "AI solutions for maximum visibility and digital transformation.", 
      highlights: language === "bs" 
        ? ["AI rješenja", "Digitalna transformacija", "Maksimalna vidljivost"]
        : ["AI solutions", "Digital transformation", "Maximum visibility"], 
      icon: Wifi, 
      color: "purple" 
    },
    { 
      id: "ecommerce-2024", 
      title: "Let's do eCommerce 2024", 
      subtitle: language === "bs" ? "Interaktivni Displeji sa AI Avatarom" : "Interactive Displays with AI Avatar", 
      description: language === "bs" 
        ? "Konferencija koju organizuje Asocijacija za internet trgovinu."
        : "Conference organized by the Association for Internet Commerce.", 
      solution: language === "bs" 
        ? "Interaktivni displeji sa AI avatarom i WiFi hotspotom."
        : "Interactive displays with AI avatar and WiFi hotspot.", 
      highlights: language === "bs" 
        ? ["AI Avatar", "WiFi hotspot", "Interaktivni displeji"]
        : ["AI Avatar", "WiFi hotspot", "Interactive displays"], 
      icon: Monitor, 
      color: "green" 
    },
  ];

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              {language === "bs" 
                ? "Svi veliki projekti počinju s jednom"
                : "All great projects start with one"} <span className="text-gradient">{language === "bs" ? "malom idejom" : "small idea"}</span>.
            </h1>
            <p data-gsap="hero-desc" className="text-sm md:text-lg lg:text-xl text-foreground-muted max-w-2xl leading-relaxed">
              {t.references.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background to-background-dark" />
        <div data-gsap="parallax" className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div data-gsap="parallax" className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-20">
            <Badge variant="accent" className="mb-4">
              <Sparkles size={16} className="mr-2" />
              {language === "bs" ? "Naši Projekti" : "Our Projects"}
            </Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {language === "bs" ? "Reference koje" : "References that"} <span className="text-gradient">{language === "bs" ? "govore za nas" : "speak for us"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              {language === "bs" 
                ? "Pogledajte kako smo pomogli vodećim kompanijama da postignu svoje ciljeve kroz inovativna digitalna rješenja."
                : "See how we helped leading companies achieve their goals through innovative digital solutions."}
            </p>
          </div>

          {/* Masonry Grid Layout */}
          <div data-gsap="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {references.map((ref, index) => (
              <div 
                key={ref.id} 
                data-gsap="card" 
                className={`group relative rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  ref.color === "purple" ? "bg-gradient-to-br from-primary-500/15 via-primary-500/5 to-background-card border-primary-500/30 hover:border-primary-500/60 hover:shadow-2xl hover:shadow-primary-500/20" 
                  : ref.color === "green" ? "bg-gradient-to-br from-accent-green/15 via-accent-green/5 to-background-card border-accent-green/30 hover:border-accent-green/60 hover:shadow-2xl hover:shadow-accent-green/20"
                  : "bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-background-card border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20"
                } ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} ${index === 3 ? 'lg:col-span-2' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  ref.color === "purple" ? "bg-primary-500/10" : ref.color === "green" ? "bg-accent-green/10" : "bg-cyan-500/10"
                } rounded-full blur-3xl`} />
                
                <div className="relative p-6 md:p-8 lg:p-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-110 group-hover:rotate-6 ${
                      ref.color === "purple" ? "bg-primary-500/20 border-primary-500/30" : ref.color === "green" ? "bg-accent-green/20 border-accent-green/30" : "bg-cyan-500/20 border-cyan-500/30"
                    }`}>
                      <ref.icon className={ref.color === "purple" ? "text-primary-400" : ref.color === "green" ? "text-accent-green" : "text-cyan-400"} size={28} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-all">{ref.title}</h2>
                      <p className={`text-sm md:text-base font-semibold ${ref.color === "purple" ? "text-primary-400" : ref.color === "green" ? "text-accent-green" : "text-cyan-400"}`}>{ref.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-6">{ref.description}</p>

                  {/* Solution Box */}
                  <div className={`p-5 md:p-6 rounded-2xl border mb-6 transition-all group-hover:scale-[1.02] ${
                    ref.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-background-elevated/50 border-primary-500/20" 
                    : ref.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-background-elevated/50 border-accent-green/20"
                    : "bg-gradient-to-br from-cyan-500/10 to-background-elevated/50 border-cyan-500/20"
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        ref.color === "purple" ? "bg-primary-500/20" : ref.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                      }`}>
                        <Sparkles size={18} className={ref.color === "purple" ? "text-primary-400" : ref.color === "green" ? "text-accent-green" : "text-cyan-400"} />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-white">
                        {language === "bs" ? "Saraya Rješenje" : "Saraya Solution"}
                      </h3>
                    </div>
                    <p className="text-foreground-muted text-sm md:text-base leading-relaxed">{ref.solution}</p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {ref.highlights.map((h) => (
                      <span key={h} className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-105 ${
                        ref.color === "purple" ? "bg-primary-500/20 text-primary-300 border-primary-500/30 hover:bg-primary-500/30" 
                        : ref.color === "green" ? "bg-accent-green/20 text-accent-green border-accent-green/30 hover:bg-accent-green/30" 
                        : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30"
                      }`}>{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-background" />
        <div data-gsap="parallax" className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div data-gsap="parallax" className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent-green/20 rounded-full blur-3xl" />
        
        <div data-gsap="cta" className="text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent-green/30 to-primary-500/30 mb-6">
            <Sparkles className="text-accent-green" size={32} />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            {language === "bs" ? "Budite naša sljedeća" : "Be our next"} <span className="text-gradient">{language === "bs" ? "uspješna priča" : "success story"}</span>
          </h2>
          <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {language === "bs" 
              ? "Kontaktirajte nas i saznajte kako možemo pomoći vašem poslovanju da raste i uspijeva."
              : "Contact us and find out how we can help your business grow and succeed."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary" size="lg" className="group">
              {t.nav.contactUs}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              {language === "bs" ? "Pogledajte portfolio" : "View portfolio"}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent-green mb-1">50+</div>
              <div className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Projekata" : "Projects"}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">100%</div>
              <div className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Zadovoljstvo" : "Satisfaction"}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">24/7</div>
              <div className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Podrška" : "Support"}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
