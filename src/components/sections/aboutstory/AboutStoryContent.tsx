import React from "react";
import { Rocket } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface AboutStoryContentProps {
  language?: string;
}

export default function AboutStoryContent({ language = "bs" }: AboutStoryContentProps) {
  return (
    <div data-gsap="content-left">
      <Badge variant="secondary" className="mb-4">
        <Rocket size={14} className="mr-2" />
        {language === "bs" ? "Naša priča" : "Our story"}
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {language === "bs" ? "Od ideje do" : "From idea to"} <span className="text-gradient">{language === "bs" ? "realnosti" : "reality"}</span>
      </h2>
      <div className="space-y-4 text-foreground-muted leading-relaxed">
        <p>
          {language === "bs" 
            ? "Saraya Solutions je nastala iz vizije da tehnologija može biti pristupačnija, interaktivnija i korisnija za svakodnevno poslovanje. Kao domaća kompanija iz Bosne i Hercegovine, ponosni smo na to što razvijamo vrhunska rješenja koja konkuriraju globalnim standardima."
            : "Saraya Solutions was born from the vision that technology can be more accessible, interactive, and useful for everyday business. As a domestic company from Bosnia and Herzegovina, we are proud to develop premium solutions that compete with global standards."}
        </p>
        <p>
          {language === "bs"
            ? "Naš tim stručnjaka kombinira duboko razumijevanje lokalnog tržišta s najnovijim globalnim tehnološkim trendovima. Od AR i VR tehnologija, preko AI chatbotova i avatara, do naprednih Wi-Fi mreža — stvaramo rješenja koja transformiraju način na koji brendovi komuniciraju sa svojim korisnicima."
            : "Our team of experts combines deep understanding of the local market with the latest global technology trends. From AR and VR technologies, through AI chatbots and avatars, to advanced Wi-Fi networks — we create solutions that transform the way brands communicate with their users."}
        </p>
        <p>
          {language === "bs"
            ? "Danas sarađujemo s vodećim kompanijama u regiji, uključujući Aria Mall, BBI Banku, NLB Banku i BH Telecom, pomažući im da ostvare svoje digitalne ciljeve i stvore nezaboravna korisnička iskustva."
            : "Today we collaborate with leading companies in the region, including Aria Mall, BBI Bank, NLB Bank, and BH Telecom, helping them achieve their digital goals and create unforgettable user experiences."}
        </p>
      </div>
    </div>
  );
}
