import type { Meta, StoryObj } from "@storybook/react";
import PartnersHeader, { PartnersHeaderProps } from "./PartnersHeader";
import PartnersLogos, { PartnersLogosProps, PartnerItem } from "./PartnersLogos";

type PartnersOverviewProps = PartnersHeaderProps & PartnersLogosProps;

const PartnersOverview = ({
  // Header props
  badge,
  titleStart,
  titleGradient,
  description,
  // Logos props
  partners,
  footerText,
  autoScroll,
  scrollSpeed,
}: PartnersOverviewProps) => (
  <section className="py-16 md:py-24 bg-background-dark relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/5 rounded-full blur-[100px]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <PartnersHeader
        badge={badge}
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
      />
    </div>

    <PartnersLogos
      partners={partners}
      footerText={footerText}
      autoScroll={autoScroll}
      scrollSpeed={scrollSpeed}
    />
  </section>
);

const meta: Meta<typeof PartnersOverview> = {
  title: "Pages/Home/Partners/Overview",
  component: PartnersOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Header
    badge: { control: "text", table: { category: "Header" } },
    titleStart: { control: "text", table: { category: "Header" } },
    titleGradient: { control: "text", table: { category: "Header" } },
    description: { control: "text", table: { category: "Header" } },
    // Logos
    partners: { control: "object", table: { category: "Logos" } },
    footerText: { control: "text", table: { category: "Logos" } },
    autoScroll: { control: "boolean", table: { category: "Logos" } },
    scrollSpeed: { control: { type: "range", min: 10, max: 100, step: 5 }, table: { category: "Logos" } },
  },
};

export default meta;
type Story = StoryObj<typeof PartnersOverview>;

const defaultPartners: PartnerItem[] = [
  { name: "Coca-Cola", logo: "/images/coca-cola.png" },
  { name: "Bosna Bank International", logo: "/images/bosna bank international.png" },
  { name: "Mercator", logo: "/images/mercator.png" },
  { name: "Orbico", logo: "/images/orbico.png" },
  { name: "Sarajevo Osiguranje", logo: "/images/sarajevo-osiguranje.png" },
  { name: "BH Telecom", logo: "/images/bh telecom.png" },
  { name: "McCann", logo: "/images/mc cann.png" },
  { name: "Woman Comm", logo: "/images/woman comm.png" },
];

/** Kompletna Partners sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    badge: "Partneri",
    titleStart: "Kompanije s kojima",
    titleGradient: "sarađujemo",
    description: "Ponosni smo na saradnju s vodećim kompanijama u regiji",
    // Logos
    partners: defaultPartners,
    footerText: "I mnogi drugi partneri širom regije",
    autoScroll: true,
    scrollSpeed: 30,
  },
};
