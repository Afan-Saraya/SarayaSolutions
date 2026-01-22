import React from "react";

interface OrderProcessStepsProps {
  language?: string;
}

const getProcess = (language: string) => [
  { step: "1", title: language === "bs" ? "Upit" : "Inquiry", desc: language === "bs" ? "Pošaljite nam specifikacije" : "Send us specifications" },
  { step: "2", title: language === "bs" ? "Ponuda" : "Quote", desc: language === "bs" ? "Dobijete ponudu u 24h" : "Get quote in 24h" },
  { step: "3", title: language === "bs" ? "Dizajn" : "Design", desc: language === "bs" ? "Kreiramo ili prilagodimo" : "We create or adapt" },
  { step: "4", title: language === "bs" ? "Print" : "Print", desc: language === "bs" ? "Proizvodnja i kontrola" : "Production and QC" },
  { step: "5", title: language === "bs" ? "Dostava" : "Delivery", desc: language === "bs" ? "Isporuka na adresu" : "Delivery to address" },
];

export default function OrderProcessSteps({ language = "bs" }: OrderProcessStepsProps) {
  const process = getProcess(language);

  return (
    <div data-gsap="cards-grid" className="flex flex-wrap justify-center gap-4 md:gap-2">
      {process.map((item, index) => (
        <div key={item.step} data-gsap="card" className="flex items-center">
          <div className="text-center px-4 md:px-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-green to-cyan-500 flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">{item.step}</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white mb-1">{item.title}</h3>
            <p className="text-foreground-muted text-xs">{item.desc}</p>
          </div>
          {index < process.length - 1 && (
            <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-accent-green/50 to-transparent" />
          )}
        </div>
      ))}
    </div>
  );
}
