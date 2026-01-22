import type { Meta, StoryObj } from "@storybook/react";
import GameTechHeader from "./GameTechHeader";

const meta: Meta<typeof GameTechHeader> = {
  title: "Pages/Technology/GameTech/Header",
  component: GameTechHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameTechHeader>;

export default meta;
type Story = StoryObj<typeof GameTechHeader>;

export const Bosnian: Story = {
  args: {
    title: "Game Development",
    titleGradient: "tehnologije",
    description: "Profesionalni game engine-i za kreiranje imerzivnih gaming iskustava.",
  },
};

export const English: Story = {
  args: {
    title: "Game Development",
    titleGradient: "technologies",
    description: "Professional game engines for creating immersive gaming experiences.",
  },
};
