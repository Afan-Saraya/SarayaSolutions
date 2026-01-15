"use client";

import { 
  MessageSquare, ArrowRight, Check, Fingerprint, Map, Building2, 
  Landmark, ShoppingBag, Palette, Clock, Sparkles, UserCheck
} from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const getApplications = (language: string) => [
  {
    icon: ShoppingBag,
    title: language === "bs" ? "Tržni centri" : "Shopping Centers",
    description: language === "bs" 
      ? "Za navigaciju kroz objekte, promocije i interaktivne mape." 
      : "For navigation through facilities, promotions, and interactive maps.",
  },
  {
    icon: Palette,
    title: language === "bs" ? "Muzeji i galerije" : "Museums and Galleries",
    description: language === "bs" 
      ? "Za digitalno vođenje kroz izložbe, dodatne informacije o eksponatima, ili interaktivne sadržaje putem gestikulacije." 
      : "For digital guidance through exhibitions, additional information about exhibits, or interactive content through gestures.",
  },
  {
    icon: Building2,
    title: language === "bs" ? "Preduzeća i korporacije" : "Businesses and Corporations",
    description: language === "bs" 
      ? "Za interni prijem klijenata, najave sastanaka i prezentaciju kompanijskih sadržaja u hodnicima ili lobijima." 
      : "For internal client reception, meeting announcements, and presentation of company content in hallways or lobbies.",
  },
  {
    icon: Landmark,
    title: language === "bs" ? "Banke i osiguravajuće kuće" : "Banks and Insurance Companies",
    description: language === "bs" 
      ? "Za automatsko usmjeravanje klijenata, informisanje o uslugama i digitalno zakazivanje sastanaka." 
      : "For automatic client routing, service information, and digital appointment scheduling.",
  },
];

const getBenefits = (language: string) => [
  {
    icon: Clock,
    title: language === "bs" ? "Brža usluga korisnicima" : "Faster Customer Service",
    description: language === "bs" 
      ? "Omogućava korisnicima da brzo pronađu informacije ili izvrše uslugu bez čekanja." 
      : "Allows users to quickly find information or perform services without waiting.",
  },
  {
    icon: Sparkles,
    title: language === "bs" ? "Fleksibilna primjena" : "Flexible Application",
    description: language === "bs" 
      ? "Koristi se u bankama, sajmovima, info-punktovima, hotelima, tržnim centrima i drugim prostorima." 
      : "Used in banks, fairs, info points, hotels, shopping centers, and other spaces.",
  },
  {
    icon: UserCheck,
    title: language === "bs" ? "Profesionalni dojam" : "Professional Impression",
    description: language === "bs" 
      ? "Moderan dizajn i tehnologija ostavljaju snažan utisak na klijente i posjetioce." 
      : "Modern design and technology leave a strong impression on clients and visitors.",
  },
  {
    icon: Fingerprint,
    title: language === "bs" ? "Personalizovano iskustvo" : "Personalized Experience",
    description: language === "bs" 
      ? "Interfejs i sadržaj se mogu potpuno prilagoditi potrebama i brendiranju klijenta." 
      : "Interface and content can be fully customized to client needs and branding.",
  },
];

export default function KioskDisplayPage() {
  const { language } = useLanguage();
  
  const applications = getApplications(language);
  const benefits = getBenefits(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" data-gsap="parallax" />
        <div className="absolute top-1/4 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/products/display" className="inline-flex items-center text-foreground-muted hover:text-white mb-4 md:mb-6 transition-colors text-sm md:text-base mx-auto block w-fit">
            <ArrowRight className="mr-2 rotate-180" size={16} />
            {language === "bs" ? "Nazad na Display" : "Back to Display"}
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-3 md:mb-6 flex items-center justify-center" data-gsap="hero-title">
              <span className="relative h-7 sm:h-10 md:h-14 w-24 sm:w-36 md:w-52 translate-y-1 md:translate-y-2">
                <Image src="/images/logoSarayaJustText.png" alt="Saraya" fill className="object-contain object-left" />
              </span>
              <span className="text-gradient -ml-4 md:-ml-10">Kiosk Display</span>
            </h1>
            <p className="text-base md:text-xl text-foreground-muted mb-2 md:mb-4" data-gsap="hero-subtitle">
              {language === "bs" ? "Šta omogućuju kiosk displeji?" : "What do kiosk displays enable?"}
            </p>
            <p className="text-sm md:text-lg text-foreground-muted mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto" data-gsap="hero-desc">
              {language === "bs" 
                ? "Kiosk Display je pametni interaktivni ekran dizajniran za informisanje, navigaciju i pružanje usluga korisnicima u stvarnom prostoru. Idealan je za sajmove, poslovnice, banke, turističke info-punkte, tržne centre i sve druge javne prostore gdje je potrebna brza i jednostavna komunikacija s korisnicima. Pomoću prilagođenih aplikacija koje i mi kreiramo, korisnici mogu pretraživati mape, kataloge, usluge, zakazivati sastanke, tražiti pomoć ili se informisati – sve putem dodira."
                : "Kiosk Display is a smart interactive screen designed for informing, navigation, and providing services to users in real space. It is ideal for fairs, offices, banks, tourist info points, shopping centers, and all other public spaces where fast and simple communication with users is needed. Using customized applications that we also create, users can browse maps, catalogs, services, schedule meetings, seek help, or get informed – all through touch."}
            </p>
            <div data-gsap="hero-buttons" className="flex justify-center">
              <Button variant="secondary" size="lg">
                {language === "bs" ? "Zatražite ponudu" : "Request quote"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Primjena " : "Application of "}
              <span className="text-gradient">{language === "bs" ? "kiosk displeja" : "kiosk displays"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12" data-gsap="cards-grid">
            {applications.map((app) => (
              <Card key={app.title} glow="green" data-gsap="card">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <app.icon className="text-accent-green" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                    <p className="text-foreground-muted">{app.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-foreground-muted text-center max-w-3xl mx-auto" data-gsap="fade-in">
            {language === "bs" 
              ? "Kao i mnoge druge djelatnosti koje žele unaprijediti korisničko iskustvo, smanjiti operativne troškove i ostaviti snažan vizuelni utisak putem moderne tehnologije."
              : "As well as many other industries that want to improve user experience, reduce operational costs, and leave a strong visual impression through modern technology."}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Benefiti " : "Benefits of "}
              <span className="text-gradient">{language === "bs" ? "kiosk display-a" : "kiosk display"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-gsap="cards-grid">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-background-card border border-accent-green/10 text-center hover:border-accent-green/30 transition-all"
                data-gsap="card"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-green/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-accent-green" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-foreground-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-gsap="cta">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "bs" ? "Spremni za " : "Ready for a "}
              <span className="text-gradient">{language === "bs" ? "kiosk rješenje?" : "kiosk solution?"}</span>
            </h2>
            <p className="text-foreground-muted mb-8">
              {language === "bs" 
                ? "Kontaktirajte nas i saznajte kako Kiosk Display može transformirati korisničko iskustvo u vašem prostoru."
                : "Contact us and learn how Kiosk Display can transform the user experience in your space."}
            </p>
            <Button variant="secondary" size="lg">
              {language === "bs" ? "Kontaktirajte nas" : "Contact us"}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
