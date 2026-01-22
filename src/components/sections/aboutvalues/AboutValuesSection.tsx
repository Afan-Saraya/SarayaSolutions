import React from "react";
import AboutValuesHeader from "./AboutValuesHeader";
import AboutValuesCards from "./AboutValuesCards";

interface AboutValuesSectionProps {
  language?: string;
}

export default function AboutValuesSection({ language = "bs" }: AboutValuesSectionProps) {
  return (
    <section className="py-24 relative">
      <div data-gsap="parallax" className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AboutValuesHeader language={language} />
        <AboutValuesCards language={language} />
      </div>
    </section>
  );
}
