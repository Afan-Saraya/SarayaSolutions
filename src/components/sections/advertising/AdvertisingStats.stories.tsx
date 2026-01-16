import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdvertisingStats, { StatItem } from "./AdvertisingStats";

const meta: Meta<typeof AdvertisingStats> = {
  title: "Sections/Advertising/AdvertisingStats",
  component: AdvertisingStats,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    stats: { control: "object", description: "Niz statistika" },
  },
  decorators: [
    (Story) => (
      <div className="bg-background-dark py-8">
        <div className="container mx-auto px-4">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AdvertisingStats>;

const defaultStats: StatItem[] = [
  { value: "20,000+", label: "Dnevnih korisnika" },
  { value: "3", label: "Zone pokrivenosti" },
  { value: "100%", label: "Vidljivost oglasa" },
  { value: "15s+", label: "Prosječno vrijeme gledanja" },
];

/** Default statistike za Advertising sekciju */
export const Default: Story = {
  args: {
    stats: defaultStats,
  },
};
