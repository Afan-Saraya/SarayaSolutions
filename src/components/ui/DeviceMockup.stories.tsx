import type { Meta, StoryObj } from "@storybook/react";
import DeviceMockup from "./DeviceMockup";

const meta: Meta<typeof DeviceMockup> = {
  title: "UI/DeviceMockup",
  component: DeviceMockup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DeviceMockup>;

export const SarayaHotspot: Story = {
  args: {
    iframeUrl: "https://hs.sarayasolutions.com/",
  },
};

export const SarayaConnect: Story = {
  args: {
    iframeUrl: "https://connect.sarayasolutions.com/",
  },
};

export const SarayaDisplay: Story = {
  args: {
    iframeUrl: "https://display.sarayasolutions.com/",
  },
};
