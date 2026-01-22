import type { Meta, StoryObj } from "@storybook/react";
import TestimonialsHeader from "./TestimonialsHeader";

const meta: Meta<typeof TestimonialsHeader> = {
  title: "Pages/WebSolutions/Testimonials/Header",
  component: TestimonialsHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestimonialsHeader>;

export default meta;
type Story = StoryObj<typeof TestimonialsHeader>;

export const Bosnian: Story = {
  args: {
    title: "Šta kažu",
    titleGradient: "klijenti",
  },
};

export const English: Story = {
  args: {
    title: "What our",
    titleGradient: "clients say",
  },
};
