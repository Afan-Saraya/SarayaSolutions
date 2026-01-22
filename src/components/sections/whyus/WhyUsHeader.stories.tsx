import type { Meta, StoryObj } from "@storybook/react";
import WhyUsHeader from "./WhyUsHeader";

const meta: Meta<typeof WhyUsHeader> = {
  title: "Pages/WebSolutions/WhyUs/Header",
  component: WhyUsHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WhyUsHeader>;

export default meta;
type Story = StoryObj<typeof WhyUsHeader>;

export const Bosnian: Story = {
  args: {
    title: "Zašto",
    titleGradient: "Saraya",
  },
};

export const English: Story = {
  args: {
    title: "Why",
    titleGradient: "Saraya",
  },
};
