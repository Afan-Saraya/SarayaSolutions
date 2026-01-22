import type { Meta, StoryObj } from "@storybook/react";
import ReferencesGridCards from "./ReferencesGridCards";

const meta: Meta<typeof ReferencesGridCards> = {
  title: "Pages/References/Grid/Cards",
  component: ReferencesGridCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReferencesGridCards>;

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
