"use client";

import { 
  Wifi, BarChart3, ArrowRight, Check, Play, MapPin,
  ShoppingBag, Megaphone
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import DeviceMockup from "@/components/ui/DeviceMockup";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const getPortalFeatures = (language: string) => [
  { title: language === "bs" ? "Brendirani Captive Portal" : "Branded Captive Portal", description: language === "bs" ? "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand i komunicira s korisnicima." : "Fully customized login page that represents your brand and communicates with users.", icon: Megaphone },
  { title: language === "bs" ? "Marketing & Promocije" : "Marketing & Promotions", description: language === "bs" ? "Prikazujte ponude, najave i promocije korisnicima prilikom spajanja na Wi-Fi." : "Display offers, announcements and promotions to users when connecting to Wi-Fi.", icon: ShoppingBag },
  { title: language === "bs" ? "Analitika Ponašanja" : "Behavior Analytics", description: language === "bs" ? "Pratite kako se korisnici kreću, koliko ostaju i što ih zanima — podaci za bolje odluke." : "Track how users move, how long they stay and what interests them — data for better decisions.", icon: BarChart3 },
];

const getBenefits = (language: string) => [
  language === "bs" ? "Potpuna prilagodba vašem brendu i poslovanju" : "Full customization to your brand and business",
  language === "bs" ? "Skalabilnost — od jedne do stotine lokacija" : "Scalability — from one to hundreds of locations",
  language === "bs" ? "Integracija s loyalty programima i CRM sistemima" : "Integration with loyalty programs and CRM systems",
  language === "bs" ? "Detaljni izvještaji o ponašanju korisnika" : "Detailed reports on user behavior",
  language === "bs" ? "Personalizirani sadržaji bazirani na lokaciji i vremenu" : "Personalized content based on location and time",
];

const getIncludedPages = (language: string) => [
  { title: "Rewards Center", description: language === "bs" ? "Loyalty program koji nagrađuje korisnike za posjete i interakcije s ekskluzivnim ponudama." : "Loyalty program that rewards users for visits and interactions with exclusive offers.", logo: "/images/logos/reward center.png", color: "purple" },
  { title: "Pametno Odabrano", description: language === "bs" ? "AI preporuke koje korisnicima predlažu relevantne sadržaje, proizvode i usluge." : "AI recommendations that suggest relevant content, products and services to users.", logo: "/images/logos/pametno odabrano.png", color: "green" },
  { title: "Explore Sarajevo", description: language === "bs" ? "Interaktivni vodič kroz grad s preporukama restorana, atrakcija i događaja." : "Interactive city guide with restaurant, attraction and event recommendations.", logo: "/images/logos/explore sarajevo.png", color: "cyan" },
];

export default function SarayaConnectPage() {
  const { language } = useLanguage();
  const portalFeatures = getPortalFeatures(language);
  const benefits = getBenefits(language);
  const includedPages = getIncludedPages(language);

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
            {/* Left - Device Mockup */}
            <div data-gsap="hero-title" className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="relative h-10 md:h-14 lg:h-16 w-56 md:w-72 lg:w-80 mb-4 md:mb-6 mx-auto lg:mx-0" data-gsap="hero-title">
                <Image
                  src="/images/logos/saraya connect.png"
                  alt="Saraya Connect"
                  fill
                  className="object-contain object-center lg:object-left"
                />
              </div>

              <p data-gsap="hero-desc" className="text-sm md:text-base lg:text-lg text-foreground-muted mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {language === "bs" 
                  ? "Pretvorite besplatni Wi-Fi u moćan marketing alat. Prikupljajte podatke, komunicirajte s korisnicima i gradite lojalnost — sve kroz jednu platformu."
                  : "Turn free Wi-Fi into a powerful marketing tool. Collect data, communicate with users and build loyalty — all through one platform."}
              </p>

              {/* Feature highlights */}
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

      {/* Benefits Bar */}
      <section data-gsap="benefits-bar" className="py-6 md:py-10 bg-accent-green/10 border-y border-accent-green/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {(language === "bs" ? ["Besplatan Wi-Fi", "Captive Portal", "Marketing platforma", "Analitika korisnika", "Skalabilnost"] : ["Free Wi-Fi", "Captive Portal", "Marketing platform", "User analytics", "Scalability"]).map((benefit, index) => (
              <div key={index} data-gsap="benefits-item" className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground-muted text-xs md:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saraya Network Section with Maps */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <Badge variant="secondary" className="mb-3 md:mb-4"><MapPin size={14} className="mr-2" />Sarajevo & {language === "bs" ? "Okolina" : "Surroundings"}</Badge>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{language === "bs" ? "Saraya Mreža" : "Saraya Network"} <span className="text-gradient">{language === "bs" ? "Zone Pokrivenosti" : "Coverage Zones"}</span></h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Saraya je etablirala svoju Wi-Fi mrežu u Sarajevu i okolini s besplatnim pristupom."
                : "Saraya has established its Wi-Fi network in Sarajevo and surroundings with free access."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Map 1: Centar */}
            <div data-gsap="card" className="rounded-2xl overflow-hidden border border-primary-500/20 shadow-xl shadow-primary-500/10 bg-background-card">
              <div className="p-3 md:p-4 border-b border-primary-500/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center"><MapPin className="text-primary-400" size={12} /></div>
                  <span className="text-white font-medium text-xs md:text-sm">{language === "bs" ? "Centar Sarajeva" : "Sarajevo Center"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-accent-green text-[10px] md:text-xs">{language === "bs" ? "Aktivno" : "Active"}</span>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=18.4100%2C43.8560%2C18.4320%2C43.8620&layer=mapnik&marker=43.8590%2C18.4210" className="w-full h-full border-0 pointer-events-none" style={{ filter: 'saturate(0.8) contrast(1.1)' }} loading="lazy" title="Saraya Wi-Fi zona - Centar" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background-card/60 to-transparent" />
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="absolute w-[60%] h-[60%] rounded-full bg-primary-500/20 border-2 border-primary-500/50 border-dashed flex items-center justify-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/50"><Wifi className="text-white" size={16} /></div>
                  </div>
                  <div className="absolute bottom-[15%] px-3 py-1 rounded-full bg-primary-500/90 text-white text-[9px] md:text-xs font-medium">{language === "bs" ? "Zona 1 - Centar" : "Zone 1 - Center"}</div>
                </div>
              </div>
              <div className="p-3 md:p-4 border-t border-primary-500/10">
                <div className="flex items-center justify-between text-[9px] md:text-xs text-foreground-muted">
                  <span>📍 Ferhadija • Titova</span>
                  <span className="text-primary-400 font-medium">~1.2 km radius</span>
                </div>
              </div>
            </div>

            {/* Map 2: Skenderija */}
            <div data-gsap="card" className="rounded-2xl overflow-hidden border border-accent-green/20 shadow-xl shadow-accent-green/10 bg-background-card">
              <div className="p-3 md:p-4 border-b border-accent-green/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center"><MapPin className="text-accent-green" size={12} /></div>
                  <span className="text-white font-medium text-xs md:text-sm">Skenderija</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  <span className="text-accent-green text-[10px] md:text-xs">{language === "bs" ? "Aktivno" : "Active"}</span>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=18.4050%2C43.8540%2C18.4200%2C43.8600&layer=mapnik&marker=43.8570%2C18.4125" className="w-full h-full border-0 pointer-events-none" style={{ filter: 'saturate(0.8) contrast(1.1)' }} loading="lazy" title="Saraya Wi-Fi zona - Skenderija" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background-card/60 to-transparent" />
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="absolute w-[50%] h-[50%] rounded-full bg-accent-green/20 border-2 border-accent-green/50 border-dashed flex items-center justify-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-green flex items-center justify-center shadow-lg shadow-accent-green/50"><Wifi className="text-white" size={16} /></div>
                  </div>
                  <div className="absolute bottom-[15%] px-3 py-1 rounded-full bg-accent-green/90 text-white text-[9px] md:text-xs font-medium">{language === "bs" ? "Zona 2 - Skenderija" : "Zone 2 - Skenderija"}</div>
                </div>
              </div>
              <div className="p-3 md:p-4 border-t border-accent-green/10">
                <div className="flex items-center justify-between text-[9px] md:text-xs text-foreground-muted">
                  <span>📍 Centar Skenderija</span>
                  <span className="text-accent-green font-medium">~500 m radius</span>
                </div>
              </div>
            </div>

            {/* Map 3: Bjelašnica */}
            <div data-gsap="card" className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-xl shadow-cyan-500/10 bg-background-card md:col-span-2 lg:col-span-1">
              <div className="p-3 md:p-4 border-b border-cyan-500/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center"><MapPin className="text-cyan-400" size={12} /></div>
                  <span className="text-white font-medium text-xs md:text-sm">Bjelašnica</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-400 text-[10px] md:text-xs">{language === "bs" ? "Aktivno" : "Active"}</span>
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=18.2500%2C43.7100%2C18.2900%2C43.7350&layer=mapnik&marker=43.7225%2C18.2700" className="w-full h-full border-0 pointer-events-none" style={{ filter: 'saturate(0.8) contrast(1.1)' }} loading="lazy" title="Saraya Wi-Fi zona - Bjelašnica" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background-card/60 to-transparent" />
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="absolute w-[55%] h-[55%] rounded-full bg-cyan-500/20 border-2 border-cyan-500/50 border-dashed flex items-center justify-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/50"><Wifi className="text-white" size={16} /></div>
                  </div>
                  <div className="absolute bottom-[15%] px-3 py-1 rounded-full bg-cyan-500/90 text-white text-[9px] md:text-xs font-medium">{language === "bs" ? "Zona 3 - Bjelašnica" : "Zone 3 - Bjelašnica"}</div>
                </div>
              </div>
              <div className="p-3 md:p-4 border-t border-cyan-500/10">
                <div className="flex items-center justify-between text-[9px] md:text-xs text-foreground-muted">
                  <span>🏔️ {language === "bs" ? "Olimpijska planina" : "Olympic mountain"}</span>
                  <span className="text-cyan-400 font-medium">~800 m radius</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Summary */}
          <div data-gsap="fade-in" className="mt-6 md:mt-10 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 via-accent-green/10 to-cyan-500/10 border border-primary-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-500/20 flex items-center justify-center"><Wifi className="text-primary-400" size={20} /></div>
                <div>
                  <p className="text-white font-medium text-sm md:text-base">{language === "bs" ? "3 aktivne zone pokrivenosti" : "3 active coverage zones"}</p>
                  <p className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Besplatan Wi-Fi za sve korisnike" : "Free Wi-Fi for all users"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary-400">20k+</p>
                  <p className="text-[10px] md:text-xs text-foreground-muted">{language === "bs" ? "Dnevnih korisnika" : "Daily users"}</p>
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-accent-green">99.9%</p>
                  <p className="text-[10px] md:text-xs text-foreground-muted">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Captive Portal Section */}
      <section className="py-24 relative">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "bs" ? "Captivni Portal /" : "Captive Portal /"} <span className="text-gradient">{language === "bs" ? "Hotspot Stranica" : "Hotspot Page"}</span></h2>
            <p className="text-foreground-muted max-w-3xl mx-auto">
              {language === "bs" 
                ? "Prilagodljivi captivni portali koji omogućavaju potpunu kontrolu nad sadržajem."
                : "Customizable captive portals that allow full control over content."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6 mb-16">
            {portalFeatures.map((feature) => (
              <Card key={feature.title} glow="purple">
                <div data-gsap="card">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-foreground-muted text-sm">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div data-gsap="fade-in" className="p-8 rounded-2xl bg-gradient-to-r from-primary-900/30 to-background-card border border-primary-500/20">
            <h3 className="text-xl font-bold text-white mb-6">{language === "bs" ? "Prednosti Saraya Hotspot Rješenja:" : "Saraya Hotspot Solution Benefits:"}</h3>
            <div data-gsap="list" className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} data-gsap="list-item" className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="text-accent-green" size={12} />
                  </div>
                  <span className="text-foreground-muted text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included Pages Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-16">
            <Badge variant="accent" className="mb-4">{language === "bs" ? "Uključeno" : "Included"}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Saraya Connect <span className="text-gradient">{language === "bs" ? "Stranice" : "Pages"}</span></h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {language === "bs" 
                ? "Svaki Saraya Connect paket uključuje pristup našim ekskluzivnim stranicama."
                : "Every Saraya Connect package includes access to our exclusive pages."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-8">
            {includedPages.map((page) => (
              <div key={page.title} data-gsap="card" className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-105 ${
                page.color === "purple" ? "bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-primary-500/30 hover:shadow-primary-500/20 hover:shadow-xl"
                : page.color === "green" ? "bg-gradient-to-br from-accent-green/20 to-emerald-600/10 border-accent-green/30 hover:shadow-accent-green/20 hover:shadow-xl"
                : "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-xl"
              }`}>
                <div className="relative w-full h-16 mb-6">
                  <Image
                    src={page.logo}
                    alt={page.title}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-foreground-muted">{page.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-green/10 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="cta" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "povezivanje" : "connection"}</span>?</h2>
            <p className="text-foreground-muted mb-8">{language === "bs" ? "Kontaktirajte nas i saznajte kako Saraya Connect može unaprijediti vaše poslovanje." : "Contact us and find out how Saraya Connect can improve your business."}</p>
            <Button variant="primary" size="lg">{language === "bs" ? "Kontaktirajte nas" : "Contact us"}<ArrowRight className="ml-2" size={20} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
