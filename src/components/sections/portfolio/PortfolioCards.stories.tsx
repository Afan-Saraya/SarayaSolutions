import type { Meta, StoryObj } from "@storybook/react";
import PortfolioCards from "./PortfolioCards";

const meta: Meta<typeof PortfolioCards> = {
  title: "Pages/WebSolutions/Portfolio/Cards",
  component: PortfolioCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PortfolioCards>;

export default meta;
type Story = StoryObj<typeof PortfolioCards>;

export const Bosnian: Story = {
  args: {
    viewProjectText: "Pogledaj projekt",
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
    viewProjectText: "View project",
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
