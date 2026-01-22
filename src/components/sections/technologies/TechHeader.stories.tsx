import type { Meta, StoryObj } from "@storybook/react";
import TechHeader from "./TechHeader";

const meta: Meta<typeof TechHeader> = {
  title: "Sections/Technologies/Header",
  component: TechHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TechHeader>;

export const Bosnian: Story = {
  args: {
    badge: "Tehnologije",
    titleStart: "Tehnologije koje pokreću",
    titleHighlight: "Saraya ekosistem",
    description: "Koristimo najnovije tehnologije za kreiranje pouzdanih i skalabilnih rješenja",
  },
};

export const English: Story = {
  args: {
    badge: "Technologies",
    titleStart: "Technologies that power",
    titleHighlight: "Saraya ecosystem",
    description: "We use the latest technologies to create reliable and scalable solutions",
  },
};
