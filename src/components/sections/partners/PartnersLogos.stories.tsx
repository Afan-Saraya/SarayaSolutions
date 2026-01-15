import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PartnersLogos from "./PartnersLogos";

const meta: Meta<typeof PartnersLogos> = {
  title: "Sections/Partners/Logos",
  component: PartnersLogos,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[300px] relative overflow-hidden bg-background-dark py-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    partners: { control: "object" },
    footerText: { control: "text" },
    autoScroll: { control: "boolean" },
    scrollSpeed: { control: { type: "range", min: 10, max: 100, step: 5 } },
  },
};

export default meta;
type Story = StoryObj<typeof PartnersLogos>;

/** Scrolling logo marquee sa partnerskim logotipima. */
export const Default: Story = {
  args: {
    partners: [
      { name: "Coca-Cola", logo: "/images/coca-cola.png" },
      { name: "Bosna Bank International", logo: "/images/bosna bank international.png" },
      { name: "Mercator", logo: "/images/mercator.png" },
      { name: "Orbico", logo: "/images/orbico.png" },
      { name: "Sarajevo Osiguranje", logo: "/images/sarajevo-osiguranje.png" },
      { name: "BH Telecom", logo: "/images/bh telecom.png" },
      { name: "McCann", logo: "/images/mc cann.png" },
      { name: "Woman Comm", logo: "/images/woman comm.png" },
    ],
    footerText: "I mnogi drugi partneri širom regije",
    autoScroll: true,
    scrollSpeed: 30,
  },
};
