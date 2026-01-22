import type { Meta, StoryObj } from "@storybook/react";
import AdvertisingStatCard from "./AdvertisingStatCard";
import { Users, Eye, TrendingUp, Target } from "lucide-react";

const meta: Meta<typeof AdvertisingStatCard> = {
  title: "Sections/Advertising/StatCard",
  component: AdvertisingStatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AdvertisingStatCard>;

export const UsersCard: Story = {
  args: {
    icon: Users,
    value: "20K+",
    label: "Daily users",
    color: "green",
  },
};

export const Impressions: Story = {
  args: {
    icon: Eye,
    value: "100K+",
    label: "Monthly impressions",
    color: "purple",
  },
};

export const Growth: Story = {
  args: {
    icon: TrendingUp,
    value: "+35%",
    label: "Average growth",
    color: "cyan",
  },
};

export const Targeting: Story = {
  args: {
    icon: Target,
    value: "95%",
    label: "Targeting accuracy",
    color: "pink",
  },
};
