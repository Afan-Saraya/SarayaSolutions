"use client";

import { 
  Gamepad2, Trophy, ArrowRight, Check, 
  Sparkles, Monitor
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import ProductHero from "@/components/sections/ProductHero";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { useLanguage } from "@/lib/i18n";

const getGameTypes = (language: string) => [
  { title: language === "bs" ? "Igre za Interaktivne Displeje" : "Games for Interactive Displays", description: language === "bs" ? "Angažirajuće igre dizajnirane za touchscreen displeje u trgovačkim centrima, bankama i javnim prostorima." : "Engaging games designed for touchscreen displays in shopping centers, banks and public spaces.", icon: Monitor, color: "purple" },
  { title: language === "bs" ? "Branded Kvizovi" : "Branded Quizzes", description: language === "bs" ? "Edukativni kvizovi koji informiraju o vašim proizvodima dok nagrađuju korisnike za sudjelovanje." : "Educational quizzes that inform about your products while rewarding users for participation.", icon: Trophy, color: "green" },
  { title: language === "bs" ? "Mobilne Igre" : "Mobile Games", description: language === "bs" ? "Casual igre koje promoviraju vaš brand i stvaraju dugoročnu povezanost s korisnicima." : "Casual games that promote your brand and create long-term connection with users.", icon: Gamepad2, color: "cyan" },
  { title: language === "bs" ? "AR/VR Iskustva" : "AR/VR Experiences", description: language === "bs" ? "Imerzivna iskustva koja koriste proširenu i virtualnu stvarnost za nezaboravne interakcije." : "Immersive experiences using augmented and virtual reality for unforgettable interactions.", icon: Sparkles, color: "purple" },
];

const getFeatures = (language: string) => [
  language === "bs" ? "Potpuna prilagodba vašem brendu" : "Full customization to your brand",
  language === "bs" ? "Gamifikacija korisničkog iskustva" : "Gamification of user experience",
  language === "bs" ? "Leaderboard i nagrade" : "Leaderboard and rewards",
  language === "bs" ? "Detaljna analitika igranja" : "Detailed gameplay analytics",
  language === "bs" ? "Multiplayer opcije" : "Multiplayer options",
  language === "bs" ? "Integracija s loyalty programima" : "Integration with loyalty programs",
  language === "bs" ? "Cross-platform podrška" : "Cross-platform support",
  language === "bs" ? "Redovno ažuriranje sadržaja" : "Regular content updates",
];

const getUseCases = (language: string) => [
  { title: language === "bs" ? "Trgovački Centri" : "Shopping Centers", description: language === "bs" ? "Privucite posjetitelje interaktivnim sadržajem koji ih zadržava duže." : "Attract visitors with interactive content that keeps them longer." },
  { title: language === "bs" ? "Eventi i Sajmovi" : "Events & Trade Shows", description: language === "bs" ? "Istaknite se na sajmovima s branded igrama koje privlače pažnju." : "Stand out at trade shows with branded games that attract attention." },
  { title: language === "bs" ? "Hoteli i Restorani" : "Hotels & Restaurants", description: language === "bs" ? "Zabavite goste dok čekaju i stvorite pozitivna iskustva." : "Entertain guests while they wait and create positive experiences." },
  { title: language === "bs" ? "Edukacija" : "Education", description: language === "bs" ? "Učinite učenje zabavnim kroz interaktivne edukativne igre." : "Make learning fun through interactive educational games." },
];

export default function GamesPage() {
  const { language } = useLanguage();
  const gameTypes = getGameTypes(language);
  const features = getFeatures(language);
  const useCases = getUseCases(language);

  return (
    <>
      <PageAnimations />
      
      <ProductHero
        logoSrc="/images/logos/saraya igre.png"
        logoAlt="Saraya Igre"
        titleGradient=""
        subtitle={language === "bs" ? "Gamifikacija koja angažira" : "Gamification that engages"}
        description={language === "bs" 
          ? "Pretvaramo pasivne posjetitelje u aktivne sudionike kroz igre koje zabavljaju, educiraju i grade lojalnost prema vašem brendu."
          : "We turn passive visitors into active participants through games that entertain, educate and build loyalty to your brand."}
        features={language === "bs" 
          ? ["Gamifikacija", "VR/AR iskustva", "Kvizovi i nagrade", "Brend engagement"] 
          : ["Gamification", "VR/AR experiences", "Quizzes & rewards", "Brand engagement"]}
        primaryButtonText={language === "bs" ? "Započnite projekt" : "Start project"}
        secondaryButtonText={language === "bs" ? "Pogledajte primjere" : "View examples"}
        customVisual={<DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />}
        glowColor1="bg-accent-pink/15"
        glowColor2="bg-primary-500/20"
      />

      {/* Game Types */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Vrste" : "Types of"} <span className="text-gradient">{language === "bs" ? "igara" : "games"}</span></h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">{language === "bs" ? "Razvijamo različite vrste igara prilagođene vašim ciljevima." : "We develop different types of games tailored to your goals."}</p>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {gameTypes.map((game) => (
              <Card key={game.title} glow={game.color === "purple" ? "purple" : "green"}>
                <div data-gsap="card">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
                    game.color === "purple" ? "bg-primary-500/20" : game.color === "green" ? "bg-accent-green/20" : "bg-cyan-500/20"
                  }`}>
                    <game.icon className={game.color === "purple" ? "text-primary-400" : game.color === "green" ? "text-accent-green" : "text-cyan-400"} size={20} />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">{game.title}</h3>
                  <p className="text-foreground-muted text-xs md:text-base">{game.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Gdje se" : "Where they are"} <span className="text-gradient">{language === "bs" ? "koriste" : "used"}</span></h2>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} data-gsap="card" className="p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/20 text-center">
                <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{useCase.title}</h3>
                <p className="text-foreground-muted text-xs md:text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-gsap="content-left">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">{language === "bs" ? "Funkcionalnosti" : "Features of"} <span className="text-gradient">{language === "bs" ? "igara" : "games"}</span></h2>
              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-8 leading-relaxed">
                {language === "bs" 
                  ? "Naše igre dolaze s naprednim funkcionalnostima za maksimalan angažman."
                  : "Our games come with advanced features for maximum engagement."}
              </p>

              <div data-gsap="list" className="grid grid-cols-1 gap-2 md:gap-4">
                {features.map((feature, index) => (
                  <div key={index} data-gsap="list-item" className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent-green" size={10} />
                    </div>
                    <span className="text-foreground-muted text-xs md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="content-right" className="relative hidden md:block">
              <div className="aspect-square rounded-2xl bg-background-card border border-primary-500/20 p-8 flex items-center justify-center">
                <Gamepad2 className="text-primary-400/30 animate-float" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="cta" className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{language === "bs" ? "Spremni za" : "Ready for the"} <span className="text-gradient">{language === "bs" ? "igru" : "game"}</span>?</h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto mb-6 md:mb-8">
              {language === "bs" 
                ? "Kontaktirajte nas i saznajte kako gamifikacija može unaprijediti vaše poslovanje."
                : "Contact us and find out how gamification can improve your business."}
            </p>
            <Button variant="primary" size="lg">{language === "bs" ? "Kontaktirajte nas" : "Contact us"}<ArrowRight className="ml-2" size={20} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
