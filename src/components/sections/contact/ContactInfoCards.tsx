"use client";

import { Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ContactInfoCards() {
  const { language } = useLanguage();

  const emails = [
    { address: "support@sarayasolutions.com", label: language === "bs" ? "Podrška" : "Support", icon: Mail },
    { address: "marketing@sarayasolutions.com", label: "Marketing", icon: Mail },
    { address: "info@sarayasolutions.com", label: language === "bs" ? "Informacije" : "Information", icon: Mail },
  ];

  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-3 gap-6">
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
  );
}
