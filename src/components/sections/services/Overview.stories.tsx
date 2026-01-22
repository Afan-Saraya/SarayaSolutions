import type { Meta, StoryObj } from "@storybook/react";
import ServicesHeader, { ServicesHeaderProps } from "./ServicesHeader";
import ServicesCards, { ServicesCardsProps, ServiceCardItem } from "./ServicesCards";

type ServicesOverviewProps = ServicesHeaderProps & ServicesCardsProps;

const ServicesOverview = ({
  title,
  titleHighlight,
  cards,
}: ServicesOverviewProps) => (
  <section className="py-16 md:py-24 bg-background-dark">
    <div className="container mx-auto px-4">
      <ServicesHeader title={title} titleHighlight={titleHighlight} />
      <ServicesCards cards={cards} />
    </div>
  </section>
);

const meta: Meta<typeof ServicesOverview> = {
  title: "Pages/Home/Services/Overview",
  component: ServicesOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", table: { category: "Header" } },
    titleHighlight: { control: "text", table: { category: "Header" } },
    cards: { control: "object", table: { category: "Cards" } },
  },
};

export default meta;
type Story = StoryObj<typeof ServicesOverview>;

const defaultCards: ServiceCardItem[] = [
  {
    icon: "megaphone",
    badge: "Za oglašivače",
    badgeVariant: "primary",
    title: "Oglašavanje na Javnoj Mreži",
    description: "Dosegnite hiljade korisnika dnevno na besplatnoj Saraya Wi-Fi mreži u centru Sarajeva, Skenderiji i Bjelašnici.",
    features: ["Splash screen oglasi", "Banner kampanje", "Geo-targeting", "Detaljni izvještaji"],
    color: "purple",
  },
  {
    icon: "wifi",
    badge: "Za objekte",
    badgeVariant: "accent",
    title: "Vlastiti Captive Portal",
    description: "Kreirajte brendirani Wi-Fi portal za vaš kafić, restoran, hotel ili trgovinu.",
    features: ["Prilagodba brendu", "Prikupljanje podataka", "Marketing automatizacija", "Loyalty integracija", "Neograničen broj lokacija"],
    color: "green",
    highlighted: true,
    highlightLabel: "Najpopularnije",
  },
  {
    icon: "utensils",
    badge: "Za ugostiteljstvo",
    badgeVariant: "secondary",
    title: "Online Meni & Rezervacije",
    description: "Digitalni meni i rezervacije integrirani direktno na Wi-Fi hotspot vašeg lokala.",
    features: ["Meni na captive portalu", "Online rezervacije", "Automatski pristup pri spajanju", "Real-time ažuriranje"],
    color: "cyan",
  },
];

/** Kompletna Services sekcija (Šta Nudimo) */
export const Default: Story = {
  args: {
    title: "Šta",
    titleHighlight: "Nudimo",
    cards: defaultCards,
  },
};
