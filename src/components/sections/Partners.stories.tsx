import type { Meta, StoryObj } from "@storybook/react";
import Partners from "./Partners";

const meta: Meta<typeof Partners> = {
  title: "Sections/Partners",
  component: Partners,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Partners>;

export const Default: Story = {};
