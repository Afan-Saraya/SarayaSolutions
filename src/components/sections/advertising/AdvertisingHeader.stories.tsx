import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdvertisingHeader from "./AdvertisingHeader";

const meta: Meta<typeof AdvertisingHeader> = {
  title: "Sections/Advertising/AdvertisingHeader",
  component: AdvertisingHeader,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    badge: { control: "text", description: "Tekst badge-a" },
    title: { control: "text", description: "Glavni tekst naslova" },
    titleHighlight: { control: "text", description: "Istaknuti dio naslova (gradient)" },
    description: { control: "text", description: "Opis ispod naslova" },
  },
  decorators: [
    (Story) => (
      <div className="bg-background-dark py-16">
        <div className="container mx-auto px-4">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AdvertisingHeader>;

/** Default header za Advertising sekciju */
export const Default: Story = {
  args: {
    badge: "Oglašavanje",
    title: "Oglašavanje na",
    titleHighlight: "Saraya Mreži",
    description: "Dosegnite hiljade korisnika dnevno kroz captive portal — vašu priliku za direktnu komunikaciju.",
  },
};
