import type { Meta, StoryObj } from "@storybook/react";
import WiFi6NetworkSection from "./WiFi6NetworkSection";

const meta = {
  title: "Sections/WiFi6Network/Overview",
  component: WiFi6NetworkSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WiFi6NetworkSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
