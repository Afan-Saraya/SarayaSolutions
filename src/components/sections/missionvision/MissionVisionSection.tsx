import React from "react";
import MissionVisionCards from "./MissionVisionCards";

interface MissionVisionSectionProps {
  language?: string;
}

export default function MissionVisionSection({ language = "bs" }: MissionVisionSectionProps) {
  return (
    <section className="py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <MissionVisionCards language={language} />
      </div>
    </section>
  );
}
