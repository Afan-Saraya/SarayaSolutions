import type { Meta, StoryObj } from "@storybook/react";
import PortalHeader, { PortalHeaderProps } from "./PortalHeader";
import PortalFeatures, { PortalFeaturesProps, FeatureItem } from "./PortalFeatures";
import PortalBenefits, { PortalBenefitsProps } from "./PortalBenefits";
import PortalConnectPages, { PortalConnectPagesProps, ConnectPageItem } from "./PortalConnectPages";

type PortalOverviewProps = PortalHeaderProps & 
  PortalFeaturesProps & 
  PortalBenefitsProps & {
    connectTitle: string;
    connectDescription: string;
    connectPages: ConnectPageItem[];
  };

const PortalOverview = ({
  // Header props
  badge,
  titleStart,
  titleGradient,
  description,
  // Features props
  features,
  // Benefits props
  title,
  benefits,
  // Connect Pages props
  connectTitle,
  connectDescription,
  connectPages,
}: PortalOverviewProps) => (
  <section className="py-12 md:py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative z-10">
      <PortalHeader
        badge={badge}
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
      />

      <PortalFeatures features={features} />

      <div className="grid md:grid-cols-2 gap-6">
        <PortalBenefits title={title} benefits={benefits} />
        <PortalConnectPages 
          title={connectTitle} 
          description={connectDescription}
          pages={connectPages} 
        />
      </div>
    </div>
  </section>
);

const meta: Meta<typeof PortalOverview> = {
  title: "Pages/Connect/CaptivePortal/Overview",
  component: PortalOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 1000,
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
    // Features
    features: { control: "object", table: { category: "Features" } },
    // Benefits
    title: { control: "text", table: { category: "Benefits" } },
    benefits: { control: "object", table: { category: "Benefits" } },
    // Connect Pages
    connectTitle: { control: "text", table: { category: "Connect Pages" } },
    connectDescription: { control: "text", table: { category: "Connect Pages" } },
    connectPages: { control: "object", table: { category: "Connect Pages" } },
  },
};

export default meta;
type Story = StoryObj<typeof PortalOverview>;

const defaultFeatures: FeatureItem[] = [
  {
    title: "Brendirani Portal",
    description: "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand.",
    icon: "megaphone",
  },
  {
    title: "Marketing & Promocije",
    description: "Prikazujte ponude i promocije korisnicima prilikom spajanja.",
    icon: "shopping",
  },
  {
    title: "Analitika Ponašanja",
    description: "Pratite kako se korisnici kreću i što ih zanima.",
    icon: "chart",
  },
];

const defaultBenefits = [
  "Potpuna prilagodba vašem brendu",
  "Skalabilnost — od jedne do stotine lokacija",
  "Integracija s loyalty programima",
  "Detaljni izvještaji o ponašanju korisnika",
];

const defaultConnectPages: ConnectPageItem[] = [
  {
    title: "Rewards Center",
    subtitle: "Loyalty program",
    color: "purple",
  },
  {
    title: "Pametno Odabrano",
    subtitle: "AI preporuke",
    color: "green",
  },
  {
    title: "Explore Sarajevo",
    subtitle: "Vodič kroz grad",
    color: "cyan",
  },
];

/** Kompletna Captive Portal sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    badge: "Portal Rješenja",
    titleStart: "Captivni",
    titleGradient: "Portal",
    description: "Prilagodljivi portali koji omogućavaju potpunu kontrolu nad sadržajem.",
    // Features
    features: defaultFeatures,
    // Benefits
    title: "Prednosti Saraya Hotspot Rješenja",
    benefits: defaultBenefits,
    // Connect Pages
    connectTitle: "Saraya Connect Stranice",
    connectDescription: "Na našoj javnoj mreži, korisnici imaju pristup ekskluzivnim stranicama:",
    connectPages: defaultConnectPages,
  },
};
