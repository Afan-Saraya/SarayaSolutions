import type { Meta, StoryObj } from "@storybook/react";
import ConnectPagesHeader from "./ConnectPagesHeader";

const meta: Meta<typeof ConnectPagesHeader> = {
  title: "Pages/Connect/ConnectPages/Header",
  component: ConnectPagesHeader,
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
        <div className="absolute top-0 right-0 w-48 md:w-[400px] h-48 md:h-[400px] bg-accent-green/10 rounded-full blur-[120px]" />
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
type Story = StoryObj<typeof ConnectPagesHeader>;

export const Default: Story = {
  args: {
    badge: "Na Captive Portalu",
    titleStart: "Saraya Connect",
    titleGradient: "Stranice",
    description:
      "Pored osnovne stranice za prijavu, korisnici na našoj javnoj Wi-Fi mreži imaju pristup ekskluzivnim stranicama koje pružaju dodatnu vrijednost.",
  },
};
