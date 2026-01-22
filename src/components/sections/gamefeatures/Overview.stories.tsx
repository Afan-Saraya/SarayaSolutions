import type { Meta, StoryObj } from "@storybook/react";
import GameFeaturesSection from "./GameFeaturesSection";

const meta: Meta<typeof GameFeaturesSection> = {
  title: "Pages/Games/GameFeatures/Overview",
  component: GameFeaturesSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameFeaturesSection>;

export default meta;
type Story = StoryObj<typeof GameFeaturesSection>;

export const Bosnian: Story = {
  args: {
    title: "Funkcionalnosti",
    titleGradient: "igara",
    description: "Naše igre dolaze s naprednim funkcionalnostima za maksimalan angažman.",
    features: [
      "Potpuna prilagodba vašem brendu",
      "Gamifikacija korisničkog iskustva",
      "Leaderboard i nagrade",
      "Detaljna analitika igranja",
      "Multiplayer opcije",
      "Integracija s loyalty programima",
      "Cross-platform podrška",
      "Redovno ažuriranje sadržaja",
    ],
  },
};

export const English: Story = {
  args: {
    title: "Features of",
    titleGradient: "games",
    description: "Our games come with advanced features for maximum engagement.",
    features: [
      "Full customization to your brand",
      "Gamification of user experience",
      "Leaderboard and rewards",
      "Detailed gameplay analytics",
      "Multiplayer options",
      "Integration with loyalty programs",
      "Cross-platform support",
      "Regular content updates",
    ],
  },
};
