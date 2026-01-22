import type { Meta, StoryObj } from "@storybook/react";
import TimelineHeader from "./TimelineHeader";

const meta: Meta<typeof TimelineHeader> = {
  title: "Pages/Applications/Timeline/Header",
  component: TimelineHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimelineHeader>;

export default meta;
type Story = StoryObj<typeof TimelineHeader>;

export const Bosnian: Story = {
  args: {
    title: "Proces",
    titleGradient: "razvoja",
  },
};

export const English: Story = {
  args: {
    title: "Development",
    titleGradient: "process",
  },
};
