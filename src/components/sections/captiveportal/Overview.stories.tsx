import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PortalHeader, { PortalHeaderProps } from "./PortalHeader";
import PortalFeatures, { PortalFeaturesProps, FeatureItem } from "./PortalFeatures";
import PortalBenefits, { PortalBenefitsProps } from "./PortalBenefits";

type PortalOverviewProps = PortalHeaderProps & PortalFeaturesProps & PortalBenefitsProps;

const PortalOverview = ({
  // Header props
  titleStart,
  titleGradient,
  description,
  // Features props
  features,
  // Benefits props
  title,
  benefits,
}: PortalOverviewProps) => (
  <section className="py-24 relative bg-background">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative z-10">
      <PortalHeader
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
      />

      <PortalFeatures features={features} />

      <PortalBenefits title={title} benefits={benefits} />
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
    // Header
    titleStart: { control: "text", table: { category: "Header" } },
    titleGradient: { control: "text", table: { category: "Header" } },
    description: { control: "text", table: { category: "Header" } },
    // Features
    features: { control: "object", table: { category: "Features" } },
    // Benefits
    title: { control: "text", table: { category: "Benefits" } },
    benefits: { control: "object", table: { category: "Benefits" } },
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
  "Potpuna prilagodba vašem brendu i poslovanju",
  "Skalabilnost — od jedne do stotine lokacija",
  "Integracija s loyalty programima i CRM sistemima",
  "Detaljni izvještaji o ponašanju korisnika",
  "Personalizirani sadržaji bazirani na lokaciji i vremenu",
];

/** Kompletna Captive Portal sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    titleStart: "Captivni Portal /",
    titleGradient: "Hotspot Stranica",
    description: "Prilagodljivi captivni portali koji omogućavaju potpunu kontrolu nad sadržajem.",
    // Features
    features: defaultFeatures,
    // Benefits
    title: "Prednosti Saraya Hotspot Rješenja:",
    benefits: defaultBenefits,
  },
};
