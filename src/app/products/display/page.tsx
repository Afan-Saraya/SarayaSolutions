"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, ArrowRight, Sparkles, Gamepad2, Users, Zap, Shield, Ruler, Bot, MessageSquare, X } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const getDisplayPackages = (language: string) => [
  { id: "basic", title: "Basic Display", description: language === "bs" ? "Digitalni banneri, video sadržaji i QR kodovi za jednostavnu promociju." : "Digital banners, video content and QR codes for simple promotion.", icon: Monitor, color: "purple" },
  { id: "kiosk", title: "Kiosk Display", description: language === "bs" ? "Interaktivni info-punktovi za navigaciju, usluge i korisničku podršku." : "Interactive info points for navigation, services and customer support.", icon: MessageSquare, color: "green" },
  { id: "business", title: "Business Display", description: language === "bs" ? "Napredna interakcija s kamerom, igrama i personaliziranim avatarima." : "Advanced interaction with camera, games and personalized avatars.", icon: Users, color: "blue" },
  { id: "elite", title: "Elite/AI Display", description: language === "bs" ? "AI avatar koji komunicira na 99+ jezika s naprednim razumijevanjem." : "AI avatar that communicates in 99+ languages with advanced understanding.", icon: Bot, color: "cyan" },
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
  
  const displayPackages = getDisplayPackages(language);
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

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-pink-500/15 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 right-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/20 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - 3D Model */}
            <div data-gsap="hero-title" className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/15 via-pink-500/10 to-cyan-500/15 rounded-full blur-3xl opacity-60" />
                
                {/* 3D Model Container - transparent, no background */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-square">
                  <iframe
                    src="https://app.vectary.com/p/4AZGvsuAiwoiyvnpG6dlU3?enableApi=1&hideBg=1"
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    style={{ border: 'none', background: 'transparent' }}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 md:mb-4 flex items-center justify-center lg:justify-start gap-1 md:gap-2">
                <span className="relative h-8 sm:h-10 md:h-12 lg:h-14 w-24 sm:w-32 md:w-40 lg:w-48 translate-y-0.5 md:translate-y-1">
                  <Image src="/images/logoSarayaJustText.png" alt="Saraya" fill className="object-contain object-center lg:object-left" />
                </span>
                <span className="text-gradient -ml-1 md:-ml-2">Display</span>
              </h1>
              
              <p data-gsap="hero-subtitle" className="text-sm md:text-lg text-foreground-muted mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0">
                {language === "bs" ? "Interaktivni displeji koji transformiraju prostore u iskustva" : "Interactive displays that transform spaces into experiences"}
              </p>

              <p data-gsap="hero-desc" className="text-xs md:text-base text-foreground-muted mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {language === "bs" 
                  ? "Od jednostavnih digitalnih bannera do AI avatara koji razgovaraju s korisnicima — Saraya Display donosi budućnost komunikacije u vaš prostor."
                  : "From simple digital banners to AI avatars that talk to users — Saraya Display brings the future of communication to your space."}
              </p>

              {/* Feature highlights */}
              <div data-gsap="hero-desc" className="grid grid-cols-2 gap-3 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                {(language === "bs" ? ["4K Ultra HD", "Outdoor & Indoor", "24/7 Podrška", "Domaći proizvod"] : ["4K Ultra HD", "Outdoor & Indoor", "24/7 Support", "Made in BiH"]).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground-muted text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div data-gsap="hero-buttons" className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <Button variant="primary" size="lg">{language === "bs" ? "Saznajte više" : "Learn more"}<ArrowRight className="ml-2" size={20} /></Button>
                <Button variant="outline" size="lg" onClick={() => setShowDimensions(true)}>{language === "bs" ? "Dimenzije" : "Dimensions"}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Display Packages */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-4 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Display <span className="text-gradient">{language === "bs" ? "paketi" : "packages"}</span></h2>
          </div>
          <p data-gsap="fade-in" className="text-foreground-muted text-xs md:text-base text-center max-w-4xl mx-auto mb-8 md:mb-16">
            {language === "bs" 
              ? "Saraya Display nije samo tehnološki napredan uređaj — to je moćan alat za stvaranje neponovljivih iskustava."
              : "Saraya Display is not just a technologically advanced device — it's a powerful tool for creating unforgettable experiences."}
          </p>

          <div data-gsap="cards-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {displayPackages.map((pkg) => (
              <Link href={`/products/display/${pkg.id}`} key={pkg.id}>
                <div data-gsap="card" className={`p-4 md:p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer h-full hover:-translate-y-2 ${
                  pkg.color === "purple" ? "bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-primary-500/30 hover:shadow-primary-500/20 hover:shadow-xl"
                  : pkg.color === "green" ? "bg-gradient-to-br from-accent-green/20 to-emerald-600/10 border-accent-green/30 hover:shadow-accent-green/20 hover:shadow-xl"
                  : pkg.color === "blue" ? "bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-xl"
                  : "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-xl"
                }`}>
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
                    pkg.color === "purple" ? "bg-primary-500/20" : pkg.color === "green" ? "bg-accent-green/20" : pkg.color === "blue" ? "bg-blue-500/20" : "bg-cyan-500/20"
                  }`}>
                    <pkg.icon className={pkg.color === "purple" ? "text-primary-400" : pkg.color === "green" ? "text-accent-green" : pkg.color === "blue" ? "text-blue-400" : "text-cyan-400"} size={20} />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">{pkg.title}</h3>
                  <p className="text-foreground-muted text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">{pkg.description}</p>
                  <div className="flex items-center text-primary-400 text-xs md:text-sm font-medium">{language === "bs" ? "Saznajte više" : "Learn more"}<ArrowRight className="ml-1 md:ml-2" size={14} /></div>
                </div>
              </Link>
            ))}
          </div>

          <div data-gsap="fade-in" className="mt-8 md:mt-12 p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-500/20 flex items-center justify-center"><Ruler className="text-primary-400" size={20} /></div>
              <div>
                <h3 className="text-sm md:text-lg font-bold text-white">{language === "bs" ? "Dimenzije displaya" : "Display dimensions"}</h3>
                <p className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Širok izbor dimenzija i oblika displaya." : "Wide selection of display dimensions and shapes."}</p>
              </div>
            </div>
            <Button variant="outline" className="text-xs md:text-base" onClick={() => setShowDimensions(true)}>{language === "bs" ? "Specifikacije" : "Specifications"}<ArrowRight className="ml-2" size={16} /></Button>
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
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">{language === "bs" ? "Interaktivni displeji" : "Interactive displays"} <span className="text-gradient">{language === "bs" ? "(kvizovi, igre)" : "(quizzes, games)"}</span></h2>
              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Interaktivni displeji omogućavaju korisnicima da direktno komuniciraju s digitalnim sadržajem."
                  : "Interactive displays allow users to directly communicate with digital content."}
              </p>
              <Button variant="primary">{language === "bs" ? "Saznajte više" : "Learn more"}<ArrowRight className="ml-2" size={18} /></Button>
            </div>
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
        <div className="container mx-auto px-4">
          <div data-gsap="cta" className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">{language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "digitalnu transformaciju?" : "digital transformation?"}</span></h2>
            <p className="text-foreground-muted text-xs md:text-base mb-6 md:mb-8">{language === "bs" ? "Kontaktirajte nas danas i saznajte kako Saraya Display može unaprijediti vaše poslovanje." : "Contact us today and find out how Saraya Display can improve your business."}</p>
            <Button variant="primary" size="lg">{language === "bs" ? "Kontaktirajte nas" : "Contact us"}<ArrowRight className="ml-2" size={20} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
