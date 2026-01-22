import type { Meta, StoryObj } from "@storybook/react";
import SarayaConnectPage from "./page";

const meta = {
  title: "Pages/Products/Saraya Connect",
  component: SarayaConnectPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SarayaConnectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
