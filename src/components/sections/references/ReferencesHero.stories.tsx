import type { Meta, StoryObj } from "@storybook/react";
import ReferencesHero from "./ReferencesHero";

const meta = {
  title: "Sections/References/Hero",
  component: ReferencesHero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ReferencesHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
