"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Bot, ArrowRight } from "lucide-react";

export interface AvatarFeature {
  text: string;
}

export interface AvatarContentProps {
  badge?: string;
  title?: string;
  titleGradient?: string;
  description?: string;
  features?: AvatarFeature[];
  buttonText?: string;
}

const defaultFeatures: AvatarFeature[] = [
  { text: "Komunicira na 99+ jezika" },
  { text: "Realistični 3D/2D avatari" },
  { text: "Personalizirano korisničko iskustvo" },
];

export default function AvatarContent({
  badge = "AI Tehnologija",
  title = "AI Avatar display:",
  titleGradient = "revolucija u interakciji",
  description = "Saraya AI Avatar Display predstavlja najnoviju tehnologiju u digitalnoj interakciji s naprednom AI i realističnim avatarima.",
  features = defaultFeatures,
  buttonText = "Saznajte više",
}: AvatarContentProps) {
  return (
    <div>
      <Badge variant="accent" className="mb-3 md:mb-4">
        <Bot size={14} className="mr-2" />
        {badge}
      </Badge>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
        {title} <span className="text-gradient">{titleGradient}</span>
      </h2>
      <p className="text-foreground-muted text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
        {description}
      </p>

      {/* Feature list */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-foreground-muted text-sm">{feature.text}</span>
          </div>
        ))}
      </div>

      <Button variant="primary">
        {buttonText}
        <ArrowRight className="ml-2" size={18} />
      </Button>
    </div>
  );
}
