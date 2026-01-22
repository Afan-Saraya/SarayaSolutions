import type { Meta, StoryObj } from "@storybook/react";
import GameTypesHeader from "./GameTypesHeader";

const meta: Meta<typeof GameTypesHeader> = {
  title: "Pages/Games/GameTypes/Header",
  component: GameTypesHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameTypesHeader>;

export default meta;
type Story = StoryObj<typeof GameTypesHeader>;

export const Bosnian: Story = {
  args: {
    title: "Vrste",
    titleGradient: "igara",
    description: "Razvijamo različite vrste igara prilagođene vašim ciljevima.",
  },
};

export const English: Story = {
  args: {
    title: "Types of",
    titleGradient: "games",
    description: "We develop different types of games tailored to your goals.",
  },
};
