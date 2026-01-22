import type { Meta, StoryObj } from "@storybook/react";
import CoverageHeader, { CoverageHeaderProps } from "./CoverageHeader";
import CoverageZones, { CoverageZonesProps, ZoneItem } from "./CoverageZones";
import CoverageSummary, { CoverageSummaryProps, StatItem } from "./CoverageSummary";

type CoverageOverviewProps = CoverageHeaderProps & CoverageZonesProps & CoverageSummaryProps;

const CoverageOverview = ({
  // Header props
  badge,
  titleStart,
  titleGradient,
  description,
  // Zones props
  zones,
  // Summary props
  title,
  subtitle,
  stats,
}: CoverageOverviewProps) => (
  <section className="py-12 md:py-24 relative bg-background">
    <div className="container mx-auto px-4">
      <CoverageHeader
        badge={badge}
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
      />

      <CoverageZones zones={zones} />

      <CoverageSummary
        title={title}
        subtitle={subtitle}
        stats={stats}
      />
    </div>
  </section>
);

const meta: Meta<typeof CoverageOverview> = {
  title: "Pages/Connect/Coverage/Overview",
  component: CoverageOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Header
    badge: { control: "text", table: { category: "Header" } },
    titleStart: { control: "text", table: { category: "Header" } },
    titleGradient: { control: "text", table: { category: "Header" } },
    description: { control: "text", table: { category: "Header" } },
    // Zones
    zones: { control: "object", table: { category: "Zones" } },
    // Summary
    title: { control: "text", table: { category: "Summary" } },
    subtitle: { control: "text", table: { category: "Summary" } },
    stats: { control: "object", table: { category: "Summary" } },
  },
};

export default meta;
type Story = StoryObj<typeof CoverageOverview>;

const defaultZones: ZoneItem[] = [
  {
    id: "centar",
    name: "Centar Sarajeva",
    gifUrl: "/images/mreza-titova-carsija.gif",
    location: "Ferhadija • Titova",
    radius: "~1.2 km",
    color: "purple",
  },
  {
    id: "skenderija",
    name: "Skenderija",
    gifUrl: "/images/mreza-vilsonovo.gif",
    location: "Centar Skenderija",
    radius: "~500 m",
    color: "green",
  },
  {
    id: "bjelasnica",
    name: "Bjelašnica",
    gifUrl: "/images/mreza-bjelasnica.gif",
    location: "Olimpijska planina",
    radius: "~800 m",
    color: "cyan",
  },
];

const defaultStats: StatItem[] = [
  { value: "20k+", label: "Dnevnih korisnika", color: "purple" },
  { value: "99.9%", label: "Uptime", color: "green" },
];

/** Kompletna Coverage Zones sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    badge: "Pokrivenost",
    titleStart: "Saraya Mreža",
    titleGradient: "Zone",
    description: "Saraya je etablirala svoju Wi-Fi mrežu u Sarajevu i okolini s besplatnim pristupom.",
    // Zones
    zones: defaultZones,
    // Summary
    title: "3 aktivne zone",
    subtitle: "Besplatan Wi-Fi za sve",
    stats: defaultStats,
  },
};
