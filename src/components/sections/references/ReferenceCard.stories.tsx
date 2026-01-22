import type { Meta, StoryObj } from "@storybook/react";
import ReferenceCard from "./ReferenceCard";
import { Building2, Landmark, Gamepad2 } from "lucide-react";

const meta = {
  title: "Sections/References/Card",
  component: ReferenceCard,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ReferenceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AriaMall: Story = {
  args: {
    id: "aria-mall",
    title: "Aria Mall",
    subtitle: "Savremeni centar uživanja",
    description:
      "ARIA Mall u Sarajevu je moderan kompleks koji spaja komercijalne i društvene prostore.",
    solution: "360 Saraya virtuelna šetnja s hiperrealističnim grafikama.",
    highlights: ["360° Virtualna šetnja", "Hiperrealistične grafike", "Inovativni pristup"],
    icon: Building2,
    color: "purple",
  },
};

export const BBIBanka: Story = {
  args: {
    id: "bbi-banka",
    title: "BBI Banka",
    subtitle: "Wi-Fi Marketing Rješenje",
    description: "Bosna Bank International je najbrže rastuća banka u BiH.",
    solution: "Wi-Fi marketing rješenje s Wi-Fi 6 mrežom za 10.000+ korisnika.",
    highlights: ["Wi-Fi 6 mreža", "10.000+ korisnika", "Bankarsko okruženje"],
    icon: Landmark,
    color: "green",
  },
};

export const NLBBanka: Story = {
  args: {
    id: "nlb-banka",
    title: "NLB Banka",
    subtitle: "Interaktivna Igra i Wi-Fi Mreža",
    description: "NLB Banka d.d. iz Sarajeva dio je NLB Grupacije.",
    solution: "Interaktivna igra skijaškog spusta s motion tracking tehnologijom.",
    highlights: ["Motion tracking igra", "In-game advertising", "Wi-Fi 6 mreža"],
    icon: Gamepad2,
    color: "cyan",
  },
};
