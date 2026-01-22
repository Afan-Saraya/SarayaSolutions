import type { Meta, StoryObj } from "@storybook/react";
import TechCards from "./TechCards";

const meta: Meta<typeof TechCards> = {
  title: "Sections/Technologies/Cards",
  component: TechCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TechCards>;

export const Default: Story = {};

export const CustomLinkText: Story = {
  args: {
    linkText: "Learn more",
  },
};
