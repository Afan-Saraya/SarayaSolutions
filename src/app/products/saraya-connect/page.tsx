"use client";

import { 
  Wifi, Check, MapPin, ArrowRight, Megaphone, Coffee, Hotel, ShoppingCart,
  Utensils, Sparkles, Monitor, BarChart3, Target, TrendingUp,
  Database, Users, Clock, Zap, Shield, Globe
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import PageAnimations from "@/components/animations/PageAnimations";
import ProductHero from "@/components/sections/ProductHero";
import DeviceMockup from "@/components/ui/DeviceMockup";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function SarayaConnectPage() {
  const { language } = useLanguage();

  return (
    <>
      <PageAnimations />
      
      <ProductHero
        logoSrc="/images/logos/saraya connect.png"
        logoAlt="Saraya Connect"
        titleGradient=""
        subtitle={language === "bs" ? "Pretvorite Wi-Fi u marketing alat" : "Turn Wi-Fi into a marketing tool"}
        description={language === "bs" 
          ? "Pretvorite besplatni Wi-Fi u moćan marketing alat. Prikupljajte podatke, komunicirajte s korisnicima i gradite lojalnost."
          : "Turn free Wi-Fi into a powerful marketing tool. Collect data, communicate with users and build loyalty."}
        features={[
          language === "bs" ? "Captive Portal" : "Captive Portal",
          language === "bs" ? "Marketing platforma" : "Marketing platform",
          language === "bs" ? "Analitika korisnika" : "User analytics",
          language === "bs" ? "Skalabilnost" : "Scalability",
        ]}
        primaryButtonText={language === "bs" ? "Hotspot solucije" : "Hotspot solutions"}
        secondaryButtonText={language === "bs" ? "Video" : "Video"}
        customVisual={<DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />}
        glowColor1="bg-accent-green/15"
        glowColor2="bg-primary-500/20"
      />

      {/* Šta Nudimo */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Šta" : "What We"} <span className="text-gradient">{language === "bs" ? "Nudimo" : "Offer"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Kompletna Wi-Fi i marketing rješenja za vaše poslovanje" : "Complete Wi-Fi and marketing solutions for your business"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: language === "bs" ? "Oglašavanje na Javnoj Mreži" : "Public Network Advertising", description: language === "bs" ? "Dosegnite 20,000+ korisnika dnevno na našoj besplatnoj Wi-Fi mreži u centru Sarajeva." : "Reach 20,000+ users daily on our free Wi-Fi network in Sarajevo center.", icon: Megaphone, color: "purple", features: language === "bs" ? ["Splash screen oglasi", "Banner kampanje", "Geo targeting"] : ["Splash screen ads", "Banner campaigns", "Geo targeting"] },
              { title: language === "bs" ? "Vlastiti Captive Portal" : "Custom Captive Portal", description: language === "bs" ? "Kreirajte brendirani Wi-Fi portal za vaš objekt — kafić, restoran, hotel ili trgovinu." : "Create a branded Wi-Fi portal for your venue — cafe, restaurant, hotel or store.", icon: Wifi, color: "green", features: language === "bs" ? ["Vaš brend & dizajn", "Prikupljanje podataka", "Marketing automatizacija"] : ["Your brand & design", "Data collection", "Marketing automation"], popular: true },
              { title: language === "bs" ? "Online Meni & Rezervacije" : "Online Menu & Reservations", description: language === "bs" ? "Digitalni meni s QR kodom i sistem za online rezervacije stolova za ugostiteljske objekte." : "Digital menu with QR code and online table reservation system for hospitality venues.", icon: Utensils, color: "cyan", features: language === "bs" ? ["QR kod meni", "Online rezervacije", "Integracija s portalom"] : ["QR code menu", "Online reservations", "Portal integration"] },
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

      {/* Saraya Mreža Zone */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="accent" className="mb-3"><MapPin size={14} className="mr-2" />{language === "bs" ? "Pokrivenost" : "Coverage"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
              {language === "bs" ? "Saraya Mreža" : "Saraya Network"} <span className="text-gradient">{language === "bs" ? "Zone" : "Zones"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {[
              { name: language === "bs" ? "Centar Sarajeva" : "Sarajevo Center", location: "Ferhadija • Titova", radius: "~1.2 km", color: "primary", gif: "/images/mreza-titova-carsija.gif" },
              { name: "Skenderija", location: language === "bs" ? "Centar Skenderija" : "Skenderija Center", radius: "~500 m", color: "green", gif: "/images/mreza-vilsonovo.gif" },
              { name: "Bjelašnica", location: language === "bs" ? "Olimpijska planina" : "Olympic mountain", radius: "~800 m", color: "cyan", gif: "/images/mreza-bjelasnica.gif" },
            ].map((zone, index) => (
              <div key={index} data-gsap="card" className="rounded-2xl overflow-hidden bg-background-card border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-[4/3]">
                  <Image src={zone.gif} alt={`Saraya Wi-Fi - ${zone.name}`} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-1">
                    <button className="w-6 h-6 rounded bg-white/90 flex items-center justify-center text-gray-700 text-sm font-bold">+</button>
                    <button className="w-6 h-6 rounded bg-white/90 flex items-center justify-center text-gray-700 text-sm font-bold">−</button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl ${
                      zone.color === "primary" ? "bg-primary-500" : zone.color === "green" ? "bg-accent-green" : "bg-cyan-500"
                    }`}>
                      <Wifi className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold">{zone.name}</h3>
                      <p className="text-foreground-muted text-sm flex items-center gap-1 mt-1">
                        <MapPin size={12} className="text-red-400" />{zone.location}
                      </p>
                    </div>
                    <span className="text-foreground-muted text-sm">{zone.radius}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div data-gsap="fade-in" className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6 rounded-2xl bg-background-card border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent-green/20 flex items-center justify-center">
                <Wifi className="text-accent-green" size={20} />
              </div>
              <div>
                <p className="text-white font-bold">{language === "bs" ? "3 aktivne zone" : "3 active zones"}</p>
                <p className="text-foreground-muted text-sm">{language === "bs" ? "Besplatan Wi-Fi" : "Free Wi-Fi"}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-green">20k+</p>
                <p className="text-foreground-muted text-sm">{language === "bs" ? "Dnevno" : "Daily"}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-foreground-muted text-sm">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oglašavanje na Saraya Mreži */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="primary" className="mb-3"><Megaphone size={14} className="mr-2" />{language === "bs" ? "Oglašavanje" : "Advertising"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Oglašavanje na" : "Advertising on"} <span className="text-gradient">{language === "bs" ? "Saraya Mreži" : "Saraya Network"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Dosegnite hiljade korisnika dnevno kroz captive portal — vašu priliku za direktnu komunikaciju." : "Reach thousands of users daily through captive portal — your opportunity for direct communication."}
            </p>
          </div>

          <div data-gsap="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-12">
            {[
              { value: "20,000+", label: language === "bs" ? "Dnevnih korisnika" : "Daily users", icon: Users },
              { value: "3", label: language === "bs" ? "Zone pokrivenosti" : "Coverage zones", icon: MapPin },
              { value: "100%", label: language === "bs" ? "Vidljivost oglasa" : "Ad visibility", icon: Monitor },
              { value: "15s+", label: language === "bs" ? "Prosječno vrijeme" : "Avg. view time", icon: Clock },
            ].map((stat, index) => (
              <div key={index} data-gsap="stat" className="p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/20 text-center group hover:border-primary-500/40 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-primary-400" size={20} />
                </div>
                <p className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-foreground-muted text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div data-gsap="card" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">{language === "bs" ? "Formati Oglašavanja" : "Ad Formats"}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Monitor className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Splash Screen Oglas</h4>
                    <p className="text-foreground-muted text-sm">{language === "bs" ? "Full-screen oglas prilikom spajanja na Wi-Fi." : "Full-screen ad when connecting to Wi-Fi."}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Banner Oglasi</h4>
                    <p className="text-foreground-muted text-sm">{language === "bs" ? "Banneri na portalu i stranicama unutar mreže." : "Banners on portal and pages within the network."}</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-gsap="card" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10 flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">{language === "bs" ? "Zašto Oglašavati?" : "Why Advertise?"}</h3>
              <div className="space-y-3 mb-6 flex-grow">
                {(language === "bs" ? ["Ciljana publika u centru grada", "Visoka stopa angažmana", "Mjerljivi rezultati", "Fleksibilni paketi"] : ["Targeted audience in city center", "High engagement rate", "Measurable results", "Flexible packages"]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-green" />
                    <span className="text-foreground-muted text-sm">{item}</span>
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

      {/* Captivni Portal */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 left-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="primary" className="mb-3"><Shield size={14} className="mr-2" />{language === "bs" ? "Portal Rješenja" : "Portal Solutions"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Captivni" : "Captive"} <span className="text-gradient">Portal</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Prilagodljivi portali koji omogućavaju potpunu kontrolu nad sadržajem." : "Customizable portals that enable complete control over content."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { title: language === "bs" ? "Brendirani Portal" : "Branded Portal", description: language === "bs" ? "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand." : "Fully customized login page that represents your brand.", icon: Monitor, color: "purple" },
              { title: language === "bs" ? "Marketing & Promocije" : "Marketing & Promotions", description: language === "bs" ? "Prikazujte ponude i promocije korisnicima prilikom spajanja." : "Display offers and promotions to users when connecting.", icon: Megaphone, color: "green" },
              { title: language === "bs" ? "Analitika Ponašanja" : "Behavior Analytics", description: language === "bs" ? "Pratite kako se korisnici kreću i što ih zanima." : "Track how users navigate and what interests them.", icon: BarChart3, color: "cyan" },
            ].map((feature, index) => (
              <div key={index} data-gsap="card" className={`p-6 rounded-2xl bg-background-card border transition-all hover:scale-[1.02] ${
                feature.color === "purple" ? "border-primary-500/20 hover:border-primary-500/40" : feature.color === "green" ? "border-accent-green/20 hover:border-accent-green/40" : "border-cyan-500/20 hover:border-cyan-500/40"
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === "purple" ? "bg-primary-500/20" : feature.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                }`}>
                  <feature.icon className={feature.color === "purple" ? "text-primary-400" : feature.color === "green" ? "text-accent-green" : "text-cyan-400"} size={24} />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div data-gsap="card" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">{language === "bs" ? "Prednosti Saraya Hotspot Rješenja" : "Saraya Hotspot Solution Benefits"}</h3>
              <div className="space-y-3">
                {(language === "bs" ? ["Potpuna prilagodba vašem brendu", "Skalabilnost — od jedne do stotine lokacija", "Integracija s loyalty programima", "Detaljni izvještaji o ponašanju korisnika"] : ["Complete customization to your brand", "Scalability — from one to hundreds of locations", "Integration with loyalty programs", "Detailed user behavior reports"]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                    <span className="text-foreground-muted text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="card" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{language === "bs" ? "Saraya Connect Stranice" : "Saraya Connect Pages"}</h3>
              <p className="text-foreground-muted text-sm mb-4">
                {language === "bs" ? "Na našoj javnoj mreži, korisnici imaju pristup ekskluzivnim stranicama:" : "On our public network, users have access to exclusive pages:"}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                  <div className="w-2 h-2 rounded-full bg-primary-400" />
                  <span className="text-white font-medium text-sm">Rewards Center</span>
                  <span className="text-foreground-muted text-xs">— {language === "bs" ? "Loyalty program" : "Loyalty program"}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-accent-green/10 border border-accent-green/20">
                  <div className="w-2 h-2 rounded-full bg-accent-green" />
                  <span className="text-white font-medium text-sm">Pametno Odabrano</span>
                  <span className="text-foreground-muted text-xs">— {language === "bs" ? "AI preporuke" : "AI recommendations"}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-white font-medium text-sm">Explore Sarajevo</span>
                  <span className="text-foreground-muted text-xs">— {language === "bs" ? "Vodič kroz grad" : "City guide"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rješenje za Svaku Industriju */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="accent" className="mb-3"><Target size={14} className="mr-2" />{language === "bs" ? "Industrije" : "Industries"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Rješenje za" : "Solution for"} <span className="text-gradient">{language === "bs" ? "Svaku Industriju" : "Every Industry"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Saraya Connect prilagođava se potrebama vašeg poslovanja i donosi mjerljive rezultate." : "Saraya Connect adapts to your business needs and delivers measurable results."}
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4 relative p-4">
                {[
                  { title: language === "bs" ? "Kafići & Barovi" : "Cafes & Bars", subtitle: language === "bs" ? "Online meni & rezervacije" : "Online menu & reservations", icon: Coffee, color: "purple" },
                  { title: language === "bs" ? "Restorani" : "Restaurants", subtitle: language === "bs" ? "Online meni & rezervacije" : "Online menu & reservations", icon: Utensils, color: "cyan" },
                  { title: language === "bs" ? "Hoteli" : "Hotels", subtitle: language === "bs" ? "Check-in & usluge" : "Check-in & services", icon: Hotel, color: "green" },
                  { title: language === "bs" ? "Trgovački Centri" : "Shopping Centers", subtitle: language === "bs" ? "Navigacija & promocije" : "Navigation & promotions", icon: ShoppingCart, color: "pink" },
                ].map((item, index) => (
                  <div key={index} data-gsap="card" className={`p-4 md:p-5 rounded-2xl border bg-background-card transition-all hover:scale-[1.02] ${
                    item.color === "purple" ? "border-primary-500/20" : item.color === "green" ? "border-accent-green/20" : item.color === "cyan" ? "border-cyan-500/20" : "border-pink-500/20"
                  }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      item.color === "purple" ? "bg-primary-500/20" : item.color === "green" ? "bg-accent-green/20" : item.color === "cyan" ? "bg-cyan-500/20" : "bg-pink-500/20"
                    }`}>
                      <item.icon className={item.color === "purple" ? "text-primary-400" : item.color === "green" ? "text-accent-green" : item.color === "cyan" ? "text-cyan-400" : "text-pink-400"} size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-foreground-muted text-xs">{item.subtitle}</p>
                  </div>
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-accent-green flex items-center justify-center shadow-lg shadow-accent-green/30 z-10">
                  <Wifi className="text-white" size={24} />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 md:space-y-6">
              <div data-gsap="card" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="text-accent-green" size={20} />
                  <h3 className="text-white font-bold">{language === "bs" ? "Ključne Prednosti" : "Key Benefits"}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: language === "bs" ? "Prikupljanje Podataka" : "Data Collection", subtitle: language === "bs" ? "Email, demografija" : "Email, demographics", icon: Database, color: "text-primary-400" },
                    { title: language === "bs" ? "Povećanje Prodaje" : "Sales Increase", subtitle: language === "bs" ? "Direktne promocije" : "Direct promotions", icon: TrendingUp, color: "text-accent-green" },
                    { title: language === "bs" ? "Ciljani Marketing" : "Targeted Marketing", subtitle: language === "bs" ? "Personalizacija" : "Personalization", icon: Target, color: "text-cyan-400" },
                    { title: language === "bs" ? "Analitika" : "Analytics", subtitle: language === "bs" ? "Real-time podaci" : "Real-time data", icon: BarChart3, color: "text-pink-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className={item.color} size={18} />
                      <div>
                        <p className="text-white text-sm font-medium">{item.title}</p>
                        <p className="text-foreground-muted text-xs">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div data-gsap="fade-in" className="grid grid-cols-4 gap-3">
                {[
                  { value: "+45%", label: language === "bs" ? "Povrat" : "Return", color: "text-accent-green" },
                  { value: "+30%", label: "Email", color: "text-primary-400" },
                  { value: "+25%", label: language === "bs" ? "Boravak" : "Dwell", color: "text-cyan-400" },
                  { value: "+20%", label: language === "bs" ? "Prodaja" : "Sales", color: "text-pink-400" },
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-background-card border border-white/10 text-center">
                    <p className={`text-xl md:text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                    <p className="text-foreground-muted text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saraya Connect Stranice - Detailed */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="accent" className="mb-3">{language === "bs" ? "Na Captive Portalu" : "On Captive Portal"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              Saraya Connect <span className="text-gradient">{language === "bs" ? "Stranice" : "Pages"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Pored osnovne stranice za prijavu, korisnici na našoj javnoj Wi-Fi mreži imaju pristup ekskluzivnim stranicama koje pružaju dodatnu vrijednost." : "Besides the basic login page, users on our public Wi-Fi network have access to exclusive pages that provide additional value."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { logo: "/images/logos/reward center.png", alt: "Rewards Center", description: language === "bs" ? "Loyalty program koji nagrađuje korisnike za svaku posjetu i interakciju. Korisnici skupljaju bodove, osvajaju nagrade i dobivaju ekskluzivne popuste od partnera na mreži." : "Loyalty program that rewards users for every visit and interaction. Users collect points, win rewards and get exclusive discounts from network partners.", features: language === "bs" ? ["Skupljanje bodova", "Ekskluzivne nagrade", "Partnerski popusti"] : ["Point collection", "Exclusive rewards", "Partner discounts"], color: "purple" },
              { logo: "/images/logos/pametno odabrano.png", alt: "Pametno Odabrano", description: language === "bs" ? "AI-powered sistem preporuka koji korisnicima predlaže relevantne proizvode, usluge i sadržaje bazirano na njihovim interesima i lokaciji." : "AI-powered recommendation system that suggests relevant products, services and content to users based on their interests and location.", features: language === "bs" ? ["Personalizirane preporuke", "Lokalne ponude", "Pametno filtriranje"] : ["Personalized recommendations", "Local offers", "Smart filtering"], color: "green" },
              { logo: "/images/logos/explore sarajevo.png", alt: "Explore Sarajevo", description: language === "bs" ? "Interaktivni turistički vodič kroz Sarajevo s preporukama restorana, kafića, atrakcija i događaja. Idealno za turiste i lokalne stanovnike." : "Interactive tourist guide through Sarajevo with restaurant, cafe, attraction and event recommendations. Ideal for tourists and locals.", features: language === "bs" ? ["Mapa grada", "Preporuke lokacija", "Događaji u gradu"] : ["City map", "Location recommendations", "City events"], color: "cyan" },
            ].map((page, index) => (
              <Card key={index} glow={page.color === "purple" ? "purple" : page.color === "green" ? "green" : "pink"}>
                <div data-gsap="card">
                  <div className="relative w-full h-10 mb-4">
                    <Image src={page.logo} alt={page.alt} fill className="object-contain object-left" />
                  </div>
                  <p className="text-foreground-muted text-sm mb-4">{page.description}</p>
                  <div className="space-y-2">
                    {page.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className={page.color === "purple" ? "text-primary-400" : page.color === "green" ? "text-accent-green" : "text-cyan-400"} size={14} />
                        <span className="text-foreground-muted text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div data-gsap="fade-in" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
            <h3 className="text-white font-bold mb-3">{language === "bs" ? "Zašto su ove stranice važne?" : "Why are these pages important?"}</h3>
            <p className="text-foreground-muted text-sm mb-6 max-w-3xl">
              {language === "bs" ? "Saraya Connect stranice transformiraju običan Wi-Fi pristup u bogato korisničko iskustvo. Korisnici ne samo da dobivaju besplatan internet, već i pristup ekskluzivnim sadržajima, nagradama i lokalnim informacijama — sve na jednom mjestu." : "Saraya Connect pages transform ordinary Wi-Fi access into a rich user experience. Users not only get free internet, but also access to exclusive content, rewards and local information — all in one place."}
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-green">50K+</p>
                <p className="text-foreground-muted text-sm">{language === "bs" ? "Aktivnih korisnika" : "Active users"}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-400">100+</p>
                <p className="text-foreground-muted text-sm">{language === "bs" ? "Partnera" : "Partners"}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-400">24/7</p>
                <p className="text-foreground-muted text-sm">{language === "bs" ? "Dostupnost" : "Availability"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="cta" className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent-green to-primary-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-accent-green/20">
              <Wifi className="text-white" size={32} />
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "povezivanje" : "connection"}</span>?
            </h2>
            <p className="text-foreground-muted text-xs md:text-base mb-6 md:mb-8">
              {language === "bs" ? "Kontaktirajte nas i saznajte kako Saraya Connect može unaprijediti vaše poslovanje." : "Contact us and find out how Saraya Connect can improve your business."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Zatražite ponudu" : "Request quote"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                {language === "bs" ? "Kontaktirajte nas" : "Contact us"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
