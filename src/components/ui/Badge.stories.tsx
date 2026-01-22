import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import { Sparkles, Wifi, Shield } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Primary Badge",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Badge",
    variant: "secondary",
  },
};

export const Accent: Story = {
  args: {
    children: "Accent Badge",
    variant: "accent",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Sparkles size={14} className="mr-2" />
        Featured
      </>
    ),
    variant: "primary",
  },
};

export const WithWifiIcon: Story = {
  args: {
    children: (
      <>
        <Wifi size={14} className="mr-2" />
        Wi-Fi
      </>
    ),
    variant: "accent",
  },
};

export const WithShieldIcon: Story = {
  args: {
    children: (
      <>
        <Shield size={14} className="mr-2" />
        Secure
      </>
    ),
    variant: "secondary",
  },
};
