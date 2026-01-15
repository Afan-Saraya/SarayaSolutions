import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CoverageHeader from "./CoverageHeader";

const meta: Meta<typeof CoverageHeader> = {
  title: "Sections/Coverage/Header",
  component: CoverageHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[250px] relative bg-background">
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
type Story = StoryObj<typeof CoverageHeader>;

/** Header sekcije sa badge-om, naslovom i opisom. */
export const Default: Story = {
  args: {
    badge: "Sarajevo & Okolina",
    titleStart: "Saraya Mreža",
    titleGradient: "Zone Pokrivenosti",
    description: "Saraya je etablirala svoju Wi-Fi mrežu u Sarajevu i okolini s besplatnim pristupom.",
  },
};
