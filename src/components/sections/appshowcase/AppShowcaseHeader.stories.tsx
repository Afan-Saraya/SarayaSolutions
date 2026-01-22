import type { Meta, StoryObj } from "@storybook/react";
import AppShowcaseHeader from "./AppShowcaseHeader";

const meta: Meta<typeof AppShowcaseHeader> = {
  title: "Pages/Applications/AppShowcase/Header",
  component: AppShowcaseHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppShowcaseHeader>;

export default meta;
type Story = StoryObj<typeof AppShowcaseHeader>;

export const Bosnian: Story = {
  args: {
    title: "Naše",
    titleGradient: "aplikacije",
  },
};

export const English: Story = {
  args: {
    title: "Our",
    titleGradient: "apps",
  },
};
