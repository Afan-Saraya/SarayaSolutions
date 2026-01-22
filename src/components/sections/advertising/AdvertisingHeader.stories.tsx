import type { Meta, StoryObj } from "@storybook/react";
import AdvertisingHeader from "./AdvertisingHeader";

const meta: Meta<typeof AdvertisingHeader> = {
  title: "Sections/Advertising/Header",
  component: AdvertisingHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AdvertisingHeader>;

export const Bosnian: Story = {
  args: {
    badge: "Oglašavanje",
    title: "Oglašavajte se na",
    titleHighlight: "Saraya Connect mreži",
    description: "Dosegnite hiljade korisnika dnevno kroz našu Wi-Fi mrežu na najprometnijim lokacijama u gradu",
  },
};

export const English: Story = {
  args: {
    badge: "Advertising",
    title: "Advertise on",
    titleHighlight: "Saraya Connect network",
    description: "Reach thousands of users daily through our Wi-Fi network at the busiest locations in the city",
  },
};
