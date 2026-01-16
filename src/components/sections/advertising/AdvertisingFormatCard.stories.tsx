import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdvertisingFormatCard from "./AdvertisingFormatCard";

const meta: Meta<typeof AdvertisingFormatCard> = {
  title: "Sections/Advertising/AdvertisingFormatCard",
  component: AdvertisingFormatCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "select", options: ["monitor", "layout"], description: "Ikona" },
    title: { control: "text", description: "Naslov formata" },
    description: { control: "text", description: "Opis formata" },
  },
  decorators: [
    (Story) => (
      <div className="bg-background-dark p-8 max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AdvertisingFormatCard>;

export const Default: Story = {
  args: {
    icon: "monitor",
    title: "Splash Screen Oglas",
    description: "Full-screen oglas prilikom spajanja na Wi-Fi.",
  },
};
