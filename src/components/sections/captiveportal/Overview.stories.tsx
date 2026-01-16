import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "@/components/ui/Badge";
import { RefreshCw } from "lucide-react";
import PortalHeader, { PortalHeaderProps } from "./PortalHeader";
import PortalFeatures, { PortalFeaturesProps, FeatureItem } from "./PortalFeatures";
import PortalBenefits, { PortalBenefitsProps } from "./PortalBenefits";
import PortalConnectPages, { PortalConnectPagesProps, ConnectPageItem } from "./PortalConnectPages";

type PortalOverviewProps = PortalHeaderProps & PortalFeaturesProps & PortalBenefitsProps & {
  badge?: string;
  connectTitle?: string;
  connectDescription?: string;
  connectPages?: ConnectPageItem[];
};

const PortalOverview = ({
  // Badge
  badge,
  // Header props
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
  <section className="py-24 relative bg-background">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative z-10">
      {badge && (
        <div className="text-center mb-6">
          <Badge variant="primary">
            <RefreshCw size={14} className="mr-2" />
            {badge}
          </Badge>
        </div>
      )}

      <PortalHeader
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
  title: "Sections/CaptivePortal/Overview",
  component: PortalOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Badge
    badge: { control: "text", table: { category: "Badge" } },
    // Header
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
    title: "Brendirani Captive Portal",
    description: "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand i komunicira s korisnicima.",
    icon: "megaphone",
  },
  {
    title: "Marketing & Promocije",
    description: "Prikazujte ponude, najave i promocije korisnicima prilikom spajanja na Wi-Fi.",
    icon: "shopping",
  },
  {
    title: "Analitika Ponašanja",
    description: "Pratite kako se korisnici kreću, koliko ostaju i što ih zanima — podaci za bolje odluke.",
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
  { title: "Rewards Center", subtitle: "Loyalty program", color: "purple" },
  { title: "Pametno Odabrano", subtitle: "AI preporuke", color: "green" },
  { title: "Explore Sarajevo", subtitle: "Vodič kroz grad", color: "cyan" },
];

/** Kompletna Captive Portal sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Badge
    badge: "Portal Rješenja",
    // Header
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
