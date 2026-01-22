import type { Meta, StoryObj } from "@storybook/react";
import Hero2Content, { Hero2ContentProps } from "./Hero2Content";
import Hero2Visual, { Hero2VisualProps } from "./Hero2Visual";

type Hero2OverviewProps = Hero2ContentProps & Hero2VisualProps & {
  showDecorations?: boolean;
};

const Hero2Overview = ({
  // Content props
  logoSrc,
  description,
  features,
  primaryButtonText,
  secondaryButtonText,
  showFeatures,
  accentColor,
  // Visual props
  iframeUrl,
  // Overview props
  showDecorations = true,
}: Hero2OverviewProps) => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 md:pt-28 md:pb-20">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-hero-gradient" />
    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-green/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-500/15 rounded-full blur-[100px]" />

    {showDecorations && (
      <>
        <div className="absolute top-32 right-16 w-3 h-3 bg-accent-green/40 rounded-full hidden md:block" />
        <div className="absolute top-48 left-20 w-2 h-2 bg-primary-400/30 rounded-full hidden md:block" />
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-accent-green/20 rounded-full hidden md:block" />
      </>
    )}

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left - Visual (Device Mockup) */}
        <div className="order-2 lg:order-1">
          <Hero2Visual iframeUrl={iframeUrl} />
        </div>

        {/* Right - Content */}
        <div className="order-1 lg:order-2">
          <Hero2Content
            logoSrc={logoSrc}
            description={description}
            features={features}
            primaryButtonText={primaryButtonText}
            secondaryButtonText={secondaryButtonText}
            showFeatures={showFeatures}
            accentColor={accentColor}
          />
        </div>
      </div>
    </div>
  </section>
);

const meta: Meta<typeof Hero2Overview> = {
  title: "Pages/Home/Hero2/Overview",
  component: Hero2Overview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Content
    logoSrc: { control: "text", table: { category: "Content" } },
    description: { control: "text", table: { category: "Content" } },
    features: { control: "object", table: { category: "Content" } },
    primaryButtonText: { control: "text", table: { category: "Content" } },
    secondaryButtonText: { control: "text", table: { category: "Content" } },
    showFeatures: { control: "boolean", table: { category: "Content" } },
    accentColor: { 
      control: "select", 
      options: ["green", "purple"],
      table: { category: "Content" } 
    },
    // Visual
    iframeUrl: { control: "text", table: { category: "Visual" } },
    // Overview
    showDecorations: { control: "boolean", table: { category: "Overview" } },
  },
};

export default meta;
type Story = StoryObj<typeof Hero2Overview>;

/** Kompletna Hero2 (Saraya Connect) sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Content
    logoSrc: "/images/logos/saraya connect.png",
    description: "Pretvorite besplatni Wi-Fi u moćan marketing alat. Prikupljajte podatke, komunicirajte s korisnicima i gradite lojalnost — sve kroz jednu platformu.",
    features: ["Captive Portal", "Marketing platforma", "Analitika korisnika", "Skalabilnost"],
    primaryButtonText: "Hotspot solucije",
    secondaryButtonText: "Video",
    showFeatures: true,
    accentColor: "green",
    // Visual
    iframeUrl: "https://hs.sarayasolutions.com/",
    // Overview
    showDecorations: true,
  },
};
