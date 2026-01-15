"use client";

import { Monitor, Wifi, Globe, Gamepad2, Printer, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Features() {
  const { t, language } = useLanguage();

  const mainProducts = [
    {
      title: "Saraya Display",
      description: language === "bs" 
        ? "Interaktivni displeji s AI avatarima, 4K rezolucijom i naprednim funkcijama za marketing i komunikaciju."
        : "Interactive displays with AI avatars, 4K resolution, and advanced features for marketing and communication.",
      icon: Monitor,
      color: "purple",
      href: "/products/display",
      features: ["AI Avatar", "4K Ultra HD", "Touch Screen", "Outdoor/Indoor"],
    },
    {
      title: "Saraya Connect",
      description: language === "bs"
        ? "Pametni Wi-Fi hotspot sustav s captive portalom, analitikom korisnika i marketing automatizacijom."
        : "Smart Wi-Fi hotspot system with captive portal, user analytics, and marketing automation.",
      icon: Wifi,
      color: "green",
      href: "/products/saraya-connect",
      features: [language === "bs" ? "Besplatan Wi-Fi" : "Free Wi-Fi", "Captive Portal", language === "bs" ? "Analitika" : "Analytics", "Marketing"],
    },
  ];

  const services = [
    { title: t.services.webSolutions, icon: Globe, href: "/services/web-solutions", color: "purple" },
    { title: t.services.applications, icon: Bot, href: "/services/applications", color: "cyan" },
    { title: t.services.games, icon: Gamepad2, href: "/services/games", color: "pink" },
    { title: t.services.print, icon: Printer, href: "/services/print", color: "green" },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-dark" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div data-gsap="features-header" className="text-center mb-10 md:mb-16">
          <span className="text-primary-400 text-xs md:text-sm font-medium tracking-wider uppercase">
            {language === "bs" ? "Naša ponuda" : "Our offer"}
          </span>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mt-2 mb-3 md:mb-4">
            {language === "bs" ? "Proizvodi i" : "Products and"} <span className="text-gradient">{language === "bs" ? "usluge" : "services"}</span>
          </h2>
          <p className="text-foreground-muted text-sm md:text-base max-w-2xl mx-auto">
            {language === "bs" 
              ? "Kompletna tehnološka rješenja za vaše poslovanje - od hardvera do softvera"
              : "Complete technology solutions for your business - from hardware to software"
            }
          </p>
        </div>

        {/* Main Products */}
        <div data-gsap="products-grid" className="grid md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
          {mainProducts.map((product) => (
            <Link href={product.href} key={product.title}>
              <div
                data-gsap="product-card"
                className={`p-5 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer h-full hover:-translate-y-1 hover:scale-[1.02] ${
                  product.color === "purple"
                    ? "bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-primary-500/30 hover:shadow-primary-500/20 hover:shadow-xl"
                    : "bg-gradient-to-br from-accent-green/20 to-emerald-600/10 border-accent-green/30 hover:shadow-accent-green/20 hover:shadow-xl"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 ${
                    product.color === "purple" ? "bg-primary-500/20" : "bg-accent-green/20"
                  }`}>
                    <product.icon className={product.color === "purple" ? "text-primary-400" : "text-accent-green"} size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-foreground-muted text-xs md:text-sm mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span 
                          key={feature}
                          className={`px-2 py-1 rounded-full text-[10px] md:text-xs ${
                            product.color === "purple" 
                              ? "bg-primary-500/10 text-primary-400" 
                              : "bg-accent-green/10 text-accent-green"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`flex items-center mt-4 text-sm font-medium ${
                  product.color === "purple" ? "text-primary-400" : "text-accent-green"
                }`}>
                  {t.common.learnMore}
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Services Grid */}
        <div className="text-center mb-6">
          <span className="text-foreground-muted text-xs md:text-sm">{language === "bs" ? "Također nudimo" : "We also offer"}</span>
        </div>

        <div data-gsap="services-grid" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {services.map((service) => (
            <Link href={service.href} key={service.title}>
              <div
                data-gsap="service-card"
                className="p-4 md:p-6 rounded-xl bg-background-card border border-primary-500/10 hover:border-primary-500/30 transition-all text-center group cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  service.color === "purple" ? "bg-primary-500/20" 
                  : service.color === "green" ? "bg-accent-green/20"
                  : service.color === "cyan" ? "bg-cyan-500/20"
                  : "bg-accent-pink/20"
                }`}>
                  <service.icon className={`${
                    service.color === "purple" ? "text-primary-400" 
                    : service.color === "green" ? "text-accent-green"
                    : service.color === "cyan" ? "text-cyan-400"
                    : "text-accent-pink"
                  }`} size={20} />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
