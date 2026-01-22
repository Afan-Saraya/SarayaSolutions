import type { Meta, StoryObj } from "@storybook/react";
import MobileTechCards from "./MobileTechCards";
import { Smartphone, Code, Zap } from "lucide-react";

const meta: Meta<typeof MobileTechCards> = {
  title: "Pages/Technology/MobileTech/Cards",
  component: MobileTechCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileTechCards>;

export default meta;
type Story = StoryObj<typeof MobileTechCards>;

export const Bosnian: Story = {
  args: {
    technologies: [
      { 
        icon: Smartphone, 
        name: "React Native", 
        description: "Cross-platform framework za iOS i Android sa jednom codebase.", 
        color: "blue" 
      },
      { 
        icon: Code, 
        name: "Flutter", 
        description: "Google-ov framework za kreiranje nativnih aplikacija.", 
        color: "cyan" 
      },
      { 
        icon: Zap, 
        name: "Swift & Kotlin", 
        description: "Native razvoj za iOS i Android sa maksimalnim performansama.", 
        color: "purple" 
      },
    ],
  },
};

export const English: Story = {
  args: {
    technologies: [
      { 
        icon: Smartphone, 
        name: "React Native", 
        description: "Cross-platform framework for iOS and Android with single codebase.", 
        color: "blue" 
      },
      { 
        icon: Code, 
        name: "Flutter", 
        description: "Google's framework for creating native applications.", 
        color: "cyan" 
      },
      { 
        icon: Zap, 
        name: "Swift & Kotlin", 
        description: "Native development for iOS and Android with maximum performance.", 
        color: "purple" 
      },
    ],
  },
};
