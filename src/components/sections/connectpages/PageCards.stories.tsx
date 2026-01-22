import type { Meta, StoryObj } from "@storybook/react";
import PageCards, { PageItem } from "./PageCards";

const meta: Meta<typeof PageCards> = {
  title: "Pages/Connect/ConnectPages/Cards",
  component: PageCards,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="container mx-auto px-4 py-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    pages: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof PageCards>;

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

export const Default: Story = {
  args: {
    pages: defaultPages,
  },
};
