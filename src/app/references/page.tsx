"use client";

import { Building2, Landmark, Wifi, Gamepad2, Monitor, Sparkles, Users, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
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

  const clients = ["Aria Mall", "BBI Banka", "NLB Banka", "BH Telecom", "eComm", "Central Park", "Sarajevo City", "Tech Hub"];
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
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div data-gsap="cards-grid" className="grid gap-4 md:gap-8">
            {references.map((ref) => (
              <div key={ref.id} data-gsap="card" className={`p-4 md:p-8 lg:p-10 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] ${
                ref.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-background-card border-primary-500/20 hover:border-primary-500/40" 
                : ref.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-background-card border-accent-green/20 hover:border-accent-green/40"
                : "bg-gradient-to-br from-cyan-500/10 to-background-card border-cyan-500/20 hover:border-cyan-500/40"
              }`}>
                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-4 md:gap-8 items-start">
                  <div>
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-5 ${
                      ref.color === "purple" ? "bg-primary-500/20" : ref.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                    }`}>
                      <ref.icon className={ref.color === "purple" ? "text-primary-400" : ref.color === "green" ? "text-accent-green" : "text-cyan-400"} size={20} />
                    </div>
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">{ref.title}</h2>
                    <p className={`text-xs md:text-sm font-medium mb-2 md:mb-4 ${ref.color === "purple" ? "text-primary-400" : ref.color === "green" ? "text-accent-green" : "text-cyan-400"}`}>{ref.subtitle}</p>
                    <p className="text-foreground-muted text-xs md:text-base leading-relaxed mb-4 md:mb-6">{ref.description}</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {ref.highlights.map((h) => (
                        <span key={h} className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${
                          ref.color === "purple" ? "bg-primary-500/20 text-primary-300" : ref.color === "green" ? "bg-accent-green/20 text-accent-green" : "bg-cyan-500/20 text-cyan-300"
                        }`}>{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-background-elevated/50 border border-white/5">
                    <h3 className="text-sm md:text-lg font-semibold text-white mb-2 md:mb-4 flex items-center gap-2">
                      <Sparkles size={16} className={ref.color === "purple" ? "text-primary-400" : ref.color === "green" ? "text-accent-green" : "text-cyan-400"} />
                      {language === "bs" ? "Saraya Rješenje" : "Saraya Solution"}
                    </h3>
                    <p className="text-foreground-muted text-xs md:text-base leading-relaxed">{ref.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <Badge variant="accent" className="mb-3 md:mb-4"><Users size={14} className="mr-2" />{t.common.ourPartners}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{t.references.clientsTitle} <span className="text-gradient">{t.references.clientsTitleHighlight}</span></h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">{t.references.clientsDescription}</p>
          </div>
          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {clients.map((client) => (
              <div key={client} data-gsap="card" className="p-4 md:p-6 rounded-xl bg-background-card border border-primary-500/10 flex items-center justify-center cursor-pointer group hover:border-primary-500/30 hover:bg-background-elevated transition-all duration-300 hover:-translate-y-1">
                <span className="text-xs md:text-base font-semibold text-foreground-subtle group-hover:text-white transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-background" />
        <div data-gsap="parallax" className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="cta" className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Budite naša sljedeća" : "Be our next"} <span className="text-gradient">{language === "bs" ? "uspješna priča" : "success story"}</span></h2>
            <p className="text-foreground-muted text-xs md:text-base mb-6 md:mb-8">{language === "bs" ? "Kontaktirajte nas i saznajte kako možemo pomoći vašem poslovanju." : "Contact us and find out how we can help your business."}</p>
            <Button variant="primary" size="lg">{t.nav.contactUs}<ArrowRight className="ml-2" size={20} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
