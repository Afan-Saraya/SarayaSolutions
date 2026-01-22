import type { Meta, StoryObj } from "@storybook/react";
import WhyDisplayHeader from "./WhyDisplayHeader";

const meta: Meta<typeof WhyDisplayHeader> = {
  title: "Pages/Display/WhyDisplay/Header",
  component: WhyDisplayHeader,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[200px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-background" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    titleGradient: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof WhyDisplayHeader>;

export const Default: Story = {
  args: {
    title: "Zašto Saraya Display predstavlja",
    titleGradient: "vašu najbolju investiciju?",
  },
};
