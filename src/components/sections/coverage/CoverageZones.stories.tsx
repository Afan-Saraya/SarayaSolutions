import type { Meta, StoryObj } from "@storybook/react";
import CoverageZones from "./CoverageZones";

const meta: Meta<typeof CoverageZones> = {
  title: "Sections/Coverage/Zones",
  component: CoverageZones,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CoverageZones>;

export const Bosnian: Story = {
  args: {
    language: "bs",
  },
};

export const English: Story = {
  args: {
    language: "en",
  },
};
