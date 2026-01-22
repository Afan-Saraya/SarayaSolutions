import type { Meta, StoryObj } from "@storybook/react";
import ReferencesGridSection from "./ReferencesGridSection";

const meta: Meta<typeof ReferencesGridSection> = {
  title: "Pages/References/Grid/Overview",
  component: ReferencesGridSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReferencesGridSection>;

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
