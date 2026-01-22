import { useLanguage } from "@/lib/i18n";

export default function ReferencesHero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        data-gsap="parallax"
        className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[120px]"
      />
      <div
        data-gsap="parallax"
        className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            data-gsap="hero-title"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6"
          >
            {language === "bs"
              ? "Svi veliki projekti počinju s jednom"
              : "All great projects start with one"}{" "}
            <span className="text-gradient">
              {language === "bs" ? "malom idejom" : "small idea"}
            </span>
            .
          </h1>
          <p
            data-gsap="hero-desc"
            className="text-sm md:text-lg lg:text-xl text-foreground-muted max-w-2xl leading-relaxed"
          >
            {t.references.heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
