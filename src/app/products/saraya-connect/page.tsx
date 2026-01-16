"use client";

import { 
  Wifi, BarChart3, ArrowRight, Check, Play, MapPin,
  ShoppingBag, Megaphone, Coffee, Hotel, ShoppingCart,
  Utensils, Users, TrendingUp, Target, Eye
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import DeviceMockup from "@/components/ui/DeviceMockup";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const getPortalFeatures = (language: string) => [
  { title: language === "bs" ? "Brendirani Portal" : "Branded Portal", description: language === "bs" ? "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand." : "Fully customized login page that represents your brand.", icon: Megaphone },
  { title: language === "bs" ? "Marketing & Promocije" : "Marketing & Promotions", description: language === "bs" ? "Prikazujte ponude i promocije korisnicima prilikom spajanja." : "Display offers and promotions to users when connecting.", icon: ShoppingBag },
  { title: language === "bs" ? "Analitika Ponašanja" : "Behavior Analytics", description: language === "bs" ? "Pratite kako se korisnici kreću i što ih zanima." : "Track how users move and what interests them.", icon: BarChart3 },
];

const getIncludedPages = (language: string) => [
  { 
    title: "Rewards Center", 
    description: language === "bs" 
      ? "Loyalty program koji nagrađuje korisnike za svaku posjetu i interakciju. Korisnici skupljaju bodove, osvajaju nagrade i dobivaju ekskluzivne popuste od partnera na mreži."
      : "Loyalty program that rewards users for every visit and interaction. Users collect points, win prizes and get exclusive discounts from network partners.",
    benefits: language === "bs" ? ["Skupljanje bodova", "Ekskluzivne nagrade", "Partnerski popusti"] : ["Point collection", "Exclusive rewards", "Partner discounts"],
    logo: "/images/logos/reward center.png", 
    color: "purple" 
  },
  { 
    title: "Pametno Odabrano", 
    description: language === "bs" 
      ? "AI-powered sistem preporuka koji korisnicima predlaže relevantne proizvode, usluge i sadržaje bazirano na njihovim interesima i lokaciji."
      : "AI-powered recommendation system that suggests relevant products, services and content to users based on their interests and location.",
    benefits: language === "bs" ? ["Personalizirane preporuke", "Lokalne ponude", "Pametno filtriranje"] : ["Personalized recommendations", "Local offers", "Smart filtering"],
    logo: "/images/logos/pametno odabrano.png", 
    color: "green" 
  },
  { 
    title: "Explore Sarajevo", 
    description: language === "bs" 
      ? "Interaktivni turistički vodič kroz Sarajevo s preporukama restorana, kafića, atrakcija i događaja. Idealno za turiste i lokalne stanovnike."
      : "Interactive tourist guide through Sarajevo with recommendations for restaurants, cafes, attractions and events. Ideal for tourists and locals.",
    benefits: language === "bs" ? ["Mapa grada", "Preporuke lokacija", "Događaji u gradu"] : ["City map", "Location recommendations", "City events"],
    logo: "/images/logos/explore sarajevo.png", 
    color: "cyan" 
  },
];

const getBusinessTypes = (language: string) => [
  { title: language === "bs" ? "Kafići & Barovi" : "Cafes & Bars", icon: Coffee, color: "purple", feature: language === "bs" ? "Online meni & rezervacije" : "Online menu & reservations" },
  { title: language === "bs" ? "Restorani" : "Restaurants", icon: Utensils, color: "green", feature: language === "bs" ? "Online meni & rezervacije" : "Online menu & reservations" },
  { title: language === "bs" ? "Hoteli" : "Hotels", icon: Hotel, color: "cyan", feature: language === "bs" ? "Check-in & usluge" : "Check-in & services" },
  { title: language === "bs" ? "Trgovački Centri" : "Shopping Centers", icon: ShoppingCart, color: "pink", feature: language === "bs" ? "Navigacija & promocije" : "Navigation & promotions" },
];

const getAdvertisingStats = (language: string) => [
  { value: "20,000+", label: language === "bs" ? "Dnevnih korisnika" : "Daily users" },
  { value: "3", label: language === "bs" ? "Zone pokrivenosti" : "Coverage zones" },
  { value: "100%", label: language === "bs" ? "Vidljivost oglasa" : "Ad visibility" },
  { value: "15s+", label: language === "bs" ? "Prosječno vrijeme gledanja" : "Avg. view time" },
];

const getAdFormats = (language: string) => [
  { icon: Eye, title: language === "bs" ? "Splash Screen Oglas" : "Splash Screen Ad", description: language === "bs" ? "Full-screen oglas prilikom spajanja na Wi-Fi." : "Full-screen ad when connecting to Wi-Fi." },
  { icon: Target, title: language === "bs" ? "Banner Oglasi" : "Banner Ads", description: language === "bs" ? "Banneri na portalu i stranicama unutar mreže." : "Banners on portal and pages within the network." },
];

export default function SarayaConnectPage() {
  const { language } = useLanguage();
  const portalFeatures = getPortalFeatures(language);
  const includedPages = getIncludedPages(language);
  const businessTypes = getBusinessTypes(language);
  const advertisingStats = getAdvertisingStats(language);
  const adFormats = getAdFormats(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-accent-green/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div data-gsap="hero-title" className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="relative h-10 md:h-14 lg:h-16 w-56 md:w-72 lg:w-80 mb-4 md:mb-6 mx-auto lg:mx-0" data-gsap="hero-title">
                <Image src="/images/logos/saraya connect.png" alt="Saraya Connect" fill className="object-contain object-center lg:object-left" />
              </div>

              <p data-gsap="hero-desc" className="text-sm md:text-base lg:text-lg text-foreground-muted mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {language === "bs" 
                  ? "Pretvorite besplatni Wi-Fi u moćan marketing alat. Prikupljajte podatke, komunicirajte s korisnicima i gradite lojalnost."
                  : "Turn free Wi-Fi into a powerful marketing tool. Collect data, communicate with users and build loyalty."}
              </p>

              <div data-gsap="hero-desc" className="grid grid-cols-2 gap-3 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                {(language === "bs" ? ["Captive Portal", "Marketing platforma", "Analitika korisnika", "Skalabilnost"] : ["Captive Portal", "Marketing platform", "User analytics", "Scalability"]).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent-green" size={12} />
                    </div>
                    <span className="text-foreground-muted text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div data-gsap="hero-buttons" className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <Button variant="primary" size="lg">{language === "bs" ? "Hotspot solucije" : "Hotspot solutions"}<ArrowRight className="ml-2" size={20} /></Button>
                <Button variant="outline" size="lg"><Play className="mr-2" size={18} />Video</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Quick Overview */}
      <section className="py-10 md:py-16 bg-background-dark border-y border-primary-500/10">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              {language === "bs" ? "Šta" : "What We"} <span className="text-gradient">{language === "bs" ? "Nudimo" : "Offer"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Kompletna Wi-Fi i marketing rješenja za vaše poslovanje"
                : "Complete Wi-Fi and marketing solutions for your business"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Public Network Advertising */}
            <div data-gsap="card" className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-primary-500/15 to-primary-600/5 border border-primary-500/30 hover:border-primary-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Megaphone className="text-primary-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                {language === "bs" ? "Oglašavanje na Javnoj Mreži" : "Public Network Advertising"}
              </h3>
              <p className="text-foreground-muted text-sm mb-3">
                {language === "bs" 
                  ? "Dosegnite 20,000+ korisnika dnevno na našoj besplatnoj Wi-Fi mreži u centru Sarajeva."
                  : "Reach 20,000+ users daily on our free Wi-Fi network in Sarajevo city center."}
              </p>
              <ul className="space-y-1.5">
                {(language === "bs" ? ["Splash screen oglasi", "Banner kampanje", "Geo-targeting"] : ["Splash screen ads", "Banner campaigns", "Geo-targeting"]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-foreground-muted">
                    <Check className="text-primary-400" size={12} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Captive Portal */}
            <div data-gsap="card" className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-accent-green/15 to-emerald-600/5 border border-accent-green/30 hover:border-accent-green/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-accent-green/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wifi className="text-accent-green" size={24} />
              </div>
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                {language === "bs" ? "Vlastiti Captive Portal" : "Custom Captive Portal"}
              </h3>
              <p className="text-foreground-muted text-sm mb-3">
                {language === "bs" 
                  ? "Kreirajte brendirani Wi-Fi portal za vaš objekt — kafić, restoran, hotel ili trgovinu."
                  : "Create a branded Wi-Fi portal for your venue — cafe, restaurant, hotel or store."}
              </p>
              <ul className="space-y-1.5">
                {(language === "bs" ? ["Vaš brend & dizajn", "Prikupljanje podataka", "Marketing automatizacija"] : ["Your brand & design", "Data collection", "Marketing automation"]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-foreground-muted">
                    <Check className="text-accent-green" size={12} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Digital Menu & Reservations */}
            <div data-gsap="card" className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Utensils className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-base md:text-lg mb-2">
                {language === "bs" ? "Online Meni & Rezervacije" : "Online Menu & Reservations"}
              </h3>
              <p className="text-foreground-muted text-sm mb-3">
                {language === "bs" 
                  ? "Digitalni meni s QR kodom i sistem za online rezervacije stolova za ugostiteljske objekte."
                  : "Digital menu with QR code and online table reservation system for hospitality venues."}
              </p>
              <ul className="space-y-1.5">
                {(language === "bs" ? ["QR kod meni", "Online rezervacije", "Integracija s portalom"] : ["QR code menu", "Online reservations", "Portal integration"]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-foreground-muted">
                    <Check className="text-cyan-400" size={12} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Zones - Compact */}
      <section className="py-12 md:py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="secondary" className="mb-3"><MapPin size={14} className="mr-2" />{language === "bs" ? "Pokrivenost" : "Coverage"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">{language === "bs" ? "Saraya Mreža" : "Saraya Network"} <span className="text-gradient">{language === "bs" ? "Zone" : "Zones"}</span></h2>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {/* Zone Cards - Simplified */}
            {[
              { name: language === "bs" ? "Centar Sarajeva" : "Sarajevo Center", location: "Ferhadija • Titova", radius: "~1.2 km", color: "primary", bbox: "18.4100,43.8560,18.4320,43.8620", marker: "43.8590,18.4210" },
              { name: "Skenderija", location: "Centar Skenderija", radius: "~500 m", color: "green", bbox: "18.4050,43.8540,18.4200,43.8600", marker: "43.8570,18.4125" },
              { name: "Bjelašnica", location: language === "bs" ? "Olimpijska planina" : "Olympic mountain", radius: "~800 m", color: "cyan", bbox: "18.2500,43.7100,18.2900,43.7350", marker: "43.7225,18.2700" },
            ].map((zone, index) => (
              <div key={index} data-gsap="card" className={`rounded-2xl overflow-hidden border bg-background-card ${
                zone.color === "primary" ? "border-primary-500/20" : zone.color === "green" ? "border-accent-green/20" : "border-cyan-500/20"
              }`}>
                <div className="relative aspect-video">
                  <iframe src={`https://www.openstreetmap.org/export/embed.html?bbox=${zone.bbox}&layer=mapnik&marker=${zone.marker}`} className="w-full h-full border-0 pointer-events-none" style={{ filter: 'saturate(0.8) contrast(1.1)' }} loading="lazy" title={`Saraya Wi-Fi zona - ${zone.name}`} />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background-card/80 to-transparent" />
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                      zone.color === "primary" ? "bg-primary-500 shadow-primary-500/50" : zone.color === "green" ? "bg-accent-green shadow-accent-green/50" : "bg-cyan-500 shadow-cyan-500/50"
                    }`}>
                      <Wifi className="text-white" size={18} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm mb-1">{zone.name}</h3>
                  <div className="flex items-center justify-between text-xs text-foreground-muted">
                    <span>📍 {zone.location}</span>
                    <span className={zone.color === "primary" ? "text-primary-400" : zone.color === "green" ? "text-accent-green" : "text-cyan-400"}>{zone.radius}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage Summary - Compact */}
          <div data-gsap="fade-in" className="p-4 md:p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 via-accent-green/10 to-cyan-500/10 border border-primary-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center"><Wifi className="text-primary-400" size={20} /></div>
                <div>
                  <p className="text-white font-medium text-sm">{language === "bs" ? "3 aktivne zone" : "3 active zones"}</p>
                  <p className="text-foreground-muted text-xs">{language === "bs" ? "Besplatan Wi-Fi" : "Free Wi-Fi"}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-primary-400">20k+</p>
                  <p className="text-xs text-foreground-muted">{language === "bs" ? "Dnevno" : "Daily"}</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-accent-green">99.9%</p>
                  <p className="text-xs text-foreground-muted">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Section - Simplified */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="primary" className="mb-3"><Megaphone size={14} className="mr-2" />{language === "bs" ? "Oglašavanje" : "Advertising"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">
              {language === "bs" ? "Oglašavanje na" : "Advertising on"} <span className="text-gradient">{language === "bs" ? "Saraya Mreži" : "Saraya Network"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs"
                ? "Dosegnite hiljade korisnika dnevno kroz captive portal — vašu priliku za direktnu komunikaciju."
                : "Reach thousands of users daily through captive portal — your opportunity for direct communication."}
            </p>
          </div>

          {/* Stats */}
          <div data-gsap="fade-in" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {advertisingStats.map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-background-card border border-primary-500/20 text-center">
                <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-foreground-muted text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Ad Formats + Benefits in Two Columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ad Formats */}
            <div data-gsap="fade-in" className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">{language === "bs" ? "Formati Oglašavanja" : "Ad Formats"}</h3>
              {adFormats.map((format, index) => (
                <div key={index} className="p-4 rounded-xl bg-background-card border border-primary-500/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <format.icon className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{format.title}</h4>
                    <p className="text-foreground-muted text-xs">{format.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits + CTA */}
            <div data-gsap="fade-in" className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-green/10 border border-primary-500/20">
              <h3 className="text-lg font-bold text-white mb-4">{language === "bs" ? "Zašto Oglašavati?" : "Why Advertise?"}</h3>
              <div className="space-y-2 mb-6">
                {(language === "bs" ? [
                  "Ciljana publika u centru grada",
                  "Visoka stopa angažmana",
                  "Mjerljivi rezultati",
                  "Fleksibilni paketi"
                ] : [
                  "Targeted audience in city center",
                  "High engagement rate",
                  "Measurable results",
                  "Flexible packages"
                ]).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent-green" size={10} />
                    </div>
                    <span className="text-foreground-muted text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="primary" className="w-full">
                {language === "bs" ? "Zatražite Ponudu" : "Request Quote"}
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Captive Portal Section - Compact */}
      <section className="py-12 md:py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">{language === "bs" ? "Captivni Portal" : "Captive Portal"}</h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Prilagodljivi portali koji omogućavaju potpunu kontrolu nad sadržajem."
                : "Customizable portals that allow full control over content."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {portalFeatures.map((feature) => (
              <Card key={feature.title} glow="purple">
                <div data-gsap="card">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center mb-3">
                    <feature.icon className="text-primary-400" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-foreground-muted text-sm">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Benefits + Saraya Connect Pages Mention */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Benefits List */}
            <div data-gsap="fade-in" className="p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/20">
              <h3 className="text-base font-bold text-white mb-4">{language === "bs" ? "Prednosti Saraya Hotspot Rješenja" : "Saraya Hotspot Solution Benefits"}</h3>
              <div className="space-y-2">
                {(language === "bs" ? [
                  "Potpuna prilagodba vašem brendu",
                  "Skalabilnost — od jedne do stotine lokacija",
                  "Integracija s loyalty programima",
                  "Detaljni izvještaji o ponašanju korisnika"
                ] : [
                  "Full customization to your brand",
                  "Scalability — from one to hundreds of locations",
                  "Integration with loyalty programs",
                  "Detailed reports on user behavior"
                ]).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent-green" size={10} />
                    </div>
                    <span className="text-foreground-muted text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Saraya Connect Pages Preview */}
            <div data-gsap="fade-in" className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/20">
              <h3 className="text-base font-bold text-white mb-2">{language === "bs" ? "Saraya Connect Stranice" : "Saraya Connect Pages"}</h3>
              <p className="text-foreground-muted text-sm mb-4">
                {language === "bs" 
                  ? "Na našoj javnoj mreži, pored osnovne stranice za prijavu, korisnici imaju pristup ekskluzivnim stranicama:"
                  : "On our public network, besides the main login page, users have access to exclusive pages:"}
              </p>
              <div className="space-y-2">
                {[
                  { name: "Rewards Center", desc: language === "bs" ? "Loyalty program s nagradama" : "Loyalty program with rewards" },
                  { name: "Pametno Odabrano", desc: language === "bs" ? "AI preporuke proizvoda" : "AI product recommendations" },
                  { name: "Explore Sarajevo", desc: language === "bs" ? "Vodič kroz grad" : "City guide" },
                ].map((page, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-background-card/50">
                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                    <div>
                      <span className="text-white text-sm font-medium">{page.name}</span>
                      <span className="text-foreground-muted text-xs ml-2">— {page.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-foreground-muted text-xs mt-3 italic">
                {language === "bs" ? "↓ Više detalja o stranicama na dnu stranice" : "↓ More details about pages at the bottom"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types - Visual Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-500/5 to-background" />
        <div data-gsap="parallax" className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-accent-green/10 rounded-full blur-[100px]" />
        <div data-gsap="parallax" className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-primary-500/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3">
              {language === "bs" ? "Rješenje za" : "Solution for"} <span className="text-gradient">{language === "bs" ? "Svaku Industriju" : "Every Industry"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-xl mx-auto">
              {language === "bs" 
                ? "Saraya Connect prilagođava se potrebama vašeg poslovanja i donosi mjerljive rezultate."
                : "Saraya Connect adapts to your business needs and delivers measurable results."}
            </p>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Industries Visual */}
            <div data-gsap="fade-in" className="relative">
              <div className="grid grid-cols-2 gap-4">
                {businessTypes.map((business, index) => {
                  const colorClasses = {
                    purple: "from-primary-500/20 to-primary-600/5 border-primary-500/30 hover:border-primary-500/60",
                    green: "from-accent-green/20 to-emerald-600/5 border-accent-green/30 hover:border-accent-green/60",
                    cyan: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 hover:border-cyan-500/60",
                    pink: "from-pink-500/20 to-pink-600/5 border-pink-500/30 hover:border-pink-500/60",
                  };
                  const iconColors = {
                    purple: "bg-primary-500/30 text-primary-400",
                    green: "bg-accent-green/30 text-accent-green",
                    cyan: "bg-cyan-500/30 text-cyan-400",
                    pink: "bg-pink-500/30 text-pink-400",
                  };
                  return (
                    <div 
                      key={index} 
                      data-gsap="card"
                      className={`p-5 md:p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer group ${colorClasses[business.color as keyof typeof colorClasses]}`}
                    >
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${iconColors[business.color as keyof typeof iconColors]}`}>
                        <business.icon size={24} />
                      </div>
                      <h3 className="text-white font-semibold text-sm md:text-base mb-1">{business.title}</h3>
                      <p className="text-foreground-muted text-xs">{business.feature}</p>
                    </div>
                  );
                })}
              </div>
              {/* Decorative connecting lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-accent-green to-primary-500 flex items-center justify-center shadow-lg shadow-accent-green/30 z-10">
                <Wifi className="text-white" size={24} />
              </div>
            </div>

            {/* Right - Benefits & Stats */}
            <div data-gsap="fade-in" className="space-y-6">
              {/* Key Benefits */}
              <div className="p-6 md:p-8 rounded-2xl bg-background-card border border-primary-500/20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center">
                    <TrendingUp className="text-accent-green" size={18} />
                  </div>
                  {language === "bs" ? "Ključne Prednosti" : "Key Benefits"}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, title: language === "bs" ? "Prikupljanje Podataka" : "Data Collection", desc: language === "bs" ? "Email, demografija" : "Email, demographics" },
                    { icon: TrendingUp, title: language === "bs" ? "Povećanje Prodaje" : "Increased Sales", desc: language === "bs" ? "Direktne promocije" : "Direct promotions" },
                    { icon: Target, title: language === "bs" ? "Ciljani Marketing" : "Targeted Marketing", desc: language === "bs" ? "Personalizacija" : "Personalization" },
                    { icon: BarChart3, title: language === "bs" ? "Analitika" : "Analytics", desc: language === "bs" ? "Real-time podaci" : "Real-time data" },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="text-primary-400" size={16} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">{benefit.title}</h4>
                        <p className="text-foreground-muted text-xs">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: "+45%", label: language === "bs" ? "Povrat" : "Return", color: "from-accent-green/20 to-accent-green/5 border-accent-green/30", textColor: "text-accent-green" },
                  { value: "+30%", label: language === "bs" ? "Email" : "Email", color: "from-primary-500/20 to-primary-500/5 border-primary-500/30", textColor: "text-primary-400" },
                  { value: "+25%", label: language === "bs" ? "Boravak" : "Dwell", color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30", textColor: "text-cyan-400" },
                  { value: "+20%", label: language === "bs" ? "Prodaja" : "Sales", color: "from-pink-500/20 to-pink-500/5 border-pink-500/30", textColor: "text-pink-400" },
                ].map((stat, index) => (
                  <div key={index} className={`p-3 md:p-4 rounded-xl bg-gradient-to-br border text-center ${stat.color}`}>
                    <p className={`text-lg md:text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
                    <p className="text-foreground-muted text-[10px] md:text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saraya Connect Pages - Portal Features */}
      <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-500/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-10 md:mb-14">
            <Badge variant="accent" className="mb-3">{language === "bs" ? "Na Captive Portalu" : "On Captive Portal"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3">
              Saraya Connect <span className="text-gradient">{language === "bs" ? "Stranice" : "Pages"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Pored osnovne stranice za prijavu, korisnici na našoj javnoj Wi-Fi mreži u gradu imaju pristup ekskluzivnim Saraya Connect stranicama koje pružaju dodatnu vrijednost."
                : "Besides the main login page, users on our public Wi-Fi network in the city have access to exclusive Saraya Connect pages that provide additional value."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6">
            {includedPages.map((page) => {
              const colorClasses = {
                purple: "from-primary-500/15 to-primary-600/5 border-primary-500/30 hover:border-primary-500/50",
                green: "from-accent-green/15 to-emerald-600/5 border-accent-green/30 hover:border-accent-green/50",
                cyan: "from-cyan-500/15 to-cyan-600/5 border-cyan-500/30 hover:border-cyan-500/50",
              };
              const checkColors = {
                purple: "text-primary-400",
                green: "text-accent-green",
                cyan: "text-cyan-400",
              };
              return (
                <div 
                  key={page.title} 
                  data-gsap="card" 
                  className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br border transition-all duration-300 hover:scale-[1.02] ${colorClasses[page.color as keyof typeof colorClasses]}`}
                >
                  <div className="relative w-full h-14 mb-5">
                    <Image src={page.logo} alt={page.title} fill className="object-contain object-left" />
                  </div>
                  <p className="text-foreground-muted text-sm mb-5 leading-relaxed">{page.description}</p>
                  <div className="space-y-2">
                    {page.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className={checkColors[page.color as keyof typeof checkColors]} size={14} />
                        <span className="text-white text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why These Pages Matter */}
          <div data-gsap="fade-in" className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 via-accent-green/10 to-cyan-500/10 border border-primary-500/20">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {language === "bs" ? "Zašto su ove stranice važne?" : "Why are these pages important?"}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {language === "bs" 
                    ? "Saraya Connect stranice transformiraju običan Wi-Fi pristup u bogato korisničko iskustvo. Korisnici ne samo da dobivaju besplatan internet, već i pristup ekskluzivnim sadržajima, nagradama i lokalnim informacijama — sve na jednom mjestu."
                    : "Saraya Connect pages transform ordinary Wi-Fi access into a rich user experience. Users not only get free internet, but also access to exclusive content, rewards and local information — all in one place."}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "50K+", label: language === "bs" ? "Aktivnih korisnika" : "Active users" },
                  { value: "100+", label: language === "bs" ? "Partnera" : "Partners" },
                  { value: "24/7", label: language === "bs" ? "Dostupnost" : "Availability" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-xl bg-background-card/50">
                    <p className="text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-foreground-muted text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-green/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="cta" className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4">{language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "povezivanje" : "connection"}</span>?</h2>
            <p className="text-foreground-muted text-sm md:text-base mb-6">{language === "bs" ? "Kontaktirajte nas i saznajte kako Saraya Connect može unaprijediti vaše poslovanje." : "Contact us and find out how Saraya Connect can improve your business."}</p>
            <Button variant="primary" size="lg">{language === "bs" ? "Kontaktirajte nas" : "Contact us"}<ArrowRight className="ml-2" size={20} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
