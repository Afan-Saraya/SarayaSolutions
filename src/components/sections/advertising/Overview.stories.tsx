import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdvertisingHeader, { AdvertisingHeaderProps } from "./AdvertisingHeader";
import AdvertisingStats, { AdvertisingStatsProps, StatItem } from "./AdvertisingStats";
import AdvertisingFormats, { AdvertisingFormatsProps, FormatItem } from "./AdvertisingFormats";
import AdvertisingBenefits, { AdvertisingBenefitsProps } from "./AdvertisingBenefits";

type AdvertisingOverviewProps = AdvertisingHeaderProps & {
  stats: StatItem[];
  formatsTitle: string;
  formats: FormatItem[];
  benefitsTitle: string;
  benefits: string[];
  buttonText: string;
  buttonHref?: string;
};

const AdvertisingOverview = ({
  // Header props
  badge,
  title,
  titleHighlight,
  description,
  // Stats props
  stats,
  // Formats props
  formatsTitle,
  formats,
  // Benefits props
  benefitsTitle,
  benefits,
  buttonText,
  buttonHref,
}: AdvertisingOverviewProps) => (
  <section className="py-16 md:py-24 bg-background-dark">
    <div className="container mx-auto px-4">
      <AdvertisingHeader
        badge={badge}
        title={title}
        titleHighlight={titleHighlight}
        description={description}
      />

      <AdvertisingStats stats={stats} />

      <div className="grid md:grid-cols-2 gap-8">
        <AdvertisingFormats title={formatsTitle} formats={formats} />
        <AdvertisingBenefits
          title={benefitsTitle}
          benefits={benefits}
          buttonText={buttonText}
          buttonHref={buttonHref}
        />
      </div>
    </div>
  </section>
);

const meta: Meta<typeof AdvertisingOverview> = {
  title: "Sections/Advertising/Overview",
  component: AdvertisingOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    badge: { control: "text", table: { category: "Header" } },
    title: { control: "text", table: { category: "Header" } },
    titleHighlight: { control: "text", table: { category: "Header" } },
    description: { control: "text", table: { category: "Header" } },
    stats: { control: "object", table: { category: "Stats" } },
    formatsTitle: { control: "text", table: { category: "Formats" } },
    formats: { control: "object", table: { category: "Formats" } },
    benefitsTitle: { control: "text", table: { category: "Benefits" } },
    benefits: { control: "object", table: { category: "Benefits" } },
    buttonText: { control: "text", table: { category: "Benefits" } },
  },
};

export default meta;
type Story = StoryObj<typeof AdvertisingOverview>;

const defaultStats: StatItem[] = [
  { value: "20,000+", label: "Dnevnih korisnika" },
  { value: "3", label: "Zone pokrivenosti" },
  { value: "100%", label: "Vidljivost oglasa" },
  { value: "15s+", label: "Prosječno vrijeme gledanja" },
];

const defaultFormats: FormatItem[] = [
  {
    icon: "monitor",
    title: "Splash Screen Oglas",
    description: "Full-screen oglas prilikom spajanja na Wi-Fi.",
  },
  {
    icon: "layout",
    title: "Banner Oglasi",
    description: "Banneri na portalu i stranicama unutar mreže.",
  },
];

const defaultBenefits: string[] = [
  "Ciljana publika u centru grada",
  "Visoka stopa angažmana",
  "Mjerljivi rezultati",
  "Fleksibilni paketi",
];

/** Kompletna Advertising sekcija (Oglašavanje na Saraya Mreži) */
export const Default: Story = {
  args: {
    // Header
    badge: "Oglašavanje",
    title: "Oglašavanje na",
    titleHighlight: "Saraya Mreži",
    description:
      "Dosegnite hiljade korisnika dnevno kroz captive portal — vašu priliku za direktnu komunikaciju.",
    // Stats
    stats: defaultStats,
    // Formats
    formatsTitle: "Formati Oglašavanja",
    formats: defaultFormats,
    // Benefits
    benefitsTitle: "Zašto Oglašavati?",
    benefits: defaultBenefits,
    buttonText: "Zatražite Ponudu",
  },
};
