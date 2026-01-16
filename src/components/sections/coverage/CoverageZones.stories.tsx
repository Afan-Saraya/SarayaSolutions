import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CoverageZones from "./CoverageZones";

const meta: Meta<typeof CoverageZones> = {
  title: "Sections/Coverage/Zones",
  component: CoverageZones,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[500px] relative bg-background">
        <div className="container mx-auto px-4 py-8">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    zones: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof CoverageZones>;

/** Kartice zona pokrivenosti sa GIF animacijama mapa. */
export const Default: Story = {
  args: {
    zones: [
      {
        id: "centar",
        name: "Centar Sarajeva",
        gifUrl: "/images/mreza-titova-carsija.gif",
        location: "Ferhadija • Titova",
        radius: "~1.2 km",
        color: "purple",
      },
      {
        id: "skenderija",
        name: "Skenderija",
        gifUrl: "/images/mreza-vilsonovo.gif",
        location: "Centar Skenderija",
        radius: "~500 m",
        color: "green",
      },
      {
        id: "bjelasnica",
        name: "Bjelašnica",
        gifUrl: "/images/mreza-bjelasnica.gif",
        location: "Olimpijska planina",
        radius: "~800 m",
        color: "cyan",
      },
    ],
  },
};
