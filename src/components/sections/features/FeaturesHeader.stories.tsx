import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeaturesHeader from "./FeaturesHeader";

const meta: Meta<typeof FeaturesHeader> = {
  title: "Sections/Features/Header",
  component: FeaturesHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-dark" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    badge: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesHeader>;

/** Header sekcije sa badge-om, naslovom i opisom. */
export const Default: Story = {
  args: {
    badge: "Naša ponuda",
    title: 'Proizvodi i <span class="text-gradient">usluge</span>',
    description: "Kompletna tehnološka rješenja za vaše poslovanje - od hardvera do softvera",
  },
};
