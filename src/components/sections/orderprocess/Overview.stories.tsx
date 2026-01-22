import type { Meta, StoryObj } from "@storybook/react";
import OrderProcessSection from "./OrderProcessSection";

const meta: Meta<typeof OrderProcessSection> = {
  title: "Pages/Print/OrderProcess/Overview",
  component: OrderProcessSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OrderProcessSection>;

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
