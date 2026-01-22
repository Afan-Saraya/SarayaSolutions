import React from "react";
import ReferencesGridCards from "./ReferencesGridCards";

interface ReferencesGridSectionProps {
  language?: string;
}

export default function ReferencesGridSection({ language = "bs" }: ReferencesGridSectionProps) {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4">
        <ReferencesGridCards language={language} />
      </div>
    </section>
  );
}
