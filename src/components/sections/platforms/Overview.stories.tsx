import type { Meta, StoryObj } from "@storybook/react";
import PlatformsSection from "./PlatformsSection";
import { Apple, Play, Monitor } from "lucide-react";

const meta: Meta<typeof PlatformsSection> = {
  title: "Pages/Applications/Platforms/Overview",
  component: PlatformsSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlatformsSection>;

export default meta;
type Story = StoryObj<typeof PlatformsSection>;

export const Bosnian: Story = {
  args: {
    title: "Odaberite",
    titleGradient: "platformu",
    description: "Razvijamo za sve platforme — odaberite onu koja najbolje odgovara vašim potrebama.",
    platforms: [
      { 
        name: "iOS", 
        icon: Apple, 
        description: "iPhone & iPad aplikacije",
        features: ["Swift", "SwiftUI", "App Store"],
        color: "bg-gradient-to-br from-gray-500/20 to-gray-600/10 border-gray-500/30"
      },
      { 
        name: "Android", 
        icon: Play, 
        description: "Android telefoni i tableti",
        features: ["Kotlin", "Jetpack Compose", "Play Store"],
        color: "bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30"
      },
      { 
        name: "Cross-Platform", 
        icon: Monitor, 
        description: "Jedna baza koda za sve",
        features: ["React Native", "Flutter", "Brži razvoj"],
        color: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30"
      },
    ],
  },
};

export const English: Story = {
  args: {
    title: "Choose your",
    titleGradient: "platform",
    description: "We develop for all platforms — choose the one that best suits your needs.",
    platforms: [
      { 
        name: "iOS", 
        icon: Apple, 
        description: "iPhone & iPad apps",
        features: ["Swift", "SwiftUI", "App Store"],
        color: "bg-gradient-to-br from-gray-500/20 to-gray-600/10 border-gray-500/30"
      },
      { 
        name: "Android", 
        icon: Play, 
        description: "Android phones & tablets",
        features: ["Kotlin", "Jetpack Compose", "Play Store"],
        color: "bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30"
      },
      { 
        name: "Cross-Platform", 
        icon: Monitor, 
        description: "One codebase for all",
        features: ["React Native", "Flutter", "Faster dev"],
        color: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30"
      },
    ],
  },
};
