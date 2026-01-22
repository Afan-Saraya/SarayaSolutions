import type { Meta, StoryObj } from "@storybook/react";
import IndustriesHeader, { IndustriesHeaderProps } from "./IndustriesHeader";
import IndustryCards, { IndustryCardsProps, IndustryItem } from "./IndustryCards";
import IndustryBenefits, { IndustryBenefitsProps, BenefitItem } from "./IndustryBenefits";
import IndustryStats, { IndustryStatsProps, StatItem } from "./IndustryStats";

type IndustriesOverviewProps = IndustriesHeaderProps & {
  industries: IndustryItem[];
  benefitsTitle: string;
  benefits: BenefitItem[];
  stats: StatItem[];
};

const IndustriesOverview = ({
  // Header props
  badge,
  titleStart,
  titleGradient,
  description,
  // Cards props
  industries,
  // Benefits props
  benefitsTitle,
  benefits,
  // Stats props
  stats,
}: IndustriesOverviewProps) => (
  <section className="py-12 md:py-24 bg-background-dark">
    <div className="container mx-auto px-4">
      <IndustriesHeader
        badge={badge}
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
      />

      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-5">
          <IndustryCards industries={industries} />
        </div>

        <div className="md:col-span-7 space-y-4 md:space-y-6">
          <IndustryBenefits title={benefitsTitle} benefits={benefits} />
          <IndustryStats stats={stats} />
        </div>
      </div>
    </div>
  </section>
);

const meta: Meta<typeof IndustriesOverview> = {
  title: "Pages/Connect/Industries/Overview",
  component: IndustriesOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Header
    badge: { control: "text", table: { category: "Header" } },
    titleStart: { control: "text", table: { category: "Header" } },
    titleGradient: { control: "text", table: { category: "Header" } },
    description: { control: "text", table: { category: "Header" } },
    // Cards
    industries: { control: "object", table: { category: "Industries" } },
    // Benefits
    benefitsTitle: { control: "text", table: { category: "Benefits" } },
    benefits: { control: "object", table: { category: "Benefits" } },
    // Stats
    stats: { control: "object", table: { category: "Stats" } },
  },
};

export default meta;
type Story = StoryObj<typeof IndustriesOverview>;

const defaultIndustries: IndustryItem[] = [
  { title: "Kafići & Barovi", subtitle: "Online meni & rezervacije", icon: "coffee", color: "purple" },
  { title: "Restorani", subtitle: "Online meni & rezervacije", icon: "utensils", color: "cyan" },
  { title: "Hoteli", subtitle: "Check-in & usluge", icon: "hotel", color: "green" },
  { title: "Trgovački Centri", subtitle: "Navigacija & promocije", icon: "shopping", color: "pink" },
];

const defaultBenefits: BenefitItem[] = [
  { title: "Prikupljanje Podataka", subtitle: "Email, demografija", icon: "database", color: "purple" },
  { title: "Povećanje Prodaje", subtitle: "Direktne promocije", icon: "trending", color: "green" },
  { title: "Ciljani Marketing", subtitle: "Personalizacija", icon: "target", color: "cyan" },
  { title: "Analitika", subtitle: "Real-time podaci", icon: "chart", color: "pink" },
];

const defaultStats: StatItem[] = [
  { value: "+45%", label: "Povrat", color: "green" },
  { value: "+30%", label: "Email", color: "purple" },
  { value: "+25%", label: "Boravak", color: "cyan" },
  { value: "+20%", label: "Prodaja", color: "pink" },
];

/** Kompletna Industries sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    badge: "Industrije",
    titleStart: "Rješenje za",
    titleGradient: "Svaku Industriju",
    description: "Saraya Connect prilagođava se potrebama vašeg poslovanja i donosi mjerljive rezultate.",
    // Cards
    industries: defaultIndustries,
    // Benefits
    benefitsTitle: "Ključne Prednosti",
    benefits: defaultBenefits,
    // Stats
    stats: defaultStats,
  },
};
