import type { Meta, StoryObj } from "@storybook/react";
import IntegrationsContent from "./IntegrationsContent";

const meta: Meta<typeof IntegrationsContent> = {
  title: "Pages/Technology/Integrations/Content",
  component: IntegrationsContent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IntegrationsContent>;

export default meta;
type Story = StoryObj<typeof IntegrationsContent>;

export const Bosnian: Story = {
  args: {
    title: "Besprijekorne",
    titleGradient: "integracije",
    description: "Sve naše tehnologije rade zajedno kao jedan ekosistem. Saraya Connect, Display sistemi, AI avatari i AR/VR rješenja se besprijekorno integrišu za kompletno digitalno iskustvo.",
    integrations: [
      "WiFi Analytics",
      "Display Management",
      "AI Chatbot API",
      "Avatar Integration",
      "AR/VR Platforms",
      "Payment Systems",
      "CRM Systems",
      "Social Media",
      "Email Marketing",
      "Analytics Tools",
      "Cloud Storage",
      "Third-party APIs",
    ],
  },
};

export const English: Story = {
  args: {
    title: "Seamless",
    titleGradient: "integrations",
    description: "All our technologies work together as one ecosystem. Saraya Connect, Display systems, AI avatars and AR/VR solutions integrate seamlessly for a complete digital experience.",
    integrations: [
      "WiFi Analytics",
      "Display Management",
      "AI Chatbot API",
      "Avatar Integration",
      "AR/VR Platforms",
      "Payment Systems",
      "CRM Systems",
      "Social Media",
      "Email Marketing",
      "Analytics Tools",
      "Cloud Storage",
      "Third-party APIs",
    ],
  },
};
