import type { Meta, StoryObj } from "@storybook/react";
import AICapabilitiesCards from "./AICapabilitiesCards";
import { Brain, Globe, Mic, Camera, Hand, Sparkles } from "lucide-react";

const meta: Meta<typeof AICapabilitiesCards> = {
  title: "Pages/Technology/AICapabilities/Cards",
  component: AICapabilitiesCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AICapabilitiesCards>;

export default meta;
type Story = StoryObj<typeof AICapabilitiesCards>;

export const Bosnian: Story = {
  args: {
    capabilities: [
      { 
        icon: Brain, 
        title: "Natural Language Processing", 
        description: "Razumijevanje i obrada prirodnog jezika za inteligentnu komunikaciju." 
      },
      { 
        icon: Globe, 
        title: "Višejezična podrška", 
        description: "Podrška za 99+ jezika sa automatskim prevođenjem." 
      },
      { 
        icon: Mic, 
        title: "Prepoznavanje glasa", 
        description: "Napredna voice recognition tehnologija za hands-free interakciju." 
      },
      { 
        icon: Camera, 
        title: "Computer Vision", 
        description: "Prepoznavanje objekata, lica i emocija kroz kameru." 
      },
      { 
        icon: Hand, 
        title: "Motion Tracking", 
        description: "Praćenje pokreta i gestikulacije za interaktivna iskustva." 
      },
      { 
        icon: Sparkles, 
        title: "Personalizacija", 
        description: "AI-powered personalizacija sadržaja i korisničkog iskustva." 
      },
    ],
  },
};

export const English: Story = {
  args: {
    capabilities: [
      { 
        icon: Brain, 
        title: "Natural Language Processing", 
        description: "Understanding and processing natural language for intelligent communication." 
      },
      { 
        icon: Globe, 
        title: "Multilingual support", 
        description: "Support for 99+ languages with automatic translation." 
      },
      { 
        icon: Mic, 
        title: "Voice recognition", 
        description: "Advanced voice recognition technology for hands-free interaction." 
      },
      { 
        icon: Camera, 
        title: "Computer Vision", 
        description: "Recognition of objects, faces and emotions through camera." 
      },
      { 
        icon: Hand, 
        title: "Motion Tracking", 
        description: "Tracking movements and gestures for interactive experiences." 
      },
      { 
        icon: Sparkles, 
        title: "Personalization", 
        description: "AI-powered personalization of content and user experience." 
      },
    ],
  },
};
