import React from "react";
import { Users } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface ClientsHeaderProps {
  language?: string;
}

export default function ClientsHeader({ language = "bs" }: ClientsHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8 md:mb-16">
      <Badge variant="accent" className="mb-3 md:mb-4">
        <Users size={14} className="mr-2" />
        {language === "bs" ? "Naši partneri" : "Our partners"}
      </Badge>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {language === "bs" ? "Klijenti koji nam" : "Clients who"} <span className="text-gradient">{language === "bs" ? "vjeruju" : "trust us"}</span>
      </h2>
      <p className="text-foreground-muted text-xs md:text-base max-w-2xl mx-auto">
        {language === "bs" 
          ? "Ponosni smo na partnerstva s vodećim kompanijama u regiji"
          : "We are proud of partnerships with leading companies in the region"}
      </p>
    </div>
  );
}
