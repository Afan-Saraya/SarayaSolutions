"use client";

import { Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t, language } = useLanguage();

  return (
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
  );
}
