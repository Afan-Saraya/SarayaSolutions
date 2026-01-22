import type { Meta, StoryObj } from "@storybook/react";
import GameFeaturesVisual from "./GameFeaturesVisual";

const meta: Meta<typeof GameFeaturesVisual> = {
  title: "Pages/Games/GameFeatures/Visual",
  component: GameFeaturesVisual,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameFeaturesVisual>;

export default meta;
type Story = StoryObj<typeof GameFeaturesVisual>;

export const Default: Story = {};
