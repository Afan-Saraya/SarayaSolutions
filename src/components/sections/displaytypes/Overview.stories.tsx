import type { Meta, StoryObj } from "@storybook/react";
import DisplayTypesHeader, { DisplayTypesHeaderProps } from "./DisplayTypesHeader";
import TypeCards, { TypeCardsProps, TypeItem } from "./TypeCards";
import { Monitor, Sparkles, MessageSquare } from "lucide-react";

type DisplayTypesOverviewProps = DisplayTypesHeaderProps & TypeCardsProps;

const DisplayTypesOverview = ({
  title,
  titleGradient,
  description,
  types,
}: DisplayTypesOverviewProps) => (
  <section className="py-12 md:py-24 bg-background-dark">
    <div className="container mx-auto px-4">
      <DisplayTypesHeader title={title} titleGradient={titleGradient} description={description} />
      <TypeCards types={types} />
    </div>
  </section>
);

const meta: Meta<typeof DisplayTypesOverview> = {
  title: "Pages/Display/DisplayTypes/Overview",
  component: DisplayTypesOverview,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 1000,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DisplayTypesOverview>;

export default meta;
type Story = StoryObj<typeof DisplayTypesOverview>;

const defaultTypes: TypeItem[] = [
  {
    id: "indoor",
    title: "Indoor Displeji",
    description: "Savršeni za unutrašnje prostore - trgovine, restorane, hotele, kancelarije i javne prostore.",
    icon: Monitor,
    color: "purple",
    features: ["Visoka rezolucija 4K/8K", "Touch screen opcija", "Interaktivni sadržaj"],
  },
  {
    id: "outdoor",
    title: "Outdoor Displeji",
    description: "Otporni na vremenske uslove - idealni za ulične lokacije, terase, parkinge i vanjske prostore.",
    icon: Sparkles,
    color: "green",
    features: ["Vodootporni IP65/IP67", "Visoka svjetlina 2500+ nits", "Temperaturna otpornost"],
  },
  {
    id: "kiosk",
    title: "Kiosk Displeji",
    description: "Samostojeći interaktivni terminali sa custom aplikacijama za self-service i informacije.",
    icon: MessageSquare,
    color: "cyan",
    features: ["Touch screen tehnologija", "Custom aplikacije", "Robusna konstrukcija"],
  },
];

export const Default: Story = {
  args: {
    title: "Vrste",
    titleGradient: "displaya",
    description: "Saraya Display nudi rješenja prilagođena svakom prostoru i potrebi - od unutrašnjih do vanjskih lokacija.",
    types: defaultTypes,
  },
};

export const English: Story = {
  args: {
    title: "Types of",
    titleGradient: "displays",
    description: "Saraya Display offers solutions tailored to every space and need - from indoor to outdoor locations.",
    types: [
      {
        id: "indoor",
        title: "Indoor Displays",
        description: "Perfect for indoor spaces - stores, restaurants, hotels, offices and public spaces.",
        icon: Monitor,
        color: "purple",
        features: ["High resolution 4K/8K", "Touch screen option", "Interactive content"],
      },
      {
        id: "outdoor",
        title: "Outdoor Displays",
        description: "Weather resistant - ideal for street locations, terraces, parking lots and outdoor spaces.",
        icon: Sparkles,
        color: "green",
        features: ["Waterproof IP65/IP67", "High brightness 2500+ nits", "Temperature resistance"],
      },
      {
        id: "kiosk",
        title: "Kiosk Displays",
        description: "Standalone interactive terminals with custom applications for self-service and information.",
        icon: MessageSquare,
        color: "cyan",
        features: ["Touch screen technology", "Custom applications", "Robust construction"],
      },
    ],
  },
};
