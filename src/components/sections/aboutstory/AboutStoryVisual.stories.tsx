import type { Meta, StoryObj } from "@storybook/react";
import AboutStoryVisual from "./AboutStoryVisual";

const meta: Meta<typeof AboutStoryVisual> = {
  title: "Pages/About/Story/Visual",
  component: AboutStoryVisual,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutStoryVisual>;

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
