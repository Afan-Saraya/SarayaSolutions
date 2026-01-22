import type { Meta, StoryObj } from "@storybook/react";
import DomaciBadge from "./DomaciBadge";

const meta: Meta<typeof DomaciBadge> = {
  title: "UI/DomaciBadge",
  component: DomaciBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DomaciBadge>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    className: "text-lg px-6 py-3",
  },
};

export const Small: Story = {
  args: {
    className: "text-xs px-3 py-1.5",
  },
};
