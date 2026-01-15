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
    activeText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof CoverageZones>;

/** Kartice zona pokrivenosti sa mapama. */
export const Default: Story = {
  args: {
    zones: [
      {
        id: "centar",
        name: "Centar Sarajeva",
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.4100%2C43.8560%2C18.4320%2C43.8620&layer=mapnik&marker=43.8590%2C18.4210",
        location: "Ferhadija • Titova",
        radius: "~1.2 km radius",
        zoneName: "Zona 1 - Centar",
        color: "purple",
        locationIcon: "📍",
      },
      {
        id: "skenderija",
        name: "Skenderija",
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.4050%2C43.8540%2C18.4200%2C43.8600&layer=mapnik&marker=43.8570%2C18.4125",
        location: "Centar Skenderija",
        radius: "~500 m radius",
        zoneName: "Zona 2 - Skenderija",
        color: "green",
        locationIcon: "📍",
      },
      {
        id: "bjelasnica",
        name: "Bjelašnica",
        mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=18.2500%2C43.7100%2C18.2900%2C43.7350&layer=mapnik&marker=43.7225%2C18.2700",
        location: "Olimpijska planina",
        radius: "~800 m radius",
        zoneName: "Zona 3 - Bjelašnica",
        color: "cyan",
        locationIcon: "🏔️",
      },
    ],
    activeText: "Aktivno",
  },
};
