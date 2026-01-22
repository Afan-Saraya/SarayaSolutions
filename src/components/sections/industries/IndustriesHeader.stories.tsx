import type { Meta, StoryObj } from "@storybook/react";
import IndustriesHeader from "./IndustriesHeader";

const meta: Meta<typeof IndustriesHeader> = {
  title: "Pages/Connect/Industries/Header",
  component: IndustriesHeader,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[200px] bg-background-dark">
        <div className="container mx-auto px-4 py-16">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    badge: { control: "text" },
    titleStart: { control: "text" },
    titleGradient: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof IndustriesHeader>;

export const Default: Story = {
  args: {
    badge: "Industrije",
    titleStart: "Rješenje za",
    titleGradient: "Svaku Industriju",
    description: "Saraya Connect prilagođava se potrebama vašeg poslovanja i donosi mjerljive rezultate.",
  },
};
