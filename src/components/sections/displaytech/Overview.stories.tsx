import type { Meta, StoryObj } from "@storybook/react";
import DisplayTechSection from "./DisplayTechSection";
import { Monitor, MessageSquare, Camera, Bot } from "lucide-react";

const meta: Meta<typeof DisplayTechSection> = {
  title: "Pages/Technology/DisplayTech/Overview",
  component: DisplayTechSection,
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
} satisfies Meta<typeof DisplayTechSection>;

export default meta;
type Story = StoryObj<typeof DisplayTechSection>;

export const Bosnian: Story = {
  args: {
    title: "Display",
    titleGradient: "tehnologije",
    description: "Napredni display sistemi za sve vrste poslovnih potreba.",
    technologies: [
      { 
        icon: Monitor, 
        title: "Basic Display", 
        description: "Osnovni display sistemi za prikazivanje statičnog i dinamičnog sadržaja." 
      },
      { 
        icon: MessageSquare, 
        title: "Kiosk Display", 
        description: "Interaktivni kiosk sistemi sa touch funkcionalnostima." 
      },
      { 
        icon: Camera, 
        title: "Business Display", 
        description: "Profesionalni display sistemi sa naprednim funkcijama." 
      },
      { 
        icon: Bot, 
        title: "Elite Display", 
        description: "Premium display rješenja sa AI integracijom i naprednim analytics." 
      },
    ],
  },
};

export const English: Story = {
  args: {
    title: "Display",
    titleGradient: "technologies",
    description: "Advanced display systems for all types of business needs.",
    technologies: [
      { 
        icon: Monitor, 
        title: "Basic Display", 
        description: "Basic display systems for showing static and dynamic content." 
      },
      { 
        icon: MessageSquare, 
        title: "Kiosk Display", 
        description: "Interactive kiosk systems with touch functionalities." 
      },
      { 
        icon: Camera, 
        title: "Business Display", 
        description: "Professional display systems with advanced features." 
      },
      { 
        icon: Bot, 
        title: "Elite Display", 
        description: "Premium display solutions with AI integration and advanced analytics." 
      },
    ],
  },
};
