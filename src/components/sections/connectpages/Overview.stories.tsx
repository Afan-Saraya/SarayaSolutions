import type { Meta, StoryObj } from "@storybook/react";
import ConnectPagesHeader, { ConnectPagesHeaderProps } from "./ConnectPagesHeader";
import PageCards, { PageCardsProps, PageItem } from "./PageCards";
import PagesImportance, { PagesImportanceProps, ImportanceStat } from "./PagesImportance";

type ConnectPagesOverviewProps = ConnectPagesHeaderProps &
  PageCardsProps &
  PagesImportanceProps;

const ConnectPagesOverview = ({
  // Header props
  badge,
  titleStart,
  titleGradient,
  description,
  // Cards props
  pages,
  // Importance props
  title,
  description: importanceDescription,
  stats,
}: ConnectPagesOverviewProps) => (
  <section className="py-12 md:py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative z-10">
      <ConnectPagesHeader
        badge={badge}
        titleStart={titleStart}
        titleGradient={titleGradient}
        description={description}
      />

      <PageCards pages={pages} />

      <PagesImportance title={title} description={importanceDescription} stats={stats} />
    </div>
  </section>
);

const meta: Meta<typeof ConnectPagesOverview> = {
  title: "Pages/Connect/ConnectPages/Overview",
  component: ConnectPagesOverview,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 1200,
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
    pages: { control: "object", table: { category: "Pages" } },
    // Importance
    title: { control: "text", table: { category: "Importance" } },
    stats: { control: "object", table: { category: "Importance" } },
  },
};

export default meta;
type Story = StoryObj<typeof ConnectPagesOverview>;

const defaultPages: PageItem[] = [
  {
    logo: "/images/logos/reward center.png",
    alt: "Rewards Center",
    description:
      "Loyalty program koji nagrađuje korisnike za svaku posjetu i interakciju. Korisnici skupljaju bodove, osvajaju nagrade i dobivaju ekskluzivne popuste od partnera na mreži.",
    features: ["Skupljanje bodova", "Ekskluzivne nagrade", "Partnerski popusti"],
    color: "purple",
  },
  {
    logo: "/images/logos/pametno odabrano.png",
    alt: "Pametno Odabrano",
    description:
      "AI-powered sistem preporuka koji korisnicima predlaže relevantne proizvode, usluge i sadržaje bazirano na njihovim interesima i lokaciji.",
    features: ["Personalizirane preporuke", "Lokalne ponude", "Pametno filtriranje"],
    color: "green",
  },
  {
    logo: "/images/logos/explore sarajevo.png",
    alt: "Explore Sarajevo",
    description:
      "Interaktivni turistički vodič kroz Sarajevo s preporukama restorana, kafića, atrakcija i događaja. Idealno za turiste i lokalne stanovnike.",
    features: ["Mapa grada", "Preporuke lokacija", "Događaji u gradu"],
    color: "cyan",
  },
];

const defaultStats: ImportanceStat[] = [
  { value: "50K+", label: "Aktivnih korisnika", color: "green" },
  { value: "100+", label: "Partnera", color: "purple" },
  { value: "24/7", label: "Dostupnost", color: "cyan" },
];

/** Kompletna Saraya Connect Pages sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    badge: "Na Captive Portalu",
    titleStart: "Saraya Connect",
    titleGradient: "Stranice",
    description:
      "Pored osnovne stranice za prijavu, korisnici na našoj javnoj Wi-Fi mreži imaju pristup ekskluzivnim stranicama koje pružaju dodatnu vrijednost.",
    // Cards
    pages: defaultPages,
    // Importance
    importanceTitle: "Zašto su ove stranice važne?",
    importanceDescription:
      "Saraya Connect stranice transformiraju običan Wi-Fi pristup u bogato korisničko iskustvo. Korisnici ne samo da dobivaju besplatan internet, već i pristup ekskluzivnim sadržajima, nagradama i lokalnim informacijama — sve na jednom mjestu.",
    importanceStats: defaultStats,
  },
};
