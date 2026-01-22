import type { Meta, StoryObj } from "@storybook/react";
import PrintCategoriesHeader from "./PrintCategoriesHeader";

const meta: Meta<typeof PrintCategoriesHeader> = {
  title: "Pages/Print/PrintCategories/Header",
  component: PrintCategoriesHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PrintCategoriesHeader>;

export default meta;
type Story = StoryObj<typeof PrintCategoriesHeader>;

export const Bosnian: Story = {
  args: {
    title: "Što",
    titleGradient: "printamo",
  },
};

export const English: Story = {
  args: {
    title: "What we",
    titleGradient: "print",
  },
};
