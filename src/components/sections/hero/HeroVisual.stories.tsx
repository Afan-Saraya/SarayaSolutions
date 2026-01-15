import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroVisual from "./HeroVisual";

const meta: Meta<typeof HeroVisual> = {
  title: "Sections/Hero/Visual",
  component: HeroVisual,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    videoSrc: {
      control: "text",
      description: "Putanja do video fajla",
    },
    statYears: {
      control: "text",
      description: "Broj godina iskustva",
    },
    statYearsLabel: {
      control: "text",
      description: "Labela za godine",
    },
    statProjects: {
      control: "text",
      description: "Broj projekata",
    },
    statProjectsLabel: {
      control: "text",
      description: "Labela za projekte",
    },
    statSupport: {
      control: "text",
      description: "Podrška",
    },
    statSupportLabel: {
      control: "text",
      description: "Labela za podršku",
    },
    statTech: {
      control: "text",
      description: "Tehnologija",
    },
    statTechLabel: {
      control: "text",
      description: "Labela za tehnologiju",
    },
    statDomesticTitle: {
      control: "text",
      description: "Naslov za domaći proizvod",
    },
    statDomesticSubtitle: {
      control: "text",
      description: "Podnaslov za domaći proizvod",
    },
    showStats: {
      control: "boolean",
      description: "Prikaži statistike",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        minHeight: "100vh",
        padding: "80px",
        background: "#0a0a0f"
      }}>
        <div style={{ width: "500px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeroVisual>;

/** Zadani prikaz sa stvarnim sadržajem stranice. */
export const Default: Story = {
  args: {
    videoSrc: "/images/VRExperience.mp4",
    statYears: "10+",
    statYearsLabel: "Godina iskustva",
    statProjects: "90+",
    statProjectsLabel: "Projekata",
    statSupport: "24/7",
    statSupportLabel: "Podrška",
    statTech: "AI",
    statTechLabel: "Tehnologija",
    statDomesticTitle: "Domaći",
    statDomesticSubtitle: "proizvod",
    showStats: true,
  },
};

/** Bez statistika - samo video. */
export const WithoutStats: Story = {
  args: {
    ...Default.args,
    showStats: false,
  },
};
