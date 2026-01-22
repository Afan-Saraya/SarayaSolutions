import type { Meta, StoryObj } from "@storybook/react";
import IndustryBenefits, { BenefitItem } from "./IndustryBenefits";

const meta: Meta<typeof IndustryBenefits> = {
  title: "Pages/Connect/Industries/Benefits",
  component: IndustryBenefits,
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
    title: { control: "text" },
    benefits: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof IndustryBenefits>;

const defaultBenefits: BenefitItem[] = [
  { title: "Prikupljanje Podataka", subtitle: "Email, demografija", icon: "database", color: "purple" },
  { title: "Povećanje Prodaje", subtitle: "Direktne promocije", icon: "trending", color: "green" },
  { title: "Ciljani Marketing", subtitle: "Personalizacija", icon: "target", color: "cyan" },
  { title: "Analitika", subtitle: "Real-time podaci", icon: "chart", color: "pink" },
];

export const Default: Story = {
  args: {
    title: "Ključne Prednosti",
    benefits: defaultBenefits,
  },
};
