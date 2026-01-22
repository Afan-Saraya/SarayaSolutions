import React from "react";
import { Target, Sparkles } from "lucide-react";

interface MissionVisionCardsProps {
  language?: string;
}

export default function MissionVisionCards({ language = "bs" }: MissionVisionCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-8">
      <div
        data-gsap="card"
        className="p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-background-card border border-primary-500/20"
      >
        <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-6">
          <Target className="text-primary-400" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {language === "bs" ? "Naša misija" : "Our mission"}
        </h3>
        <p className="text-foreground-muted leading-relaxed">
          {language === "bs"
            ? "Naša misija je omogućiti brendovima da stvore nezaboravna digitalna iskustva kroz inovativne tehnologije. Kombiniramo AI, AR/VR i napredne mrežne tehnologije kako bismo transformirali način na koji kompanije komuniciraju sa svojim korisnicima."
            : "Our mission is to enable brands to create unforgettable digital experiences through innovative technologies. We combine AI, AR/VR, and advanced network technologies to transform the way companies communicate with their users."}
        </p>
      </div>

      <div
        data-gsap="card"
        className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-background-card border border-pink-500/20"
      >
        <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
          <Sparkles className="text-pink-400" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {language === "bs" ? "Naša vizija" : "Our vision"}
        </h3>
        <p className="text-foreground-muted leading-relaxed">
          {language === "bs"
            ? "Vizija nam je postati vodeći regionalni pružatelj inovativnih digitalnih rješenja, prepoznati po kvalitetu, kreativnosti i tehnološkoj izvrsnosti. Želimo biti partner koji pomaže brendovima da ostvare svoje digitalne ambicije."
            : "Our vision is to become the leading regional provider of innovative digital solutions, recognized for quality, creativity, and technological excellence. We want to be a partner that helps brands achieve their digital ambitions."}
        </p>
      </div>
    </div>
  );
}
