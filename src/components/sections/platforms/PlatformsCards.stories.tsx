import type { Meta, StoryObj } from "@storybook/react";
import PlatformsCards from "./PlatformsCards";
import { Apple, Play, Monitor } from "lucide-react";

const meta: Meta<typeof PlatformsCards> = {
  title: "Pages/Applications/Platforms/Cards",
  component: PlatformsCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlatformsCards>;

export default meta;
type Story = StoryObj<typeof PlatformsCards>;

export const Bosnian: Story = {
  args: {
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
