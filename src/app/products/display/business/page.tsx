"use client";

import { 
  Users, ArrowRight, Play, Camera, Gamepad2, Hand, Mic,
  Sparkles, Heart, Lightbulb, ShoppingBag, Megaphone, Store
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
    icon: Gamepad2,
    title: language === "bs" ? "Igre i kvizovi" : "Games and Quizzes",
    description: language === "bs" 
      ? "Korisnici mogu upravljati sadržajem pomoću pokreta tijela ili gestama, glasom i predmetima." 
      : "Users can control content using body movements or gestures, voice, and objects.",
  },
  {
    icon: Megaphone,
    title: language === "bs" ? "Visoko angažirani marketing" : "Highly Engaged Marketing",
    description: language === "bs" 
      ? "Interaktivni oglasi na događanjima gdje se sadržaj prilagođava stvarnom vremenu." 
      : "Interactive ads at events where content adapts in real-time.",
  },
  {
    icon: Store,
    title: language === "bs" ? "Trgovine s pametnim iskustvom" : "Smart Experience Stores",
    description: language === "bs" 
      ? "Prikazivanje povezanih proizvoda kad korisnik pokazuje interes." 
      : "Displaying related products when the user shows interest.",
  },
];

const getBenefits = (language: string) => [
  {
    icon: Lightbulb,
    title: language === "bs" ? "Kreativnost i inovacija" : "Creativity and Innovation",
    description: language === "bs" 
      ? "Mogućnost produktivnih iskustava kao nikad prije." 
      : "Possibility of productive experiences like never before.",
  },
  {
    icon: Sparkles,
    title: language === "bs" ? "Personalizacija i fluidnost" : "Personalization and Fluidity",
    description: language === "bs" 
      ? "Omogućuje više nivoa interakcije nego standardni displeji." 
      : "Enables more levels of interaction than standard displays.",
  },
  {
    icon: Heart,
    title: language === "bs" ? "Zadovoljstvo i angažman" : "Satisfaction and Engagement",
    description: language === "bs" 
      ? "Povećava emocionalnu povezanost i angažman korisnika s brendom." 
      : "Increases emotional connection and user engagement with the brand.",
  },
];

const getFeatures = (language: string) => [
  { icon: Camera, title: language === "bs" ? "Prepoznavanje lica" : "Face Recognition", description: language === "bs" ? "Senzori za detekciju i analizu korisnika" : "Sensors for user detection and analysis" },
  { icon: Mic, title: language === "bs" ? "Prepoznavanje glasa" : "Voice Recognition", description: language === "bs" ? "Glasovne komande za kontrolu sadržaja" : "Voice commands for content control" },
  { icon: Hand, title: language === "bs" ? "Gestikulacija tijela" : "Body Gestures", description: language === "bs" ? "Motion tracking za interaktivno iskustvo" : "Motion tracking for interactive experience" },
  { icon: Gamepad2, title: language === "bs" ? "Napredne igre" : "Advanced Games", description: language === "bs" ? "Moćni renderi i realistične simulacije" : "Powerful renders and realistic simulations" },
];

export default function BusinessDisplayPage() {
  const { language } = useLanguage();
  
  const applications = getApplications(language);
  const benefits = getBenefits(language);
  const features = getFeatures(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" data-gsap="parallax" />
        <div className="absolute top-1/4 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px]" />

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
              <span className="text-gradient -ml-4 md:-ml-10">Business Display</span>
            </h1>
            <p className="text-base md:text-xl text-foreground-muted mb-2 md:mb-4" data-gsap="hero-subtitle">
              {language === "bs" ? "Kakvi su to business displeji?" : "What are business displays?"}
            </p>
            <p className="text-sm md:text-lg text-foreground-muted mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto" data-gsap="hero-desc">
              {language === "bs" 
                ? "Business displeji kombiniraju senzore pokreta, prepoznavanje glasa, gestikulaciju tijela i motion tracking za izuzetno interaktivnu i personaliziranu prezentaciju. Oni se izdvajaju od ostalih, jer zahtijevaju poseban hardware, te napredni nivo interakcije (za aplikacije) i grafike (za moćnije i realistične igre, rendere i simulacije)."
                : "Business displays combine motion sensors, voice recognition, body gestures, and motion tracking for an extremely interactive and personalized presentation. They stand out from others because they require special hardware, as well as an advanced level of interaction (for applications) and graphics (for more powerful and realistic games, renders, and simulations)."}
            </p>
            <div className="flex flex-wrap justify-center gap-4" data-gsap="hero-buttons">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Zatražite ponudu" : "Request quote"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2" size={18} />
                {language === "bs" ? "Pogledajte video" : "Watch video"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Napredne " : "Advanced "}
              <span className="text-gradient">{language === "bs" ? "tehnologije" : "technologies"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-gsap="cards-grid">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-background-card border border-blue-500/10 text-center hover:border-blue-500/30 transition-all"
                data-gsap="card"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-400" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-foreground-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Primjena " : "Application of "}
              <span className="text-gradient">{language === "bs" ? "business display-a" : "business display"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-gsap="cards-grid">
            {applications.map((app) => (
              <Card key={app.title} glow="purple" data-gsap="card">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <app.icon className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
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
              <span className="text-gradient">{language === "bs" ? "business display-a" : "business display"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-gsap="cards-grid">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-primary-500/10 border border-blue-500/20 text-center"
                data-gsap="card"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-foreground-muted">{benefit.description}</p>
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
              {language === "bs" ? "Podignite interakciju na " : "Take interaction to a "}
              <span className="text-gradient">{language === "bs" ? "novi nivo" : "new level"}</span>
            </h2>
            <p className="text-foreground-muted mb-8">
              {language === "bs" 
                ? "Business Display je idealan za kompanije koje žele stvoriti nezaboravna iskustva i maksimalno angažirati svoje korisnike."
                : "Business Display is ideal for companies that want to create unforgettable experiences and maximize user engagement."}
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
