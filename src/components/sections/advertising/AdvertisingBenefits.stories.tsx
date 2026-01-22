import type { Meta, StoryObj } from "@storybook/react";
import AdvertisingBenefits from "./AdvertisingBenefits";

const meta: Meta<typeof AdvertisingBenefits> = {
  title: "Pages/Connect/Advertising/AdvertisingBenefits",
  component: AdvertisingBenefits,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Naslov kartice" },
    benefits: { control: "object", description: "Niz benefita" },
    buttonText: { control: "text", description: "Tekst dugmeta" },
    buttonHref: { control: "text", description: "Link dugmeta" },
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
type Story = StoryObj<typeof AdvertisingBenefits>;

const defaultBenefits = [
  "Doseg do 50.000+ korisnika mjesečno",
  "Precizno targetiranje po lokaciji",
  "Detaljni izvještaji i analitika",
  "Fleksibilni budžeti",
  "Podrška za kreativu",
];

/** Default benefiti oglašavanja */
export const Default: Story = {
  args: {
    title: "Zašto Oglašavati na Saraya Mreži?",
    benefits: defaultBenefits,
    buttonText: "Započnite Kampanju",
    buttonHref: "/contact",
  },
};
