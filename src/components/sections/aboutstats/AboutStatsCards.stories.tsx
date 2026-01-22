import type { Meta, StoryObj } from "@storybook/react";
import AboutStatsCards from "./AboutStatsCards";

const meta: Meta<typeof AboutStatsCards> = {
  title: "Pages/About/Stats/Cards",
  component: AboutStatsCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutStatsCards>;

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
