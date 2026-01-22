import React from "react";
import OrderProcessHeader from "./OrderProcessHeader";
import OrderProcessSteps from "./OrderProcessSteps";

interface OrderProcessSectionProps {
  language?: string;
}

export default function OrderProcessSection({ language = "bs" }: OrderProcessSectionProps) {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <OrderProcessHeader language={language} />
        <OrderProcessSteps language={language} />
      </div>
    </section>
  );
}
