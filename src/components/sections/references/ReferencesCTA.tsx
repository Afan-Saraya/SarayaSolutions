import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n";

export default function ReferencesCTA() {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-accent-green/10 to-background" />
      <div
        data-gsap="parallax"
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]"
      />
      <div
        data-gsap="parallax"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px]"
      />

      <div data-gsap="cta" className="relative z-10">
          <div className="p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary-500/20 via-accent-green/10 to-background-card border-2 border-primary-500/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent-green/30 to-primary-500/30 border border-accent-green/40 mb-6">
                <Sparkles className="text-accent-green" size={32} />
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                {language === "bs" ? "Budite naša sljedeća" : "Be our next"}{" "}
                <span className="text-gradient">
                  {language === "bs" ? "uspješna priča" : "success story"}
                </span>
              </h2>
              <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                {language === "bs"
                  ? "Kontaktirajte nas i saznajte kako možemo pomoći vašem poslovanju da raste i uspijeva."
                  : "Contact us and find out how we can help your business grow and succeed."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="primary" size="lg" className="group">
                  {t.nav.contactUs}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
                <Button variant="outline" size="lg">
                  {language === "bs" ? "Pogledajte portfolio" : "View portfolio"}
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-green mb-1">50+</div>
                <div className="text-foreground-muted text-xs md:text-sm">
                  {language === "bs" ? "Projekata" : "Projects"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">100%</div>
                <div className="text-foreground-muted text-xs md:text-sm">
                  {language === "bs" ? "Zadovoljstvo" : "Satisfaction"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                <div className="text-foreground-muted text-xs md:text-sm">
                  {language === "bs" ? "Podrška" : "Support"}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
