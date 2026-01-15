import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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
  activeText,
  // Summary props
  title,
  subtitle,
  stats,
}: CoverageOverviewProps) => (
  <section className="py-12 md:py-24 relative">
    <div className="container mx-auto px-4">
      <CoverageHeader
        badge={badge}
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
      />

      <CoverageZones
        zones={zones}
        activeText={activeText}
      />

      <CoverageSummary
        title={title}
        subtitle={subtitle}
        stats={stats}
      />
    </div>
  </section>
);

const meta: Meta<typeof CoverageOverview> = {
  title: "Sections/Coverage/Overview",
  component: CoverageOverview,
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
    // Zones
    zones: { control: "object", table: { category: "Zones" } },
    activeText: { control: "text", table: { category: "Zones" } },
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
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.4100%2C43.8560%2C18.4320%2C43.8620&layer=mapnik&marker=43.8590%2C18.4210",
    location: "Ferhadija • Titova",
    radius: "~1.2 km radius",
    zoneName: "Zona 1 - Centar",
    color: "purple",
    locationIcon: "📍",
  },
  {
    id: "skenderija",
    name: "Skenderija",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.4050%2C43.8540%2C18.4200%2C43.8600&layer=mapnik&marker=43.8570%2C18.4125",
    location: "Centar Skenderija",
    radius: "~500 m radius",
    zoneName: "Zona 2 - Skenderija",
    color: "green",
    locationIcon: "📍",
  },
  {
    id: "bjelasnica",
    name: "Bjelašnica",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.2500%2C43.7100%2C18.2900%2C43.7350&layer=mapnik&marker=43.7225%2C18.2700",
    location: "Olimpijska planina",
    radius: "~800 m radius",
    zoneName: "Zona 3 - Bjelašnica",
    color: "cyan",
    locationIcon: "🏔️",
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
    badge: "Sarajevo & Okolina",
    titleStart: "Saraya Mreža",
    titleGradient: "Zone Pokrivenosti",
    description: "Saraya je etablirala svoju Wi-Fi mrežu u Sarajevu i okolini s besplatnim pristupom.",
    // Zones
    zones: defaultZones,
    activeText: "Aktivno",
    // Summary
    title: "3 aktivne zone pokrivenosti",
    subtitle: "Besplatan Wi-Fi za sve korisnike",
    stats: defaultStats,
  },
};
