import React from "react";
import { Lightbulb, Award, Heart, Shield } from "lucide-react";
import Card from "@/components/ui/Card";

interface AboutValuesCardsProps {
  language?: string;
}

const getValues = (language: string) => [
  {
    title: language === "bs" ? "Inovacija" : "Innovation",
    description: language === "bs" 
      ? "Konstantno istražujemo nove tehnologije i pristupe kako bismo našim klijentima ponudili najnaprednije i najefektivnije solucije."
      : "We constantly explore new technologies and approaches to offer our clients the most advanced and effective solutions.",
    icon: Lightbulb,
    color: "purple",
  },
  {
    title: language === "bs" ? "Kvalitet" : "Quality",
    description: language === "bs"
      ? "Svaki projekat tretiramo s maksimalnom pažnjom i posvećenošću, osiguravajući vrhunski kvalitet u svakom detalju."
      : "We treat every project with maximum attention and dedication, ensuring top quality in every detail.",
    icon: Award,
    color: "pink",
  },
  {
    title: language === "bs" ? "Partnerstvo" : "Partnership",
    description: language === "bs"
      ? "Gradimo dugoročne odnose s klijentima zasnovane na povjerenju, transparentnosti i zajedničkom uspjehu."
      : "We build long-term relationships with clients based on trust, transparency, and mutual success.",
    icon: Heart,
    color: "cyan",
  },
  {
    title: language === "bs" ? "Pouzdanost" : "Reliability",
    description: language === "bs"
      ? "Naši klijenti mogu računati na nas — od prvog kontakta do podrške nakon implementacije."
      : "Our clients can count on us — from first contact to post-implementation support.",
    icon: Shield,
    color: "purple",
  },
];

export default function AboutValuesCards({ language = "bs" }: AboutValuesCardsProps) {
  const values = getValues(language);

  return (
    <div data-gsap="cards-grid" className="grid md:grid-cols-2 gap-8">
      {values.map((value) => (
        <Card key={value.title} glow={value.color === "purple" ? "purple" : "pink"}>
          <div data-gsap="card">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
              value.color === "purple" ? "bg-primary-500/20" 
              : value.color === "pink" ? "bg-pink-500/20" 
              : "bg-cyan-500/20"
            }`}>
              <value.icon className={
                value.color === "purple" ? "text-primary-400" 
                : value.color === "pink" ? "text-pink-400" 
                : "text-cyan-400"
              } size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
            <p className="text-foreground-muted">{value.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
