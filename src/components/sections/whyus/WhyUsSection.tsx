"use client";

import { LucideIcon } from "lucide-react";
import WhyUsHeader from "./WhyUsHeader";
import WhyUsCards from "./WhyUsCards";

interface WhyUsItem {
  icon: LucideIcon;
  text: string;
}

interface WhyUsSectionProps {
  title: string;
  titleGradient: string;
  items: WhyUsItem[];
}

export default function WhyUsSection({
  title,
  titleGradient,
  items,
}: WhyUsSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <WhyUsHeader 
            title={title}
            titleGradient={titleGradient}
          />
          <WhyUsCards items={items} />
        </div>
      </div>
    </section>
  );
}
