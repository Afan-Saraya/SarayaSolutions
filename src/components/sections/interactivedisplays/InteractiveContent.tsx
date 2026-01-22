"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Gamepad2, ArrowRight, Users, Bot } from "lucide-react";

export interface InteractiveFeature {
  icon: "gamepad" | "users" | "bot";
  text: string;
}

export interface InteractiveContentProps {
  badge?: string;
  title?: string;
  titleGradient?: string;
  description?: string;
  features?: InteractiveFeature[];
  buttonText?: string;
}

const iconMap = {
  gamepad: Gamepad2,
  users: Users,
  bot: Bot,
};

export default function InteractiveContent({
  badge = "Interaktivnost",
  title = "Više od",
  titleGradient = "običnog ekrana",
  description = "Saraya Display omogućava interakciju putem touch ekrana, gestikulacije, glasa i AI avatara. Kreirajte nezaboravna iskustva kroz igre, kvizove i personalizirane sadržaje.",
  features = [
    { icon: "gamepad", text: "Interaktivne igre i kvizovi" },
    { icon: "users", text: "Gestikulacija i motion tracking" },
    { icon: "bot", text: "AI avatari koji razgovaraju" },
  ],
  buttonText = "Saznajte više",
}: InteractiveContentProps) {
  return (
    <div>
      <Badge variant="primary" className="mb-3 md:mb-4">
        <Gamepad2 size={14} className="mr-2" />
        {badge}
      </Badge>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
        {description}
      </p>

      <div className="space-y-3 mb-6">
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon];
          return (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="text-primary-400" size={18} />
              </div>
              <span className="text-foreground-muted text-sm">{feature.text}</span>
            </div>
          );
        })}
      </div>

      <Button variant="primary">
        {buttonText}
        <ArrowRight className="ml-2" size={18} />
      </Button>
    </div>
  );
}
