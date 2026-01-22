import type { Meta, StoryObj } from "@storybook/react";
import PagesImportance, { ImportanceStat } from "./PagesImportance";

const meta: Meta<typeof PagesImportance> = {
  title: "Pages/Connect/ConnectPages/Importance",
  component: PagesImportance,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    stats: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof PagesImportance>;

const defaultStats: ImportanceStat[] = [
  { value: "50K+", label: "Aktivnih korisnika", color: "green" },
  { value: "100+", label: "Partnera", color: "purple" },
  { value: "24/7", label: "Dostupnost", color: "cyan" },
];

export const Default: Story = {
  args: {
    title: "Zašto su ove stranice važne?",
    description:
      "Saraya Connect stranice transformiraju običan Wi-Fi pristup u bogato korisničko iskustvo. Korisnici ne samo da dobivaju besplatan internet, već i pristup ekskluzivnim sadržajima, nagradama i lokalnim informacijama — sve na jednom mjestu.",
    stats: defaultStats,
  },
};
