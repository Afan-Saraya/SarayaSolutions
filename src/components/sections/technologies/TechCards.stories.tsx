import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TechCards from "./TechCards";

const meta: Meta<typeof TechCards> = {
  title: "Sections/Technologies/Cards",
  component: TechCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[600px] relative overflow-hidden bg-background-dark">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    technologies: { control: "object" },
    linkText: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TechCards>;

/** Kartice tehnologija - AR, VR, AI Chatbot, AI Avatar. */
export const Default: Story = {
  args: {
    technologies: [
      {
        id: "ar",
        title: "AR",
        subtitle: "Proširena stvarnost",
        description: "Tehnologija proširene stvarnosti (AR) preklapa digitalne informacije s fizičkim svijetom putem uređaja poput pametnih telefona i naočala. Poboljšava korisnička iskustva u igrama, obrazovanju i maloprodaji.",
        icon: "glasses",
        color: "purple",
      },
      {
        id: "vr",
        title: "VR",
        subtitle: "Virtualna stvarnost",
        description: "Tehnologija virtualne stvarnosti (VR) uranja korisnike u potpuno virtualno okruženje koristeći headsetove. Stvara realistične simulacije za igranje, obuku i terapiju, nudeći interaktivna iskustva.",
        icon: "headset",
        color: "pink",
      },
      {
        id: "chatbot",
        title: "AI CHATBOT",
        subtitle: "Virtualni asistent",
        description: "AI chatbotovi su virtualni asistenti koji simuliraju razgovor s korisnicima. Koriste prirodnu obradu jezika (NLP) za razumijevanje i odgovaranje na upite, pružajući korisničku podršku i interakcije na različitim platformama.",
        icon: "message",
        color: "blue",
      },
      {
        id: "avatar",
        title: "AI AVATAR",
        subtitle: "Digitalna reprezentacija",
        description: "AI Avatari su virtualne reprezentacije koje pokreće umjetna inteligencija. Mogu pružati informacije i personalizirati iskustva, poboljšavajući interakciju u virtualnoj podršci, igrama i online edukaciji.",
        icon: "user",
        color: "cyan",
      },
    ],
    linkText: "Saznajte više",
  },
};
