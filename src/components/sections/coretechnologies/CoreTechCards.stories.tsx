import type { Meta, StoryObj } from "@storybook/react";
import CoreTechCards from "./CoreTechCards";
import { Glasses, Headset, MessageSquare, Bot } from "lucide-react";

const meta: Meta<typeof CoreTechCards> = {
  title: "Pages/Technology/CoreTechnologies/Cards",
  component: CoreTechCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CoreTechCards>;

export default meta;
type Story = StoryObj<typeof CoreTechCards>;

export const Bosnian: Story = {
  args: {
    technologies: [
      {
        id: "ar",
        icon: Glasses,
        title: "AR",
        subtitle: "Proširena stvarnost",
        description: "Augmented Reality (AR) tehnologija omogućava preklapanje digitalnih elemenata sa stvarnim svijetom kroz kameru uređaja.",
        applications: ["Virtuelni katalozi", "Interaktivne prezentacije", "Edukativni sadržaji"],
        color: "purple",
      },
      {
        id: "vr",
        icon: Headset,
        title: "VR",
        subtitle: "Virtualna stvarnost",
        description: "Virtual Reality (VR) kreira potpuno imerzivna digitalna okruženja koja korisnici mogu istraživati i s kojima mogu interagovati.",
        applications: ["Virtuelne ture", "Trening simulacije", "Gaming iskustva"],
        color: "green",
      },
      {
        id: "chatbot",
        icon: MessageSquare,
        title: "AI Chatbot",
        subtitle: "Virtualni asistent",
        description: "Inteligentni chatbot sistemi koji koriste AI za prirodnu komunikaciju i pružanje podrške korisnicima 24/7.",
        applications: ["Korisnička podrška", "Automatizacija", "Lead generation"],
        color: "blue",
      },
      {
        id: "avatar",
        icon: Bot,
        title: "AI Avatar",
        subtitle: "Digitalna reprezentacija",
        description: "Realistični AI avatari koji mogu komunicirati na 99+ jezika, prepoznavati emocije i pružati personalizovano iskustvo.",
        applications: ["Virtuelni asistenti", "Edukacija", "Korisnička podrška"],
        color: "cyan",
      },
    ],
  },
};

export const English: Story = {
  args: {
    technologies: [
      {
        id: "ar",
        icon: Glasses,
        title: "AR",
        subtitle: "Augmented Reality",
        description: "Augmented Reality (AR) technology enables overlaying digital elements onto the real world through device camera.",
        applications: ["Virtual catalogs", "Interactive presentations", "Educational content"],
        color: "purple",
      },
      {
        id: "vr",
        icon: Headset,
        title: "VR",
        subtitle: "Virtual Reality",
        description: "Virtual Reality (VR) creates fully immersive digital environments that users can explore and interact with.",
        applications: ["Virtual tours", "Training simulations", "Gaming experiences"],
        color: "green",
      },
      {
        id: "chatbot",
        icon: MessageSquare,
        title: "AI Chatbot",
        subtitle: "Virtual Assistant",
        description: "Intelligent chatbot systems that use AI for natural communication and providing 24/7 user support.",
        applications: ["Customer support", "Automation", "Lead generation"],
        color: "blue",
      },
      {
        id: "avatar",
        icon: Bot,
        title: "AI Avatar",
        subtitle: "Digital Representation",
        description: "Realistic AI avatars that can communicate in 99+ languages, recognize emotions and provide personalized experience.",
        applications: ["Virtual assistants", "Education", "Customer support"],
        color: "cyan",
      },
    ],
  },
};
