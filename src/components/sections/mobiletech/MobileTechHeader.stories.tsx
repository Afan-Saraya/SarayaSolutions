import type { Meta, StoryObj } from "@storybook/react";
import MobileTechHeader from "./MobileTechHeader";

const meta: Meta<typeof MobileTechHeader> = {
  title: "Pages/Technology/MobileTech/Header",
  component: MobileTechHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileTechHeader>;

export default meta;
type Story = StoryObj<typeof MobileTechHeader>;

export const Bosnian: Story = {
  args: {
    title: "Mobilne",
    titleGradient: "tehnologije",
    description: "Cross-platform i native tehnologije za razvoj mobilnih aplikacija.",
  },
};

export const English: Story = {
  args: {
    title: "Mobile",
    titleGradient: "technologies",
    description: "Cross-platform and native technologies for mobile app development.",
  },
};
