import type { Meta, StoryObj } from "@storybook/react";
import WhyDisplayHeader, { WhyDisplayHeaderProps } from "./WhyDisplayHeader";
import BenefitCards, { BenefitCardsProps, BenefitItem } from "./BenefitCards";

type WhyDisplayOverviewProps = WhyDisplayHeaderProps & BenefitCardsProps;

const WhyDisplayOverview = ({
  // Header props
  title,
  titleGradient,
  // Cards props
  benefits,
}: WhyDisplayOverviewProps) => (
  <section className="py-12 md:py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <WhyDisplayHeader title={title} titleGradient={titleGradient} />
      <BenefitCards benefits={benefits} />
    </div>
  </section>
);

const meta: Meta<typeof WhyDisplayOverview> = {
  title: "Pages/Display/WhyDisplay/Overview",
  component: WhyDisplayOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Header
    title: { control: "text", table: { category: "Header" } },
    titleGradient: { control: "text", table: { category: "Header" } },
    // Cards
    benefits: { control: "object", table: { category: "Benefits" } },
  },
};

export default meta;
type Story = StoryObj<typeof WhyDisplayOverview>;

const defaultBenefits: BenefitItem[] = [
  {
    icon: "sparkles",
    title: "Angažman koji konvertira",
    description:
      "Interaktivni sadržaji koji privlače pažnju i podstiču akciju — od informiranja do kupovine.",
  },
  {
    icon: "zap",
    title: "Fleksibilnost bez granica",
    description:
      "Mijenjajte sadržaj u realnom vremenu, prilagođavajte kampanje i reagirajte na trendove trenutno.",
  },
  {
    icon: "shield",
    title: "Kvaliteta koja traje",
    description:
      "Industrijski grade komponente dizajnirane za 24/7 rad u zahtjevnim uvjetima.",
  },
];

/** Kompletna Why Saraya Display sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    title: "Zašto Saraya Display predstavlja",
    titleGradient: "vašu najbolju investiciju?",
    // Cards
    benefits: defaultBenefits,
  },
};
