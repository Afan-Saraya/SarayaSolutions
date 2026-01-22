import type { Meta, StoryObj } from "@storybook/react";
import DisplayTechHeader from "./DisplayTechHeader";

const meta: Meta<typeof DisplayTechHeader> = {
  title: "Pages/Technology/DisplayTech/Header",
  component: DisplayTechHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DisplayTechHeader>;

export default meta;
type Story = StoryObj<typeof DisplayTechHeader>;

export const Bosnian: Story = {
  args: {
    title: "Display",
    titleGradient: "tehnologije",
    description: "Napredni display sistemi za sve vrste poslovnih potreba.",
  },
};

export const English: Story = {
  args: {
    title: "Display",
    titleGradient: "technologies",
    description: "Advanced display systems for all types of business needs.",
  },
};
