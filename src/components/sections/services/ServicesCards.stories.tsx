import type { Meta, StoryObj } from "@storybook/react";
import ServicesCards, { ServiceCardItem } from "./ServicesCards";

const meta: Meta<typeof ServicesCards> = {
  title: "Sections/Services/Cards",
  component: ServicesCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ServicesCards>;

const defaultCards: ServiceCardItem[] = [
  {
    icon: "megaphone",
    badge: "Oglašavanje",
    badgeVariant: "primary",
    title: "Saraya Connect",
    description: "Besplatni Wi-Fi sa oglašavanjem na najprometnijim lokacijama",
    features: ["Captive Portal", "Analitika", "Targeting", "Real-time izvještaji"],
    color: "purple",
  },
  {
    icon: "wifi",
    badge: "Wi-Fi Rješenje",
    badgeVariant: "accent",
    title: "Saraya Hotspot",
    description: "Vlastito Wi-Fi rješenje za vaš objekat sa brendiranim portalom",
    features: ["Brendirani portal", "Email marketing", "Prikupljanje podataka", "Marketing automatizacija"],
    color: "green",
    highlighted: true,
    highlightLabel: "Preporučeno",
  },
  {
    icon: "utensils",
    badge: "Dodatne Opcije",
    badgeVariant: "secondary",
    title: "Online Meni & Rezervacije",
    description: "Digitalni meniji i sistem rezervacija za ugostiteljske objekte",
    features: ["QR kod meniji", "Online rezervacije", "Višejezična podrška", "Real-time ažuriranje"],
    color: "cyan",
  },
];

export const Default: Story = {
  args: {
    cards: defaultCards,
  },
};

export const TwoCards: Story = {
  args: {
    cards: defaultCards.slice(0, 2),
  },
};

export const SingleCard: Story = {
  args: {
    cards: [defaultCards[1]],
  },
};
