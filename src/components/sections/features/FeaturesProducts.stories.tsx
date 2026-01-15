import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeaturesProducts from "./FeaturesProducts";

const meta: Meta<typeof FeaturesProducts> = {
  title: "Sections/Features/Products",
  component: FeaturesProducts,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[400px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-dark" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    products: { control: "object" },
    learnMoreText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturesProducts>;

/** Kartice glavnih proizvoda - Saraya Display i Saraya Connect. */
export const Default: Story = {
  args: {
    products: [
      {
        title: "Saraya Display",
        description: "Interaktivni displeji s AI avatarima, 4K rezolucijom i naprednim funkcijama za marketing i komunikaciju.",
        icon: "monitor",
        color: "purple",
        href: "/products/display",
        features: ["AI Avatar", "4K Ultra HD", "Touch Screen", "Outdoor/Indoor"],
      },
      {
        title: "Saraya Connect",
        description: "Pametni Wi-Fi hotspot sustav s captive portalom, analitikom korisnika i marketing automatizacijom.",
        icon: "wifi",
        color: "green",
        href: "/products/saraya-connect",
        features: ["Besplatan Wi-Fi", "Captive Portal", "Analitika", "Marketing"],
      },
    ],
    learnMoreText: "Saznajte više",
  },
};
