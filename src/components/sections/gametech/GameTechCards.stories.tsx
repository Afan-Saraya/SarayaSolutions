import type { Meta, StoryObj } from "@storybook/react";
import GameTechCards from "./GameTechCards";
import { Gamepad2, Layers } from "lucide-react";

const meta: Meta<typeof GameTechCards> = {
  title: "Pages/Technology/GameTech/Cards",
  component: GameTechCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameTechCards>;

export default meta;
type Story = StoryObj<typeof GameTechCards>;

export const Bosnian: Story = {
  args: {
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
