import type { Meta, StoryObj } from "@storybook/react";
import PortfolioHeader from "./PortfolioHeader";

const meta: Meta<typeof PortfolioHeader> = {
  title: "Pages/WebSolutions/Portfolio/Header",
  component: PortfolioHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PortfolioHeader>;

export default meta;
type Story = StoryObj<typeof PortfolioHeader>;

export const Bosnian: Story = {
  args: {
    title: "Naši",
    titleGradient: "projekti",
    description: "Pogledajte neke od projekata koje smo realizirali za naše klijente.",
  },
};

export const English: Story = {
  args: {
    title: "Our",
    titleGradient: "projects",
    description: "Check out some of the projects we've completed for our clients.",
  },
};
