import type { Meta, StoryObj } from "@storybook/react";
import AboutStatsSection from "./AboutStatsSection";

const meta: Meta<typeof AboutStatsSection> = {
  title: "Pages/About/Stats/Overview",
  component: AboutStatsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutStatsSection>;

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
