"use client";

import { Glasses, Headset, MessageSquare, User, ArrowRight, LucideIcon } from "lucide-react";

export interface TechItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "glasses" | "headset" | "message" | "user";
  color: "purple" | "pink" | "blue" | "cyan";
}

export interface TechCardsProps {
  /** Array of technology items */
  technologies?: TechItem[];
  /** Link text */
  linkText?: string;
}

const iconMap: Record<string, LucideIcon> = {
  glasses: Glasses,
  headset: Headset,
  message: MessageSquare,
  user: User,
};

const colorMap = {
  purple: "from-primary-500/20 to-primary-600/20 border-primary-500/30",
  pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
  blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
};

const glowMap = {
  purple: "group-hover:shadow-primary-500/20",
  pink: "group-hover:shadow-pink-500/20",
  blue: "group-hover:shadow-blue-500/20",
  cyan: "group-hover:shadow-cyan-500/20",
};

const defaultTechnologies: TechItem[] = [
  {
    id: "ar",
    title: "AR",
    subtitle: "Proširena stvarnost",
    description: "Tehnologija proširene stvarnosti (AR) preklapa digitalne informacije s fizičkim svijetom putem uređaja poput pametnih telefona i naočala. Poboljšava korisnička iskustva u igrama, obrazovanju i maloprodaji.",
    icon: "glasses",
    color: "purple",
  },
  {
    id: "vr",
    title: "VR",
    subtitle: "Virtualna stvarnost",
    description: "Tehnologija virtualne stvarnosti (VR) uranja korisnike u potpuno virtualno okruženje koristeći headsetove. Stvara realistične simulacije za igranje, obuku i terapiju, nudeći interaktivna iskustva.",
    icon: "headset",
    color: "pink",
  },
  {
    id: "chatbot",
    title: "AI CHATBOT",
    subtitle: "Virtualni asistent",
    description: "AI chatbotovi su virtualni asistenti koji simuliraju razgovor s korisnicima. Koriste prirodnu obradu jezika (NLP) za razumijevanje i odgovaranje na upite, pružajući korisničku podršku i interakcije na različitim platformama.",
    icon: "message",
    color: "blue",
  },
  {
    id: "avatar",
    title: "AI AVATAR",
    subtitle: "Digitalna reprezentacija",
    description: "AI Avatari su virtualne reprezentacije koje pokreće umjetna inteligencija. Mogu pružati informacije i personalizirati iskustva, poboljšavajući interakciju u virtualnoj podršci, igrama i online edukaciji.",
    icon: "user",
    color: "cyan",
  },
];

export default function TechCards({
  technologies = defaultTechnologies,
  linkText = "Saznajte više",
}: TechCardsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {technologies.map((tech) => {
        const Icon = iconMap[tech.icon] || Glasses;
        const colorClass = colorMap[tech.color];
        const glowClass = glowMap[tech.color];
        
        return (
          <div
            key={tech.id}
            className={`group p-8 rounded-2xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm hover:shadow-xl ${glowClass} transition-all duration-300 cursor-pointer hover:-translate-y-1`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-background-card/50 flex items-center justify-center">
                <Icon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
                <p className="text-foreground-subtle text-sm">{tech.subtitle}</p>
              </div>
            </div>
            
            <p className="text-foreground-muted leading-relaxed mb-6">
              {tech.description}
            </p>

            <div className="flex items-center text-primary-400 font-medium group-hover:text-white transition-colors">
              <span>{linkText}</span>
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
