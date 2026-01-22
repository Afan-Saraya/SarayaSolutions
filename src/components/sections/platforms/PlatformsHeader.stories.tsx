import type { Meta, StoryObj } from "@storybook/react";
import PlatformsHeader from "./PlatformsHeader";

const meta: Meta<typeof PlatformsHeader> = {
  title: "Pages/Applications/Platforms/Header",
  component: PlatformsHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlatformsHeader>;

export default meta;
type Story = StoryObj<typeof PlatformsHeader>;

export const Bosnian: Story = {
  args: {
    title: "Odaberite",
    titleGradient: "platformu",
    description: "Razvijamo za sve platforme — odaberite onu koja najbolje odgovara vašim potrebama.",
  },
};

export const English: Story = {
  args: {
    title: "Choose your",
    titleGradient: "platform",
    description: "We develop for all platforms — choose the one that best suits your needs.",
  },
};
