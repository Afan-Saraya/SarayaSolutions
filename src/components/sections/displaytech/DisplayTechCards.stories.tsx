import type { Meta, StoryObj } from "@storybook/react";
import DisplayTechCards from "./DisplayTechCards";
import { Monitor, MessageSquare, Camera, Bot } from "lucide-react";

const meta: Meta<typeof DisplayTechCards> = {
  title: "Pages/Technology/DisplayTech/Cards",
  component: DisplayTechCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DisplayTechCards>;

export default meta;
type Story = StoryObj<typeof DisplayTechCards>;

export const Bosnian: Story = {
  args: {
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
