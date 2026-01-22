import type { Meta, StoryObj } from "@storybook/react";
import AppFeaturesHeader from "./AppFeaturesHeader";

const meta: Meta<typeof AppFeaturesHeader> = {
  title: "Pages/Applications/AppFeatures/Header",
  component: AppFeaturesHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppFeaturesHeader>;

export default meta;
type Story = StoryObj<typeof AppFeaturesHeader>;

export const Bosnian: Story = {
  args: {
    title: "Funkcionalnosti",
    titleGradient: "aplikacija",
  },
};

export const English: Story = {
  args: {
    title: "Features",
    titleGradient: "included",
  },
};
