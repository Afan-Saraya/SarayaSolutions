import React from "react";

interface PrintFinishesHeaderProps {
  language?: string;
}

export default function PrintFinishesHeader({ language = "bs" }: PrintFinishesHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-2">
        {language === "bs" ? "Završne" : "Finishing"} <span className="text-gradient">{language === "bs" ? "obrade" : "options"}</span>
      </h2>
    </div>
  );
}
