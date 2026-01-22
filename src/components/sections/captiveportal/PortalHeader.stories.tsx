import type { Meta, StoryObj } from "@storybook/react";
import PortalHeader from "./PortalHeader";

const meta: Meta<typeof PortalHeader> = {
  title: "Pages/Connect/CaptivePortal/Header",
  component: PortalHeader,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[200px] relative bg-background">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
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
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PortalHeader>;

/** Header sekcije sa badge-om, naslovom i opisom. */
export const Default: Story = {
  args: {
    badge: "Portal Rješenja",
    titleStart: "Captivni",
    titleGradient: "Portal",
    description: "Prilagodljivi portali koji omogućavaju potpunu kontrolu nad sadržajem.",
  },
};
