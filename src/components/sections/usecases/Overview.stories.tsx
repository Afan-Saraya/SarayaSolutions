import type { Meta, StoryObj } from "@storybook/react";
import UseCasesHeader, { UseCasesHeaderProps } from "./UseCasesHeader";
import UseCaseCards, { UseCaseCardsProps, UseCaseItem } from "./UseCaseCards";
import { ShoppingBag, Users, Building2, Landmark, Train, Palette } from "lucide-react";

type UseCasesOverviewProps = UseCasesHeaderProps & UseCaseCardsProps;

const UseCasesOverview = ({
  title,
  titleGradient,
  description,
  useCases,
}: UseCasesOverviewProps) => (
  <section className="py-12 md:py-24">
    <div className="container mx-auto px-4">
      <UseCasesHeader title={title} titleGradient={titleGradient} description={description} />
      <UseCaseCards useCases={useCases} />
    </div>
  </section>
);

const meta: Meta<typeof UseCasesOverview> = {
  title: "Pages/Display/UseCases/Overview",
  component: UseCasesOverview,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 900,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UseCasesOverview>;

export default meta;
type Story = StoryObj<typeof UseCasesOverview>;

const defaultUseCases: UseCaseItem[] = [
  { icon: ShoppingBag, title: "Trgovine & Retail", desc: "Promocije, katalozi, interaktivni shopping" },
  { icon: Users, title: "Hoteli & Restorani", desc: "Digitalni meniji, rezervacije, info-punktovi" },
  { icon: Building2, title: "Korporacije", desc: "Interna komunikacija, prezentacije, lobby" },
  { icon: Landmark, title: "Banke & Osiguranje", desc: "Self-service, zakazivanje, informacije" },
  { icon: Train, title: "Transport", desc: "Rasporedi, navigacija, obavještenja" },
  { icon: Palette, title: "Muzeji & Galerije", desc: "Digitalne izložbe, interaktivni vodič" },
];

export const Default: Story = {
  args: {
    title: "Gdje se",
    titleGradient: "koriste?",
    description: "Saraya Display transformira prostore u različitim industrijama.",
    useCases: defaultUseCases,
  },
};

export const English: Story = {
  args: {
    title: "Where",
    titleGradient: "are they used?",
    description: "Saraya Display transforms spaces in various industries.",
    useCases: [
      { icon: ShoppingBag, title: "Stores & Retail", desc: "Promotions, catalogs, interactive shopping" },
      { icon: Users, title: "Hotels & Restaurants", desc: "Digital menus, reservations, info points" },
      { icon: Building2, title: "Corporations", desc: "Internal communication, presentations, lobby" },
      { icon: Landmark, title: "Banks & Insurance", desc: "Self-service, scheduling, information" },
      { icon: Train, title: "Transport", desc: "Schedules, navigation, notifications" },
      { icon: Palette, title: "Museums & Galleries", desc: "Digital exhibitions, interactive guide" },
    ],
  },
};
