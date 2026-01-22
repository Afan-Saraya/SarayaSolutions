import type { Meta, StoryObj } from "@storybook/react";
import SarayaHotspotPage from "./page";

const meta = {
  title: "Pages/Products/Saraya Hotspot",
  component: SarayaHotspotPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SarayaHotspotPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
