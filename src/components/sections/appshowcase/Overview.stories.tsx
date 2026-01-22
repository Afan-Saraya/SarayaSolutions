import type { Meta, StoryObj } from "@storybook/react";
import AppShowcaseSection from "./AppShowcaseSection";

const meta: Meta<typeof AppShowcaseSection> = {
  title: "Pages/Applications/AppShowcase/Overview",
  component: AppShowcaseSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppShowcaseSection>;

export default meta;
type Story = StoryObj<typeof AppShowcaseSection>;

export const Bosnian: Story = {
  args: {
    title: "Naše",
    titleGradient: "aplikacije",
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
    title: "Our",
    titleGradient: "apps",
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
