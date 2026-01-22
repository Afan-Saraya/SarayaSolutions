import type { Meta, StoryObj } from "@storybook/react";
import CTA from "./CTA";

const meta: Meta<typeof CTA> = {
  title: "Sections/CTA",
  component: CTA,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CTA>;

export const Default: Story = {};
