import type { Meta, StoryObj } from "@storybook/react";
import IndustryStats, { StatItem } from "./IndustryStats";

const meta: Meta<typeof IndustryStats> = {
  title: "Pages/Connect/Industries/Stats",
  component: IndustryStats,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    stats: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof IndustryStats>;

const defaultStats: StatItem[] = [
  { value: "+45%", label: "Povrat", color: "green" },
  { value: "+30%", label: "Email", color: "purple" },
  { value: "+25%", label: "Boravak", color: "cyan" },
  { value: "+20%", label: "Prodaja", color: "pink" },
];

export const Default: Story = {
  args: {
    stats: defaultStats,
  },
};
