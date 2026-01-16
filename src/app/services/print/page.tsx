"use client";

import { 
  Printer, Image, ArrowRight, Check, 
  BookOpen, CreditCard, Package, Sparkles, Clock, Truck, Leaf, Palette
} from "lucide-react";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import { useLanguage } from "@/lib/i18n";

const getProductCategories = (language: string) => [
  {
    title: language === "bs" ? "Poslovni Materijali" : "Business Materials",
    icon: CreditCard,
    products: language === "bs" 
      ? ["Vizitke", "Memorandumi", "Kuverte", "Fascikle", "Blokovi"]
      : ["Business cards", "Letterheads", "Envelopes", "Folders", "Notepads"],
    color: "purple"
  },
  {
    title: language === "bs" ? "Marketing" : "Marketing",
    icon: BookOpen,
    products: language === "bs"
      ? ["Brošure", "Katalozi", "Letci", "Posteri", "Roll-up"]
      : ["Brochures", "Catalogs", "Flyers", "Posters", "Roll-up"],
    color: "green"
  },
  {
    title: language === "bs" ? "Veliki Formati" : "Large Formats",
    icon: Image,
    products: language === "bs"
      ? ["Billboardi", "Banneri", "Naljepnice", "Cerada", "Citylight"]
      : ["Billboards", "Banners", "Stickers", "Tarpaulin", "Citylight"],
    color: "cyan"
  },
  {
    title: language === "bs" ? "Ambalaža" : "Packaging",
    icon: Package,
    products: language === "bs"
      ? ["Kutije", "Vrećice", "Etikete", "Trake", "Gift box"]
      : ["Boxes", "Bags", "Labels", "Ribbons", "Gift box"],
    color: "pink"
  },
];

const getPricingTiers = (language: string) => [
  {
    name: language === "bs" ? "Starter" : "Starter",
    description: language === "bs" ? "Za male narudžbe" : "For small orders",
    features: language === "bs" 
      ? ["1-100 komada", "Standardni materijali", "5-7 dana isporuka", "Email podrška"]
      : ["1-100 pieces", "Standard materials", "5-7 days delivery", "Email support"],
    highlight: false
  },
  {
    name: "Business",
    description: language === "bs" ? "Za redovne potrebe" : "For regular needs",
    features: language === "bs"
      ? ["100-1000 komada", "Premium materijali", "3-5 dana isporuka", "Prioritetna podrška", "Besplatan dizajn"]
      : ["100-1000 pieces", "Premium materials", "3-5 days delivery", "Priority support", "Free design"],
    highlight: true
  },
  {
    name: "Enterprise",
    description: language === "bs" ? "Za velike projekte" : "For large projects",
    features: language === "bs"
      ? ["1000+ komada", "Svi materijali", "Express isporuka", "Dedicirani menadžer", "Besplatan dizajn", "Popusti na količinu"]
      : ["1000+ pieces", "All materials", "Express delivery", "Dedicated manager", "Free design", "Volume discounts"],
    highlight: false
  },
];

const getFinishes = (language: string) => [
  { name: language === "bs" ? "Mat laminacija" : "Matte lamination", icon: Sparkles },
  { name: language === "bs" ? "Sjaj laminacija" : "Gloss lamination", icon: Sparkles },
  { name: "UV lak", icon: Sparkles },
  { name: language === "bs" ? "Foliotisak" : "Foil stamping", icon: Sparkles },
  { name: language === "bs" ? "Reljefni tisak" : "Embossing", icon: Sparkles },
  { name: language === "bs" ? "Soft touch" : "Soft touch", icon: Sparkles },
];

const getProcess = (language: string) => [
  { step: "1", title: language === "bs" ? "Upit" : "Inquiry", desc: language === "bs" ? "Pošaljite nam specifikacije" : "Send us specifications" },
  { step: "2", title: language === "bs" ? "Ponuda" : "Quote", desc: language === "bs" ? "Dobijete ponudu u 24h" : "Get quote in 24h" },
  { step: "3", title: language === "bs" ? "Dizajn" : "Design", desc: language === "bs" ? "Kreiramo ili prilagodimo" : "We create or adapt" },
  { step: "4", title: language === "bs" ? "Print" : "Print", desc: language === "bs" ? "Proizvodnja i kontrola" : "Production and QC" },
  { step: "5", title: language === "bs" ? "Dostava" : "Delivery", desc: language === "bs" ? "Isporuka na adresu" : "Delivery to address" },
];

export default function PrintPage() {
  const { language } = useLanguage();
  const productCategories = getProductCategories(language);
  const pricingTiers = getPricingTiers(language);
  const finishes = getFinishes(language);
  const process = getProcess(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section - Centered with Visual */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-accent-green/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div data-gsap="hero-title" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/20 border border-accent-green/30 mb-4">
              <Printer className="text-accent-green" size={14} />
              <span className="text-accent-green text-xs font-medium">{language === "bs" ? "Profesionalni print" : "Professional printing"}</span>
            </div>
            
            <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Print <span className="text-gradient">{language === "bs" ? "usluge" : "services"}</span>
            </h1>

            <p data-gsap="hero-desc" className="text-sm md:text-base lg:text-lg text-foreground-muted mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              {language === "bs" 
                ? "Od vizitke do billboarda — printamo sve što vam treba za profesionalnu prezentaciju. Kvalitetni materijali, precizan tisak, brza isporuka."
                : "From business cards to billboards — we print everything you need for professional presentation. Quality materials, precise printing, fast delivery."}
            </p>

            <div data-gsap="hero-buttons" className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
              <Button variant="primary" size="lg">{language === "bs" ? "Zatražite ponudu" : "Request quote"}<ArrowRight className="ml-2" size={20} /></Button>
              <Button variant="outline" size="lg">{language === "bs" ? "Pogledajte katalog" : "View catalog"}</Button>
            </div>

            {/* Quick Benefits */}
            <div data-gsap="hero-desc" className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { icon: Clock, text: language === "bs" ? "Brza isporuka" : "Fast delivery" },
                { icon: Leaf, text: language === "bs" ? "Eko opcije" : "Eco options" },
                { icon: Palette, text: language === "bs" ? "Dizajn uključen" : "Design included" },
                { icon: Truck, text: language === "bs" ? "Dostava BiH" : "Delivery BiH" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="text-accent-green" size={16} />
                  <span className="text-foreground-muted text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Visual Grid */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Što" : "What we"} <span className="text-gradient">{language === "bs" ? "printamo" : "print"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <div
                key={category.title}
                data-gsap="card"
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  category.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/20 hover:border-primary-500/40"
                  : category.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-transparent border-accent-green/20 hover:border-accent-green/40"
                  : category.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40"
                  : "bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20 hover:border-pink-500/40"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  category.color === "purple" ? "bg-primary-500/20"
                  : category.color === "green" ? "bg-accent-green/20"
                  : category.color === "cyan" ? "bg-cyan-500/20"
                  : "bg-pink-500/20"
                }`}>
                  <category.icon className={
                    category.color === "purple" ? "text-primary-400"
                    : category.color === "green" ? "text-accent-green"
                    : category.color === "cyan" ? "text-cyan-400"
                    : "text-pink-400"
                  } size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
                <ul className="space-y-1">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-foreground-muted text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground-muted" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process - Horizontal Steps */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Kako" : "How to"} <span className="text-gradient">{language === "bs" ? "naručiti" : "order"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="flex flex-wrap justify-center gap-4 md:gap-2">
            {process.map((item, index) => (
              <div key={item.step} data-gsap="card" className="flex items-center">
                <div className="text-center px-4 md:px-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-green to-cyan-500 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-foreground-muted text-xs">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-accent-green/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Paketi" : "Packages"} <span className="text-gradient">{language === "bs" ? "usluga" : "available"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Odaberite paket koji odgovara vašim potrebama" : "Choose the package that suits your needs"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                data-gsap="card"
                className={`p-6 md:p-8 rounded-2xl border transition-all ${
                  tier.highlight 
                    ? "bg-gradient-to-br from-accent-green/20 to-cyan-500/10 border-accent-green/40 scale-105" 
                    : "bg-background-card border-primary-500/20"
                }`}
              >
                {tier.highlight && (
                  <div className="text-xs text-accent-green font-medium mb-2">{language === "bs" ? "Najpopularniji" : "Most popular"}</div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-foreground-muted text-sm mb-4">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className={tier.highlight ? "text-accent-green" : "text-primary-400"} size={14} />
                      <span className="text-foreground-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={tier.highlight ? "primary" : "outline"} className="w-full">
                  {language === "bs" ? "Zatražite ponudu" : "Request quote"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {language === "bs" ? "Završne" : "Finishing"} <span className="text-gradient">{language === "bs" ? "obrade" : "options"}</span>
            </h2>
          </div>

          <div data-gsap="tags" className="flex flex-wrap justify-center gap-3">
            {finishes.map((finish) => (
              <div
                key={finish.name}
                data-gsap="tag"
                className="px-4 py-2 rounded-full bg-background-card border border-accent-green/20 text-white text-sm font-medium hover:border-accent-green/50 hover:bg-accent-green/10 transition-all cursor-default flex items-center gap-2"
              >
                <finish.icon className="text-accent-green" size={14} />
                {finish.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-green/10 via-transparent to-cyan-500/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="cta" className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-green to-cyan-500 flex items-center justify-center mx-auto mb-6">
              <Printer className="text-white" size={32} />
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Trebate" : "Need"} <span className="text-gradient">print</span>?
            </h2>
            <p className="text-foreground-muted text-sm md:text-base mb-6 md:mb-8">
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
