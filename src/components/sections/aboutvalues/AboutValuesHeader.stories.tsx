import type { Meta, StoryObj } from "@storybook/react";
import AboutValuesHeader from "./AboutValuesHeader";

const meta: Meta<typeof AboutValuesHeader> = {
  title: "Pages/About/Values/Header",
  component: AboutValuesHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutValuesHeader>;

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
