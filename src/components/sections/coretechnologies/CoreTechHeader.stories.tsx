import type { Meta, StoryObj } from "@storybook/react";
import CoreTechHeader from "./CoreTechHeader";

const meta: Meta<typeof CoreTechHeader> = {
  title: "Pages/Technology/CoreTechnologies/Header",
  component: CoreTechHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CoreTechHeader>;

export default meta;
type Story = StoryObj<typeof CoreTechHeader>;

export const Bosnian: Story = {
  args: {
    title: "Osnovne",
    titleGradient: "tehnologije",
    description: "Kombinacija najnaprednijih tehnologija za kreiranje jedinstvenih digitalnih iskustava.",
  },
};

export const English: Story = {
  args: {
    title: "Core",
    titleGradient: "technologies",
    description: "Combination of the most advanced technologies for creating unique digital experiences.",
  },
};
