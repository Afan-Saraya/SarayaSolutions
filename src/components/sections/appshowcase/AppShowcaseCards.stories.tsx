import type { Meta, StoryObj } from "@storybook/react";
import AppShowcaseCards from "./AppShowcaseCards";

const meta: Meta<typeof AppShowcaseCards> = {
  title: "Pages/Applications/AppShowcase/Cards",
  component: AppShowcaseCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppShowcaseCards>;

export default meta;
type Story = StoryObj<typeof AppShowcaseCards>;

export const Bosnian: Story = {
  args: {
    apps: [
      {
        name: "Saraya Hotspot",
        type: "Web Aplikacija",
        description: "Captive portal za WiFi mreže",
        url: "https://hs.sarayasolutions.com/",
      },
      {
        name: "Pametno Odabrano",
        type: "E-commerce App",
        description: "Mobilna kupovina",
        url: "https://pametnoodabrano.com/",
      },
    ],
  },
};

export const English: Story = {
  args: {
    apps: [
      {
        name: "Saraya Hotspot",
        type: "Web App",
        description: "Captive portal for WiFi networks",
        url: "https://hs.sarayasolutions.com/",
      },
      {
        name: "Pametno Odabrano",
        type: "E-commerce App",
        description: "Mobile shopping",
        url: "https://pametnoodabrano.com/",
      },
    ],
  },
};
