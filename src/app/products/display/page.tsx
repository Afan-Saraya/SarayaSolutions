"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, ArrowRight, Sparkles, Gamepad2, Users, Zap, Shield, Ruler, Bot, MessageSquare, X, ShoppingBag, Building2, Landmark, Train, Palette } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import ProductHero from "@/components/sections/ProductHero";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { useLanguage } from "@/lib/i18n";

const getDisplayTypes = (language: string) => [
  { 
    id: "indoor", 
    title: language === "bs" ? "Indoor Displeji" : "Indoor Displays", 
    description: language === "bs" ? "Savršeni za unutrašnje prostore - trgovine, restorane, hotele, kancelarije i javne prostore." : "Perfect for indoor spaces - stores, restaurants, hotels, offices and public spaces.", 
    icon: Monitor, 
    color: "purple",
    features: [
      language === "bs" ? "Visoka rezolucija 4K/8K" : "High resolution 4K/8K",
      language === "bs" ? "Touch screen opcija" : "Touch screen option",
      language === "bs" ? "Interaktivni sadržaj" : "Interactive content"
    ]
  },
  { 
    id: "outdoor", 
    title: language === "bs" ? "Outdoor Displeji" : "Outdoor Displays", 
    description: language === "bs" ? "Otporni na vremenske uslove - idealni za ulične lokacije, terase, parkinge i vanjske prostore." : "Weather resistant - ideal for street locations, terraces, parking lots and outdoor spaces.", 
    icon: Sparkles, 
    color: "green",
    features: [
      language === "bs" ? "Vodootporni IP65/IP67" : "Waterproof IP65/IP67",
      language === "bs" ? "Visoka svjetlina 2500+ nits" : "High brightness 2500+ nits",
      language === "bs" ? "Temperaturna otpornost" : "Temperature resistance"
    ]
  },
  { 
    id: "kiosk", 
    title: language === "bs" ? "Kiosk Displeji" : "Kiosk Displays", 
    description: language === "bs" ? "Samostojeći interaktivni terminali sa custom aplikacijama za self-service i informacije." : "Standalone interactive terminals with custom applications for self-service and information.", 
    icon: MessageSquare, 
    color: "cyan",
    features: [
      language === "bs" ? "Touch screen tehnologija" : "Touch screen technology",
      language === "bs" ? "Custom aplikacije" : "Custom applications",
      language === "bs" ? "Robusna konstrukcija" : "Robust construction"
    ]
  },
];

const getBenefits = (language: string) => [
  { icon: Sparkles, title: language === "bs" ? "Angažman koji konvertira" : "Engagement that converts", description: language === "bs" ? "Interaktivni sadržaji koji privlače pažnju i podstiču akciju — od informiranja do kupovine." : "Interactive content that attracts attention and encourages action — from informing to purchasing." },
  { icon: Zap, title: language === "bs" ? "Fleksibilnost bez granica" : "Unlimited flexibility", description: language === "bs" ? "Mijenjajte sadržaj u realnom vremenu, prilagođavajte kampanje i reagirajte na trendove trenutno." : "Change content in real-time, adapt campaigns and react to trends instantly." },
  { icon: Shield, title: language === "bs" ? "Kvaliteta koja traje" : "Quality that lasts", description: language === "bs" ? "Industrijski grade komponente dizajnirane za 24/7 rad u zahtjevnim uvjetima." : "Industrial grade components designed for 24/7 operation in demanding conditions." },
];

const displaySizes = [
  { size: '43"', widthCm: 95, heightCm: 54, name: 'Basic Display' },
  { size: '55"', widthCm: 122, heightCm: 69, name: 'Kiosk Display' },
  { size: '65"', widthCm: 144, heightCm: 81, name: 'Business Display' },
  { size: '75"', widthCm: 166, heightCm: 93, name: 'Elite/AI Display' },
];

export default function DisplayPage() {
  const [showDimensions, setShowDimensions] = useState(false);
  const { language } = useLanguage();
  
  const displayTypes = getDisplayTypes(language);
  const benefits = getBenefits(language);

  return (
    <>
      <PageAnimations />
      
      {/* Dimensions Modal - Keep Framer Motion for AnimatePresence */}
      <AnimatePresence>
        {showDimensions && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 backdrop-blur-md z-50" onClick={() => setShowDimensions(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 25 }} className="fixed inset-2 md:inset-6 lg:inset-12 bg-gradient-to-b from-[#0d0d12] to-[#08080c] rounded-2xl z-50 overflow-auto border border-primary-500/30 shadow-2xl shadow-primary-500/10">
              <div className="sticky top-0 bg-gradient-to-b from-[#0d0d12] to-transparent p-4 md:p-6 pb-8 z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <Badge variant="primary" className="mb-2"><Ruler size={12} className="mr-1" />{language === "bs" ? "Specifikacije" : "Specifications"}</Badge>
                    <h2 className="text-xl md:text-3xl font-bold text-white">{language === "bs" ? "Dimenzije Displaya" : "Display Dimensions"}</h2>
                  </div>
                  <button onClick={() => setShowDimensions(false)} className="p-2 md:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105">
                    <X className="text-white" size={20} />
                  </button>
                </div>
              </div>
              <div className="px-4 md:px-6 pb-6">
                {/* Horizontal Displays */}
                <div className="mb-8 md:mb-12">
                  <div className="flex items-center gap-2 mb-6 md:mb-8">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center"><Monitor size={16} className="text-primary-400" /></div>
                    <h3 className="text-sm md:text-lg font-semibold text-white">{language === "bs" ? "Horizontalni (Landscape)" : "Horizontal (Landscape)"}</h3>
                  </div>
                  <div className="flex items-end justify-center gap-4 md:gap-8 lg:gap-12 py-6 md:py-10 px-4 rounded-2xl bg-gradient-to-b from-[#111116] to-[#0a0a0e] border border-white/5">
                    {displaySizes.map((display, index) => (
                      <div key={`h-${display.size}`} className="flex flex-col items-center">
                        <div className="relative rounded-[4px] md:rounded-lg flex items-center justify-center shadow-xl" style={{ width: `${50 + index * 25}px`, height: `${30 + index * 15}px`, background: 'linear-gradient(145deg, #2a2a30, #1a1a1e)', boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                          <div className="absolute rounded-[2px] md:rounded-md overflow-hidden" style={{ inset: '3px', background: '#f5f5f5' }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <span className="text-[10px] md:text-sm font-bold text-gray-700">{display.size}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 md:mt-4 px-2 md:px-3 py-1 rounded-md text-center" style={{ background: 'linear-gradient(135deg, #d4af37, #b8960c)' }}>
                          <span className="text-[8px] md:text-[10px] font-black text-black tracking-wide">4K</span>
                          <span className="block text-[5px] md:text-[7px] font-medium text-black/70 -mt-0.5">ULTRA HD</span>
                        </div>
                        <p className="mt-2 text-[8px] md:text-[10px] text-foreground-muted">{display.widthCm} × {display.heightCm} cm</p>
                        <p className="mt-1 text-[9px] md:text-xs font-medium text-primary-400">{display.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 my-6 md:my-10">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center"><Ruler size={16} className="text-primary-400" /></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
                {/* Vertical Displays */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-6 md:mb-8">
                    <div className="w-8 h-8 rounded-lg bg-accent-pink/20 flex items-center justify-center"><Monitor size={16} className="text-accent-pink rotate-90" /></div>
                    <h3 className="text-sm md:text-lg font-semibold text-white">{language === "bs" ? "Vertikalni (Portrait) - Kiosk" : "Vertical (Portrait) - Kiosk"}</h3>
                  </div>
                  <div className="flex items-end justify-center gap-6 md:gap-10 lg:gap-16 py-6 md:py-10 px-4 rounded-2xl bg-gradient-to-b from-[#111116] to-[#0a0a0e] border border-white/5">
                    {displaySizes.map((display, index) => (
                      <div key={`v-${display.size}`} className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                          <div className="relative rounded-[4px] md:rounded-lg flex items-center justify-center shadow-xl" style={{ width: `${32 + index * 12}px`, height: `${56 + index * 22}px`, background: 'linear-gradient(145deg, #2a2a30, #1a1a1e)' }}>
                            <div className="absolute rounded-[2px] md:rounded-md overflow-hidden" style={{ inset: '3px', background: '#f5f5f5' }}>
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <span className="text-[10px] md:text-sm font-bold text-gray-700">{display.size}</span>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-sm" style={{ width: `${6 + index * 2}px`, height: `${8 + index * 3}px`, background: 'linear-gradient(90deg, #1a1a1e, #2a2a30, #1a1a1e)' }} />
                          <div className="rounded-t-md" style={{ width: `${28 + index * 10}px`, height: `${14 + index * 5}px`, background: 'linear-gradient(180deg, #2a2a30, #1a1a1e)' }} />
                          <div className="rounded-b-md" style={{ width: `${36 + index * 12}px`, height: `${8 + index * 3}px`, background: 'linear-gradient(180deg, #1a1a1e, #0f0f12)' }} />
                        </div>
                        <div className="mt-3 md:mt-4 px-2 md:px-3 py-1 rounded-md text-center" style={{ background: 'linear-gradient(135deg, #d4af37, #b8960c)' }}>
                          <span className="text-[8px] md:text-[10px] font-black text-black tracking-wide">4K</span>
                          <span className="block text-[5px] md:text-[7px] font-medium text-black/70 -mt-0.5">ULTRA HD</span>
                        </div>
                        <p className="mt-2 text-[8px] md:text-[10px] text-foreground-muted">{display.heightCm} × {display.widthCm} cm</p>
                        <p className="mt-1 text-[9px] md:text-xs font-medium text-accent-pink">{display.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 md:mt-10 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 via-background-card to-accent-pink/10 border border-primary-500/20">
                  <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0"><Sparkles className="text-primary-400" size={24} /></div>
                    <div>
                      <p className="text-white font-medium text-sm md:text-base mb-1">{language === "bs" ? "Svi displeji dolaze sa 4K Ultra HD rezolucijom" : "All displays come with 4K Ultra HD resolution"}</p>
                      <p className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Dostupni u horizontalnoj i vertikalnoj orijentaciji." : "Available in horizontal and vertical orientation."}</p>
                    </div>
                    <Button variant="primary" size="sm" className="shrink-0 mt-2 md:mt-0" onClick={() => setShowDimensions(false)}>{language === "bs" ? "Kontakt" : "Contact"}<ArrowRight className="ml-2" size={16} /></Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ProductHero
        logoSrc="/images/logos/saraya display.png"
        logoAlt="Saraya Display"
        titleGradient=""
        subtitle={language === "bs" ? "Interaktivni displeji koji transformiraju prostore u iskustva" : "Interactive displays that transform spaces into experiences"}
        description={language === "bs" 
          ? "Od jednostavnih digitalnih bannera do AI avatara koji razgovaraju s korisnicima — Saraya Display donosi budućnost komunikacije u vaš prostor."
          : "From simple digital banners to AI avatars that talk to users — Saraya Display brings the future of communication to your space."}
        features={language === "bs" ? ["4K Ultra HD", "Outdoor & Indoor", "24/7 Podrška", "Domaći proizvod"] : ["4K Ultra HD", "Outdoor & Indoor", "24/7 Support", "Made in BiH"]}
        primaryButtonText={language === "bs" ? "Saznajte više" : "Learn more"}
        secondaryButtonText={language === "bs" ? "Dimenzije" : "Dimensions"}
        secondaryButtonOnClick={() => setShowDimensions(true)}
        customVisual={
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-square overflow-hidden">
            <iframe
              src="https://app.vectary.com/p/4AZGvsuAiwoiyvnpG6dlU3?enableApi=1&hideBg=1"
              width="100%"
              height="100%"
              className="absolute inset-0 scale-110"
              style={{ border: 'none', background: 'transparent' }}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
            />
          </div>
        }
        glowColor1="bg-pink-500/15"
        glowColor2="bg-primary-500/20"
      />



      {/* Display Types */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-4 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Vrste " : "Types of "}
              <span className="text-gradient">{language === "bs" ? "displaya" : "displays"}</span>
            </h2>
          </div>
          <p data-gsap="fade-in" className="text-foreground-muted text-xs md:text-base text-center max-w-4xl mx-auto mb-8 md:mb-16">
            {language === "bs" 
              ? "Saraya Display nudi rješenja prilagođena svakom prostoru i potrebi - od unutrašnjih do vanjskih lokacija."
              : "Saraya Display offers solutions tailored to every space and need - from indoor to outdoor locations."}
          </p>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {displayTypes.map((type) => (
              <div key={type.id} data-gsap="card" className={`p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 h-full ${
                type.color === "purple" ? "bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-primary-500/30 hover:shadow-primary-500/20 hover:shadow-xl"
                : type.color === "green" ? "bg-gradient-to-br from-accent-green/20 to-emerald-600/10 border-accent-green/30 hover:shadow-accent-green/20 hover:shadow-xl"
                : "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-xl"
              }`}>
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 ${
                  type.color === "purple" ? "bg-primary-500/20" : type.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                }`}>
                  <type.icon className={type.color === "purple" ? "text-primary-400" : type.color === "green" ? "text-accent-green" : "text-cyan-400"} size={28} />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-foreground-muted text-sm md:text-base mb-6">{type.description}</p>
                
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        type.color === "purple" ? "bg-primary-500/20" : type.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                      }`}>
                        <svg className={`w-3 h-3 ${type.color === "purple" ? "text-primary-400" : type.color === "green" ? "text-accent-green" : "text-cyan-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div data-gsap="fade-in" className="p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-500/20 flex items-center justify-center"><Ruler className="text-primary-400" size={20} /></div>
              <div>
                <h3 className="text-sm md:text-lg font-bold text-white">{language === "bs" ? "Dimenzije displaya" : "Display dimensions"}</h3>
                <p className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Dostupne veličine od 32\" do 98\" ekrana." : "Available sizes from 32\" to 98\" screens."}</p>
              </div>
            </div>
            <Button variant="outline" className="text-xs md:text-base" onClick={() => setShowDimensions(true)}>{language === "bs" ? "Pogledaj dimenzije" : "View dimensions"}<ArrowRight className="ml-2" size={16} /></Button>
          </div>
        </div>
      </section>

      {/* Screen Sizes Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="primary" className="mb-4"><Monitor size={14} className="mr-2" />{language === "bs" ? "Veličine" : "Sizes"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
              {language === "bs" ? "Odaberite " : "Choose "}
              <span className="text-gradient">{language === "bs" ? "savršenu veličinu" : "perfect size"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Od kompaktnih 32\" do impresivnih 98\" ekrana - imamo rješenje za svaki prostor."
                : "From compact 32\" to impressive 98\" screens - we have a solution for every space."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { size: '32"-43"', ideal: language === "bs" ? "Male trgovine, kafići" : "Small stores, cafes", color: "purple" },
              { size: '50"-55"', ideal: language === "bs" ? "Restorani, kancelarije" : "Restaurants, offices", color: "green" },
              { size: '65"-75"', ideal: language === "bs" ? "Tržni centri, hoteli" : "Shopping centers, hotels", color: "blue" },
              { size: '85"-98"', ideal: language === "bs" ? "Velike površine, eventi" : "Large spaces, events", color: "cyan" },
            ].map((item, idx) => (
              <div key={idx} data-gsap="card" className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${
                item.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20"
                : item.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-emerald-600/5 border-accent-green/20"
                : item.color === "blue" ? "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20"
                : "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20"
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  item.color === "purple" ? "bg-primary-500/20" 
                  : item.color === "green" ? "bg-accent-green/20" 
                  : item.color === "blue" ? "bg-blue-500/20" 
                  : "bg-cyan-500/20"
                }`}>
                  <Monitor className={
                    item.color === "purple" ? "text-primary-400" 
                    : item.color === "green" ? "text-accent-green" 
                    : item.color === "blue" ? "text-blue-400" 
                    : "text-cyan-400"
                  } size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.size}</h3>
                <p className="text-foreground-muted text-sm">{item.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Avatar Display Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div data-gsap="content-left" className="order-2 lg:order-1">
              <Badge variant="accent" className="mb-3 md:mb-4"><Bot size={14} className="mr-2" />{language === "bs" ? "AI Tehnologija" : "AI Technology"}</Badge>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">AI Avatar display: <span className="text-gradient">{language === "bs" ? "revolucija u interakciji" : "revolution in interaction"}</span></h2>
              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Saraya AI Avatar Display predstavlja najnoviju tehnologiju u digitalnoj interakciji s naprednom AI i realističnim avatarima."
                  : "Saraya AI Avatar Display represents the latest technology in digital interaction with advanced AI and realistic avatars."}
              </p>
              
              {/* Feature list */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Komunicira na 99+ jezika" : "Communicates in 99+ languages"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Realistični 3D/2D avatari" : "Realistic 3D/2D avatars"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Personalizirano korisničko iskustvo" : "Personalized user experience"}</span>
                </div>
              </div>
              
              <Button variant="primary">{language === "bs" ? "Saznajte više" : "Learn more"}<ArrowRight className="ml-2" size={18} /></Button>
            </div>
            <div data-gsap="content-right" className="relative order-1 lg:order-2">
              {/* 3D Model Container - cleaner design */}
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-3xl bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/20">
                {/* Vectary 3D Model */}
                <iframe
                  src="https://app.vectary.com/p/4AZGvsuAiwoiyvnpG6dlU3"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 'none' }}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
                
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0f1a] to-transparent z-10 pointer-events-none" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-cyan-500 text-white text-xs font-semibold z-20">
                  {language === "bs" ? "99+ jezika" : "99+ languages"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Displays Section */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-gsap="content-left" className="order-2 lg:order-1">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary-500/20 shadow-2xl shadow-primary-500/10">
                <iframe
                  src="https://www.youtube.com/embed/RxvVPDaV8u8"
                  title="Saraya Display"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <div data-gsap="content-right" className="order-1 lg:order-2">
              <Badge variant="primary" className="mb-3 md:mb-4"><Gamepad2 size={14} className="mr-2" />{language === "bs" ? "Interaktivnost" : "Interactivity"}</Badge>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
                {language === "bs" ? "Više od " : "More than "}
                <span className="text-gradient">{language === "bs" ? "običnog ekrana" : "ordinary screen"}</span>
              </h2>
              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Saraya Display omogućava interakciju putem touch ekrana, gestikulacije, glasa i AI avatara. Kreirajte nezaboravna iskustva kroz igre, kvizove i personalizirane sadržaje."
                  : "Saraya Display enables interaction through touch screens, gestures, voice and AI avatars. Create unforgettable experiences through games, quizzes and personalized content."}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Gamepad2 className="text-primary-400" size={18} />
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Interaktivne igre i kvizovi" : "Interactive games and quizzes"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary-400" size={18} />
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Gestikulacija i motion tracking" : "Gestures and motion tracking"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="text-primary-400" size={18} />
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "AI avatari koji razgovaraju" : "AI avatars that talk"}</span>
                </div>
              </div>
              
              <Button variant="primary">{language === "bs" ? "Saznajte više" : "Learn more"}<ArrowRight className="ml-2" size={18} /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
              {language === "bs" ? "Gdje se " : "Where "}
              <span className="text-gradient">{language === "bs" ? "koriste?" : "are they used?"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Saraya Display transformira prostore u različitim industrijama."
                : "Saraya Display transforms spaces in various industries."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShoppingBag, title: language === "bs" ? "Trgovine & Retail" : "Stores & Retail", desc: language === "bs" ? "Promocije, katalozi, interaktivni shopping" : "Promotions, catalogs, interactive shopping" },
              { icon: Users, title: language === "bs" ? "Hoteli & Restorani" : "Hotels & Restaurants", desc: language === "bs" ? "Digitalni meniji, rezervacije, info-punktovi" : "Digital menus, reservations, info points" },
              { icon: Building2, title: language === "bs" ? "Korporacije" : "Corporations", desc: language === "bs" ? "Interna komunikacija, prezentacije, lobby" : "Internal communication, presentations, lobby" },
              { icon: Landmark, title: language === "bs" ? "Banke & Osiguranje" : "Banks & Insurance", desc: language === "bs" ? "Self-service, zakazivanje, informacije" : "Self-service, scheduling, information" },
              { icon: Train, title: language === "bs" ? "Transport" : "Transport", desc: language === "bs" ? "Rasporedi, navigacija, obavještenja" : "Schedules, navigation, notifications" },
              { icon: Palette, title: language === "bs" ? "Muzeji & Galerije" : "Museums & Galleries", desc: language === "bs" ? "Digitalne izložbe, interaktivni vodič" : "Digital exhibitions, interactive guide" },
            ].map((item, idx) => (
              <div key={idx} data-gsap="card" className="p-6 rounded-2xl bg-background-card border border-white/5 hover:border-primary-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4">
                  <item.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <Badge variant="primary" className="mb-4"><Zap size={14} className="mr-2" />{language === "bs" ? "Tehnologija" : "Technology"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
              {language === "bs" ? "Napredne " : "Advanced "}
              <span className="text-gradient">{language === "bs" ? "mogućnosti" : "capabilities"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Saraya Display koristi najnovije tehnologije za maksimalnu efikasnost i angažman."
                : "Saraya Display uses the latest technologies for maximum efficiency and engagement."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: "4K/8K", desc: language === "bs" ? "Ultra HD rezolucija" : "Ultra HD resolution", color: "purple" },
              { icon: Zap, title: "24/7", desc: language === "bs" ? "Neprekidan rad" : "Continuous operation", color: "green" },
              { icon: Shield, title: language === "bs" ? "Otpornost" : "Durability", desc: language === "bs" ? "Industrijski standard" : "Industrial standard", color: "blue" },
              { icon: Bot, title: "AI", desc: language === "bs" ? "Umjetna inteligencija" : "Artificial intelligence", color: "cyan" },
            ].map((item, idx) => (
              <div key={idx} data-gsap="card" className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 ${
                item.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20"
                : item.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-emerald-600/5 border-accent-green/20"
                : item.color === "blue" ? "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20"
                : "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20"
              }`}>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  item.color === "purple" ? "bg-primary-500/20" 
                  : item.color === "green" ? "bg-accent-green/20" 
                  : item.color === "blue" ? "bg-blue-500/20" 
                  : "bg-cyan-500/20"
                }`}>
                  <item.icon className={
                    item.color === "purple" ? "text-primary-400" 
                    : item.color === "green" ? "text-accent-green" 
                    : item.color === "blue" ? "text-blue-400" 
                    : "text-cyan-400"
                  } size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Management */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-gsap="content-left">
              <Badge variant="accent" className="mb-3 md:mb-4"><Sparkles size={14} className="mr-2" />{language === "bs" ? "Upravljanje" : "Management"}</Badge>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
                {language === "bs" ? "Jednostavno " : "Easy "}
                <span className="text-gradient">{language === "bs" ? "upravljanje sadržajem" : "content management"}</span>
              </h2>
              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Ažurirajte sadržaj na svim displejima u realnom vremenu putem intuitivne web platforme. Planirajte kampanje, mijenjajte sadržaj i pratite performanse - sve sa jednog mjesta."
                  : "Update content on all displays in real-time through an intuitive web platform. Schedule campaigns, change content and track performance - all from one place."}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Cloud-based platforma" : "Cloud-based platform"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Planiranje kampanja" : "Campaign scheduling"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Analitika u realnom vremenu" : "Real-time analytics"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-foreground-muted text-sm">{language === "bs" ? "Multi-lokacija podrška" : "Multi-location support"}</span>
                </div>
              </div>
              
              <Button variant="secondary">{language === "bs" ? "Saznajte više" : "Learn more"}<ArrowRight className="ml-2" size={18} /></Button>
            </div>
            <div data-gsap="content-right" className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-accent-green/20 shadow-2xl shadow-accent-green/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 to-background-dark flex items-center justify-center">
                  <div className="text-center p-8">
                    <Monitor className="text-accent-green mx-auto mb-4" size={64} />
                    <p className="text-white font-semibold text-lg mb-2">{language === "bs" ? "CMS Platforma" : "CMS Platform"}</p>
                    <p className="text-foreground-muted text-sm">{language === "bs" ? "Upravljajte svim displejima sa jednog mjesta" : "Manage all displays from one place"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
              {language === "bs" ? "Rezultati koji " : "Results that "}
              <span className="text-gradient">{language === "bs" ? "govore sami za sebe" : "speak for themselves"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "500+", label: language === "bs" ? "Instaliranih displeja" : "Installed displays" },
              { value: "98%", label: language === "bs" ? "Zadovoljstvo klijenata" : "Client satisfaction" },
              { value: "24/7", label: language === "bs" ? "Tehnička podrška" : "Technical support" },
              { value: "5 god", label: language === "bs" ? "Garancija" : "Warranty" },
            ].map((stat, idx) => (
              <div key={idx} data-gsap="card" className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/5 border border-primary-500/20">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-foreground-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Saraya Display */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Zašto Saraya Display predstavlja" : "Why Saraya Display represents"} <span className="text-gradient">{language === "bs" ? "vašu najbolju investiciju?" : "your best investment?"}</span></h2>
          </div>
          <div data-gsap="cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} glow="green">
                <div data-gsap="card" className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent-green/20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <benefit.icon className="text-accent-green" size={24} />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4">{benefit.title}</h3>
                  <p className="text-foreground-muted text-xs md:text-base">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div data-gsap="cta" className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">{language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "digitalnu transformaciju?" : "digital transformation?"}</span></h2>
            <p className="text-foreground-muted text-xs md:text-base mb-6 md:mb-8">{language === "bs" ? "Kontaktirajte nas danas i saznajte kako Saraya Display može unaprijediti vaše poslovanje." : "Contact us today and find out how Saraya Display can improve your business."}</p>
            <Button variant="primary" size="lg">{language === "bs" ? "Kontaktirajte nas" : "Contact us"}<ArrowRight className="ml-2" size={20} /></Button>
        </div>
      </section>
    </>
  );
}
