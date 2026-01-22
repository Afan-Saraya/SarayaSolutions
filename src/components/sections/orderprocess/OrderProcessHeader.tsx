import React from "react";

interface OrderProcessHeaderProps {
  language?: string;
}

export default function OrderProcessHeader({ language = "bs" }: OrderProcessHeaderProps) {
  return (
    <div data-gsap="section-header" className="text-center mb-8 md:mb-12">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {language === "bs" ? "Kako" : "How to"} <span className="text-gradient">{language === "bs" ? "naručiti" : "order"}</span>
      </h2>
    </div>
  );
}
