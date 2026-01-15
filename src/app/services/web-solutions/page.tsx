"use client";

import { 
  Globe, Code, ArrowRight, Check,
  Clock, Heart, ShoppingCart, Sparkles,
  Layers, Palette, Shield, Smartphone, Search, BarChart3
} from "lucide-react";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { useLanguage } from "@/lib/i18n";

const getServices = (language: string) => [
  {
    title: language === "bs" ? "Korporativne Web Stranice" : "Corporate Websites",
    description: language === "bs" ? "Profesionalne web stranice koje predstavljaju vaš brand i grade povjerenje kod klijenata." : "Professional websites that represent your brand and build trust with clients.",
    icon: Globe,
    features: language === "bs" ? ["Responzivni dizajn", "SEO optimizacija", "CMS integracija"] : ["Responsive design", "SEO optimization", "CMS integration"],
    color: "purple",
  },
  {
    title: language === "bs" ? "Web Aplikacije" : "Web Applications",
    description: language === "bs" ? "Kompleksne web aplikacije koje automatiziraju procese i povećavaju produktivnost." : "Complex web applications that automate processes and increase productivity.",
    icon: Code,
    features: language === "bs" ? ["Custom funkcionalnosti", "API integracije", "Real-time podaci"] : ["Custom functionality", "API integrations", "Real-time data"],
    color: "cyan",
  },
  {
    title: language === "bs" ? "E-commerce Platforme" : "E-commerce Platforms",
    description: language === "bs" ? "Online trgovine optimizirane za konverziju koje pretvaraju posjetitelje u kupce." : "Online stores optimized for conversion that turn visitors into customers.",
    icon: ShoppingCart,
    features: language === "bs" ? ["Sigurna plaćanja", "Upravljanje zalihama", "Analitika prodaje"] : ["Secure payments", "Inventory management", "Sales analytics"],
    color: "green",
  },
  {
    title: "UI/UX Dizajn",
    description: language === "bs" ? "Korisnički orijentirani dizajn koji stvara intuitivna i ugodna digitalna iskustva." : "User-oriented design that creates intuitive and pleasant digital experiences.",
    icon: Palette,
    features: language === "bs" ? ["User research", "Wireframing", "Prototipiranje"] : ["User research", "Wireframing", "Prototyping"],
    color: "pink",
  },
];

const getProcess = (language: string) => [
  { step: "01", title: language === "bs" ? "Konzultacije" : "Consultation", description: language === "bs" ? "Razumijevamo vaše ciljeve i izazove" : "Understanding your goals and challenges" },
  { step: "02", title: language === "bs" ? "Strategija" : "Strategy", description: language === "bs" ? "Definiramo optimalno rješenje" : "Defining the optimal solution" },
  { step: "03", title: language === "bs" ? "Dizajn" : "Design", description: language === "bs" ? "Kreiramo vizualni identitet" : "Creating visual identity" },
  { step: "04", title: language === "bs" ? "Razvoj" : "Development", description: language === "bs" ? "Implementiramo s najnovijim tehnologijama" : "Implementing with latest technologies" },
];

const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Tailwind CSS"
];

export default function WebSolutionsPage() {
  const { language } = useLanguage();
  const services = getServices(language);
  const process = getProcess(language);

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Device Mockup */}
            <div data-gsap="hero-title" className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <DeviceMockup iframeUrl="https://pametnoodabrano.com/" />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                {language === "bs" ? "Web rješenja koja" : "Web solutions that"} <span className="text-gradient">{language === "bs" ? "donose rezultate" : "deliver results"}</span>
              </h1>

              <p data-gsap="hero-desc" className="text-sm md:text-base lg:text-lg text-foreground-muted mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {language === "bs" 
                  ? "Gradimo web stranice i aplikacije koje ne samo da izgledaju odlično, već aktivno doprinose rastu vašeg poslovanja."
                  : "We build websites and applications that not only look great, but actively contribute to the growth of your business."}
              </p>

              {/* Feature highlights */}
              <div data-gsap="hero-desc" className="grid grid-cols-2 gap-3 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
                {(language === "bs" ? ["Responzivni dizajn", "SEO optimizacija", "Brzo učitavanje", "Sigurnost"] : ["Responsive design", "SEO optimization", "Fast loading", "Security"]).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-primary-400" size={12} />
                    </div>
                    <span className="text-foreground-muted text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div data-gsap="hero-buttons" className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <Button variant="primary" size="lg">{language === "bs" ? "Započnite projekt" : "Start project"}<ArrowRight className="ml-2" size={20} /></Button>
                <Button variant="outline" size="lg">{language === "bs" ? "Pogledajte primjere" : "View examples"}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section data-gsap="benefits-bar" className="py-6 md:py-10 bg-primary-500/10 border-y border-primary-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {(language === "bs" ? ["Responzivni dizajn", "SEO optimizacija", "Brzo učitavanje", "Sigurnost", "Podrška 24/7"] : ["Responsive design", "SEO optimization", "Fast loading", "Security", "24/7 Support"]).map((benefit, index) => (
              <div key={index} data-gsap="benefits-item" className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground-muted text-xs md:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Naše" : "Our"} <span className="text-gradient">{language === "bs" ? "usluge" : "services"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Pružamo kompletna web rješenja od dizajna do implementacije" : "We provide complete web solutions from design to implementation"}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                data-gsap="card"
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  service.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/20 hover:border-primary-500/40"
                  : service.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40"
                  : service.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-transparent border-accent-green/20 hover:border-accent-green/40"
                  : "bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20 hover:border-pink-500/40"
                }`}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 ${
                  service.color === "purple" ? "bg-primary-500/20"
                  : service.color === "cyan" ? "bg-cyan-500/20"
                  : service.color === "green" ? "bg-accent-green/20"
                  : "bg-pink-500/20"
                }`}>
                  <service.icon className={
                    service.color === "purple" ? "text-primary-400"
                    : service.color === "cyan" ? "text-cyan-400"
                    : service.color === "green" ? "text-accent-green"
                    : "text-pink-400"
                  } size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-foreground-muted text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-foreground-muted text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 left-0 w-64 md:w-[400px] h-64 md:h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Naš" : "Our"} <span className="text-gradient">{language === "bs" ? "proces" : "process"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {process.map((item, index) => (
              <div key={item.step} data-gsap="card" className="relative">
                <div className="p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/10 text-center h-full">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-foreground-muted text-xs md:text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Tehnologije koje" : "Technologies we"} <span className="text-gradient">{language === "bs" ? "koristimo" : "use"}</span>
            </h2>
          </div>

          <div data-gsap="tags" className="flex flex-wrap justify-center gap-3 md:gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                data-gsap="tag"
                className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-background-card border border-primary-500/20 text-white text-sm md:text-base font-medium hover:border-primary-500/50 hover:bg-primary-500/10 transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div data-gsap="content-left">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                {language === "bs" ? "Zašto odabrati" : "Why choose"} <span className="text-gradient">Saraya</span>?
              </h2>
              <p className="text-foreground-muted text-sm md:text-base mb-6 leading-relaxed">
                {language === "bs" 
                  ? "Kombiniramo kreativnost s tehničkom ekspertizom kako bismo isporučili web rješenja koja nadmašuju očekivanja."
                  : "We combine creativity with technical expertise to deliver web solutions that exceed expectations."}
              </p>

              <div data-gsap="list" className="space-y-4">
                {[
                  { icon: Shield, text: language === "bs" ? "Sigurnost na prvom mjestu" : "Security first" },
                  { icon: Smartphone, text: language === "bs" ? "Mobile-first pristup" : "Mobile-first approach" },
                  { icon: Search, text: language === "bs" ? "SEO optimizacija uključena" : "SEO optimization included" },
                  { icon: BarChart3, text: language === "bs" ? "Analitika i izvještaji" : "Analytics and reports" },
                  { icon: Clock, text: language === "bs" ? "Brza isporuka projekata" : "Fast project delivery" },
                  { icon: Heart, text: language === "bs" ? "Podrška nakon lansiranja" : "Post-launch support" },
                ].map((item, index) => (
                  <div key={index} data-gsap="list-item" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary-400" size={18} />
                    </div>
                    <span className="text-white text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-gsap="content-right" className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-500/20 via-background-card to-pink-500/20 border border-primary-500/20 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="aspect-square rounded-2xl bg-primary-500/20 flex items-center justify-center">
                    <Globe className="text-primary-400" size={40} />
                  </div>
                  <div className="aspect-square rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <Code className="text-cyan-400" size={40} />
                  </div>
                  <div className="aspect-square rounded-2xl bg-accent-green/20 flex items-center justify-center">
                    <Layers className="text-accent-green" size={40} />
                  </div>
                  <div className="aspect-square rounded-2xl bg-pink-500/20 flex items-center justify-center">
                    <Sparkles className="text-pink-400" size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-pink-500/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="cta" className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
              {language === "bs" ? "Spremni za" : "Ready for"} <span className="text-gradient">{language === "bs" ? "digitalni uspjeh" : "digital success"}</span>?
            </h2>
            <p className="text-foreground-muted text-sm md:text-base mb-6 md:mb-8">
              {language === "bs" 
                ? "Kontaktirajte nas danas i saznajte kako naša web rješenja mogu transformirati vaše poslovanje."
                : "Contact us today and find out how our web solutions can transform your business."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                {language === "bs" ? "Započnite projekt" : "Start project"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                {language === "bs" ? "Kontaktirajte nas" : "Contact us"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
