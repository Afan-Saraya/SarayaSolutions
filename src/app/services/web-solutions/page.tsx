"use client";

import { 
  Globe, Code, ExternalLink, ArrowRight,
  Clock, Heart, ShoppingCart, Star,
  Palette, Shield, Smartphone, Search, BarChart3, Quote
} from "lucide-react";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import ProductHero from "@/components/sections/ProductHero";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { useLanguage } from "@/lib/i18n";

const getServices = (language: string) => [
  {
    title: language === "bs" ? "Korporativne Web Stranice" : "Corporate Websites",
    description: language === "bs" ? "Profesionalne web stranice koje predstavljaju vaš brand." : "Professional websites that represent your brand.",
    icon: Globe,
    color: "purple",
  },
  {
    title: language === "bs" ? "Web Aplikacije" : "Web Applications",
    description: language === "bs" ? "Kompleksne aplikacije koje automatiziraju procese." : "Complex applications that automate processes.",
    icon: Code,
    color: "cyan",
  },
  {
    title: language === "bs" ? "E-commerce Platforme" : "E-commerce Platforms",
    description: language === "bs" ? "Online trgovine optimizirane za konverziju." : "Online stores optimized for conversion.",
    icon: ShoppingCart,
    color: "green",
  },
  {
    title: "UI/UX Dizajn",
    description: language === "bs" ? "Korisnički orijentirani dizajn za digitalna iskustva." : "User-oriented design for digital experiences.",
    icon: Palette,
    color: "pink",
  },
];

const getPortfolio = (language: string) => [
  {
    title: "Pametno Odabrano",
    category: "E-commerce",
    url: "https://pametnoodabrano.com/",
    description: language === "bs" ? "Moderna e-commerce platforma za pametnu kupovinu" : "Modern e-commerce platform for smart shopping",
    stats: language === "bs" ? "+150% konverzija" : "+150% conversion",
  },
  {
    title: "Saraya Hotspot",
    category: language === "bs" ? "Web Aplikacija" : "Web App",
    url: "https://hs.sarayasolutions.com/",
    description: language === "bs" ? "Captive portal sistem za WiFi mreže" : "Captive portal system for WiFi networks",
    stats: language === "bs" ? "20K+ korisnika" : "20K+ users",
  },
  {
    title: "BH Telecom Portal",
    category: language === "bs" ? "Korporativna Stranica" : "Corporate Site",
    url: "#",
    description: language === "bs" ? "Korporativni portal za telekom kompaniju" : "Corporate portal for telecom company",
    stats: language === "bs" ? "500K+ posjeta" : "500K+ visits",
  },
];

const getTestimonials = (language: string) => [
  {
    quote: language === "bs" 
      ? "Saraya tim je isporučio web stranicu koja je premašila sva naša očekivanja. Profesionalni, brzi i kreativni."
      : "Saraya team delivered a website that exceeded all our expectations. Professional, fast and creative.",
    author: "Amir H.",
    company: "Pametno Odabrano",
    rating: 5,
  },
  {
    quote: language === "bs"
      ? "Naša nova web aplikacija je transformirala način na koji radimo. Preporučujem svima!"
      : "Our new web application has transformed the way we work. I recommend it to everyone!",
    author: "Selma K.",
    company: "BH Telecom",
    rating: 5,
  },
];

const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Tailwind CSS"
];

export default function WebSolutionsPage() {
  const { language } = useLanguage();
  const services = getServices(language);
  const portfolio = getPortfolio(language);
  const testimonials = getTestimonials(language);

  return (
    <>
      <PageAnimations />

      <ProductHero
        logoSrc="/images/logos/saraya web rijesenja.png"
        logoAlt="Saraya Web Rješenja"
        titleGradient=""
        subtitle={language === "bs" 
          ? "Web rješenja koja donose rezultate"
          : "Web solutions that deliver results"}
        description={language === "bs" 
          ? "Gradimo web stranice i aplikacije koje ne samo da izgledaju odlično, već aktivno doprinose rastu vašeg poslovanja."
          : "We build websites and applications that not only look great, but actively contribute to the growth of your business."}
        features={[
          language === "bs" ? "Responzivni dizajn" : "Responsive design",
          language === "bs" ? "SEO optimizacija" : "SEO optimization",
          language === "bs" ? "Brza isporuka" : "Fast delivery",
          language === "bs" ? "24/7 Podrška" : "24/7 Support",
        ]}
        primaryButtonText={language === "bs" ? "Započnite projekt" : "Start project"}
        secondaryButtonText={language === "bs" ? "Pogledajte portfolio" : "View portfolio"}
        customVisual={<DeviceMockup iframeUrl="https://hs.sarayasolutions.com/" />}
        glowColor1="bg-primary-500/15"
        glowColor2="bg-pink-500/20"
      />

      {/* Services - Horizontal Scroll Cards */}
      <section className="py-12 md:py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Što" : "What we"} <span className="text-gradient">{language === "bs" ? "radimo" : "do"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                data-gsap="card"
                className={`p-4 md:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 text-center ${
                  service.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-transparent border-primary-500/20 hover:border-primary-500/40"
                  : service.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40"
                  : service.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-transparent border-accent-green/20 hover:border-accent-green/40"
                  : "bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20 hover:border-pink-500/40"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
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
                <h3 className="text-sm md:text-base font-bold text-white mb-1">{service.title}</h3>
                <p className="text-foreground-muted text-xs hidden md:block">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div data-gsap="parallax" className="absolute top-0 right-0 w-64 md:w-[400px] h-64 md:h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Naši" : "Our"} <span className="text-gradient">{language === "bs" ? "projekti" : "projects"}</span>
            </h2>
            <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
              {language === "bs" ? "Pogledajte neke od projekata koje smo realizirali za naše klijente." : "Check out some of the projects we've completed for our clients."}
            </p>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <div
                key={project.title}
                data-gsap="card"
                className="group relative rounded-2xl bg-background-card border border-primary-500/20 overflow-hidden hover:border-primary-500/40 transition-all"
              >
                {/* Project Preview */}
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-pink-500/10 flex items-center justify-center relative overflow-hidden">
                  <Globe className="text-primary-400/30" size={48} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card to-transparent" />
                </div>
                
                {/* Project Info */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary-500/20 text-primary-400">{project.category}</span>
                    <span className="text-xs text-accent-green font-medium">{project.stats}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-foreground-muted text-sm mb-4">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-400 text-sm hover:text-primary-300 transition-colors">
                    {language === "bs" ? "Pogledaj projekt" : "View project"} <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Šta kažu" : "What our"} <span className="text-gradient">{language === "bs" ? "klijenti" : "clients say"}</span>
            </h2>
          </div>

          <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-gsap="card"
                className="p-6 md:p-8 rounded-2xl bg-background-card border border-primary-500/20 relative"
              >
                <Quote className="absolute top-4 right-4 text-primary-500/20" size={32} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-foreground-muted text-sm md:text-base mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-foreground-muted text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {language === "bs" ? "Tehnologije koje" : "Technologies we"} <span className="text-gradient">{language === "bs" ? "koristimo" : "use"}</span>
            </h2>
          </div>

          <div data-gsap="tags" className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <div
                key={tech}
                data-gsap="tag"
                className="px-4 py-2 rounded-full bg-background-card border border-primary-500/20 text-white text-sm font-medium hover:border-primary-500/50 hover:bg-primary-500/10 transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Compact */}
      <section className="py-12 md:py-20 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div data-gsap="section-header" className="text-center mb-8">
              <h2 className="text-xl md:text-3xl font-bold mb-2">
                {language === "bs" ? "Zašto" : "Why"} <span className="text-gradient">Saraya</span>?
              </h2>
            </div>

            <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: language === "bs" ? "Sigurnost" : "Security" },
                { icon: Smartphone, text: "Mobile-first" },
                { icon: Search, text: "SEO" },
                { icon: BarChart3, text: language === "bs" ? "Analitika" : "Analytics" },
                { icon: Clock, text: language === "bs" ? "Brza isporuka" : "Fast delivery" },
                { icon: Heart, text: language === "bs" ? "Podrška" : "Support" },
              ].map((item, index) => (
                <div key={index} data-gsap="card" className="flex items-center gap-3 p-3 rounded-xl bg-background-card border border-primary-500/10">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-400" size={16} />
                  </div>
                  <span className="text-white text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-pink-500/10" />
        
        <div data-gsap="cta" className="text-center relative z-10">
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
            </div>
          </div>
      </section>
    </>
  );
}
