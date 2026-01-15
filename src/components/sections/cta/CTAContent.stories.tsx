import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CTAContent from "./CTAContent";

const meta: Meta<typeof CTAContent> = {
  title: "Sections/CTA/Content",
  component: CTAContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[400px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-background" />
        <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    titleStart: { control: "text" },
    titleGradient: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    buttonLink: { control: "text" },
    showIcon: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CTAContent>;

/** CTA sadržaj sa ikonom, naslovom, opisom i gumbom. */
export const Default: Story = {
  args: {
    titleStart: "Spremni za",
    titleGradient: "digitalnu transformaciju?",
    description: "Razgovarajmo o tome kako Saraya Solutions može pomoći vašem poslovanju da postigne tehnološke ciljeve.",
    buttonText: "Započnite projekt",
    buttonLink: "/contact",
    showIcon: true,
  },
};
