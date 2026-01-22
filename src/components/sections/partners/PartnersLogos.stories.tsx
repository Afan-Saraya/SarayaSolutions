import type { Meta, StoryObj } from "@storybook/react";
import PartnersLogos from "./PartnersLogos";

const meta: Meta<typeof PartnersLogos> = {
  title: "Sections/Partners/Logos",
  component: PartnersLogos,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PartnersLogos>;

export const Default: Story = {};
