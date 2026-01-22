import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ArrowRight, Download, Send } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
  args: {
    children: "Primary Small",
    variant: "primary",
    size: "sm",
  },
};

export const PrimaryMedium: Story = {
  args: {
    children: "Primary Medium",
    variant: "primary",
    size: "md",
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: "Primary Large",
    variant: "primary",
    size: "lg",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const WithArrowIcon: Story = {
  args: {
    children: (
      <>
        Learn more
        <ArrowRight className="ml-2" size={18} />
      </>
    ),
    variant: "primary",
    size: "md",
  },
};

export const WithDownloadIcon: Story = {
  args: {
    children: (
      <>
        <Download className="mr-2" size={18} />
        Download
      </>
    ),
    variant: "secondary",
    size: "md",
  },
};

export const WithSendIcon: Story = {
  args: {
    children: (
      <>
        Send
        <Send className="ml-2" size={18} />
      </>
    ),
    variant: "outline",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};
