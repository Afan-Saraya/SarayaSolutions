import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TechHeader from "./TechHeader";

const meta: Meta<typeof TechHeader> = {
  title: "Sections/Technologies/Header",
  component: TechHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[200px] relative overflow-hidden bg-background-dark">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    badge: { control: "text" },
    titleStart: { control: "text" },
    titleGradient: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TechHeader>;

/** Header sekcije sa badge-om i naslovom. */
export const Default: Story = {
  args: {
    badge: "Tehnologije",
    titleStart: "Tehnologije koje pokreću",
    titleGradient: "Vaš uspjeh",
  },
};
