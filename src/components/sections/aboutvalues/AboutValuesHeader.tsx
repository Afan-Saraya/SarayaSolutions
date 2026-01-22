import React from "react";
import { Heart } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface AboutValuesHeaderProps {
  language?: string;
}

export default function AboutValuesHeader({ language = "bs" }: AboutValuesHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-16">
      <Badge variant="accent" className="mb-4">
        <Heart size={14} className="mr-2" />
        {language === "bs" ? "Naše vrijednosti" : "Our values"}
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {language === "bs" ? "Principi koji nas" : "Principles that"} <span className="text-gradient">{language === "bs" ? "vode" : "guide us"}</span>
      </h2>
      <p className="text-foreground-muted max-w-2xl mx-auto">
        {language === "bs" 
          ? "Naše vrijednosti definiraju način na koji radimo i kako pristupamo svakom projektu i svakom klijentu."
          : "Our values define the way we work and how we approach every project and every client."}
      </p>
    </div>
  );
}
