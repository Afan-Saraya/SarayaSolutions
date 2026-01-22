import type { Meta, StoryObj } from "@storybook/react";
import AdvertisingStats from "./AdvertisingStats";

const meta: Meta<typeof AdvertisingStats> = {
  title: "Sections/Advertising/Stats",
  component: AdvertisingStats,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AdvertisingStats>;

export const Default: Story = {
  args: {
    stats: [
      { value: "20K+", label: "Daily users" },
      { value: "100K+", label: "Monthly impressions" },
      { value: "+35%", label: "Average growth" },
      { value: "95%", label: "Targeting accuracy" },
    ],
  },
};
