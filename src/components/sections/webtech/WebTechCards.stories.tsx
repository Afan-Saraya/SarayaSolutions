import type { Meta, StoryObj } from "@storybook/react";
import WebTechCards from "./WebTechCards";
import { Code, Palette, Database, Server, Lock, Zap } from "lucide-react";

const meta: Meta<typeof WebTechCards> = {
  title: "Pages/Technology/WebTech/Cards",
  component: WebTechCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WebTechCards>;

export default meta;
type Story = StoryObj<typeof WebTechCards>;

export const Bosnian: Story = {
  args: {
    technologies: [
      { 
        icon: Code, 
        name: "Next.js & React", 
        description: "Najmoderniji framework za web aplikacije sa server-side renderingom.", 
        color: "blue" 
      },
      { 
        icon: Palette, 
        name: "Tailwind CSS", 
        description: "Utility-first CSS framework za brz i fleksibilan dizajn.", 
        color: "cyan" 
      },
      { 
        icon: Database, 
        name: "Node.js & Express", 
        description: "Backend tehnologije za kreiranje API-ja i server aplikacija.", 
        color: "green" 
      },
      { 
        icon: Server, 
        name: "Baze podataka", 
        description: "PostgreSQL, MongoDB, Redis za različite potrebe skladištenja.", 
        color: "purple" 
      },
      { 
        icon: Lock, 
        name: "Autentifikacija", 
        description: "OAuth, JWT, i moderne sigurnosne prakse.", 
        color: "pink" 
      },
      { 
        icon: Zap, 
        name: "Cloud hosting", 
        description: "AWS, Vercel, i druge cloud platforme za deployment.", 
        color: "orange" 
      },
    ],
  },
};

export const English: Story = {
  args: {
    technologies: [
      { 
        icon: Code, 
        name: "Next.js & React", 
        description: "Most modern framework for web applications with server-side rendering.", 
        color: "blue" 
      },
      { 
        icon: Palette, 
        name: "Tailwind CSS", 
        description: "Utility-first CSS framework for fast and flexible design.", 
        color: "cyan" 
      },
      { 
        icon: Database, 
        name: "Node.js & Express", 
        description: "Backend technologies for creating APIs and server applications.", 
        color: "green" 
      },
      { 
        icon: Server, 
        name: "Databases", 
        description: "PostgreSQL, MongoDB, Redis for different storage needs.", 
        color: "purple" 
      },
      { 
        icon: Lock, 
        name: "Authentication", 
        description: "OAuth, JWT, and modern security practices.", 
        color: "pink" 
      },
      { 
        icon: Zap, 
        name: "Cloud hosting", 
        description: "AWS, Vercel, and other cloud platforms for deployment.", 
        color: "orange" 
      },
    ],
  },
};
