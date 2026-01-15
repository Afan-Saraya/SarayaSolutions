import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CoverageSummary from "./CoverageSummary";

const meta: Meta<typeof CoverageSummary> = {
  title: "Sections/Coverage/Summary",
  component: CoverageSummary,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[200px] relative bg-background">
        <div className="container mx-auto px-4 py-8">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    stats: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof CoverageSummary>;

/** Summary bar sa statistikama. */
export const Default: Story = {
  args: {
    title: "3 aktivne zone pokrivenosti",
    subtitle: "Besplatan Wi-Fi za sve korisnike",
    stats: [
      { value: "20k+", label: "Dnevnih korisnika", color: "purple" },
      { value: "99.9%", label: "Uptime", color: "green" },
    ],
  },
};
