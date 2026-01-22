import type { Meta, StoryObj } from "@storybook/react";
import Technologies from "./Technologies";

const meta: Meta<typeof Technologies> = {
  title: "Sections/Technologies",
  component: Technologies,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Technologies>;

export const Default: Story = {};
