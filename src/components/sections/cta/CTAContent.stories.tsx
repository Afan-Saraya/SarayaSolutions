import type { Meta, StoryObj } from "@storybook/react";
import CTAContent from "./CTAContent";

const meta: Meta<typeof CTAContent> = {
  title: "Sections/CTA/Content",
  component: CTAContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CTAContent>;

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
