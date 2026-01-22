import type { Meta, StoryObj } from "@storybook/react";
import PortalFeatures, { FeatureItem } from "./PortalFeatures";

const meta: Meta<typeof PortalFeatures> = {
  title: "Sections/CaptivePortal/Features",
  component: PortalFeatures,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PortalFeatures>;

const bosnianFeatures: FeatureItem[] = [
  {
    title: "Brendirani Captive Portal",
    description: "Potpuno prilagođena stranica za prijavu koja predstavlja vaš brand i komunicira s korisnicima.",
    icon: "megaphone",
  },
  {
    title: "Marketing & Promocije",
    description: "Prikazujte ponude, najave i promocije korisnicima prilikom spajanja na Wi-Fi.",
    icon: "shopping",
  },
  {
    title: "Analitika Ponašanja",
    description: "Pratite kako se korisnici kreću, koliko ostaju i što ih zanima — podaci za bolje odluke.",
    icon: "chart",
  },
];

const englishFeatures: FeatureItem[] = [
  {
    title: "Branded Captive Portal",
    description: "Fully customized login page that represents your brand and communicates with users.",
    icon: "megaphone",
  },
  {
    title: "Marketing & Promotions",
    description: "Display offers, announcements and promotions to users when connecting to Wi-Fi.",
    icon: "shopping",
  },
  {
    title: "Behavior Analytics",
    description: "Track how users move, how long they stay and what interests them — data for better decisions.",
    icon: "chart",
  },
];

export const Default: Story = {};

export const Bosnian: Story = {
  args: {
    features: bosnianFeatures,
  },
};

export const English: Story = {
  args: {
    features: englishFeatures,
  },
};
