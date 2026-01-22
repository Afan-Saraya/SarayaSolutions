import type { Meta, StoryObj } from "@storybook/react";
import AboutStorySection from "./AboutStorySection";

const meta: Meta<typeof AboutStorySection> = {
  title: "Pages/About/Story/Overview",
  component: AboutStorySection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutStorySection>;

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
