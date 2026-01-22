import type { Meta, StoryObj } from "@storybook/react";
import AboutValuesCards from "./AboutValuesCards";

const meta: Meta<typeof AboutValuesCards> = {
  title: "Pages/About/Values/Cards",
  component: AboutValuesCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AboutValuesCards>;

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
