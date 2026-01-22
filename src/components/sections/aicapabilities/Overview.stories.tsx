import type { Meta, StoryObj } from "@storybook/react";
import AICapabilitiesSection from "./AICapabilitiesSection";
import { Brain, Globe, Mic, Camera, Hand, Sparkles } from "lucide-react";

const meta: Meta<typeof AICapabilitiesSection> = {
  title: "Pages/Technology/AICapabilities/Overview",
  component: AICapabilitiesSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 900,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AICapabilitiesSection>;

export default meta;
type Story = StoryObj<typeof AICapabilitiesSection>;

export const Bosnian: Story = {
  args: {
    title: "AI",
    titleGradient: "mogućnosti",
    description: "Napredne AI tehnologije za inteligentnu interakciju i personalizaciju.",
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
    title: "AI",
    titleGradient: "capabilities",
    description: "Advanced AI technologies for intelligent interaction and personalization.",
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
