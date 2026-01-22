import type { Meta, StoryObj } from "@storybook/react";
import PortfolioSection from "./PortfolioSection";

const meta: Meta<typeof PortfolioSection> = {
  title: "Pages/WebSolutions/Portfolio/Overview",
  component: PortfolioSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 1000,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PortfolioSection>;

export default meta;
type Story = StoryObj<typeof PortfolioSection>;

export const Bosnian: Story = {
  args: {
    title: "Naši",
    titleGradient: "projekti",
    description: "Pogledajte neke od projekata koje smo realizirali za naše klijente.",
    projects: [
      {
        title: "Pametno Odabrano",
        category: "E-commerce",
        url: "https://pametnoodabrano.com/",
        description: "Moderna e-commerce platforma za pametnu kupovinu",
        stats: "+150% konverzija",
      },
      {
        title: "Saraya Hotspot",
        category: "Web Aplikacija",
        url: "https://hs.sarayasolutions.com/",
        description: "Captive portal sistem za WiFi mreže",
        stats: "20K+ korisnika",
      },
      {
        title: "BH Telecom Portal",
        category: "Korporativna Stranica",
        url: "#",
        description: "Korporativni portal za telekom kompaniju",
        stats: "500K+ posjeta",
      },
    ],
  },
};

export const English: Story = {
  args: {
    title: "Our",
    titleGradient: "projects",
    description: "Check out some of the projects we've completed for our clients.",
    projects: [
      {
        title: "Pametno Odabrano",
        category: "E-commerce",
        url: "https://pametnoodabrano.com/",
        description: "Modern e-commerce platform for smart shopping",
        stats: "+150% conversion",
      },
      {
        title: "Saraya Hotspot",
        category: "Web App",
        url: "https://hs.sarayasolutions.com/",
        description: "Captive portal system for WiFi networks",
        stats: "20K+ users",
      },
      {
        title: "BH Telecom Portal",
        category: "Corporate Site",
        url: "#",
        description: "Corporate portal for telecom company",
        stats: "500K+ visits",
      },
    ],
  },
};
