import type { Meta, StoryObj } from "@storybook/react";
import OrderProcessHeader from "./OrderProcessHeader";

const meta: Meta<typeof OrderProcessHeader> = {
  title: "Pages/Print/OrderProcess/Header",
  component: OrderProcessHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OrderProcessHeader>;

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
