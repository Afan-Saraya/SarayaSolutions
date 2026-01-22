import type { Meta, StoryObj } from "@storybook/react";
import NetworkTechHeader from "./NetworkTechHeader";

const meta: Meta<typeof NetworkTechHeader> = {
  title: "Pages/Technology/NetworkTech/Header",
  component: NetworkTechHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NetworkTechHeader>;

export default meta;
type Story = StoryObj<typeof NetworkTechHeader>;

export const Bosnian: Story = {
  args: {
    title: "Mrežne",
    titleGradient: "tehnologije",
    description: "Napredna mrežna infrastruktura za povezivanje i upravljanje.",
  },
};

export const English: Story = {
  args: {
    title: "Network",
    titleGradient: "technologies",
    description: "Advanced network infrastructure for connectivity and management.",
  },
};
