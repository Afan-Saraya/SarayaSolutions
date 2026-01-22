import type { Meta, StoryObj } from "@storybook/react";
import AdvertisingStatCard from "./AdvertisingStatCard";

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
    value: "20K+",
    label: "Daily users",
  },
};

export const Impressions: Story = {
  args: {
    value: "100K+",
    label: "Monthly impressions",
  },
};

export const Growth: Story = {
  args: {
    value: "+35%",
    label: "Average growth",
  },
};

export const Targeting: Story = {
  args: {
    value: "95%",
    label: "Targeting accuracy",
  },
};
