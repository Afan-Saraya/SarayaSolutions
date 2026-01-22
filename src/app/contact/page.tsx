"use client";

import { 
  Mail, Clock, Send, MapPin, Phone, ArrowRight
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const { t, language } = useLanguage();

  const emails = [
    { address: "support@sarayasolutions.com", label: language === "bs" ? "Podrška" : "Support", icon: Mail },
    { address: "marketing@sarayasolutions.com", label: "Marketing", icon: Mail },
    { address: "info@sarayasolutions.com", label: language === "bs" ? "Informacije" : "Information", icon: Mail },
  ];

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-accent-green/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-4">
              <Mail size={16} className="mr-2" />
              {language === "bs" ? "Kontaktirajte nas" : "Contact us"}
            </Badge>
            <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              {language === "bs" ? "Razgovarajmo o vašem" : "Let's talk about your"} <span className="text-gradient">{language === "bs" ? "projektu" : "project"}</span>
            </h1>
            <p data-gsap="hero-desc" className="text-sm md:text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              {language === "bs"
                ? "Kontaktirajte nas putem online forme ili direktno putem email-a. Naš tim je spreman odgovoriti na sva vaša pitanja."
                : "Contact us via online form or directly via email. Our team is ready to answer all your questions."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
        <div data-gsap="parallax" className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div data-gsap="parallax" className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Info Cards Grid - Top */}
          <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary-500/10 to-background-card border border-primary-500/20 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                  <Mail className="text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{language === "bs" ? "E-mail" : "Email"}</h3>
              </div>
              <div className="space-y-3">
                {emails.map((email) => (
                  <div key={email.address} className="group">
                    <p className="text-xs text-foreground-muted mb-1">{email.label}</p>
                    <a
                      href={`mailto:${email.address}`}
                      className="text-sm text-white group-hover:text-primary-400 transition-colors flex items-center gap-2"
                    >
                      {email.address}
                      <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-accent-green/10 to-background-card border border-accent-green/20 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-green/20 flex items-center justify-center border border-accent-green/30">
                  <Clock className="text-accent-green" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{language === "bs" ? "Radno vrijeme" : "Working hours"}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-foreground-muted mb-1">
                    {language === "bs" ? "Radnim danima" : "Weekdays"}
                  </p>
                  <p className="text-white text-lg font-semibold">10:00 - 17:00</p>
                </div>
                <div>
                  <p className="text-xs text-foreground-muted mb-1">
                    {language === "bs" ? "Vikend" : "Weekend"}
                  </p>
                  <p className="text-foreground-muted text-sm">{language === "bs" ? "Zatvoreno" : "Closed"}</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-background-card border border-cyan-500/20 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{language === "bs" ? "Lokacija" : "Location"}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold text-lg">Skenderija</p>
                <p className="text-foreground-muted text-sm">
                  Sarajevo<br />
                  {language === "bs" ? "Bosna i Hercegovina" : "Bosnia and Herzegovina"}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div data-gsap="content-left" className="lg:col-span-3">
              <div className="p-8 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-background-card to-background-elevated border border-primary-500/20 backdrop-blur-sm shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                    {language === "bs" ? "Pošaljite nam" : "Send us a"} <span className="text-gradient">{language === "bs" ? "poruku" : "message"}</span>
                  </h2>
                  <p className="text-foreground-muted text-sm md:text-base">
                    {language === "bs" 
                      ? "Popunite formu i javićemo vam se u najkraćem roku"
                      : "Fill out the form and we'll get back to you as soon as possible"}
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-2">
                        {t.common.name}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3.5 rounded-xl bg-background-dark border border-white/10 text-white placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder={language === "bs" ? "Vaše ime" : "Your name"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-2">
                        {language === "bs" ? "Prezime" : "Last name"}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3.5 rounded-xl bg-background-dark border border-white/10 text-white placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder={language === "bs" ? "Vaše prezime" : "Your last name"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                      {t.common.email}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3.5 rounded-xl bg-background-dark border border-white/10 text-white placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder={language === "bs" ? "vas@email.com" : "your@email.com"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                      {t.common.subject}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 rounded-xl bg-background-dark border border-white/10 text-white placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder={language === "bs" ? "O čemu se radi?" : "What is it about?"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-2">
                      {t.common.message}
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3.5 rounded-xl bg-background-dark border border-white/10 text-white placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                      placeholder={language === "bs" ? "Vaša poruka..." : "Your message..."}
                    />
                  </div>

                  <Button variant="primary" size="lg" className="w-full group">
                    {t.common.sendMessage}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </form>
              </div>
            </div>

            {/* Map Section - Takes 2 columns */}
            <div data-gsap="content-right" className="lg:col-span-2">
              <div className="rounded-3xl overflow-hidden border-2 border-primary-500/20 shadow-xl h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.2!2d18.413941!3d43.854925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8e8f1234567%3A0x1234567890abcdef!2sSkenderija%2C%20Sarajevo!5e0!3m2!1sen!2sba!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '700px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[30%] hover:grayscale-0 transition-all duration-500 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Removed since map is now in sidebar */}
    </>
  );
}
