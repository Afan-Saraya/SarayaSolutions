import type { Meta, StoryObj } from "@storybook/react";
import PortalConnectPages, { ConnectPageItem } from "./PortalConnectPages";

const meta: Meta<typeof PortalConnectPages> = {
  title: "Pages/Connect/CaptivePortal/PortalConnectPages",
  component: PortalConnectPages,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    pages: { control: "object" },
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PortalConnectPages>;

const defaultPages: ConnectPageItem[] = [
  {
    title: "Rewards Center",
    subtitle: "Loyalty program",
    color: "purple",
  },
  {
    title: "Pametno Odabrano",
    subtitle: "AI preporuke",
    color: "green",
  },
  {
    title: "Explore Sarajevo",
    subtitle: "Vodič kroz grad",
    color: "cyan",
  },
];

export const Default: Story = {
  args: {
    title: "Saraya Connect Stranice",
    description: "Na našoj javnoj mreži, korisnici imaju pristup ekskluzivnim stranicama:",
    pages: defaultPages,
  },
};

export const CustomPages: Story = {
  args: {
    title: "Dostupne Stranice",
    description: "Pristupite ekskluzivnom sadržaju:",
    pages: [
      { title: "VIP Zona", subtitle: "Premium sadržaj", color: "purple" },
      { title: "Lokalni Vodič", subtitle: "Preporuke", color: "green" },
    ],
  },
};
