import React from "react";
import AboutStatsCards from "./AboutStatsCards";

interface AboutStatsSectionProps {
  language?: string;
}

export default function AboutStatsSection({ language = "bs" }: AboutStatsSectionProps) {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <AboutStatsCards language={language} />
      </div>
    </section>
  );
}
