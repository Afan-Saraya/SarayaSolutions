"use client";

import { 
  Monitor, ArrowRight, Check, Image as ImageIcon, Video, QrCode, 
  DollarSign, Globe, RefreshCw, Puzzle, ShoppingBag, Train, Building
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
    title: language === "bs" ? "Trgovine i maloprodaja" : "Stores and Retail",
    description: language === "bs" 
      ? "Za promociju proizvoda ili posebnih ponuda." 
      : "For product promotion or special offers.",
  },
  {
    icon: Building,
    title: language === "bs" ? "Javne površine" : "Public Spaces",
    description: language === "bs" 
      ? "Informativne ploče za najave, menije i obavijesti." 
      : "Information boards for announcements, menus, and notices.",
  },
  {
    icon: Train,
    title: language === "bs" ? "Transportna infrastruktura" : "Transport Infrastructure",
    description: language === "bs" 
      ? "Prikazivanje rasporeda ili važnih informacija putnicima (npr. na stanicama)." 
      : "Displaying schedules or important information to passengers (e.g., at stations).",
  },
];

const getBenefits = (language: string) => [
  {
    icon: DollarSign,
    title: language === "bs" ? "Ušteda u troškovima" : "Cost Savings",
    description: language === "bs" 
      ? "Jednostavna instalacija i minimalno održavanje." 
      : "Simple installation and minimal maintenance.",
  },
  {
    icon: Globe,
    title: language === "bs" ? "Univerzalnost" : "Universality",
    description: language === "bs" 
      ? "Prikladno za širok spektar industrija i vrsta upotrebe." 
      : "Suitable for a wide range of industries and use cases.",
  },
  {
    icon: RefreshCw,
    title: language === "bs" ? "Lahka prilagodba sadržaja" : "Easy Content Adaptation",
    description: language === "bs" 
      ? "Mogućnost redovne izmjene sadržaja putem digitalne platforme." 
      : "Ability to regularly update content via digital platform.",
  },
  {
    icon: Puzzle,
    title: language === "bs" ? "Mogućnosti proširenja" : "Expansion Options",
    description: language === "bs" 
      ? "Iako basic, ovi displeji mogu se povezati sa senzorskim tehnologijama za minimalnu interaktivnost, poput QR koda koji korisnik skenira i posjeti link sa svog mobitela." 
      : "Although basic, these displays can be connected with sensor technologies for minimal interactivity, such as QR codes that users scan to visit links from their mobile devices.",
  },
];

export default function BasicDisplayPage() {
  const { language } = useLanguage();
  
  const applications = getApplications(language);
  const benefits = getBenefits(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" data-gsap="parallax" />
        <div className="absolute top-1/4 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/20 rounded-full blur-[80px] md:blur-[120px]" />

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
              <span className="text-gradient -ml-4 md:-ml-10">Basic Display</span>
            </h1>
            <p className="text-sm md:text-lg text-foreground-muted mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto" data-gsap="hero-desc">
              {language === "bs" 
                ? "Basic displeji, kao jednostavan oblik digitalnih ekrana, koriste statički sadržaj (slike, video ili tekst) za informiranje ili promociju. Ovi displeji ne zahtijevaju interakciju s korisnicima, već samo stalno prikazuju unaprijed definirane sadržaje."
                : "Basic displays, as a simple form of digital screens, use static content (images, video, or text) for information or promotion. These displays do not require user interaction, but only continuously display predefined content."}
            </p>
            <div data-gsap="hero-buttons" className="flex justify-center">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Zatražite ponudu" : "Request quote"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Vrste " : "Types of "}
              <span className="text-gradient">{language === "bs" ? "sadržaja" : "content"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16" data-gsap="cards-grid">
            <div className="p-8 rounded-2xl bg-background-card border border-primary-500/10 text-center" data-gsap="card">
              <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="text-primary-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{language === "bs" ? "Slike" : "Images"}</h3>
              <p className="text-foreground-muted">
                {language === "bs" 
                  ? "Statički vizualni sadržaj za promocije i informacije." 
                  : "Static visual content for promotions and information."}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background-card border border-primary-500/10 text-center" data-gsap="card">
              <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                <Video className="text-primary-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Video</h3>
              <p className="text-foreground-muted">
                {language === "bs" 
                  ? "Dinamični video sadržaj za veći angažman." 
                  : "Dynamic video content for greater engagement."}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background-card border border-primary-500/10 text-center" data-gsap="card">
              <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                <QrCode className="text-primary-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{language === "bs" ? "QR kodovi" : "QR Codes"}</h3>
              <p className="text-foreground-muted">
                {language === "bs" 
                  ? "Povezivanje s digitalnim sadržajem putem mobilnih uređaja." 
                  : "Connecting to digital content via mobile devices."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{language === "bs" ? "Primjena" : "Applications"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-gsap="cards-grid">
            {applications.map((app) => (
              <Card key={app.title} glow="purple" data-gsap="card">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                    <app.icon className="text-primary-400" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                  <p className="text-foreground-muted">{app.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Benefiti " : "Benefits of "}
              <span className="text-gradient">{language === "bs" ? "basic display-a" : "basic display"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-gsap="cards-grid">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-background-card border border-primary-500/10 flex gap-4"
                data-gsap="card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-foreground-muted text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-gsap="cta">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "bs" ? "Jednostavno, ali " : "Simple, but "}
              <span className="text-gradient">{language === "bs" ? "efikasno" : "effective"}</span>
            </h2>
            <p className="text-foreground-muted mb-8">
              {language === "bs" 
                ? "Basic Display je idealno rješenje za sve koji žele započeti s digitalnim oglašavanjem bez velikih ulaganja."
                : "Basic Display is the ideal solution for anyone who wants to start with digital advertising without major investments."}
            </p>
            <Button variant="primary" size="lg">
              {language === "bs" ? "Kontaktirajte nas" : "Contact us"}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
