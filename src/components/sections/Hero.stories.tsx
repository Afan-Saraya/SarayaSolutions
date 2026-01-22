import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: 'Naslov - koristi <span class="text-gradient">tekst</span> za gradient',
      table: { category: "Sadržaj" },
    },
    description: {
      control: "text",
      description: "Opis ispod naslova",
      table: { category: "Sadržaj" },
    },
    primaryButtonText: { control: "text", table: { category: "Dugmad" } },
    primaryButtonLink: { control: "text", table: { category: "Dugmad" } },
    secondaryButtonText: { control: "text", table: { category: "Dugmad" } },
    secondaryButtonLink: { control: "text", table: { category: "Dugmad" } },
    videoSrc: { control: "text", table: { category: "Mediji" } },
    statYears: { control: "text", table: { category: "Statistike" } },
    statYearsLabel: { control: "text", table: { category: "Statistike" } },
    statProjects: { control: "text", table: { category: "Statistike" } },
    statProjectsLabel: { control: "text", table: { category: "Statistike" } },
    statSupport: { control: "text", table: { category: "Statistike" } },
    statSupportLabel: { control: "text", table: { category: "Statistike" } },
    statTech: { control: "text", table: { category: "Statistike" } },
    statTechLabel: { control: "text", table: { category: "Statistike" } },
    statDomesticTitle: { control: "text", table: { category: "Statistike" } },
    statDomesticSubtitle: { control: "text", table: { category: "Statistike" } },
    showDecorations: { control: "boolean", table: { category: "Prikaz" } },
    showStats: { control: "boolean", table: { category: "Prikaz" } },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

/** Zadani prikaz Hero sekcije (desktop). */
export const Default: Story = {};

/** Hero sa prilagođenim sadržajem. */
export const CustomContent: Story = {
  args: {
    title: 'Digitalna transformacija za <span class="text-gradient">vaše poslovanje</span>',
    description: "Prilagođeni opis koji možete mijenjati u Storybook kontrolama.",
    primaryButtonText: "Započnite sada",
    secondaryButtonText: "Saznajte više",
    statYears: "15+",
    statProjects: "150+",
  },
};

/** Hero bez statistika. */
export const WithoutStats: Story = {
  args: { showStats: false },
};

/** Minimalistički Hero. */
export const Minimal: Story = {
  args: { showStats: false, showDecorations: false },
};
