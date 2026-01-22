import type { Meta, StoryObj } from "@storybook/react";
import CoverageHeader from "./CoverageHeader";

const meta: Meta<typeof CoverageHeader> = {
  title: "Sections/Coverage/Header",
  component: CoverageHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CoverageHeader>;

export const Bosnian: Story = {
  args: {
    badge: "Pokrivenost",
    titleStart: "Gdje se nalazi",
    titleGradient: "Saraya Connect",
    description: "Naša Wi-Fi mreža pokriva najprometnija mjesta u Sarajevu",
  },
};

export const English: Story = {
  args: {
    badge: "Coverage",
    titleStart: "Where is",
    titleGradient: "Saraya Connect",
    description: "Our Wi-Fi network covers the busiest places in Sarajevo",
  },
};
