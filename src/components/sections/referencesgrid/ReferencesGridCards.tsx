import React from "react";
import { Building2, Landmark, Wifi, Gamepad2, Monitor, Sparkles } from "lucide-react";

interface ReferencesGridCardsProps {
  language?: string;
}

const getReferences = (language: string) => [
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

export default function ReferencesGridCards({ language = "bs" }: ReferencesGridCardsProps) {
  const references = getReferences(language);

  return (
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
  );
}
