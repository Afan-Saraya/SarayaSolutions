import type { Meta, StoryObj } from "@storybook/react";
import NetworkTechSection from "./NetworkTechSection";
import { Wifi, Globe, BarChart3, Shield } from "lucide-react";

const meta: Meta<typeof NetworkTechSection> = {
  title: "Pages/Technology/NetworkTech/Overview",
  component: NetworkTechSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NetworkTechSection>;

export default meta;
type Story = StoryObj<typeof NetworkTechSection>;

export const Bosnian: Story = {
  args: {
    title: "Mrežne",
    titleGradient: "tehnologije",
    description: "Napredna mrežna infrastruktura za povezivanje i upravljanje.",
    technologies: [
      { 
        icon: Wifi, 
        title: "Saraya Connect", 
        description: "Besplatni WiFi sa captive portalom i analytics platformom." 
      },
      { 
        icon: Globe, 
        title: "Saraya Network", 
        description: "Kompletan mrežni ekosistem sa centralnim upravljanjem." 
      },
      { 
        icon: BarChart3, 
        title: "Analytics", 
        description: "Napredna analitika korisničkog ponašanja i mrežnog prometa." 
      },
      { 
        icon: Shield, 
        title: "Sigurnost", 
        description: "Enterprise-level sigurnost sa WPA3 enkripcijom." 
      },
    ],
  },
};

export const English: Story = {
  args: {
    title: "Network",
    titleGradient: "technologies",
    description: "Advanced network infrastructure for connectivity and management.",
    technologies: [
      { 
        icon: Wifi, 
        title: "Saraya Connect", 
        description: "Free WiFi with captive portal and analytics platform." 
      },
      { 
        icon: Globe, 
        title: "Saraya Network", 
        description: "Complete network ecosystem with central management." 
      },
      { 
        icon: BarChart3, 
        title: "Analytics", 
        description: "Advanced analytics of user behavior and network traffic." 
      },
      { 
        icon: Shield, 
        title: "Security", 
        description: "Enterprise-level security with WPA3 encryption." 
      },
    ],
  },
};
