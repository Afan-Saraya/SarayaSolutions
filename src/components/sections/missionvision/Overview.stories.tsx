import type { Meta, StoryObj } from "@storybook/react";
import MissionVisionSection from "./MissionVisionSection";

const meta: Meta<typeof MissionVisionSection> = {
  title: "Pages/About/MissionVision/Overview",
  component: MissionVisionSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MissionVisionSection>;

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
