import type { Meta, StoryObj } from "@storybook/react";
import GameUseCasesHeader from "./GameUseCasesHeader";

const meta: Meta<typeof GameUseCasesHeader> = {
  title: "Pages/Games/GameUseCases/Header",
  component: GameUseCasesHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameUseCasesHeader>;

export default meta;
type Story = StoryObj<typeof GameUseCasesHeader>;

export const Bosnian: Story = {
  args: {
    title: "Gdje se",
    titleGradient: "koriste",
  },
};

export const English: Story = {
  args: {
    title: "Where they are",
    titleGradient: "used",
  },
};
