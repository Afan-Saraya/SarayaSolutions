import type { Meta, StoryObj } from "@storybook/react";
import PrintHeroSection from "./PrintHeroSection";
import { Clock, Truck, Leaf, Palette } from "lucide-react";

const meta: Meta<typeof PrintHeroSection> = {
  title: "Pages/Print/PrintHero/Overview",
  component: PrintHeroSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PrintHeroSection>;

export default meta;
type Story = StoryObj<typeof PrintHeroSection>;

export const Bosnian: Story = {
  args: {
    badge: "Profesionalni print",
    title: "Print",
    titleGradient: "usluge",
    description: "Od vizitke do billboarda — printamo sve što vam treba za profesionalnu prezentaciju. Kvalitetni materijali, precizan tisak, brza isporuka.",
    primaryButtonText: "Zatražite ponudu",
    secondaryButtonText: "Pogledajte katalog",
    quickBenefits: [
      { icon: Clock, text: "Brza isporuka" },
      { icon: Leaf, text: "Eko opcije" },
      { icon: Palette, text: "Dizajn uključen" },
      { icon: Truck, text: "Dostava BiH" },
    ],
  },
};

export const English: Story = {
  args: {
    badge: "Professional printing",
    title: "Print",
    titleGradient: "services",
    description: "From business cards to billboards — we print everything you need for professional presentation. Quality materials, precise printing, fast delivery.",
    primaryButtonText: "Request quote",
    secondaryButtonText: "View catalog",
    quickBenefits: [
      { icon: Clock, text: "Fast delivery" },
      { icon: Leaf, text: "Eco options" },
      { icon: Palette, text: "Design included" },
      { icon: Truck, text: "Delivery BiH" },
    ],
  },
};
