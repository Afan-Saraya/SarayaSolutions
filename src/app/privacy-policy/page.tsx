"use client";

import { Shield, Lock, Eye, FileText, Calendar, Mail } from "lucide-react";
import Badge from "@/components/ui/Badge";
import PageAnimations from "@/components/animations/PageAnimations";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const sections = [
    {
      id: "collection",
      icon: FileText,
      title: language === "bs" ? "Prikupljanje podataka" : "Data Collection",
      content: language === "bs" 
        ? "Prikupljamo samo podatke koji su neophodni za pružanje naših usluga. To uključuje vaše ime, email adresu, broj telefona i informacije o kompaniji kada nas kontaktirate ili koristite naše usluge."
        : "We only collect data that is necessary to provide our services. This includes your name, email address, phone number, and company information when you contact us or use our services."
    },
    {
      id: "usage",
      icon: Eye,
      title: language === "bs" ? "Korištenje podataka" : "Data Usage",
      content: language === "bs"
        ? "Vaši podaci se koriste isključivo za pružanje i poboljšanje naših usluga, komunikaciju s vama i ispunjavanje zakonskih obaveza. Ne prodajemo niti dijelimo vaše podatke s trećim stranama bez vaše saglasnosti."
        : "Your data is used exclusively to provide and improve our services, communicate with you, and fulfill legal obligations. We do not sell or share your data with third parties without your consent."
    },
    {
      id: "security",
      icon: Lock,
      title: language === "bs" ? "Sigurnost podataka" : "Data Security",
      content: language === "bs"
        ? "Primjenjujemo industrijske standarde sigurnosti kako bismo zaštitili vaše podatke. Koristimo enkripciju, sigurne servere i redovne sigurnosne provjere kako bismo osigurali da vaši podaci ostanu sigurni."
        : "We apply industry-standard security measures to protect your data. We use encryption, secure servers, and regular security audits to ensure your data remains safe."
    },
    {
      id: "rights",
      icon: Shield,
      title: language === "bs" ? "Vaša prava" : "Your Rights",
      content: language === "bs"
        ? "Imate pravo pristupa, ispravke ili brisanja vaših ličnih podataka. Također možete zatražiti ograničenje obrade ili prigovoriti obradi vaših podataka. Kontaktirajte nas za ostvarivanje ovih prava."
        : "You have the right to access, correct, or delete your personal data. You can also request restriction of processing or object to the processing of your data. Contact us to exercise these rights."
    },
    {
      id: "cookies",
      icon: FileText,
      title: language === "bs" ? "Kolačići (Cookies)" : "Cookies",
      content: language === "bs"
        ? "Koristimo kolačiće za poboljšanje vašeg iskustva na našoj web stranici. Kolačići nam pomažu da razumijemo kako koristite našu stranicu i omogućavaju nam da prilagodimo sadržaj vašim potrebama."
        : "We use cookies to improve your experience on our website. Cookies help us understand how you use our site and allow us to customize content to your needs."
    },
    {
      id: "retention",
      icon: Calendar,
      title: language === "bs" ? "Čuvanje podataka" : "Data Retention",
      content: language === "bs"
        ? "Čuvamo vaše podatke samo onoliko dugo koliko je potrebno za ispunjavanje svrhe za koju su prikupljeni ili kako to zahtijevaju zakonski propisi. Nakon toga, podaci se sigurno brišu."
        : "We retain your data only as long as necessary to fulfill the purpose for which it was collected or as required by legal regulations. After that, the data is securely deleted."
    },
  ];

  return (
    <>
      <PageAnimations />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
        <div data-gsap="parallax" className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div data-gsap="parallax" className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Shield size={16} className="mr-2" />
              {language === "bs" ? "Pravni dokument" : "Legal Document"}
            </Badge>
            <h1 data-gsap="hero-title" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {language === "bs" ? "Politika" : "Privacy"} <span className="text-gradient">{language === "bs" ? "privatnosti" : "Policy"}</span>
            </h1>
            <p data-gsap="hero-desc" className="text-base md:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-6">
              {language === "bs"
                ? "Vaša privatnost je naš prioritet. Ova politika objašnjava kako prikupljamo, koristimo i štitimo vaše lične podatke."
                : "Your privacy is our priority. This policy explains how we collect, use, and protect your personal data."}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground-muted">
              <Calendar size={16} />
              <span>{language === "bs" ? "Posljednje ažurirano:" : "Last updated:"} {new Date().toLocaleDateString(language === "bs" ? "bs-BA" : "en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div data-gsap="fade-in" className="mb-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-500/5 to-background-card border border-primary-500/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {language === "bs" ? "Uvod" : "Introduction"}
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                {language === "bs"
                  ? "Saraya Solutions d.o.o. (u daljem tekstu 'Saraya', 'mi', 'nas' ili 'naš') posvećena je zaštiti vaše privatnosti. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, otkrivamo i čuvamo vaše lične podatke kada koristite naše usluge ili posjećujete našu web stranicu."
                  : "Saraya Solutions d.o.o. (hereinafter 'Saraya', 'we', 'us' or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and store your personal data when you use our services or visit our website."}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  data-gsap="fade-in"
                  className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-background-card to-background-elevated border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <section.icon className="text-primary-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {index + 1}. {section.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div data-gsap="fade-in" className="mt-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-accent-green/5 to-background-card border border-accent-green/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent-green" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {language === "bs" ? "Kontaktirajte nas" : "Contact Us"}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed mb-4">
                    {language === "bs"
                      ? "Ako imate bilo kakvih pitanja ili nedoumica u vezi s ovom Politikom privatnosti ili načinom na koji obrađujemo vaše podatke, molimo vas da nas kontaktirate:"
                      : "If you have any questions or concerns about this Privacy Policy or how we process your data, please contact us:"}
                  </p>
                  <div className="space-y-2">
                    <p className="text-white">
                      <span className="text-foreground-muted">{language === "bs" ? "Email:" : "Email:"}</span> privacy@sarayasolutions.com
                    </p>
                    <p className="text-white">
                      <span className="text-foreground-muted">{language === "bs" ? "Adresa:" : "Address:"}</span> Skenderija, Sarajevo, {language === "bs" ? "Bosna i Hercegovina" : "Bosnia and Herzegovina"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div data-gsap="fade-in" className="mt-8 p-6 rounded-2xl bg-background-card/50 border border-white/5">
              <p className="text-sm text-foreground-muted text-center leading-relaxed">
                {language === "bs"
                  ? "Zadržavamo pravo da ažuriramo ovu Politiku privatnosti s vremena na vrijeme. Sve izmjene će biti objavljene na ovoj stranici s ažuriranim datumom."
                  : "We reserve the right to update this Privacy Policy from time to time. All changes will be posted on this page with an updated date."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
