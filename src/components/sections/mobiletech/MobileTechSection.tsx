"use client";

import { LucideIcon } from "lucide-react";
import MobileTechHeader from "./MobileTechHeader";
import MobileTechCards from "./MobileTechCards";

interface MobileTech {
  icon: LucideIcon;
  name: string;
  description: string;
  color: "blue" | "cyan" | "purple";
}

interface MobileTechSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  technologies: MobileTech[];
}

export default function MobileTechSection({
  title,
  titleGradient,
  description,
  technologies,
}: MobileTechSectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <MobileTechHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <MobileTechCards technologies={technologies} />
      </div>
    </section>
  );
}
