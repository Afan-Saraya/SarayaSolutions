import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import AdvertisingFormats, { FormatItem } from "./AdvertisingFormats";

const meta: Meta<typeof AdvertisingFormats> = {
  title: "Sections/Advertising/AdvertisingFormats",
  component: AdvertisingFormats,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Naslov sekcije" },
    formats: { control: "object", description: "Niz formata oglašavanja" },
  },
  decorators: [
    (Story) => (
      <div className="bg-background-dark py-8">
        <div className="container mx-auto px-4 max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AdvertisingFormats>;

const defaultFormats: FormatItem[] = [
  {
    icon: "monitor",
    title: "Splash Screen Oglas",
    description: "Full-screen oglas prilikom spajanja na Wi-Fi.",
  },
  {
    icon: "layout",
    title: "Banner Oglasi",
    description: "Banneri na portalu i stranicama unutar mreže.",
  },
];

/** Default formati oglašavanja */
export const Default: Story = {
  args: {
    title: "Formati Oglašavanja",
    formats: defaultFormats,
  },
};
