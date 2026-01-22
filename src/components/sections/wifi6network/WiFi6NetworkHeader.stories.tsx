import type { Meta, StoryObj } from "@storybook/react";
import WiFi6NetworkHeader from "./WiFi6NetworkHeader";

const meta = {
  title: "Sections/WiFi6Network/Header",
  component: WiFi6NetworkHeader,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-screen max-w-4xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WiFi6NetworkHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
