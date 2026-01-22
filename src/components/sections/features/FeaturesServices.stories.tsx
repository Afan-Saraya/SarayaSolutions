import type { Meta, StoryObj } from "@storybook/react";
import FeaturesServices from "./FeaturesServices";

const meta: Meta<typeof FeaturesServices> = {
  title: "Pages/Home/Features/Services",
  component: FeaturesServices,
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
    label: { control: "text" },
    services: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesServices>;

/** Grid usluga - Web, Aplikacije, Igre, Print. */
export const Default: Story = {
  args: {
    label: "Također nudimo",
    services: [
      { title: "Web rješenja", icon: "globe", href: "/services/web-solutions", color: "purple" },
      { title: "Aplikacije", icon: "bot", href: "/services/applications", color: "cyan" },
      { title: "Igre", icon: "gamepad", href: "/services/games", color: "pink" },
      { title: "Print", icon: "printer", href: "/services/print", color: "green" },
    ],
  },
};
