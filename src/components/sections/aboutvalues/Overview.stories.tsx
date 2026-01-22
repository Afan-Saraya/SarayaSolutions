import type { Meta, StoryObj } from "@storybook/react";
import AboutValuesSection from "./AboutValuesSection";

const meta: Meta<typeof AboutValuesSection> = {
  title: "Pages/About/Values/Overview",
  component: AboutValuesSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutValuesSection>;

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
