"use client";

import { 
  Printer, Image, ArrowRight, Check, 
  BookOpen, CreditCard, Package
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import { useLanguage } from "@/lib/i18n";

const getPrintServices = (language: string) => [
  { title: language === "bs" ? "Poslovni Materijali" : "Business Materials", description: language === "bs" ? "Vizitke, memorandumi i kuverte koje ostavljaju profesionalan prvi dojam na svakom sastanku." : "Business cards, letterheads and envelopes that leave a professional first impression at every meeting.", icon: CreditCard, color: "purple" },
  { title: language === "bs" ? "Marketinški Materijali" : "Marketing Materials", description: language === "bs" ? "Brošure, katalozi i letci koji efikasno komuniciraju vašu ponudu i vrijednosti." : "Brochures, catalogs and flyers that effectively communicate your offer and values.", icon: BookOpen, color: "green" },
  { title: language === "bs" ? "Veliki Formati" : "Large Formats", description: language === "bs" ? "Posteri, roll-up banneri i billboardi za maksimalnu vidljivost na eventima i u prostorima." : "Posters, roll-up banners and billboards for maximum visibility at events and spaces.", icon: Image, color: "cyan" },
  { title: language === "bs" ? "Brendirana Ambalaža" : "Branded Packaging", description: language === "bs" ? "Kutije, vrećice i pakiranje koje pretvara svaki proizvod u iskustvo otvaranja." : "Boxes, bags and packaging that turns every product into an unboxing experience.", icon: Package, color: "purple" },
];

const getFeatures = (language: string) => [
  language === "bs" ? "Premium materijali i završne obrade" : "Premium materials and finishes",
  language === "bs" ? "Profesionalni dizajn uključen" : "Professional design included",
  language === "bs" ? "Brza isporuka — i hitne narudžbe" : "Fast delivery — including rush orders",
  language === "bs" ? "Konkurentne cijene za sve naklade" : "Competitive prices for all quantities",
  language === "bs" ? "Od 1 komada do velikih serija" : "From 1 piece to large runs",
  language === "bs" ? "Ekološki prihvatljive opcije" : "Eco-friendly options",
  language === "bs" ? "Potpuna personalizacija" : "Full personalization",
  language === "bs" ? "Dorada: laminacija, UV lak, foliotisak" : "Finishing: lamination, UV coating, foil stamping",
];

const getProducts = (language: string) => language === "bs" 
  ? ["Vizitke", "Letci", "Brošure", "Katalozi", "Posteri", "Roll-up banneri", "Naljepnice", "Memorandumi", "Kuverte", "Kalendari", "Blokovi", "Mape", "Ambalaža", "Majice"]
  : ["Business cards", "Flyers", "Brochures", "Catalogs", "Posters", "Roll-up banners", "Stickers", "Letterheads", "Envelopes", "Calendars", "Notepads", "Folders", "Packaging", "T-shirts"];

export default function PrintPage() {
  const { language } = useLanguage();
  const printServices = getPrintServices(language);
  const features = getFeatures(language);
  const products = getProducts(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              Print <span className="text-gradient">{language === "bs" ? "Usluge" : "Services"}</span>
            </h1>

            <p data-gsap="hero-desc" className="text-sm md:text-lg lg:text-xl text-foreground-muted mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              {language === "bs" 
                ? "Od vizitke do billboarda — printamo sve što vam treba za profesionalnu prezentaciju. Kvalitetni materijali, precizan tisak, brza isporuka."
                : "From business cards to billboards — we print everything you need for professional presentation. Quality materials, precise printing, fast delivery."}
            </p>

            <div data-gsap="hero-buttons" className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Zatražite ponudu" : "Request quote"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                {language === "bs" ? "Pogledajte katalog" : "View catalog"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section data-gsap="benefits-bar" className="py-6 md:py-10 bg-accent-green/10 border-y border-accent-green/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {(language === "bs" ? ["Visoka kvaliteta", "Brza isporuka", "Konkurentne cijene", "Eko materijali", "Dizajn uključen"] : ["High quality", "Fast delivery", "Competitive prices", "Eco materials", "Design included"]).map((benefit, index) => (
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

      {/* Services Grid */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Naše" : "Our"} <span className="text-gradient">{language === "bs" ? "usluge" : "services"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
              {language === "bs" 
                ? "Pružamo širok spektar print usluga za sve vaše poslovne potrebe."
                : "We provide a wide range of print services for all your business needs."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {printServices.map((service) => (
              <Card key={service.title} glow={service.color === "purple" ? "purple" : "green"}>
                <div data-gsap="card">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
                    service.color === "purple" ? "bg-primary-500/20" 
                    : service.color === "green" ? "bg-accent-green/20" 
                    : "bg-cyan-500/20"
                  }`}>
                    <service.icon className={
                      service.color === "purple" ? "text-primary-400" 
                      : service.color === "green" ? "text-accent-green" 
                      : "text-cyan-400"
                    } size={20} />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-foreground-muted text-xs md:text-base">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Što" : "What we"} <span className="text-gradient">{language === "bs" ? "printamo" : "print"}</span>
            </h2>
          </div>

          <div data-gsap="tags" className="flex flex-wrap justify-center gap-2 md:gap-3">
            {products.map((product) => (
              <span
                key={product}
                data-gsap="tag"
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background-card border border-primary-500/20 text-foreground-muted text-xs md:text-sm hover:border-primary-500/50 transition-colors cursor-default"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div data-gsap="content-left">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
                {language === "bs" ? "Zašto" : "Why"} <span className="text-gradient">Saraya Print</span>?
              </h2>
              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-8 leading-relaxed">
                {language === "bs" 
                  ? "Kombiniramo kvalitetne materijale, modernu tehnologiju i stručnost kako bismo isporučili print materijale koji nadmašuju očekivanja."
                  : "We combine quality materials, modern technology and expertise to deliver print materials that exceed expectations."}
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
                <Printer className="text-primary-400/30" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="cta" className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Trebate" : "Need"} <span className="text-gradient">print</span>?
            </h2>
            <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto mb-6 md:mb-8">
              {language === "bs" 
                ? "Kontaktirajte nas za besplatnu ponudu. Naš tim je spreman pomoći vam s vašim print projektima."
                : "Contact us for a free quote. Our team is ready to help you with your print projects."}
            </p>
            <Button variant="primary" size="lg">
              {language === "bs" ? "Zatražite ponudu" : "Request quote"}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
