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
