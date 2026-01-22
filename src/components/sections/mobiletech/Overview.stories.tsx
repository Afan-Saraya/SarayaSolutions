import type { Meta, StoryObj } from "@storybook/react";
import MobileTechSection from "./MobileTechSection";
import { Smartphone, Code, Zap } from "lucide-react";

const meta: Meta<typeof MobileTechSection> = {
  title: "Pages/Technology/MobileTech/Overview",
  component: MobileTechSection,
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
} satisfies Meta<typeof MobileTechSection>;

export default meta;
type Story = StoryObj<typeof MobileTechSection>;

export const Bosnian: Story = {
  args: {
    title: "Mobilne",
    titleGradient: "tehnologije",
    description: "Cross-platform i native tehnologije za razvoj mobilnih aplikacija.",
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
    title: "Mobile",
    titleGradient: "technologies",
    description: "Cross-platform and native technologies for mobile app development.",
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
