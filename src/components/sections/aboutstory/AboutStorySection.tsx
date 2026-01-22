import React from "react";
import AboutStoryContent from "./AboutStoryContent";
import AboutStoryVisual from "./AboutStoryVisual";

interface AboutStorySectionProps {
  language?: string;
}

export default function AboutStorySection({ language = "bs" }: AboutStorySectionProps) {
  return (
    <section className="py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutStoryContent language={language} />
          <AboutStoryVisual language={language} />
        </div>
      </div>
    </section>
  );
}
