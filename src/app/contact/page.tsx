"use client";

import { 
  Mail, Clock, Send, Sparkles, MapPin
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageAnimations from "@/components/animations/PageAnimations";
import { useLanguage } from "@/lib/i18n";

export default function ContactPage() {
  const { t, language } = useLanguage();

  const emails = [
    { address: "support@sarayasolutions.com", label: language === "bs" ? "Podrška" : "Support" },
    { address: "marketing@sarayasolutions.com", label: "Marketing" },
    { address: "info@sarayasolutions.com", label: language === "bs" ? "Informacije" : "Information" },
  ];
  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[100px] md:blur-[120px]" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[80px] md:blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 data-gsap="hero-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              {language === "bs" ? "Inovacije ne čekaju." : "Innovation doesn't wait."} <span className="text-gradient">{t.contact.heroTitle} {t.contact.heroTitleHighlight}.</span>
            </h1>

            <p data-gsap="hero-desc" className="text-sm md:text-lg lg:text-xl text-foreground-muted mb-3 md:mb-6 max-w-3xl mx-auto leading-relaxed">
              {language === "bs"
                ? "Saraya je nastala kao inovativna platforma iz temelja Best Solution Company d.o.o. (BSC), lidera u oblasti grafičkog dizajna i digitalnog štampanja na tržištu Bosne i Hercegovine."
                : "Saraya was created as an innovative platform from the foundation of Best Solution Company d.o.o. (BSC), a leader in graphic design and digital printing in the Bosnia and Herzegovina market."}
            </p>

            <p data-gsap="hero-subtitle" className="text-xs md:text-base text-foreground-muted leading-relaxed hidden md:block">
              {language === "bs"
                ? "Kao prirodan nastavak stručnosti BSC-a u pružanju visokokvalitetnih usluga, Saraya je sada otvorila vrata budućnosti, omogućavajući istraživanje i primjenu inovacija koje će transformirati vašu svakodnevicu."
                : "As a natural continuation of BSC's expertise in providing high-quality services, Saraya has now opened the doors to the future, enabling exploration and application of innovations that will transform your everyday life."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div data-gsap="content-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8">
                {language === "bs" ? "Kontakt" : "Contact"} <span className="text-gradient">{language === "bs" ? "forma" : "form"}</span>
              </h2>

              <form data-gsap="form" className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-foreground-muted mb-1 md:mb-2">
                      {t.common.name}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-background-card border border-primary-500/20 text-white text-sm placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none transition-colors"
                      placeholder={language === "bs" ? "Vaše ime" : "Your name"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-foreground-muted mb-1 md:mb-2">
                      {language === "bs" ? "Prezime" : "Last name"}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-background-card border border-primary-500/20 text-white text-sm placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none transition-colors"
                      placeholder={language === "bs" ? "Vaše prezime" : "Your last name"}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground-muted mb-1 md:mb-2">
                    {t.common.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-background-card border border-primary-500/20 text-white text-sm placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none transition-colors"
                    placeholder={language === "bs" ? "vas@email.com" : "your@email.com"}
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground-muted mb-1 md:mb-2">
                    {t.common.subject}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-background-card border border-primary-500/20 text-white text-sm placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none transition-colors"
                    placeholder={language === "bs" ? "O čemu se radi?" : "What is it about?"}
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground-muted mb-1 md:mb-2">
                    {t.common.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-background-card border border-primary-500/20 text-white text-sm placeholder-foreground-subtle focus:border-primary-500/50 focus:outline-none transition-colors resize-none"
                    placeholder={language === "bs" ? "Vaša poruka..." : "Your message..."}
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full md:w-auto">
                  {t.common.sendMessage}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div data-gsap="content-right">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8">
                <span className="text-gradient">{t.contact.infoTitle}</span>
              </h2>

              <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-8">
                {language === "bs" 
                  ? "Kontaktirajte nas putem online forme, ili nam pošaljite mail"
                  : "Contact us via online form, or send us an email"}
              </p>

              {/* Email Section */}
              <div data-gsap="fade-in" className="p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/20 mb-4 md:mb-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                    <Mail className="text-primary-400" size={20} />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-white">{t.contact.emailTitle}</h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {emails.map((email) => (
                    <a
                      key={email.address}
                      href={`mailto:${email.address}`}
                      className="block text-foreground-muted text-xs md:text-base hover:text-primary-400 transition-colors"
                    >
                      {email.address}
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div data-gsap="fade-in" className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-background-card border border-pink-500/20">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                    <Clock className="text-pink-400" size={20} />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-white">{t.footer.workingHours}</h3>
                </div>
                <p className="text-foreground-muted text-xs md:text-base">
                  <span className="text-white font-medium">{language === "bs" ? "Pon - Pet:" : "Mon - Fri:"}</span> 10:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <MapPin className="text-primary-400" size={20} />
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Naša" : "Our"} <span className="text-gradient">{language === "bs" ? "lokacija" : "location"}</span>
            </h2>
            <p className="text-foreground-muted text-xs md:text-base">
              {language === "bs" ? "Sarajevo, Bosna i Hercegovina" : "Sarajevo, Bosnia and Herzegovina"}
            </p>
          </div>

          <div data-gsap="fade-in" className="rounded-2xl overflow-hidden border border-primary-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5!2d18.413941!3d43.854925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUxJzE3LjciTiAxOMKwMjQnNTAuMiJF!5e0!3m2!1sen!2sba!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500 md:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div data-gsap="cta" className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
              {language === "bs" ? "Spremni za" : "Ready for the"} <span className="text-gradient">{language === "bs" ? "budućnost" : "future"}</span>?
            </h2>
            <p className="text-foreground-muted text-xs md:text-base">
              {language === "bs" 
                ? "Naš tim je spreman pomoći vam u ostvarenju vaših digitalnih ciljeva."
                : "Our team is ready to help you achieve your digital goals."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
