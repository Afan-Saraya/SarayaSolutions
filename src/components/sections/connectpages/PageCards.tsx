"use client";

import Card from "@/components/ui/Card";
import Image from "next/image";
import { Check } from "lucide-react";

export interface PageItem {
  logo: string;
  alt: string;
  description: string;
  features: string[];
  color: "purple" | "green" | "cyan";
}

export interface PageCardsProps {
  pages?: PageItem[];
}

const defaultPages: PageItem[] = [
  {
    logo: "/images/logos/reward center.png",
    alt: "Rewards Center",
    description: "Loyalty program koji nagrađuje korisnike za svaku posjetu i interakciju. Korisnici skupljaju bodove, osvajaju nagrade i dobivaju ekskluzivne popuste od partnera na mreži.",
    features: ["Skupljanje bodova", "Ekskluzivne nagrade", "Partnerski popusti"],
    color: "purple",
  },
  {
    logo: "/images/logos/pametno odabrano.png",
    alt: "Pametno Odabrano",
    description: "AI-powered sistem preporuka koji korisnicima predlaže relevantne proizvode, usluge i sadržaje bazirano na njihovim interesima i lokaciji.",
    features: ["Personalizirane preporuke", "Lokalne ponude", "Pametno filtriranje"],
    color: "green",
  },
  {
    logo: "/images/logos/explore sarajevo.png",
    alt: "Explore Sarajevo",
    description: "Interaktivni turistički vodič kroz Sarajevo s preporukama restorana, kafića, atrakcija i događaja. Idealno za turiste i lokalne stanovnike.",
    features: ["Mapa grada", "Preporuke lokacija", "Događaji u gradu"],
    color: "cyan",
  },
];

export default function PageCards({ pages = defaultPages }: PageCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
      {pages.map((page, index) => (
        <Card
          key={index}
          glow={page.color === "purple" ? "purple" : page.color === "green" ? "green" : "pink"}
        >
          <div>
            <div className="relative w-full h-10 mb-4">
              <Image
                src={page.logo}
                alt={page.alt}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-foreground-muted text-sm mb-4">{page.description}</p>
            <div className="space-y-2">
              {page.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check
                    className={
                      page.color === "purple"
                        ? "text-primary-400"
                        : page.color === "green"
                        ? "text-accent-green"
                        : "text-cyan-400"
                    }
                    size={14}
                  />
                  <span className="text-foreground-muted text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
