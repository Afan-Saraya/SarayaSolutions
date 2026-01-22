import type { Meta, StoryObj } from "@storybook/react";
import OrderProcessSteps from "./OrderProcessSteps";

const meta: Meta<typeof OrderProcessSteps> = {
  title: "Pages/Print/OrderProcess/Steps",
  component: OrderProcessSteps,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OrderProcessSteps>;

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
