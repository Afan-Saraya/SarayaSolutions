import type { Meta, StoryObj } from "@storybook/react";
import PartnersHeader from "./PartnersHeader";

const meta: Meta<typeof PartnersHeader> = {
  title: "Sections/Partners/Header",
  component: PartnersHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PartnersHeader>;

export const Bosnian: Story = {
  args: {
    badge: "Partneri",
    title: "Pouzdanje vodećih",
    titleHighlight: "kompanija",
    description: "Sarađujemo sa najpoznatijim brendovima u regiji",
  },
};

export const English: Story = {
  args: {
    badge: "Partners",
    title: "Trusted by leading",
    titleHighlight: "companies",
    description: "We work with the most recognized brands in the region",
  },
};
