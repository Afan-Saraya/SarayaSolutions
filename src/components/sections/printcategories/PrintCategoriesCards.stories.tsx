import type { Meta, StoryObj } from "@storybook/react";
import PrintCategoriesCards from "./PrintCategoriesCards";
import { CreditCard, BookOpen, Image, Package } from "lucide-react";

const meta: Meta<typeof PrintCategoriesCards> = {
  title: "Pages/Print/PrintCategories/Cards",
  component: PrintCategoriesCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PrintCategoriesCards>;

export default meta;
type Story = StoryObj<typeof PrintCategoriesCards>;

export const Bosnian: Story = {
  args: {
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
