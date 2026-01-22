import type { Meta, StoryObj } from "@storybook/react";
import PricingTiersHeader from "./PricingTiersHeader";

const meta: Meta<typeof PricingTiersHeader> = {
  title: "Pages/Print/PricingTiers/Header",
  component: PricingTiersHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PricingTiersHeader>;

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
