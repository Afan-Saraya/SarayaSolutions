import type { Meta, StoryObj } from "@storybook/react";
import PricingTiersSection from "./PricingTiersSection";

const meta: Meta<typeof PricingTiersSection> = {
  title: "Pages/Print/PricingTiers/Overview",
  component: PricingTiersSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PricingTiersSection>;

export const Bosnian: Story = {
  args: {
    language: "bs",
  },
};

export const English: Story = {
  args: {
    language: "en",
  },
};
