import type { Meta, StoryObj } from "@storybook/react";
import IndustryCards, { IndustryItem } from "./IndustryCards";

const meta: Meta<typeof IndustryCards> = {
  title: "Pages/Connect/Industries/Cards",
  component: IndustryCards,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    industries: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof IndustryCards>;

const defaultIndustries: IndustryItem[] = [
  { title: "Kafići & Barovi", subtitle: "Online meni & rezervacije", icon: "coffee", color: "purple" },
  { title: "Restorani", subtitle: "Online meni & rezervacije", icon: "utensils", color: "cyan" },
  { title: "Hoteli", subtitle: "Check-in & usluge", icon: "hotel", color: "green" },
  { title: "Trgovački Centri", subtitle: "Navigacija & promocije", icon: "shopping", color: "pink" },
];

export const Default: Story = {
  args: {
    industries: defaultIndustries,
  },
};
