import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ServicesCards, { ServiceCardItem } from "./ServicesCards";

const meta: Meta<typeof ServicesCards> = {
  title: "Sections/Services/ServicesCards",
  component: ServicesCards,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    cards: { control: "object", description: "Niz kartica sa uslugama" },
  },
  decorators: [
    (Story) => (
      <div className="bg-background-dark p-8">
        <div className="container mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ServicesCards>;

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

/** Default kartice za Saraya Connect */
export const Default: Story = {
  args: {
    cards: defaultCards,
  },
};
