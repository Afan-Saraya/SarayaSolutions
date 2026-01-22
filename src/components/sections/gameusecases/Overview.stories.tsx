import type { Meta, StoryObj } from "@storybook/react";
import GameUseCasesSection from "./GameUseCasesSection";

const meta: Meta<typeof GameUseCasesSection> = {
  title: "Pages/Games/GameUseCases/Overview",
  component: GameUseCasesSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameUseCasesSection>;

export default meta;
type Story = StoryObj<typeof GameUseCasesSection>;

export const Bosnian: Story = {
  args: {
    title: "Gdje se",
    titleGradient: "koriste",
    useCases: [
      { title: "Trgovački Centri", description: "Privucite posjetitelje interaktivnim sadržajem koji ih zadržava duže." },
      { title: "Eventi i Sajmovi", description: "Istaknite se na sajmovima s branded igrama koje privlače pažnju." },
      { title: "Hoteli i Restorani", description: "Zabavite goste dok čekaju i stvorite pozitivna iskustva." },
      { title: "Edukacija", description: "Učinite učenje zabavnim kroz interaktivne edukativne igre." },
    ],
  },
};

export const English: Story = {
  args: {
    title: "Where they are",
    titleGradient: "used",
    useCases: [
      { title: "Shopping Centers", description: "Attract visitors with interactive content that keeps them longer." },
      { title: "Events & Trade Shows", description: "Stand out at trade shows with branded games that attract attention." },
      { title: "Hotels & Restaurants", description: "Entertain guests while they wait and create positive experiences." },
      { title: "Education", description: "Make learning fun through interactive educational games." },
    ],
  },
};
