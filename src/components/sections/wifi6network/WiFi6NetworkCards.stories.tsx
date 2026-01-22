import type { Meta, StoryObj } from "@storybook/react";
import WiFi6NetworkCards from "./WiFi6NetworkCards";

const meta = {
  title: "Sections/WiFi6Network/Cards",
  component: WiFi6NetworkCards,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-screen max-w-7xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WiFi6NetworkCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
