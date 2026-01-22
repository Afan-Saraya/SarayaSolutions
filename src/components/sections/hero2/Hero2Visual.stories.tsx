import type { Meta, StoryObj } from "@storybook/react";
import Hero2Visual from "./Hero2Visual";

const meta: Meta<typeof Hero2Visual> = {
  title: "Pages/Home/Hero2/Visual",
  component: Hero2Visual,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    iframeUrl: {
      control: "text",
      description: "URL za iframe unutar device mockup-a",
    },
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-green/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-500/15 rounded-full blur-[100px]" />
        
        <div className="relative z-10 p-10">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Hero2Visual>;

/** Zadani prikaz sa Saraya Connect hotspot stranicom. */
export const Default: Story = {
  args: {
    iframeUrl: "https://hs.sarayasolutions.com/",
  },
};
