import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdvertisingBenefitItem from "./AdvertisingBenefitItem";

const meta: Meta<typeof AdvertisingBenefitItem> = {
  title: "Sections/Advertising/AdvertisingBenefitItem",
  component: AdvertisingBenefitItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text", description: "Tekst benefita" },
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
type Story = StoryObj<typeof AdvertisingBenefitItem>;

export const Default: Story = {
  args: {
    text: "Doseg do 50.000+ korisnika mjesečno",
  },
};
