import type { Meta, StoryObj } from "@storybook/react";
import PrintCategoriesSection from "./PrintCategoriesSection";
import { CreditCard, BookOpen, Image, Package } from "lucide-react";

const meta: Meta<typeof PrintCategoriesSection> = {
  title: "Pages/Print/PrintCategories/Overview",
  component: PrintCategoriesSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PrintCategoriesSection>;

export default meta;
type Story = StoryObj<typeof PrintCategoriesSection>;

export const Bosnian: Story = {
  args: {
    title: "Što",
    titleGradient: "printamo",
    categories: [
      {
        title: "Poslovni Materijali",
        icon: CreditCard,
        products: ["Vizitke", "Memorandumi", "Kuverte", "Fascikle", "Blokovi"],
        color: "purple"
      },
      {
        title: "Marketing",
        icon: BookOpen,
        products: ["Brošure", "Katalozi", "Letci", "Posteri", "Roll-up"],
        color: "green"
      },
      {
        title: "Veliki Formati",
        icon: Image,
        products: ["Billboardi", "Banneri", "Naljepnice", "Cerada", "Citylight"],
        color: "cyan"
      },
      {
        title: "Ambalaža",
        icon: Package,
        products: ["Kutije", "Vrećice", "Etikete", "Trake", "Gift box"],
        color: "pink"
      },
    ],
  },
};

export const English: Story = {
  args: {
    title: "What we",
    titleGradient: "print",
    categories: [
      {
        title: "Business Materials",
        icon: CreditCard,
        products: ["Business cards", "Letterheads", "Envelopes", "Folders", "Notepads"],
        color: "purple"
      },
      {
        title: "Marketing",
        icon: BookOpen,
        products: ["Brochures", "Catalogs", "Flyers", "Posters", "Roll-up"],
        color: "green"
      },
      {
        title: "Large Formats",
        icon: Image,
        products: ["Billboards", "Banners", "Stickers", "Tarpaulin", "Citylight"],
        color: "cyan"
      },
      {
        title: "Packaging",
        icon: Package,
        products: ["Boxes", "Bags", "Labels", "Ribbons", "Gift box"],
        color: "pink"
      },
    ],
  },
};
