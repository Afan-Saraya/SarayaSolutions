import type { Meta, StoryObj } from "@storybook/react";
import TimelineSteps from "./TimelineSteps";

const meta: Meta<typeof TimelineSteps> = {
  title: "Pages/Applications/Timeline/Steps",
  component: TimelineSteps,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimelineSteps>;

export default meta;
type Story = StoryObj<typeof TimelineSteps>;

export const Bosnian: Story = {
  args: {
    steps: [
      { 
        step: "01", 
        title: "Discovery", 
        description: "Analiziramo vaše potrebe i definiramo ciljeve projekta",
        duration: "1-2 sedmice"
      },
      { 
        step: "02", 
        title: "Dizajn", 
        description: "Kreiramo wireframe i UI/UX dizajn aplikacije",
        duration: "2-3 sedmice"
      },
      { 
        step: "03", 
        title: "Razvoj", 
        description: "Gradimo aplikaciju s redovnim demo verzijama",
        duration: "6-12 sedmica"
      },
      { 
        step: "04", 
        title: "Testiranje", 
        description: "QA testiranje i beta verzija za korisnike",
        duration: "2-3 sedmice"
      },
      { 
        step: "05", 
        title: "Lansiranje", 
        description: "Objava na App Store i Play Store",
        duration: "1 sedmica"
      },
    ],
  },
};

export const English: Story = {
  args: {
    steps: [
      { 
        step: "01", 
        title: "Discovery", 
        description: "We analyze your needs and define project goals",
        duration: "1-2 weeks"
      },
      { 
        step: "02", 
        title: "Design", 
        description: "We create wireframe and UI/UX design",
        duration: "2-3 weeks"
      },
      { 
        step: "03", 
        title: "Development", 
        description: "We build the app with regular demos",
        duration: "6-12 weeks"
      },
      { 
        step: "04", 
        title: "Testing", 
        description: "QA testing and beta version for users",
        duration: "2-3 weeks"
      },
      { 
        step: "05", 
        title: "Launch", 
        description: "Publishing to App Store and Play Store",
        duration: "1 week"
      },
    ],
  },
};
