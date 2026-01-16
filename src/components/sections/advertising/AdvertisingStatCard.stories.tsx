import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdvertisingStatCard from "./AdvertisingStatCard";

const meta: Meta<typeof AdvertisingStatCard> = {
  title: "Sections/Advertising/AdvertisingStatCard",
  component: AdvertisingStatCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text", description: "Vrijednost statistike" },
    label: { control: "text", description: "Opis statistike" },
  },
  decorators: [
    (Story) => (
      <div className="bg-background-dark p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AdvertisingStatCard>;

export const Default: Story = {
  args: {
    value: "20,000+",
    label: "Dnevnih korisnika",
  },
};
