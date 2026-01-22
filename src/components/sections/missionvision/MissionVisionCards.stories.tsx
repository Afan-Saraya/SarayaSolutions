import type { Meta, StoryObj } from "@storybook/react";
import MissionVisionCards from "./MissionVisionCards";

const meta: Meta<typeof MissionVisionCards> = {
  title: "Pages/About/MissionVision/Cards",
  component: MissionVisionCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MissionVisionCards>;

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
