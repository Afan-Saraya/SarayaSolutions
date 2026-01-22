import type { Meta, StoryObj } from "@storybook/react";
import Hero2Content from "./Hero2Content";

const meta: Meta<typeof Hero2Content> = {
  title: "Pages/Home/Hero2/Content",
  component: Hero2Content,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    logoSrc: {
      control: "text",
      description: "Putanja do logo slike",
    },
    description: {
      control: "text",
      description: "Opis",
    },
    features: {
      control: "object",
      description: "Lista značajki",
    },
    primaryButtonText: {
      control: "text",
      description: "Tekst primarnog dugmeta",
    },
    secondaryButtonText: {
      control: "text",
      description: "Tekst sekundarnog dugmeta",
    },
    showFeatures: {
      control: "boolean",
      description: "Prikaži listu značajki",
    },
    accentColor: {
      control: "select",
      options: ["green", "purple"],
      description: "Boja akcenta za značajke",
    },
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-green/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-500/15 rounded-full blur-[100px]" />
        
        <div className="relative z-10 p-10" style={{ maxWidth: "600px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Hero2Content>;

/** Zadani prikaz sa stvarnim sadržajem Saraya Connect stranice. */
export const Default: Story = {
  args: {
    logoSrc: "/images/logos/saraya connect.png",
    description: "Pretvorite besplatni Wi-Fi u moćan marketing alat. Prikupljajte podatke, komunicirajte s korisnicima i gradite lojalnost — sve kroz jednu platformu.",
    features: ["Captive Portal", "Marketing platforma", "Analitika korisnika", "Skalabilnost"],
    primaryButtonText: "Hotspot solucije",
    secondaryButtonText: "Video",
    showFeatures: true,
    accentColor: "green",
  },
};

/** Bez liste značajki. */
export const WithoutFeatures: Story = {
  args: {
    ...Default.args,
    showFeatures: false,
  },
};

/** Sa ljubičastim akcentom. */
export const PurpleAccent: Story = {
  args: {
    ...Default.args,
    accentColor: "purple",
  },
};
