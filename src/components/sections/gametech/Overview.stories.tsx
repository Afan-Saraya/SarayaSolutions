import type { Meta, StoryObj } from "@storybook/react";
import GameTechSection from "./GameTechSection";
import { Gamepad2, Layers } from "lucide-react";

const meta: Meta<typeof GameTechSection> = {
  title: "Pages/Technology/GameTech/Overview",
  component: GameTechSection,
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
} satisfies Meta<typeof GameTechSection>;

export default meta;
type Story = StoryObj<typeof GameTechSection>;

export const Bosnian: Story = {
  args: {
    title: "Game Development",
    titleGradient: "tehnologije",
    description: "Profesionalni game engine-i za kreiranje imerzivnih gaming iskustava.",
    technologies: [
      { 
        icon: Gamepad2, 
        name: "Unity", 
        description: "Najkorišteniji game engine za 2D i 3D igre sa cross-platform podrškom.", 
        features: ["C# Scripting", "Cross-platform", "AR/VR Ready", "Asset Store"] 
      },
      { 
        icon: Layers, 
        name: "Unreal Engine", 
        description: "AAA game engine sa fotorealističnom grafikom i naprednim alatima.", 
        features: ["Blueprint Visual Scripting", "Photorealistic Graphics", "Multiplayer", "VR Support"] 
      },
    ],
  },
};

export const English: Story = {
  args: {
    title: "Game Development",
    titleGradient: "technologies",
    description: "Professional game engines for creating immersive gaming experiences.",
    technologies: [
      { 
        icon: Gamepad2, 
        name: "Unity", 
        description: "Most used game engine for 2D and 3D games with cross-platform support.", 
        features: ["C# Scripting", "Cross-platform", "AR/VR Ready", "Asset Store"] 
      },
      { 
        icon: Layers, 
        name: "Unreal Engine", 
        description: "AAA game engine with photorealistic graphics and advanced tools.", 
        features: ["Blueprint Visual Scripting", "Photorealistic Graphics", "Multiplayer", "VR Support"] 
      },
    ],
  },
};
