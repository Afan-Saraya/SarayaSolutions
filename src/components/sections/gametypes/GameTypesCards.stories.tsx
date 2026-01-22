import type { Meta, StoryObj } from "@storybook/react";
import GameTypesCards from "./GameTypesCards";
import { Gamepad2, Trophy, Monitor, Sparkles } from "lucide-react";

const meta: Meta<typeof GameTypesCards> = {
  title: "Pages/Games/GameTypes/Cards",
  component: GameTypesCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GameTypesCards>;

export default meta;
type Story = StoryObj<typeof GameTypesCards>;

export const Bosnian: Story = {
  args: {
    gameTypes: [
      { 
        title: "Igre za Interaktivne Displeje", 
        description: "Angažirajuće igre dizajnirane za touchscreen displeje u trgovačkim centrima, bankama i javnim prostorima.", 
        icon: Monitor, 
        color: "purple" 
      },
      { 
        title: "Branded Kvizovi", 
        description: "Edukativni kvizovi koji informiraju o vašim proizvodima dok nagrađuju korisnike za sudjelovanje.", 
        icon: Trophy, 
        color: "green" 
      },
      { 
        title: "Mobilne Igre", 
        description: "Casual igre koje promoviraju vaš brand i stvaraju dugoročnu povezanost s korisnicima.", 
        icon: Gamepad2, 
        color: "cyan" 
      },
      { 
        title: "AR/VR Iskustva", 
        description: "Imerzivna iskustva koja koriste proširenu i virtualnu stvarnost za nezaboravne interakcije.", 
        icon: Sparkles, 
        color: "purple" 
      },
    ],
  },
};

export const English: Story = {
  args: {
    gameTypes: [
      { 
        title: "Games for Interactive Displays", 
        description: "Engaging games designed for touchscreen displays in shopping centers, banks and public spaces.", 
        icon: Monitor, 
        color: "purple" 
      },
      { 
        title: "Branded Quizzes", 
        description: "Educational quizzes that inform about your products while rewarding users for participation.", 
        icon: Trophy, 
        color: "green" 
      },
      { 
        title: "Mobile Games", 
        description: "Casual games that promote your brand and create long-term connection with users.", 
        icon: Gamepad2, 
        color: "cyan" 
      },
      { 
        title: "AR/VR Experiences", 
        description: "Immersive experiences using augmented and virtual reality for unforgettable interactions.", 
        icon: Sparkles, 
        color: "purple" 
      },
    ],
  },
};
