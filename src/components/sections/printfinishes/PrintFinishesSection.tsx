import React from "react";
import PrintFinishesHeader from "./PrintFinishesHeader";
import PrintFinishesTags from "./PrintFinishesTags";

interface PrintFinishesSectionProps {
  language?: string;
}

export default function PrintFinishesSection({ language = "bs" }: PrintFinishesSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <PrintFinishesHeader language={language} />
        <PrintFinishesTags language={language} />
      </div>
    </section>
  );
}
