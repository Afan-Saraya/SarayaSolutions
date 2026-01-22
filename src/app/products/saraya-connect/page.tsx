"use client";

import { 
  Wifi, MapPin, ArrowRight, Megaphone, Users, Clock, Monitor,
  TrendingUp, Target, BarChart3, Globe, Sparkles, Check, Gamepad2, Gift
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
        subtitle={language === "bs" ? "Javna Wi-Fi mreža u centru Sarajeva" : "Public Wi-Fi network in Sarajevo center"}
        description={language === "bs" 
          ? "Dosegnite 20,000+ korisnika dnevno na našoj besplatnoj Wi-Fi mreži. Oglašavajte svoje usluge i povećajte vidljivost vašeg brenda."
          : "Reach 20,000+ users daily on our free Wi-Fi network. Advertise your services and increase your brand visibility."}
        features={[
          language === "bs" ? "20K+ dnevnih korisnika" : "20K+ daily users",
          language === "bs" ? "3 zone u centru" : "3 zones in center",
          language === "bs" ? "100% vidljivost" : "100% visibility",
          language === "bs" ? "Geo targeting" : "Geo targeting",
        ]}
        primaryButtonText={language === "bs" ? "Oglašavajte na mreži" : "Advertise on network"}
        secondaryButtonText={language === "bs" ? "Pogledajte zone" : "View zones"}
        customVisual={<DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />}
        glowColor1="bg-accent-green/15"
        glowColor2="bg-primary-500/20"
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
                ? "Saraya Connect koristi najnoviju WiFi 6 tehnologiju za brzu, stabilnu i sigurnu konekciju na svim lokacijama."
                : "Saraya Connect uses the latest WiFi 6 technology for fast, stable and secure connection at all locations."}
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

      {/* Captive Portal - Prostor za Informisanje */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="primary" className="mb-3"><Monitor size={14} className="mr-2" />{language === "bs" ? "Captive Portal" : "Captive Portal"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Više od" : "More than"} <span className="text-gradient">{language === "bs" ? "Wi-Fi pristupa" : "Wi-Fi access"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Saraya Connect captive portal je digitalni prostor za informisanje građana i turista o dešavanjima, ponudama i sadržajima u gradu."
                : "Saraya Connect captive portal is a digital space for informing citizens and tourists about events, offers and content in the city."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card glow="purple">
              <div data-gsap="card">
                <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4">
                  <Globe className="text-primary-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{language === "bs" ? "Informativni Centar Grada" : "City Information Center"}</h3>
                <p className="text-foreground-muted text-sm mb-4">
                  {language === "bs" 
                    ? "Kada se korisnici spoje na Saraya Wi-Fi, dobivaju pristup portalu sa aktuelnim informacijama o gradu, događajima, ponudama i preporukama."
                    : "When users connect to Saraya Wi-Fi, they get access to a portal with current information about the city, events, offers and recommendations."}
                </p>
                <div className="space-y-2">
                  {(language === "bs" 
                    ? ["Aktuelni događaji u gradu", "Preporuke restorana i kafića", "Turistički sadržaji", "Lokalne vijesti i obavještenja", "Mapa grada i navigacija"]
                    : ["Current events in the city", "Restaurant and cafe recommendations", "Tourist content", "Local news and notifications", "City map and navigation"]
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-primary-400" size={14} />
                      <span className="text-foreground-muted text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card glow="green">
              <div data-gsap="card">
                <div className="w-14 h-14 rounded-xl bg-accent-green/20 flex items-center justify-center mb-4">
                  <Megaphone className="text-accent-green" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{language === "bs" ? "Prostor za Oglašavanje" : "Advertising Space"}</h3>
                <p className="text-foreground-muted text-sm mb-4">
                  {language === "bs" 
                    ? "Kompanije i objekti mogu oglašavati svoje usluge direktno na portalu, dosežući hiljade korisnika dnevno na ključnim lokacijama."
                    : "Companies and venues can advertise their services directly on the portal, reaching thousands of users daily at key locations."}
                </p>
                <div className="space-y-2">
                  {(language === "bs" 
                    ? ["Splash screen oglasi", "Banner oglašavanje", "Prisustvo na stranicama", "Geo targeting po zonama", "Mjerljivi rezultati"]
                    : ["Splash screen ads", "Banner advertising", "Presence on pages", "Geo targeting by zones", "Measurable results"]
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-accent-green" size={14} />
                      <span className="text-foreground-muted text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div data-gsap="fade-in" className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 via-accent-green/5 to-cyan-500/10 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {language === "bs" ? "Svaki korisnik vidi portal" : "Every user sees the portal"}
                </h3>
                <p className="text-foreground-muted text-sm md:text-base">
                  {language === "bs" 
                    ? "Captive portal se automatski otvara kada se korisnik spoji na Wi-Fi. To znači 100% vidljivost vašeg sadržaja i oglasa za sve korisnike na mreži."
                    : "Captive portal automatically opens when user connects to Wi-Fi. This means 100% visibility of your content and ads for all users on the network."}
                </p>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent-green">100%</p>
                  <p className="text-foreground-muted text-sm">{language === "bs" ? "Vidljivost" : "Visibility"}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-400">20K+</p>
                  <p className="text-foreground-muted text-sm">{language === "bs" ? "Dnevno" : "Daily"}</p>
                </div>
              </div>
            </div>
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
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto mt-3">
              {language === "bs" ? "Besplatna Wi-Fi mreža na ključnim lokacijama u Sarajevu" : "Free Wi-Fi network at key locations in Sarajevo"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {[
              { name: language === "bs" ? "Centar Sarajeva" : "Sarajevo Center", location: "Ferhadija • Titova", radius: "~1.2 km", users: "15K+", color: "primary", gif: "/images/mreza-titova-carsija.gif" },
              { name: "Skenderija", location: language === "bs" ? "Centar Skenderija" : "Skenderija Center", radius: "~500 m", users: "3K+", color: "green", gif: "/images/mreza-vilsonovo.gif" },
              { name: "Bjelašnica", location: language === "bs" ? "Olimpijska planina" : "Olympic mountain", radius: "~800 m", users: "2K+", color: "cyan", gif: "/images/mreza-bjelasnica.gif" },
            ].map((zone, index) => (
              <div key={index} data-gsap="card" className="rounded-2xl overflow-hidden bg-background-card border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-[4/3]">
                  <Image src={zone.gif} alt={`Saraya Wi-Fi - ${zone.name}`} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl ${
                      zone.color === "primary" ? "bg-primary-500" : zone.color === "green" ? "bg-accent-green" : "bg-cyan-500"
                    }`}>
                      <Wifi className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold">{zone.name}</h3>
                    <span className="text-accent-green text-sm font-medium">{zone.users}/dan</span>
                  </div>
                  <p className="text-foreground-muted text-sm flex items-center gap-1">
                    <MapPin size={12} className="text-red-400" />{zone.location}
                  </p>
                  <p className="text-foreground-muted text-xs mt-1">{language === "bs" ? "Radius" : "Radius"}: {zone.radius}</p>
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
              {language === "bs" ? "Oglašavajte na" : "Advertise on"} <span className="text-gradient">{language === "bs" ? "Saraya Mreži" : "Saraya Network"}</span>
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
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Target className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Geo Targeting</h4>
                    <p className="text-foreground-muted text-sm">{language === "bs" ? "Ciljajte korisnike po specifičnoj zoni." : "Target users by specific zone."}</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-gsap="card" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10 flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">{language === "bs" ? "Zašto Oglašavati?" : "Why Advertise?"}</h3>
              <div className="space-y-3 mb-6 flex-grow">
                {(language === "bs" ? ["Ciljana publika u centru grada", "Visoka stopa angažmana", "Mjerljivi rezultati", "Fleksibilni paketi", "Geo targeting po zonama", "Real-time statistika"] : ["Targeted audience in city center", "High engagement rate", "Measurable results", "Flexible packages", "Geo targeting by zones", "Real-time statistics"]).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-accent-green" size={16} />
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

      {/* Saraya Connect Stranice */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="accent" className="mb-3">{language === "bs" ? "Ekskluzivne Stranice" : "Exclusive Pages"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              Saraya Connect <span className="text-gradient">{language === "bs" ? "Stranice" : "Pages"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Captive portal sadrži ekskluzivne stranice koje pružaju dodatnu vrijednost korisnicima i omogućavaju objektima da se istaknu."
                : "Captive portal contains exclusive pages that provide additional value to users and allow venues to stand out."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { 
                logo: "/images/logos/reward center.png", 
                alt: "Rewards Center", 
                description: language === "bs" 
                  ? "Loyalty program gdje objekti nude ekskluzivne popuste i nagrade korisnicima Saraya mreže. Korisnici sakupljaju bodove i otkrivaju specijalne ponude."
                  : "Loyalty program where venues offer exclusive discounts and rewards to Saraya network users. Users collect points and discover special offers.", 
                features: language === "bs" ? ["Loyalty program", "Ekskluzivni popusti", "Bodovni sistem", "Specijalne ponude"] : ["Loyalty program", "Exclusive discounts", "Points system", "Special offers"], 
                color: "purple",
                benefit: language === "bs" ? "Privucite nove goste i nagradite postojeće" : "Attract new guests and reward existing ones"
              },
              { 
                logo: "/images/logos/pametno odabrano.png", 
                alt: "Pametno Odabrano", 
                description: language === "bs" 
                  ? "AI-powered preporuke koje analiziraju lokaciju korisnika, vrijeme dana i preferencije da predlože najbolje objekte u blizini."
                  : "AI-powered recommendations that analyze user location, time of day and preferences to suggest the best venues nearby.", 
                features: language === "bs" ? ["AI preporuke", "Geo targeting", "Personalizacija", "Real-time"] : ["AI recommendations", "Geo targeting", "Personalization", "Real-time"], 
                color: "green",
                benefit: language === "bs" ? "Budite preporučeni pravim korisnicima u pravo vrijeme" : "Be recommended to the right users at the right time"
              },
              { 
                logo: "/images/logos/explore sarajevo.png", 
                alt: "Explore Sarajevo", 
                description: language === "bs" 
                  ? "Interaktivni turistički vodič sa mapom grada, preporukama restorana, kafića, atrakcija i kulturnih sadržaja."
                  : "Interactive tourist guide with city map, restaurant recommendations, cafes, attractions and cultural content.", 
                features: language === "bs" ? ["Turistički vodič", "Interaktivna mapa", "Preporuke", "Kulturni sadržaji"] : ["Tourist guide", "Interactive map", "Recommendations", "Cultural content"], 
                color: "cyan",
                benefit: language === "bs" ? "Dosegnite turiste i nove posjetioce grada" : "Reach tourists and new city visitors"
              },
            ].map((page, index) => (
              <Card key={index} glow={page.color === "purple" ? "purple" : page.color === "green" ? "green" : "pink"}>
                <div data-gsap="card">
                  <div className="relative w-full h-10 mb-4">
                    <Image src={page.logo} alt={page.alt} fill className="object-contain object-left" />
                  </div>
                  <p className="text-foreground-muted text-sm mb-4">{page.description}</p>
                  <div className="space-y-2 mb-4">
                    {page.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className={page.color === "purple" ? "text-primary-400" : page.color === "green" ? "text-accent-green" : "text-cyan-400"} size={14} />
                        <span className="text-foreground-muted text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white text-sm font-medium flex items-center gap-2">
                      <Sparkles size={14} className={page.color === "purple" ? "text-primary-400" : page.color === "green" ? "text-accent-green" : "text-cyan-400"} />
                      {page.benefit}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div data-gsap="fade-in" className="p-6 md:p-8 rounded-2xl bg-background-card border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{language === "bs" ? "Zašto su ove stranice važne?" : "Why are these pages important?"}</h3>
                <p className="text-foreground-muted text-sm">
                  {language === "bs" 
                    ? "Saraya Connect stranice transformiraju običan Wi-Fi pristup u bogato korisničko iskustvo. Korisnici ne samo da dobivaju besplatan internet, već i pristup ekskluzivnim sadržajima, nagradama i lokalnim informacijama — sve na jednom mjestu. Za objekte, to znači direktan pristup ciljnoj publici koja je već zainteresovana za sadržaje u gradu."
                    : "Saraya Connect pages transform ordinary Wi-Fi access into a rich user experience. Users not only get free internet, but also access to exclusive content, rewards and local information — all in one place. For venues, this means direct access to a target audience already interested in city content."}
                </p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent-green">50K+</p>
                  <p className="text-foreground-muted text-sm">{language === "bs" ? "Korisnika" : "Users"}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-400">100+</p>
                  <p className="text-foreground-muted text-sm">{language === "bs" ? "Partnera" : "Partners"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Igrice i Nagrade */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="primary" className="mb-3"><Gamepad2 size={14} className="mr-2" />{language === "bs" ? "Gamifikacija" : "Gamification"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Igrice i" : "Games and"} <span className="text-gradient">{language === "bs" ? "Nagrade" : "Rewards"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Povećajte angažman korisnika kroz interaktivne igrice koje vode do nagrada i popusta u vašem objektu."
                : "Increase user engagement through interactive games that lead to rewards and discounts at your venue."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card glow="purple">
              <div data-gsap="card">
                <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4">
                  <Gamepad2 className="text-primary-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{language === "bs" ? "Interaktivne Igrice" : "Interactive Games"}</h3>
                <p className="text-foreground-muted text-sm mb-4">
                  {language === "bs" 
                    ? "Korisnici mogu igrati jednostavne, zabavne igrice direktno na captive portalu. Svaka igrica je povezana sa nagradama i popustima."
                    : "Users can play simple, fun games directly on the captive portal. Each game is linked to rewards and discounts."}
                </p>
                <div className="space-y-2">
                  {(language === "bs" 
                    ? ["Spin the Wheel - Točak sreće", "Scratch Cards - Greb kartice", "Quiz igre - Kvizovi o gradu", "Memory igre - Memorijske igre", "Instant Win - Instant nagrade"]
                    : ["Spin the Wheel - Wheel of fortune", "Scratch Cards - Scratch cards", "Quiz games - City quizzes", "Memory games - Memory games", "Instant Win - Instant rewards"]
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-primary-400" size={14} />
                      <span className="text-foreground-muted text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card glow="green">
              <div data-gsap="card">
                <div className="w-14 h-14 rounded-xl bg-accent-green/20 flex items-center justify-center mb-4">
                  <Gift className="text-accent-green" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{language === "bs" ? "Nagrade i Popusti" : "Rewards and Discounts"}</h3>
                <p className="text-foreground-muted text-sm mb-4">
                  {language === "bs" 
                    ? "Korisnici koji osvoje nagrade dobivaju kupone i popuste koje mogu iskoristiti u vašem objektu. To ih direktno dovodi do vas."
                    : "Users who win rewards get coupons and discounts they can use at your venue. This brings them directly to you."}
                </p>
                <div className="space-y-2">
                  {(language === "bs" 
                    ? ["Popusti 10-50%", "Besplatni proizvodi", "2 za 1 ponude", "Loyalty bodovi", "Ekskluzivni kuponi"]
                    : ["Discounts 10-50%", "Free products", "2 for 1 offers", "Loyalty points", "Exclusive coupons"]
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-accent-green" size={14} />
                      <span className="text-foreground-muted text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div data-gsap="fade-in" className="grid md:grid-cols-3 gap-4">
            {[
              { 
                title: language === "bs" ? "Povećan Angažman" : "Increased Engagement", 
                description: language === "bs" ? "Korisnici provode više vremena na portalu" : "Users spend more time on portal", 
                value: "+65%",
                icon: TrendingUp,
                color: "text-accent-green"
              },
              { 
                title: language === "bs" ? "Više Posjeta" : "More Visits", 
                description: language === "bs" ? "Nagrade dovode korisnike u objekte" : "Rewards bring users to venues", 
                value: "+40%",
                icon: Users,
                color: "text-primary-400"
              },
              { 
                title: language === "bs" ? "Brand Recall" : "Brand Recall", 
                description: language === "bs" ? "Korisnici pamte vaš brend" : "Users remember your brand", 
                value: "+55%",
                icon: Sparkles,
                color: "text-cyan-400"
              },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-background-card border border-white/10 text-center">
                <stat.icon className={`${stat.color} mx-auto mb-3`} size={24} />
                <p className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-white font-medium text-sm mb-1">{stat.title}</p>
                <p className="text-foreground-muted text-xs">{stat.description}</p>
              </div>
            ))}
          </div>

          <div data-gsap="fade-in" className="mt-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 via-accent-green/5 to-pink-500/10 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === "bs" ? "Kako funkcioniše?" : "How does it work?"}
                </h3>
                <p className="text-foreground-muted text-sm md:text-base mb-4">
                  {language === "bs" 
                    ? "Korisnik se spoji na Wi-Fi → Otvori se captive portal → Igra igricu → Osvoji nagradu → Dobije kupon → Posjeti vaš objekat → Iskoristi popust. Jednostavno i efikasno!"
                    : "User connects to Wi-Fi → Captive portal opens → Plays game → Wins reward → Gets coupon → Visits your venue → Uses discount. Simple and effective!"}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">{language === "bs" ? "Wi-Fi" : "Wi-Fi"}</Badge>
                  <Badge variant="accent">{language === "bs" ? "Igrica" : "Game"}</Badge>
                  <Badge variant="secondary">{language === "bs" ? "Nagrada" : "Reward"}</Badge>
                  <Badge variant="primary">{language === "bs" ? "Posjeta" : "Visit"}</Badge>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button variant="primary" size="lg">
                  {language === "bs" ? "Dodajte igrice" : "Add games"}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ko Može Oglašavati */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Ko može" : "Who can"} <span className="text-gradient">{language === "bs" ? "oglašavati" : "advertise"}</span>?
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Saraya Connect je idealan za sve objekte koji žele dosegnuti publiku u centru Sarajeva" : "Saraya Connect is ideal for all venues that want to reach audience in Sarajevo center"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(language === "bs" ? [
              "Restorani", "Kafići & Barovi", "Hoteli", "Trgovine",
              "Trgovački Centri", "Fitness Centri", "Saloni Ljepote", "Turističke Agencije"
            ] : [
              "Restaurants", "Cafes & Bars", "Hotels", "Shops",
              "Shopping Centers", "Fitness Centers", "Beauty Salons", "Travel Agencies"
            ]).map((industry, index) => (
              <div key={index} data-gsap="card" className="p-4 rounded-xl bg-background-card border border-white/10 text-center hover:border-accent-green/40 transition-all">
                <p className="text-white font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rezultati */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="primary" className="mb-3"><TrendingUp size={14} className="mr-2" />{language === "bs" ? "Rezultati" : "Results"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Mjerljivi" : "Measurable"} <span className="text-gradient">{language === "bs" ? "Rezultati" : "Results"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-4 gap-4">
            {[
              { value: "+35%", label: language === "bs" ? "Povećanje prometa" : "Traffic increase", icon: TrendingUp, color: "text-accent-green" },
              { value: "+28%", label: language === "bs" ? "Novih gostiju" : "New guests", icon: Users, color: "text-primary-400" },
              { value: "+42%", label: language === "bs" ? "Brand awareness" : "Brand awareness", icon: Sparkles, color: "text-cyan-400" },
              { value: "100%", label: language === "bs" ? "Vidljivost" : "Visibility", icon: BarChart3, color: "text-pink-400" },
            ].map((stat, index) => (
              <div key={index} data-gsap="stat" className="p-6 rounded-2xl bg-background-card border border-white/10 text-center">
                <stat.icon className={`${stat.color} mx-auto mb-3`} size={24} />
                <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-foreground-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako Početi */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="accent" className="mb-3">{language === "bs" ? "Jednostavan Proces" : "Simple Process"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Kako" : "How to"} <span className="text-gradient">{language === "bs" ? "Početi" : "Get Started"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Započnite oglašavanje na Saraya Connect mreži u 4 jednostavna koraka"
                : "Start advertising on Saraya Connect network in 4 simple steps"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-4 gap-4 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-green to-cyan-500 opacity-20" />
            
            {[
              { 
                step: "01", 
                title: language === "bs" ? "Kontakt" : "Contact", 
                description: language === "bs" ? "Kontaktirajte nas i opišite vaše potrebe" : "Contact us and describe your needs",
                icon: Users,
                color: "primary"
              },
              { 
                step: "02", 
                title: language === "bs" ? "Strategija" : "Strategy", 
                description: language === "bs" ? "Kreiramo oglašivačku strategiju za vas" : "We create advertising strategy for you",
                icon: Target,
                color: "green"
              },
              { 
                step: "03", 
                title: language === "bs" ? "Kreativa" : "Creative", 
                description: language === "bs" ? "Dizajniramo oglase i sadržaj" : "We design ads and content",
                icon: Sparkles,
                color: "cyan"
              },
              { 
                step: "04", 
                title: language === "bs" ? "Lansiranje" : "Launch", 
                description: language === "bs" ? "Vaši oglasi idu uživo na mreži" : "Your ads go live on network",
                icon: TrendingUp,
                color: "pink"
              },
            ].map((item, index) => (
              <div key={index} data-gsap="card" className="relative">
                <div className="p-6 rounded-2xl bg-background-card border border-white/10 hover:border-white/20 transition-all text-center relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
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
                    } size={24} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${
                    item.color === "primary" ? "text-primary-400" :
                    item.color === "green" ? "text-accent-green" :
                    item.color === "cyan" ? "text-cyan-400" :
                    "text-pink-400"
                  }`}>{item.step}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground-muted text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div data-gsap="fade-in" className="mt-8 text-center">
            <p className="text-foreground-muted mb-4">
              {language === "bs" ? "Proces traje 7-10 dana od prvog kontakta" : "Process takes 7-10 days from first contact"}
            </p>
            <Button variant="primary" size="lg">
              {language === "bs" ? "Započnite danas" : "Start today"}
              <ArrowRight className="ml-2" size={20} />
            </Button>
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
                  <Megaphone className="text-white" size={36} />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {language === "bs" ? "Spremni za" : "Ready to"} <span className="text-gradient">{language === "bs" ? "oglašavanje" : "advertise"}</span>?
                </h2>
                <p className="text-foreground-muted text-base md:text-lg max-w-2xl mx-auto">
                  {language === "bs" 
                    ? "Pridružite se 100+ kompanija koje već oglašavaju na Saraya Connect mreži i dosežu hiljade korisnika dnevno."
                    : "Join 100+ companies already advertising on Saraya Connect network and reaching thousands of users daily."}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Users, value: "20K+", label: language === "bs" ? "Dnevnih korisnika" : "Daily users" },
                  { icon: MapPin, value: "3", label: language === "bs" ? "Zone u centru" : "Zones in center" },
                  { icon: TrendingUp, value: "+35%", label: language === "bs" ? "Prosječan rast" : "Average growth" },
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
