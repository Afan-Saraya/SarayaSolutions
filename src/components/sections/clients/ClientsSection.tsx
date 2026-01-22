import React from "react";
import ClientsHeader from "./ClientsHeader";
import ClientsGrid from "./ClientsGrid";

interface ClientsSectionProps {
  language?: string;
}

export default function ClientsSection({ language = "bs" }: ClientsSectionProps) {
  return (
    <section className="py-12 md:py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <ClientsHeader language={language} />
        <ClientsGrid language={language} />
      </div>
    </section>
  );
}
