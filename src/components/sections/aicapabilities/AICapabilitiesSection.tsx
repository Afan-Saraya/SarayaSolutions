"use client";

import { LucideIcon } from "lucide-react";
import AICapabilitiesHeader from "./AICapabilitiesHeader";
import AICapabilitiesCards from "./AICapabilitiesCards";

interface AICapability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AICapabilitiesSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  capabilities: AICapability[];
}

export default function AICapabilitiesSection({
  title,
  titleGradient,
  description,
  capabilities,
}: AICapabilitiesSectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AICapabilitiesHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <AICapabilitiesCards capabilities={capabilities} />
      </div>
    </section>
  );
}
