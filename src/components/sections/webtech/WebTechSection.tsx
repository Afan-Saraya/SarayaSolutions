"use client";

import { LucideIcon } from "lucide-react";
import WebTechHeader from "./WebTechHeader";
import WebTechCards from "./WebTechCards";

interface WebTech {
  icon: LucideIcon;
  name: string;
  description: string;
  color: "blue" | "cyan" | "green" | "purple" | "pink" | "orange";
}

interface WebTechSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  technologies: WebTech[];
}

export default function WebTechSection({
  title,
  titleGradient,
  description,
  technologies,
}: WebTechSectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <WebTechHeader 
          title={title}
          titleGradient={titleGradient}
          description={description}
        />
        <WebTechCards technologies={technologies} />
      </div>
    </section>
  );
}
