import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PartnersHeader from "./PartnersHeader";

const meta: Meta<typeof PartnersHeader> = {
  title: "Sections/Partners/Header",
  component: PartnersHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[250px] relative overflow-hidden bg-background-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/5 rounded-full blur-[100px]" />
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
type Story = StoryObj<typeof PartnersHeader>;

/** Header sekcije sa badge-om, naslovom i opisom. */
export const Default: Story = {
  args: {
    badge: "Partneri",
    titleStart: "Kompanije s kojima",
    titleGradient: "sarađujemo",
    description: "Ponosni smo na saradnju s vodećim kompanijama u regiji",
  },
};
