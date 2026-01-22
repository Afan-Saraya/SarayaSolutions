import React from "react";

interface ClientsGridProps {
  language?: string;
}

const clients = ["Aria Mall", "BBI Banka", "NLB Banka", "BH Telecom", "eComm", "Central Park", "Sarajevo City", "Tech Hub"];

export default function ClientsGrid({ language = "bs" }: ClientsGridProps) {
  return (
    <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      {clients.map((client) => (
        <div key={client} data-gsap="card" className="p-4 md:p-6 rounded-xl bg-background-card border border-primary-500/10 flex items-center justify-center cursor-pointer group hover:border-primary-500/30 hover:bg-background-elevated transition-all duration-300 hover:-translate-y-1">
          <span className="text-xs md:text-base font-semibold text-foreground-subtle group-hover:text-white transition-colors">{client}</span>
        </div>
      ))}
    </div>
  );
}
