import type { Meta, StoryObj } from "@storybook/react";
import AboutStoryContent from "./AboutStoryContent";

const meta: Meta<typeof AboutStoryContent> = {
  title: "Pages/About/Story/Content",
  component: AboutStoryContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutStoryContent>;

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
