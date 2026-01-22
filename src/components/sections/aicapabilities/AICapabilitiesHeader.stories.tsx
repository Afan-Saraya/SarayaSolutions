import type { Meta, StoryObj } from "@storybook/react";
import AICapabilitiesHeader from "./AICapabilitiesHeader";

const meta: Meta<typeof AICapabilitiesHeader> = {
  title: "Pages/Technology/AICapabilities/Header",
  component: AICapabilitiesHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AICapabilitiesHeader>;

export default meta;
type Story = StoryObj<typeof AICapabilitiesHeader>;

export const Bosnian: Story = {
  args: {
    title: "AI",
    titleGradient: "mogućnosti",
    description: "Napredne AI tehnologije za inteligentnu interakciju i personalizaciju.",
  },
};

export const English: Story = {
  args: {
    title: "AI",
    titleGradient: "capabilities",
    description: "Advanced AI technologies for intelligent interaction and personalization.",
  },
};
