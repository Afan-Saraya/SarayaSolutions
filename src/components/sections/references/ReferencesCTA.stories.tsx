import type { Meta, StoryObj } from "@storybook/react";
import ReferencesCTA from "./ReferencesCTA";

const meta = {
  title: "Sections/References/CTA",
  component: ReferencesCTA,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ReferencesCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
