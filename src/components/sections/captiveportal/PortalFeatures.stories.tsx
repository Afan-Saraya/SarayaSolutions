import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PortalFeatures from "./PortalFeatures";

const meta: Meta<typeof PortalFeatures> = {
  title: "Sections/CaptivePortal/Features",
  component: PortalFeatures,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[400px] relative bg-background">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    features: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof PortalFeatures>;

/** Kartice značajki captive portala. */
export const Default: Story = {
  args: {
    features: [
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
    ],
  },
};
