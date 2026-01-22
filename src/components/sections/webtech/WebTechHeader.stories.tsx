import type { Meta, StoryObj } from "@storybook/react";
import WebTechHeader from "./WebTechHeader";

const meta: Meta<typeof WebTechHeader> = {
  title: "Pages/Technology/WebTech/Header",
  component: WebTechHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WebTechHeader>;

export default meta;
type Story = StoryObj<typeof WebTechHeader>;

export const Bosnian: Story = {
  args: {
    title: "Web",
    titleGradient: "tehnologije",
    description: "Moderne web tehnologije za kreiranje brzih i skalabilnih aplikacija.",
  },
};

export const English: Story = {
  args: {
    title: "Web",
    titleGradient: "technologies",
    description: "Modern web technologies for creating fast and scalable applications.",
  },
};
