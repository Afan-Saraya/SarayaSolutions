import type { Meta, StoryObj } from "@storybook/react";
import TechHeader, { TechHeaderProps } from "./TechHeader";
import TechCards, { TechCardsProps, TechItem } from "./TechCards";

type TechOverviewProps = TechHeaderProps & TechCardsProps;

const TechOverview = ({
  // Header props
  badge,
  titleStart,
  titleGradient,
  // Cards props
  technologies,
  linkText,
}: TechOverviewProps) => (
  <section className="py-24 bg-background-dark relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />

    <div className="container mx-auto px-4 relative z-10">
      <TechHeader
        badge={badge}
        titleStart={titleStart}
        titleGradient={titleGradient}
      />

      <TechCards
        technologies={technologies}
        linkText={linkText}
      />
    </div>
  </section>
);

const meta: Meta<typeof TechOverview> = {
  title: "Pages/Home/Technologies/Overview",
  component: TechOverview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    // Header
    badge: { control: "text", table: { category: "Header" } },
    titleStart: { control: "text", table: { category: "Header" } },
    titleGradient: { control: "text", table: { category: "Header" } },
    // Cards
    technologies: { control: "object", table: { category: "Cards" } },
    linkText: { control: "text", table: { category: "Cards" } },
  },
};

export default meta;
type Story = StoryObj<typeof TechOverview>;

const defaultTechnologies: TechItem[] = [
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
];

/** Kompletna Technologies sekcija sa svim kontrolama. */
export const Default: Story = {
  args: {
    // Header
    badge: "Tehnologije",
    titleStart: "Tehnologije koje pokreću",
    titleGradient: "Vaš uspjeh",
    // Cards
    technologies: defaultTechnologies,
    linkText: "Saznajte više",
  },
};
