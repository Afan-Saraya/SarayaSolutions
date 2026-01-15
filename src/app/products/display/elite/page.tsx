"use client";

import { 
  Bot, ArrowRight, Play, Globe, Brain, Sparkles, MessageSquare,
  Hand, Palette, ShoppingBag, Cpu, Users, Zap, TrendingUp
} from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const getWhyAIAvatar = (language: string) => [
  {
    title: language === "bs" ? "Revolucionarna interakcija" : "Revolutionary Interaction",
    description: language === "bs" 
      ? "Omogućite korisnicima da komuniciraju s avatarima putem glasa, pokreta ili vizualnih komandi." 
      : "Enable users to communicate with avatars through voice, movement, or visual commands.",
  },
  {
    title: language === "bs" ? "Personalizacija i angažman" : "Personalization and Engagement",
    description: language === "bs" 
      ? "Avatari se mogu prilagoditi vašem brendu, govoru, tonu i emocijama, stvarajući jedinstveno iskustvo za svakog korisnika." 
      : "Avatars can be customized to your brand, speech, tone, and emotions, creating a unique experience for each user.",
  },
  {
    title: language === "bs" ? "Povećajte prodaju i zadovoljstvo" : "Increase Sales and Satisfaction",
    description: language === "bs" 
      ? "Preporuke proizvoda, personalizirane ponude i pomoć u stvarnom vremenu putem avatara mogu poboljšati korisničko iskustvo i povećati konverzije." 
      : "Product recommendations, personalized offers, and real-time assistance through avatars can improve user experience and increase conversions.",
  },
];

const getFunctionalities = (language: string) => [
  {
    icon: MessageSquare,
    title: language === "bs" ? "Interakcija glasom i gestama" : "Voice and Gesture Interaction",
    description: language === "bs" 
      ? "Avatari prepoznaju glasovne komande i gestikulaciju, stvarajući potpuno interaktivno okruženje." 
      : "Avatars recognize voice commands and gestures, creating a fully interactive environment.",
  },
  {
    icon: Palette,
    title: language === "bs" ? "Prilagodba brendu" : "Brand Customization",
    description: language === "bs" 
      ? "Kreirajte avatara u skladu s identitetom vašeg brenda, što omogućuje jaču personalizaciju." 
      : "Create an avatar in line with your brand identity, enabling stronger personalization.",
  },
  {
    icon: ShoppingBag,
    title: language === "bs" ? "Prikaz informacija" : "Information Display",
    description: language === "bs" 
      ? "Avatari mogu poslužiti kao prodajni asistenti, pružajući korisnicima informacije o proizvodima, cijenama, dostupnosti i promocijama." 
      : "Avatars can serve as sales assistants, providing users with information about products, prices, availability, and promotions.",
  },
];

const getAdvantages = (language: string) => [
  {
    icon: Cpu,
    title: language === "bs" ? "Inovativna tehnologija" : "Innovative Technology",
    description: language === "bs" 
      ? "Umjetnička inteligencija koja omogućuje prirodnu, realističnu interakciju." 
      : "Artificial intelligence that enables natural, realistic interaction.",
  },
  {
    icon: Users,
    title: language === "bs" ? "Angažman korisnika" : "User Engagement",
    description: language === "bs" 
      ? "Interakcija na novim, uzbudljivim načinima poboljšava povratne informacije i lojalnost kupaca." 
      : "Interaction in new, exciting ways improves feedback and customer loyalty.",
  },
  {
    icon: Sparkles,
    title: language === "bs" ? "Fleksibilnost" : "Flexibility",
    description: language === "bs" 
      ? "AI avatari mogu biti implementirani u raznim industrijama — od maloprodaje do hotela i restorana." 
      : "AI avatars can be implemented in various industries — from retail to hotels and restaurants.",
  },
  {
    icon: Zap,
    title: language === "bs" ? "Povećanje efikasnosti" : "Increased Efficiency",
    description: language === "bs" 
      ? "Smanjuje potrebu za ljudskim osobljem u repetitivnim zadacima, čineći procese bržim i preciznijim." 
      : "Reduces the need for human staff in repetitive tasks, making processes faster and more precise.",
  },
];

export default function EliteDisplayPage() {
  const { language } = useLanguage();
  
  const whyAIAvatar = getWhyAIAvatar(language);
  const functionalities = getFunctionalities(language);
  const advantages = getAdvantages(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" data-gsap="parallax" />
        <div className="absolute top-1/4 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-36 md:w-[300px] h-36 md:h-[300px] bg-primary-500/15 rounded-full blur-[60px] md:blur-[100px]" />

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
              <span className="text-gradient -ml-4 md:-ml-10">Elite Display</span>
            </h1>
            <p className="text-sm md:text-lg text-foreground-muted mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto" data-gsap="hero-desc">
              {language === "bs" 
                ? "Saraya AI Avatar Display predstavlja najnoviju tehnologiju u digitalnoj interakciji. Uz naprednu umjetničku inteligenciju i realistične (3D/2D, custom) avatare, ovi displeji omogućuju potpuno personalizirano korisničko iskustvo koje je intuitivno, angažirajuće i efikasno. Idealni su za trgovine, lounge zone, evente i javne prostore."
                : "Saraya AI Avatar Display represents the latest technology in digital interaction. With advanced artificial intelligence and realistic (3D/2D, custom) avatars, these displays enable a fully personalized user experience that is intuitive, engaging, and efficient. They are ideal for stores, lounge areas, events, and public spaces."}
            </p>
            <div data-gsap="hero-buttons" className="flex justify-center">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Saznajte više" : "Learn more"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Avatar Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Zašto " : "Why "}
              <span className="text-gradient">{language === "bs" ? "AI Avatar Display?" : "AI Avatar Display?"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-gsap="cards-grid">
            {whyAIAvatar.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-primary-500/10 border border-cyan-500/20"
                data-gsap="card"
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-foreground-muted text-center max-w-3xl mx-auto mt-12" data-gsap="fade-in">
            {language === "bs" 
              ? "Za ozbiljnije upite ili složenije zahtjeve, chatbot može preusmjeriti korisnika na ljudsku podršku, čime se optimizira radni proces i smanjuje opterećenje ljudskih agenata."
              : "For more serious inquiries or complex requests, the chatbot can redirect the user to human support, optimizing the workflow and reducing the load on human agents."}
          </p>
        </div>
      </section>

      {/* Functionalities Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">{language === "bs" ? "Funkcionalnosti" : "Functionalities"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-gsap="cards-grid">
            {functionalities.map((func) => (
              <Card key={func.title} glow="purple" data-gsap="card">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <func.icon className="text-cyan-400" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{func.title}</h3>
                  <p className="text-foreground-muted">{func.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-gsap="section-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "bs" ? "Prednosti Saraya " : "Advantages of Saraya "}
              <span className="text-gradient">{language === "bs" ? "AI Avatar display-a" : "AI Avatar display"}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" data-gsap="cards-grid">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="p-6 rounded-2xl bg-background-card border border-cyan-500/10 text-center hover:border-cyan-500/30 transition-all"
                data-gsap="card"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <adv.icon className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                <p className="text-foreground-muted text-sm">{adv.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center" data-gsap="fade-in">
            <Button variant="outline" size="lg">
              <Play className="mr-2" size={18} />
              {language === "bs" ? "Pogledajte video" : "Watch video"}
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-primary-500/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-gsap="cta">
            <Bot className="text-cyan-400 mx-auto mb-6" size={60} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "bs" ? "Nova dimenzija " : "A new dimension of "}
              <span className="text-gradient">{language === "bs" ? "korisničkog iskustva" : "user experience"}</span>
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              {language === "bs" 
                ? "Saraya AI Avatar Display otvara vrata za inovacije koje vašem poslovanju omogućuju da se istakne na tržištu, pružajući korisnicima nezaboravno i interaktivno iskustvo. Uživajte u novoj dimenziji povećanja prodaje, poboljšanja angažmana korisnika i povećanja efikasnosti!"
                : "Saraya AI Avatar Display opens the door to innovations that allow your business to stand out in the market, providing users with an unforgettable and interactive experience. Enjoy a new dimension of increased sales, improved user engagement, and increased efficiency!"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Zatražite demo" : "Request demo"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                {language === "bs" ? "Kontaktirajte nas" : "Contact us"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Badge */}
      <section className="py-12 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8" data-gsap="tags">
            <div className="flex items-center gap-3" data-gsap="tag">
              <Globe className="text-cyan-400" size={24} />
              <span className="text-white font-medium">
                {language === "bs" ? "Komunicira na 99+ jezika" : "Communicates in 99+ languages"}
              </span>
            </div>
            <div className="flex items-center gap-3" data-gsap="tag">
              <Brain className="text-primary-400" size={24} />
              <span className="text-white font-medium">
                {language === "bs" ? "Napredni AI modeli" : "Advanced AI models"}
              </span>
            </div>
            <div className="flex items-center gap-3" data-gsap="tag">
              <Sparkles className="text-accent-green" size={24} />
              <span className="text-white font-medium">
                {language === "bs" ? "Custom 2D/3D avatari" : "Custom 2D/3D avatars"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
