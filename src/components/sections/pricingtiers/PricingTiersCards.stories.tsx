import type { Meta, StoryObj } from "@storybook/react";
import PricingTiersCards from "./PricingTiersCards";

const meta: Meta<typeof PricingTiersCards> = {
  title: "Pages/Print/PricingTiers/Cards",
  component: PricingTiersCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PricingTiersCards>;

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
