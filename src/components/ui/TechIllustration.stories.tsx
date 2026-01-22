import type { Meta, StoryObj } from "@storybook/react";
import TechIllustration from "./TechIllustration";

const meta: Meta<typeof TechIllustration> = {
  title: "UI/TechIllustration",
  component: TechIllustration,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TechIllustration>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    className: "w-96 h-96",
  },
};

export const Small: Story = {
  args: {
    className: "w-48 h-48",
  },
};
