"use client";

import IntegrationsContent from "./IntegrationsContent";
import IntegrationsVisual from "./IntegrationsVisual";

interface IntegrationsSectionProps {
  title: string;
  titleGradient: string;
  description: string;
  integrations: string[];
  logoSrc?: string;
}

export default function IntegrationsSection({
  title,
  titleGradient,
  description,
  integrations,
  logoSrc = "/images/shortLogo.png",
}: IntegrationsSectionProps) {
  return (
    <section className="py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <IntegrationsContent 
            title={title}
            titleGradient={titleGradient}
            description={description}
            integrations={integrations}
          />
          <IntegrationsVisual logoSrc={logoSrc} />
        </div>
      </div>
    </section>
  );
}
