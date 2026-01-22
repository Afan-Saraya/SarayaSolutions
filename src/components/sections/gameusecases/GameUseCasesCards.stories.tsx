import type { Meta, StoryObj } from "@storybook/react";
import GameUseCasesCards from "./GameUseCasesCards";

const meta: Meta<typeof GameUseCasesCards> = {
  title: "Pages/Games/GameUseCases/Cards",
  component: GameUseCasesCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameUseCasesCards>;

export default meta;
type Story = StoryObj<typeof GameUseCasesCards>;

export const Bosnian: Story = {
  args: {
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
    useCases: [
      { title: "Shopping Centers", description: "Attract visitors with interactive content that keeps them longer." },
      { title: "Events & Trade Shows", description: "Stand out at trade shows with branded games that attract attention." },
      { title: "Hotels & Restaurants", description: "Entertain guests while they wait and create positive experiences." },
      { title: "Education", description: "Make learning fun through interactive educational games." },
    ],
  },
};
