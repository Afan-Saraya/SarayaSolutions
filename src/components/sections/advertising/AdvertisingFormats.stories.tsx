import type { Meta, StoryObj } from "@storybook/react";
import AdvertisingFormats, { FormatItem } from "./AdvertisingFormats";

const meta: Meta<typeof AdvertisingFormats> = {
  title: "Sections/Advertising/Formats",
  component: AdvertisingFormats,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AdvertisingFormats>;

const bosnianFormats: FormatItem[] = [
  {
    icon: "monitor",
    title: "Splash Screen Oglas",
    description: "Full-screen oglas prilikom spajanja na Wi-Fi",
  },
  {
    icon: "layout",
    title: "Banner Oglasi",
    description: "Banneri na portalu i stranicama unutar mreže",
  },
];

const englishFormats: FormatItem[] = [
  {
    icon: "monitor",
    title: "Splash Screen Ad",
    description: "Full-screen ad when connecting to Wi-Fi",
  },
  {
    icon: "layout",
    title: "Banner Ads",
    description: "Banners on portal and pages within the network",
  },
];

export const Bosnian: Story = {
  args: {
    title: "Formati Oglašavanja",
    formats: bosnianFormats,
  },
};

export const English: Story = {
  args: {
    title: "Advertising Formats",
    formats: englishFormats,
  },
};
