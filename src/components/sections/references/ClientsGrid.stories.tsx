import type { Meta, StoryObj } from "@storybook/react";
import ClientsGrid from "./ClientsGrid";

const meta = {
  title: "Sections/References/ClientsGrid",
  component: ClientsGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClientsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Note: ClientsGrid now uses the Partners component
// The old clients prop is no longer used
export const Default: Story = {
  args: {},
};
