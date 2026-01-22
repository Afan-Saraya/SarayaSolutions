import type { Meta, StoryObj } from "@storybook/react";
import Products from "./Products";

const meta: Meta<typeof Products> = {
  title: "Sections/Products",
  component: Products,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Products>;

export const Default: Story = {};
